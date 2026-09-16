function saveApiKey() {
  PropertiesService
    .getScriptProperties()
    .setProperty(
      "OPENROUTER_API_KEY",
      "APIKEY_OPENROUTER"
    );
}

function testOpenRouter() {

  const apiKey = PropertiesService
    .getScriptProperties()
    .getProperty("OPENROUTER_API_KEY");

  const payload = {
    model: "openrouter/free",
    messages: [
      {
        role: "user",
        content: "Balas hanya dengan kata BERHASIL"
      }
    ]
  };

  const response = UrlFetchApp.fetch(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      method: "post",
      contentType: "application/json",
      headers: {
        "Authorization": "Bearer " + apiKey
      },
      payload: JSON.stringify(payload),
      muteHttpExceptions: true
    }
  );

  Logger.log(response.getContentText());
}
