# 🚀 FLUJO SIMPLE - Solo VSCode + Claude + GitHub

## SIN NECESIDAD DE NODE.JS

---

## ¿CÓMO FUNCIONA?

```
TÚ en VSCode
    ↓ Editas código
    ↓ (Claude/IA te ayuda)
    ↓ Presionas Ctrl+S
    ↓
Git Commit Automático
    ↓
Git Push a GitHub
    ↓
GitHub sincroniza con Shopify
    ↓
TU TIENDA SE ACTUALIZA AUTOMÁTICAMENTE
```

**¡SIN INSTALAR NADA MÁS!**

---

## PASO 1: Crear Repositorio en GitHub

1. Ve a https://github.com/new
2. Nombre: `academia-online-pro`
3. Descripción: "Ebook - Recupera a Tu Ex"
4. Tipo: **Public** (importante)
5. Click "Create Repository"

---

## PASO 2: Conectar tu Carpeta Local con GitHub

En PowerShell (tu carpeta del tema):

```powershell
cd "C:\Users\Pepe\Downloads\theme_export__academia-online-6713-myshopify-com-horizon__31MAY2026-1104pm"

# Agregar tu repositorio
git remote add origin https://github.com/TU_USERNAME/academia-online-pro.git

# Cambiar rama a main
git branch -M main

# Push inicial
git push -u origin main
```

**Reemplaza TU_USERNAME con tu usuario de GitHub**

---

## PASO 3: Configurar Shopify + GitHub (LA MAGIA)

### En tu Shopify Admin:

1. Ve a **Online Store → Themes**
2. Click en tu tema "Horizon"
3. Click en **"..."** (tres puntos)
4. Busca **"Connect from GitHub"** o **"Link repository"**

Si no lo ves:
1. Ve a **Settings → Apps and integrations**
2. Busca **"GitHub"**
3. Agrega la app
4. Autoriza GitHub
5. Selecciona tu repositorio `academia-online-pro`

---

## PASO 4: LISTO - AHORA FUNCIONA AUTOMÁTICAMENTE

**Flujo:**

```
1. Abres VSCode
2. Editas cualquier archivo
   (hero-premium.liquid, quiz-premium.liquid, etc)
3. Presionas Ctrl+S (Guardas)
4. Haces:
   git add -A
   git commit -m "🎨 Cambios"
   git push origin main
5. ¡AUTOMÁTICAMENTE se actualiza en tu tienda Shopify!
```

---

## COMANDOS QUE NECESITAS (Nada más)

```powershell
# Ver cambios
git status

# Agregar cambios
git add -A

# Hacer commit
git commit -m "🎨 Descripción"

# Subir a GitHub
git push origin main

# Ver historial
git log --oneline
```

---

## EJEMPLO DE FLUJO REAL

### Editar el Quiz

1. Abres VSCode
2. Abres `sections/quiz-premium.liquid`
3. Cambias la pregunta 1
4. Presionas Ctrl+S
5. En PowerShell:
```powershell
git add -A
git commit -m "📝 Actualizada pregunta 1 del quiz"
git push origin main
```
6. ¡En 30 segundos tu tienda se actualiza! 🎉

---

## COMPARACIÓN CON EL VIDEO

### Video de la Chica:
```
VSCode → Edita → Ctrl+S → GitHub → Vercel → Se actualiza
```

### Nosotros:
```
VSCode → Edita → Ctrl+S → GitHub → Shopify → Se actualiza
```

**¡Exactamente igual! Solo cambia Vercel por Shopify**

---

## LO QUE NO NECESITAS

❌ Node.js  
❌ Shopify CLI  
❌ Servidor local  
❌ Nada más que no ya tengas

---

## LO QUE NECESITAS

✅ VSCode (ya lo tienes)  
✅ Git (ya lo tienes)  
✅ Cuenta GitHub (crea una si no tienes)  
✅ Cuenta Shopify (ya la tienes)  
✅ Claude/Copilot Chat en VSCode (opcional pero útil)  

---

## VENTAJAS DE ESTE MÉTODO

✨ **Simple**: Solo 3 herramientas  
✨ **Profesional**: Como en el video  
✨ **Automático**: GitHub ↔ Shopify sincronizado  
✨ **Seguro**: Backup en GitHub  
✨ **Rápido**: Push = Actualización automática  

---

## TROUBLESHOOTING

**Problema: "Permission denied"**
- Solución: Genera SSH key en GitHub
  https://docs.github.com/en/authentication/connecting-to-github-with-ssh

**Problema: "Repository not found"**
- Solución: Verifica el nombre sea exactamente igual

**Problema: "Los cambios no se actualizan"**
- Solución: Verifica que GitHub ↔ Shopify estén conectados

---

## RESUMEN

1. Crea repo en GitHub
2. `git push origin main` tu código local
3. Conecta GitHub ↔ Shopify en Shopify Admin
4. Ahora cada `git push` actualiza tu tienda automáticamente

**¡Listo! Sin Node.js, sin nada extra. Solo las 3 herramientas.** ✨

---

## PRÓXIMOS PASOS

1. ✅ Crea repositorio en GitHub
2. ✅ Conecta tu carpeta local con GitHub
3. ✅ Haz `git push origin main`
4. ✅ En Shopify, conecta el repositorio
5. ✅ ¡Empieza a editar!

**¿Necesitas ayuda en algún paso? Avísame** 🚀
