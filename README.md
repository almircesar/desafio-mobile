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

## ✅ Revisão rápida da entrega

Itens verificados neste repositório:

- APK não versionado e `.gitignore` contendo `app/*.apk` — OK
- Estrutura de testes com Page Objects — OK
- Specs de login, signup, forms, navigation e smoke presentes — OK
- Configurações separadas para Android (`wdio.conf.js`) e iOS (`wdio.ios.conf.js`) — OK
- Allure configurado como reporter e pasta `allure-results/` presente — OK

Pontos que merecem atenção ou ajustes recomendados abaixo.

## 🔧 Ajustes recomendados

1. Executar testes sequencialmente por padrão durante debug

	- Motivo: emuladores e Appium ocasionalmente falham com execuções paralelas. Para runs locais mais estáveis, defina em `wdio.conf.js`:

	```js
	// reduzir paralelismo global
	maxInstances: 1,

	// dentro do capability (opcional)
	capabilities: [{
	  // ...
	  maxInstances: 1,
	}]
	```

2. Garantir presença do Appium na máquina ou como devDependency

	- Se não houver `appium` no `node_modules`, instale globalmente ou adicione como devDependency:

	```bash
	npm i -D appium
	# ou global
	npm i -g appium
	```

3. Scripts convenientes no `package.json` (opcional)

	- Sugestão: adicione atalhos para executar facilmente em Android/iOS e um spec isolado:

	```json
	"scripts": {
	  "wdio": "wdio run ./wdio.conf.js",
	  "wdio:android": "wdio run ./wdio.conf.js",
	  "wdio:ios": "wdio run ./wdio.ios.conf.js",
	  "wdio:spec": "wdio run ./wdio.conf.js --spec"
	}
	```

4. Recomendações de versão

	- Node.js 18+ (recomendado)
	- Appium versão compatível com drivers @wdio/appium-service instalados

5. CI: limpar artefatos grandes

	- Verifique se o pipeline não tenta commitar artefatos grandes (APK, allure-report). O `.gitignore` já cobre `app/*.apk`, `allure-results/` e `screenshots/`.

## 🧰 Scripts e comandos úteis (resumo)

- Rodar todos os testes (Android):

```bash
npm run wdio
```

- Rodar testes iOS (usando config iOS):

```bash
npx wdio run ./wdio.ios.conf.js
```

- Rodar um spec específico:

```bash
npx wdio run ./wdio.conf.js --spec ./test/specs/login.spec.js
```

## 🩺 Troubleshooting rápido (Android)

- Se a instrumentação do UiAutomator2 falhar (mensagem no Appium: "The instrumentation process cannot be initialized"):

```bash
adb -s <device> uninstall io.appium.uiautomator2.server || true
adb -s <device> uninstall io.appium.uiautomator2.server.test || true
adb -s <device> uninstall io.appium.settings || true
```

- Logs:

```bash
adb -s <device> logcat -d > /tmp/logcat_full.txt
grep -n -i 'instrumentation\|Crash of app' /tmp/logcat_full.txt | sed -n '1,200p'
```

## 🩺 Troubleshooting rápido (iOS)

- Logs do simulador:

```bash
xcrun simctl spawn booted log stream --level=info --style compact
```

- Verifique se o `.app` é válido para simulador (arquitetura correta). Para device é necessário assinatura/provisioning.

## 🧾 Checklist final antes de rodar a suíte

1. Emulador Android ou Simulador iOS rodando
2. APK `.app` colocado no local correto (`app/android.wdio.native.app.v2.2.0.apk` ou `.app` para iOS)
3. Node 18+ e dependências instaladas (`npm install`)
4. Appium disponível (local/global)
5. Se der erro na instrumentação, executar limpeza dos apks do Appium e reiniciar o emulador

Se quiser, eu posso aplicar automaticamente a alteração recomendada em `wdio.conf.js` (ajustar `maxInstances: 1`) e adicionar os scripts sugeridos ao `package.json` — quer que eu faça isso agora?
