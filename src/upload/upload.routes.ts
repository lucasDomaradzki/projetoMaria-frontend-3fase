/**
 * @author lucasDomaradzki
 * Essa função é chamada pelo endpoint /api/upload no app.js
 * Salva/mv o arquivo do front-end na chamada do endpoint
 * na pasta ./upload para ser processado pelo wrapper
 * 
 * @param req Requisição do endpoint /api/upload
 * @param res Response do endpoint /api/upload
 */
export let getCsv = function(req, res) {

  if (req.files) {
    var file = req.files.filename,
        filename = file.name;
    file.mv("./upload/"+filename, function(err) {
      if (err) {
        console.log("Erro:", err);
        res.send("Error", err);
        res.status(400);
      } else {
        res.send("Enviado com sucesso.")
        res.status(200);
      }
    });
  }
}