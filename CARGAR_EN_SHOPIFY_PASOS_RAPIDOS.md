# ⚡ CARGAR EN SHOPIFY - 3 OPCIONES (ELIGE UNA)

## OPCIÓN 1️⃣ : CLI (Más Rápida - 2 MIN)

```bash
# 1. Abre terminal en la carpeta del proyecto
cd path/a/tu/proyecto

# 2. Login
shopify login --store academia-online-6713.myshopify.com

# 3. Cargar y testear en vivo
shopify theme dev

# (Se abrirá automáticamente tu sitio en navegador)
# Ctrl+C cuando termines
```

---

## OPCIÓN 2️⃣ : Admin Shopify (2 MIN)

1. Ve a `academia-online-6713.myshopify.com/admin`
2. **Online Store → Themes**
3. **"Upload theme"** (botón arriba)
4. Arrastra la carpeta del proyecto
5. **"Upload"**
6. Espera 1 minuto
7. **"Customize"** para ver en vivo

---

## OPCIÓN 3️⃣ : GitHub Sync (Si tienes GitHub)

1. Push del proyecto a GitHub:
```bash
git add .
git commit -m "MVP ebook ready for production"
git push origin main
```

2. En Shopify Admin:
   - Online Store → Themes
   - "Link repository"
   - Selecciona tu repo
   - Branch: main
   - "Deploy"

---

## ✅ DESPUÉS DE CARGAR

### Homepage Setup (5 min)

1. Themes → **Customize**
2. En **Home (index.json)**
3. Agrega secciones en este orden:
   1. **Hero Ebook Persuasivo** ← Aparecerá primero
   2. **Quiz Premium** ← Con preguntas ya configuradas
   3. **Tabla de Contenidos + Preview** ← 6 capítulos
   4. **Escasez - Contador** ← Urgencia + precios
   5. **Testimonios** ← Con 3 testimonios reales
   6. **Autor Badge** ← Tu foto/bio
   7. **FAQ** ← 6 preguntas

4. **Save** (arriba a la derecha)

---

## 🛍️ CREAR PRODUCTO EN 2 MIN

1. **Products → Create Product**
2. Configura:
   - **Title:** Ebook - Recupera a Tu Ex (2ª Edición)
   - **Price:** 17495 (tu precio)
   - **Description:** [Copia de LANZAR_MVP_AHORA.md]
   - **Image:** Portada del libro
3. **Save**
4. **Copia la URL** del producto (ej: `/products/ebook-recupera-tu-ex`)
5. Vuelve a Customize → en sección "Tabla de Contenidos" → pega URL en botón "Comprar"
6. **Save**

---

## 🚀 PUBLICAR

1. **Themes → (tu tema)**
2. **Menu (⋮) → Publish**
3. **Confirm**

**¡LISTO! MVP LIVE** 🎉

---

## 📱 TEST RÁPIDO

- Móvil: Toca botones, completa quiz ✓
- Desktop: Verifica que se vea bien ✓
- Checkout: Prueba agregar al carrito ✓

---

## 🔗 URLs IMPORTANTES

- Sitio: https://academia-online-6713.myshopify.com
- Admin: https://academia-online-6713.myshopify.com/admin
- Theme Editor: /admin/themes/[THEME_ID]/editor

---

**Listo. Sigue los pasos arriba y en 10-15 min estará live.** ✨
