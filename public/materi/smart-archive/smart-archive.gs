const OPENROUTER_URL =
  "https://openrouter.ai/api/v1/chat/completions";

const MODEL = "openrouter/free";

function onFormSubmit(e) {
  try {
    const responses = e.response.getItemResponses();
    let fileId = null;
    responses.forEach(item => {
      const title = item.getItem().getTitle();
      if (title === "Upload File") {
        const response = item.getResponse();
        // File Upload mengembalikan array
        fileId = Array.isArray(response)
          ? response[0]
          : response;
      }
    });

    if (!fileId) {
      throw new Error("File ID tidak ditemukan.");
    }

    // Buat URL Google Drive
    const fileUrl =
      "https://drive.google.com/open?id=" + fileId;

    Logger.log("File ID: " + fileId);
    Logger.log("File URL: " + fileUrl);


    // Ambil file
    const file =
      DriveApp.getFileById(fileId);

    const fileName =
      file.getName();


    // Kirim ke OpenRouter
    const result =
      analyzePdfWithOpenRouter(
        file,
        fileName
      );


    // Simpan hasil
    saveMetadataToSheet(
      fileId,
      fileUrl,
      fileName,
      result
    );


  } catch (error) {

    Logger.log(
      "ERROR: " +
      (error.stack || error.message)
    );

  }

}

function analyzePdfWithOpenRouter(file, fileName) {

  const apiKey =
    PropertiesService
      .getScriptProperties()
      .getProperty("OPENROUTER_API_KEY");

  if (!apiKey) {
    throw new Error(
      "OPENROUTER_API_KEY belum disimpan."
    );
  }


  // =========================
  // PDF → Base64
  // =========================

  const blob = file.getBlob();

  const base64 =
    Utilities.base64Encode(
      blob.getBytes()
    );

  const pdfData =
    "data:application/pdf;base64," +
    base64;


  // =========================
  // Prompt
  // =========================

  const prompt = `
Anda adalah AI untuk sistem pengarsipan dokumen digital.

Analisis dokumen PDF yang diberikan.

Ekstrak informasi berikut:

1. jenis_dokumen
2. nomor_dokumen
3. tanggal_dokumen
4. pengirim
5. penerima
6. perihal
7. ringkasan
8. kata_kunci

Aturan:

- Jangan mengarang informasi.
- Jika informasi tidak ditemukan, gunakan null.
- Pertahankan nomor dokumen apa adanya.
- Pertahankan tanggal sebagaimana tertulis jika memungkinkan.
- Ringkasan maksimal 2-3 kalimat.
- Kata kunci maksimal 5.
- Hasil WAJIB berupa JSON valid.
- Jangan menggunakan Markdown.
- Jangan menambahkan penjelasan di luar JSON.

Format:

{
  "jenis_dokumen": null,
  "nomor_dokumen": null,
  "tanggal_dokumen": null,
  "pengirim": null,
  "penerima": null,
  "perihal": null,
  "ringkasan": null,
  "kata_kunci": []
}
`;


  // =========================
  // Request OpenRouter
  // =========================

  const payload = {

    model: MODEL,

    messages: [
      {
        role: "user",

        content: [

          {
            type: "file",

            file: {
              filename: fileName,
              file_data: pdfData
            }
          },

          {
            type: "text",
            text: prompt
          }

        ]
      }
    ],


    // PDF parser gratis
    plugins: [
      {
        id: "file-parser",

        pdf: {
          engine: "cloudflare-ai"
        }
      }
    ],


    temperature: 0.1,

    response_format: {
      type: "json_object"
    }

  };


  const response =
    UrlFetchApp.fetch(
      OPENROUTER_URL,
      {
        method: "post",

        headers: {
          "Authorization":
            "Bearer " + apiKey,

          "Content-Type":
            "application/json"
        },

        payload:
          JSON.stringify(payload),

        muteHttpExceptions: true
      }
    );


  const status =
    response.getResponseCode();

  const text =
    response.getContentText();


  Logger.log(
    "HTTP Status: " + status
  );

  Logger.log(text);


  if (status < 200 || status >= 300) {

    throw new Error(
      "OpenRouter error: " + text
    );

  }


  const data =
    JSON.parse(text);


  const output =
    data.choices[0]
      .message
      .content;


  Logger.log(
    "AI OUTPUT:"
  );

  Logger.log(output);


  return JSON.parse(output);

}

function saveMetadataToSheet(
  fileId,
  fileUrl,
  fileName,
  data
) {

  const form =
    FormApp.getActiveForm();

  const spreadsheetId =
    form.getDestinationId();

  const spreadsheet =
    SpreadsheetApp.openById(
      spreadsheetId
    );


  let sheet =
    spreadsheet.getSheetByName(
      "AI Metadata"
    );


  if (!sheet) {

    sheet =
      spreadsheet.insertSheet(
        "AI Metadata"
      );

    sheet.appendRow([
      "Timestamp",
      "Link File",
      "Nama File",
      "Jenis Dokumen",
      "Nomor Dokumen",
      "Tanggal Dokumen",
      "Pengirim",
      "Penerima",
      "Perihal",
      "Ringkasan",
      "Kata Kunci",
      "Status"
    ]);

  }


  sheet.appendRow([

    new Date(),

    `=HYPERLINK("${fileUrl}";"Buka File")`,

    fileName,

    data.jenis_dokumen || "",

    data.nomor_dokumen || "",

    data.tanggal_dokumen || "",

    data.pengirim || "",

    data.penerima || "",

    data.perihal || "",

    data.ringkasan || "",

    Array.isArray(data.kata_kunci)
      ? data.kata_kunci.join(", ")
      : data.kata_kunci || "",

    "DONE"

  ]);

}
