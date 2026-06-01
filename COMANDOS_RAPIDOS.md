# 📋 COMANDOS RÁPIDOS - Copia y Pega

## ⚡ SETUP INICIAL (Una sola vez)

### Paso 1: Instalar Node.js
Descarga desde: https://nodejs.org/
(Selecciona LTS - Long Term Support)

### Paso 2: Instalar Shopify CLI
```powershell
npm install -g @shopify/cli @shopify/app
```

### Paso 3: Verificar instalación
```powershell
node --version
npm --version
shopify version
```

### Paso 4: Ir a tu carpeta del tema
```powershell
cd "C:\Users\Pepe\Downloads\theme_export__academia-online-6713-myshopify-com-horizon__31MAY2026-1104pm"
```

### Paso 5: Conectar con Shopify
```powershell
shopify app setup
```
(Te abrirá navegador para conectar tu cuenta)

---

## 🚀 SINCRONIZACIÓN EN TIEMPO REAL (Todos los días)

### Iniciar el servidor local
```powershell
shopify theme dev
```

**Esto:**
- Abre servidor en http://localhost:9292
- Sincroniza cambios automáticamente
- Muestra errores en vivo

**Para detener:** Ctrl+C

---

## 💻 EDITAR ARCHIVOS

Abre cualquier archivo en VSCode y edita:

```
sections/hero-premium.liquid
sections/quiz-premium.liquid
sections/book-content-preview.liquid
assets/premium-design.css
assets/premium-scripts.js
```

Presiona Ctrl+S y ¡se actualiza automáticamente! ✨

---

## 📤 CUANDO TERMINAS - Hacer commit

```powershell
# Ver cambios
git status

# Agregar todos los cambios
git add -A

# Hacer commit con descripción
git commit -m "🎨 Descripción de tu cambio aquí"
```

---

## 🌐 INTEGRAR CON GITHUB (Opcional pero recomendado)

### Crear repositorio en GitHub

1. Ve a https://github.com/new
2. Nombre: `academia-online-pro`
3. Descripción: "Ebook Recupera a Tu Ex - Shopify Theme"
4. Click "Create Repository"

### Conectar local con GitHub

```powershell
# Agregar repositorio remoto
git remote add origin https://github.com/TU_USERNAME/academia-online-pro.git

# Cambiar rama a main
git branch -M main

# Hacer push inicial
git push -u origin main
```

Reemplaza `TU_USERNAME` con tu usuario de GitHub.

### Después de cada cambio

```powershell
git add -A
git commit -m "🎨 Tu descripción aquí"
git push origin main
```

---

## 📝 EJEMPLOS DE MENSAJES DE COMMIT

```powershell
# Editar quiz
git commit -m "📝 Actualizadas preguntas del quiz"

# Cambiar colores
git commit -m "🎨 Actualizados colores premium"

# Agregar testimonios
git commit -m "⭐ Agregados testimonios"

# Bugs fixes
git commit -m "🐛 Fixed bug en mobile"

# Optimización
git commit -m "⚡ Optimizado performance"
```

---

## 🔍 VER HISTORIAL DE CAMBIOS

```powershell
# Ver últimos commits
git log --oneline

# Ver cambios específicos
git show COMMIT_ID

# Ver diferencias
git diff
```

---

## 🌳 TRABAJAR CON RAMAS (Avanzado)

```powershell
# Crear rama nueva
git checkout -b feature/mi-feature

# Cambiar entre ramas
git checkout main

# Listar ramas
git branch -a

# Eliminar rama
git branch -d nombre-rama
```

---

## ⚠️ SI ALGO SALE MAL

### Deshacer último commit
```powershell
git reset --soft HEAD~1
```

### Deshacer cambios en archivo
```powershell
git checkout -- archivo.liquid
```

### Limpiar cambios sin hacer commit
```powershell
git clean -fd
```

---

## 📊 FLUJO COMPLETO DEL DÍA

```powershell
# Por la mañana - Iniciar sincronización
shopify theme dev

# Durante el día
# 1. Editas archivos en VSCode
# 2. Presionas Ctrl+S
# 3. Se actualiza automáticamente

# Por la tarde - Guardar cambios
git add -A
git commit -m "🎨 Cambios del día"
git push origin main

# Para detener Shopify CLI
# Presiona Ctrl+C en PowerShell
```

---

## 🎯 CHECKLIST RÁPIDO

- [ ] Node.js instalado: `node --version`
- [ ] Shopify CLI instalado: `shopify version`
- [ ] Conectado con Shopify: `shopify app setup`
- [ ] En carpeta correcta: `cd C:\Users\Pepe\Downloads\...`
- [ ] Servidor iniciado: `shopify theme dev`
- [ ] VSCode abierto con archivos
- [ ] Editas → Ctrl+S → Se actualiza ✨

---

## 🌍 URLS IMPORTANTES

```
Desarrollo Local:    http://localhost:9292
Tu Tienda:           https://academia-online-6713-myshopify-com.myshopify.com
GitHub:              https://github.com/tu-usuario/academia-online-pro
Shopify Admin:       https://admin.shopify.com
Node.js:             https://nodejs.org/
```

---

## 📱 ESTRUCTURA DE CARPETA

```
tema-shopify/
├── .git/                      ← Control de versiones
├── sections/
│   ├── hero-premium.liquid    ← Edita aquí
│   ├── quiz-premium.liquid    ← Edita aquí
│   └── book-content-preview.liquid
├── assets/
│   ├── premium-design.css     ← Edita aquí
│   └── premium-scripts.js     ← Edita aquí
├── snippets/
│   └── google-fonts-premium.liquid
├── config/
│   └── settings_schema.json   ← Colores
└── README.txt
```

---

## 🚀 ATAJO FINAL (Después de estar todo setup)

```powershell
# Ir a carpeta
cd "C:\Users\Pepe\Downloads\theme_export__academia-online-6713-myshopify-com-horizon__31MAY2026-1104pm"

# Iniciar dev
shopify theme dev

# (En otra pestaña PowerShell)

# Editar
code .

# (Editas en VSCode, presionas Ctrl+S)

# Cuando terminas
git add -A && git commit -m "🎨 Cambios" && git push
```

---

## ✨ LISTO!

Ahora tienes:
- ✅ Sincronización automática local
- ✅ Control de versiones con Git
- ✅ Backup en GitHub
- ✅ Deploy automático a Shopify

¡Exacto como en el video! 🎉

Cualquier duda, consulta SINCRONIZACION_AUTOMATICA.md
