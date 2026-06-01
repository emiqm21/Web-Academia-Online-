# 📊 CREAR PIXEL META "COMO RECUPERAR A TU EX" + SHOPIFY

## 🔗 TU CUENTA META LISTA

```
Negocio:      Academia Online Pro
Business ID:  3472903562858325
Ad Account:   2028705054408583
Nombre:       Academia Online
Status:       ✅ ACTIVO
Divisa:       USD
```

---

## PASO 1️⃣ : CREAR PIXEL EN META ADS MANAGER (5 MIN)

### 1. Ir a Meta Ads Manager

1. Ve a **https://business.facebook.com**
2. Selecciona tu negocio **"Academia Online Pro"**
3. En el menú izquierdo, ve a **Events Manager** (o **Eventos**)
4. Click en **"Connect Data Sources"** / **"Conectar Fuentes de Datos"**

### 2. Crear Nuevo Pixel

1. Click en **"Create Data Source"** / **"Crear Fuente de Datos"**
2. Selecciona **"Website"** / **"Sitio Web"**
3. Click **"Next"** / **"Siguiente"**
4. Rellena:
   - **Data source name:** `Como Recuperar a Tu Ex - Pixel`
   - **Website URL:** `academia-online-6713.myshopify.com`
5. Click **"Create"** / **"Crear"**

### 3. Recibirás tu Pixel ID

```
Tu Pixel ID: [Se mostrará aquí]
Ejemplo:     123456789012345
```

**Guarda este ID**, lo necesitarás para Shopify.

---

## PASO 2️⃣ : CONECTAR PIXEL A SHOPIFY (3 MIN)

### Opción A: Conexión Automática (Recomendado)

1. Ve a tu **Shopify Admin**
2. **Settings → Apps and Integrations**
3. Busca **"Meta"** en la barra de búsqueda
4. Click en **"Meta for Shopify"** (o **"Sales Channel de Facebook"**)
5. Click **"Add app"** / **"Agregar aplicación"**
6. En la pantalla de configuración, pega tu **Pixel ID**
7. Click **"Install"** / **"Instalar"**
8. Autentica con tu cuenta de Meta

**Listo.** Shopify sincronizará automáticamente eventos: vista de producto, agregar al carrito, compra, etc.

### Opción B: Conexión Manual (Si necesario)

Si no aparece la app Meta en Shopify:

1. En tu Pixel en Meta Events Manager
2. Click en **"Data sources"** → Tu pixel
3. Busca **"Install Code"** / **"Instalar Código"**
4. Selecciona **"Shopify"**
5. Sigue los pasos (te pedirá que autorices el acceso a tu tienda)

---

## PASO 3️⃣ : CONFIGURAR EVENTOS PERSONALIZADOS (5 MIN)

Una vez conectado, Meta rastreará automáticamente:
- ✅ Vista de página (PageView)
- ✅ Vista de producto (ViewContent)
- ✅ Agregar al carrito (AddToCart)
- ✅ Compra (Purchase)
- ✅ Completar información (CompleteRegistration)

### (Opcional) Crear Evento Personalizado

Si quieres trackear cuando alguien **completa el quiz**:

1. En tu Pixel → **Custom Conversions** / **Conversiones Personalizadas**
2. Click **"Create Custom Conversion"** / **"Crear Conversión Personalizada"**
3. Configura:
   - **Pixel:** Tu pixel "Como Recuperar a Tu Ex"
   - **Conversion Event:** Elige un evento base (ej: ViewContent)
   - **Conversion Name:** `Quiz Completado - Como Recuperar a Tu Ex`
4. Click **"Create"** / **"Crear"**

---

## PASO 4️⃣ : VERIFICAR QUE FUNCIONA (2 MIN)

### 1. Meta Pixel Helper (Chrome)

1. Instala **"Meta Pixel Helper"** en Chrome (extension oficial de Meta)
2. Ve a tu sitio: `academia-online-6713.myshopify.com`
3. Abre la extensión (arriba a la derecha)
4. Deberías ver:
   - ✅ Tu Pixel ID está active
   - ✅ Se registran eventos (PageView, ViewContent, etc.)
5. Si ves errores, revisa la console (F12 → Console)

### 2. Verificar en Meta Events Manager

1. Ve a tu Pixel en Meta
2. En **"Diagnostics"** / **"Diagnósticos"**
3. Deberías ver:
   - ✅ Eventos recibidos en las últimas 24 horas
   - ✅ Estatus: **Active** / **Activo**
   - ✅ Últimos eventos listados

---

## PASO 5️⃣ : USAR EL PIXEL EN CAMPAÑAS (PRÓXIMO)

Una vez verificado, puedes:

1. **Crear Audiencias:** Basar audiencias en quién visitó tu sitio, completó el quiz, etc.
2. **Crear Campañas:** Dirigirte a visitantes con anuncios de conversión
3. **Medir ROI:** Ver qué eventos llevan a compras

---

## 🎯 EJEMPLO DE FLUJO COMPLETO

```
Usuario llega → ViewContent (vio el ebook)
     ↓
Completa Quiz → CustomConversion (Quiz completado)
     ↓
Agrega al carrito → AddToCart
     ↓
Compra → Purchase (Conversión)
     ↓
Meta registra todo → Usas datos para optimizar anuncios
```

---

## 🔧 TROUBLESHOOTING

### "No veo eventos en Meta"

1. Verifica que el Pixel ID en Shopify sea correcto
2. Usa **Meta Pixel Helper** para confirmar que se está disparando
3. Espera 24-48 horas (a veces Meta tarda en mostrar datos)
4. Revisa la console (F12) por errores de JavaScript

### "El pixel está instalado pero no aparecen compras"

1. Asegúrate que Shopify esté completamente sincronizado con Meta
2. Verifica que el evento "Purchase" esté siendo rastreado
3. Confirma que el código de conversión esté correcto

### "Recibí mi Pixel ID pero no sé dónde pegarlo en Shopify"

1. **Settings → Apps and Integrations → Meta for Shopify**
2. En la pestaña "Configuration" o "Sales Channel"
3. Busca campo "Pixel ID" y pega

---

## 📈 MÉTRICAS QUE VERÁS DESPUÉS

Una vez activo, Meta mostrará:

| Métrica | Qué significa |
|---------|--------------|
| **PageView** | Gente que visitó tu sitio |
| **ViewContent** | Gente que vio el ebook |
| **AddToCart** | Gente que agregó al carrito |
| **Purchase** | Gente que compró (CONVERSIÓN) |
| **Quiz Completado** | Custom: Gente que completó el quiz |

---

## ✨ PRÓXIMO PASO

Una vez que el pixel esté funcionando:

1. Crea una audiencia de **"Visitantes del sitio en los últimos 30 días"**
2. Crea una campaña de **"Conversión"** dirigida a esa audiencia
3. Usa el ebook como oferta
4. Meta optimizará automáticamente para compras

---

## 📞 SOPORTE

Si tienes problemas:

1. **Meta Pixel Helper** → Confirma que está activo en el sitio
2. **Meta Events Manager → Diagnostics** → Verifica eventos
3. **Shopify Admin → Apps → Meta** → Verifica configuración
4. **Meta Help Center:** help.facebook.com/pixel

---

**¡Listo!** Tu pixel está configurado y rastreando todas las acciones en tu ebook.

Ahora puedes crear campañas inteligentes basadas en datos reales. 📊
