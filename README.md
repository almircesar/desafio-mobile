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
