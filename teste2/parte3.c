#include <WiFi.h>
    #include <WebServer.h>
    #include <SPIFFS.h>
    
    // Definir SSID e senha da rede Wi-Fi
    const char* ssid = "SEU_SSID";
    const char* password = "SUA_SENHA";
    
    // Inicializar o servidor web na porta 80
    WebServer server(80);
    
    // Inicializar o SPIFFS
    void initSPIFFS() {
      if (!SPIFFS.begin(true)) {
        Serial.println("Erro ao montar o SPIFFS.");
        return;
      }
      Serial.println("SPIFFS montado com sucesso.");
    }
    
    // Função para lidar com a página principal (servindo o arquivo HTML)
    void handleRoot() {
      File file = SPIFFS.open("/index.html", "r");
      if (!file) {
        server.send(404, "text/plain", "Arquivo não encontrado");
        return;
      }
      String page = file.readString();
      server.send(200, "text/html", page);
      file.close();
    }
    
    // Função para lidar com o envio da mensagem
    void handleSendMessage() {
      if (server.hasArg("message")) {
        String message = server.arg("message");
        String response = "Arduino recebeu: " + message;
        server.send(200, "text/plain", response);
      } else {
        server.send(200, "text/plain", "Nenhuma mensagem enviada");
      }
    }
    
    // Configurar o servidor e conectar ao Wi-Fi
    void setup() {
      // Inicializar a comunicação serial
      Serial.begin(115200);
    
      // Inicializar o SPIFFS
      initSPIFFS();
    
      // Conectar ao Wi-Fi
      Serial.println("Conectando ao Wi-Fi...");
      WiFi.begin(ssid, password);
    
      while (WiFi.status() != WL_CONNECTED) {
        delay(1000);
        Serial.println("Tentando conectar...");
      }
    
      Serial.println("Conectado ao Wi-Fi!");
      Serial.print("Endereço IP: ");
      Serial.println(WiFi.localIP());
    
      // Definir rotas do servidor
      server.on("/", handleRoot);          // Página principal com o HTML
      server.on("/send", handleSendMessage); // Processamento da mensagem enviada
    
      // Iniciar o servidor
      server.begin();
      Serial.println("Servidor iniciado!");
    }
    
    // Manter o servidor rodando
    void loop() {
      server.handleClient();
    }