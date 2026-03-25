## 📱 APK do Aplicativo

O APK não está versionado no repositório por boas práticas.

### 🔽 Download

Baixe o APK oficial em:

https://github.com/webdriverio/native-demo-app/releases

### 📁 Configuração

1. Baixe a versão **2.2.0**
2. Coloque o arquivo na pasta:

```
app/
```

3. Renomeie para:

```
android.wdio.native.app.v2.2.0.apk
```

---

## ⚙️ Como rodar o projeto

### 1. Instalar dependências

```bash
npm install
```

### 2. Iniciar emulador Android

Abra o Android Studio ou rode:

```bash
emulator -avd NomeDoSeuEmulador
```

### 3. Executar os testes

Rodar todos os testes:

```bash
npx wdio run wdio.conf.js
```

Rodar teste específico:

```bash
npx wdio run wdio.conf.js --spec ./test/specs/login.spec.js
```

🧪 Cenários implementados (especificações)

Lista de specs presentes em `test/specs/` e resumo do que cobrem:

- `login.spec.js` — Login com credenciais válidas
- `login-invalid.spec.js` — Login com campos inválidos/erros de validação
- `login-empty.spec.js` — Tentativa de login com campos vazios
- `login-password-empty.spec.js` — Teste de campo de senha vazio
- `signup.spec.js` — Fluxo de cadastro (sucesso e senhas diferentes)
- `navigation.spec.js` — Navegação entre abas (Login, Forms, Swipe, Drag)
- `home-navigation.spec.js` — Navegação na tela inicial (home)
- `forms.spec.js` — Interações com formulários
- `forms-button.spec.js` — Verificações de botões em Forms
- `smoke.spec.js` — Testes rápidos de sanity/smoke

Use os arquivos acima como referência dos cenários automatizados; para executar um caso isolado utilize `--spec` conforme descrito.

📸 Screenshots

O projeto captura screenshots automaticamente:

- Em testes com sucesso
- Em testes com falha

Local:

```
screenshots/
```

📊 Relatórios (Allure)

Gerar relatório

```bash
npx allure generate allure-results --clean -o allure-report
```

Abrir relatório

```bash
npx allure open allure-report
```

🧱 Arquitetura

O projeto utiliza o padrão Page Object, separando:

- Elementos da interface
- Ações
- Testes

Isso garante:

- Manutenção fácil
- Reutilização de código
- Escalabilidade

🔄 CI/CD (GitLab)

O projeto possui pipeline configurado via:

`.gitlab-ci.yml`

Executa:

- Instalação de dependências
- Execução dos testes
- Geração de relatório

🍏 Execução em iOS (Estrutura preparada)

O projeto está preparado para execução em iOS, podendo ser configurado com:

- Xcode
- Simulador iOS
- Appium

### 🛠️ Configuração iOS do projeto

As configurações padrão do projeto para iOS estão em `wdio.ios.conf.js`:

- `platformName`: iOS
- `automationName`: XCUITest
- `deviceName`: iPhone 15
- `platformVersion`: 17.5
- `bundleId`: org.wdiodemoapp
- `noReset`: true
- `fullReset`: false

> Ajuste `deviceName` ou `platformVersion` conforme os simuladores instalados localmente.

### 📱 Como rodar em iOS (simulador)

1. Certifique-se que está no macOS com Xcode instalado.
2. Instale dependências do projeto:

```bash
npm install
```

3. Compile ou obtenha um build `.app` para o simulador (arquitetura compatível). Coloque o `.app` em um local acessível no seu sistema.

4. Inicie/boot o simulador desejado (ex.: iPhone 15):

```bash
# listar dispositivos
xcrun simctl list devices

# bootar um simulador
xcrun simctl boot "iPhone 15"
```

5. Instale e abra o app no simulador:

```bash
xcrun simctl install booted /path/to/YourApp.app
xcrun simctl launch booted org.wdiodemoapp
```

6. Rodar os testes usando a config iOS:

```bash
npx wdio run ./wdio.ios.conf.js
```

Ou rodar um spec específico:

```bash
npx wdio run ./wdio.ios.conf.js --spec ./test/specs/login.spec.js
```

### 🧭 Logs e troubleshooting iOS

- Logs do simulador:

```bash
xcrun simctl spawn booted log stream --level=info --style compact
```

- Se o Appium/WebDriverAgent não iniciar, verifique se Xcode command line tools estão atualizados e se há compatibilidade entre o Xcode, iOS e a versão do WebDriverAgent.


🔥 Diferenciais

- Estrutura profissional
- Boas práticas de Git (APK ignorado)
- Uso de Page Object
- Relatórios com Allure
- Screenshots automáticos
- Pronto para CI/CD

👤 Autor

Almir Cesar

📌 Observações

- Certifique-se de que o emulador esteja rodando antes de executar os testes
- O APK deve estar na pasta correta
- Node.js versão recomendada: 18+
