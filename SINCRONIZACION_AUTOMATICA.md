# 🚀 GUÍA RÁPIDA - Sincronización Automática

## Lo que Necesitas

```
VSCode ✅ (Ya lo tienes)
Git ✅ (Ya lo tienes)
Node.js (Necesitas descargar)
GitHub (Necesitas crear cuenta/repo)
Shopify CLI (Voy a ayudarte a instalar)
```

---

## PASO 1: Instalar Node.js

1. Ve a https://nodejs.org/
2. Descarga la versión LTS (Long Term Support)
3. Instala normalmente (Next → Next → Finish)
4. Verifica en PowerShell:
   ```powershell
   node --version
   npm --version
   ```

---

## PASO 2: Instalar Shopify CLI

En PowerShell (ejecuta como administrador):

```powershell
npm install -g @shopify/cli @shopify/app
shopify version
```

Si sale error, intenta:
```powershell
npm install -g @shopify/cli --force
```

---

## PASO 3: Conectar con Shopify

En PowerShell, en tu carpeta del tema:

```powershell
cd "c:\Users\Pepe\Downloads\theme_export__academia-online-6713-myshopify-com-horizon__31MAY2026-1104pm"
shopify app setup
```

Te abrirá el navegador para:
1. Loguarte en tu cuenta Shopify
2. Autorizar Shopify CLI
3. Confirmar

Listo! ✅

---

## PASO 4: Sincronización en Tiempo Real

### Opción A: Desarrollo LOCAL (Recomendado)

```powershell
shopify theme dev
```

Esto:
- Abre un servidor local en http://localhost:9292
- Sincroniza cambios automáticamente
- Muestra errores en tiempo real
- ¡NO NECESITAS GITHUB para esto!

Cuando guardes un archivo:
1. Cambio en VSCode
2. Guardas (Ctrl+S)
3. Automáticamente se actualiza en http://localhost:9292
4. Se pushea a tu tienda Shopify

Para detener: Presiona Ctrl+C

### Opción B: GitHub + Shopify App

Si quieres GitHub + automatización:

1. **Crear repositorio en GitHub**
   - Ve a github.com
   - Click "New Repository"
   - Nombre: `academia-online-pro`
   - Descripción: "Ebook Recupera a Tu Ex"
   - Click "Create"

2. **Conectar tu carpeta local con GitHub**
   ```powershell
   cd "c:\Users\Pepe\Downloads\theme_export__academia-online-6713-myshopify-com-horizon__31MAY2026-1104pm"
   git remote add origin https://github.com/TU_USUARIO/academia-online-pro.git
   git branch -M main
   git push -u origin main
   ```

3. **Configurar Deploy Automático**
   - Ve a tu Shopify Admin
   - Online Store → Themes
   - Busca "Connect from GitHub"
   - Selecciona tu repositorio
   - Listo! Cada push actualiza tu tienda

---

## FLUJO DE TRABAJO FINAL

### Versión Simple (LOCAL - MÁS RÁPIDO)

```
VSCode        →    Haces cambios
    ↓
Ctrl+S        →    Guardas
    ↓
Shopify CLI   →    Se actualiza automáticamente
    ↓
http://localhost:9292  →    Ves los cambios en TIEMPO REAL
    ↓
shopify theme push  →    Publica a producción
```

### Versión Profesional (GITHUB)

```
VSCode        →    Haces cambios
    ↓
Ctrl+S        →    Guardas
    ↓
Git Commit    →    git commit -m "Cambio"
    ↓
Git Push      →    git push
    ↓
GitHub        →    Se actualiza en GitHub
    ↓
Shopify       →    Se actualiza automáticamente
```

---

## COMANDOS PRINCIPALES

```powershell
# Iniciar sincronización local
shopify theme dev

# Hacer push a producción
shopify theme push

# Ver status
shopify theme status

# Crear rama nueva
git checkout -b feature/mi-cambio

# Commit
git commit -m "📝 Descripción del cambio"

# Push a GitHub
git push origin main

# Ver historial
git log --oneline
```

---

## EJEMPLO PRÁCTICO

1. **Abres VSCode**
   - Editas quiz-premium.liquid
   - Cambias una pregunta

2. **Guardas (Ctrl+S)**
   - Shopify CLI detecta el cambio
   - Automáticamente actualiza

3. **Abres http://localhost:9292**
   - ¡Ves el cambio en vivo! 🎉

4. **Cuando terminas el día**
   ```powershell
   git commit -m "🎨 Actualizadas preguntas del quiz"
   git push origin main
   ```

5. **Tu tienda se actualiza automáticamente** 🚀

---

## TROUBLESHOOTING

**Problema: "command not found: shopify"**
- Solución: Instala Node.js primero, luego `npm install -g @shopify/cli`

**Problema: "No se conecta a Shopify"**
- Solución: Ejecuta `shopify app setup` nuevamente

**Problema: "Los cambios no aparecen"**
- Solución: Limpia cache (Ctrl+Shift+Delete en navegador)

**Problema: "Puerto 9292 en uso"**
- Solución: `shopify theme dev --port 9293`

---

## PRÓXIMOS PASOS

1. ✅ Instala Node.js
2. ✅ Instala Shopify CLI
3. ✅ Ejecuta `shopify theme dev`
4. ✅ Abre http://localhost:9292
5. ✅ ¡Haz cambios en VSCode!
6. ✅ Guarda (Ctrl+S)
7. ✅ ¡Automáticamente se actualiza! 🎉

---

## BONUS: Crear GitHub Actions para Auto-Deploy

Si quieres que GitHub actualice tu tienda automáticamente, créa este archivo:

`.github/workflows/deploy.yml`

```yaml
name: Deploy to Shopify

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install -g @shopify/cli
      - run: shopify theme push
        env:
          SHOPIFY_CLI_THEME_TOKEN: ${{ secrets.SHOPIFY_THEME_TOKEN }}
          SHOPIFY_SHOP_ID: ${{ secrets.SHOPIFY_SHOP_ID }}
```

Luego en GitHub:
- Settings → Secrets and variables → Actions
- Agrega SHOPIFY_THEME_TOKEN y SHOPIFY_SHOP_ID
- Listo! Cada push automáticamente deploya

---

¡Eso es todo! Ahora tienes:
- ✅ Sincronización local en tiempo real
- ✅ GitHub para control de versiones
- ✅ Deploy automático a Shopify

🚀 ¡Tu flujo es idéntico al del video!
