# 📱 INSTRUCCIONES PARA MAÑANA (Rápido y sin confusión)

**Estado:** Todo listo. Solo necesitas cargar el tema en Shopify y testear.  
**Tiempo:** ~15 minutos

---

## OPCIÓN MÁS FÁCIL (Recomendada)

### Paso 1: Cargar tema en Shopify Admin (2 min)

1. Ve a: **https://academia-online-6713.myshopify.com/admin**
2. En el menú izquierdo: **Sales channels → Themes**
3. Click arriba a la derecha: **Upload theme**
4. Arrastra la carpeta completa de este proyecto → **Upload**
5. Espera a que termine (verás animación)

### Paso 2: Previsualizar (1 min)

1. Una vez cargado, haz click en el tema
2. Click **Preview** (arriba a la derecha)
3. Deberías ver la homepage con:
   - Banner hero (imagen)
   - Título "Talk about your brand"
   - Featured products section
   - Collage
   - Video
   - Multicolumn

### Paso 3: Publicar tema (1 min)

1. Vuelve a **Themes**
2. En el tema nuevo, click en los **⋮ (3 puntos)**
3. Click **Publish** / **Publicar**
4. Confirma

### Paso 4: Crear un ebook de prueba (5 min)

1. En Admin, ve a **Products → Create product**
2. Rellena:
   - **Title:** Ebook - Recupera a Tu Ex
   - **Price:** 17.95 (o el que quieras)
   - **Description:** "Guía completa para recuperar a tu ex"
3. **Save** / **Guardar**

### Paso 5: Testear (5 min)

1. Ve a tu sitio: **https://academia-online-6713.myshopify.com**
2. Deberías ver:
   - Homepage cargando correctamente
   - Tu producto en "Featured products"
   - Click en producto → detalles del ebook
   - Puedes agregar al carrito
3. **Prueba en tu celular también** (menú, productos, todo responsive)

---

## Si usas CLI (Alternativa - Más rápido si sabes bash)

```bash
cd c:\Users\Pepe\Downloads\theme_export__academia-online-6713-myshopify-com-horizon__31MAY2026-1104pm

# Conecta a tu tienda
shopify login --store academia-online-6713.myshopify.com

# Sube el tema en modo desarrollo (live preview)
shopify theme dev
```

Luego abre: http://localhost:9292 para ver cambios en tiempo real.

---

## ¿Qué hacer si algo sale mal?

### "No veo el tema subido"
- Espera 30 segundos
- Recarga la página (F5)
- Intenta nuevamente Upload

### "El sitio se ve roto/incompleto"
- Limpia cache del navegador (Ctrl+Shift+Delete)
- Recarga (Ctrl+F5)
- Intenta en navegador diferente

### "No aparecen los productos en Featured Products"
- Necesitas crear al menos 1 producto (Paso 4)
- El tema busca automáticamente en "All products"
- Si ya creaste 1, espera 5 seg y recarga

### "Quiero volver al tema anterior"
- En **Themes** puedes publicar un tema diferente
- O contacta a Shopify support

---

## ✨ PRÓXIMO (Después de testear)

Una vez funcione y veas tu sitio con ebooks:

1. **Crear más ebooks** (si necesitas)
2. **Personalizar colores/logo** (opcional)
3. **Conectar pixel Meta** (ver: CREAR_PIXEL_META_SHOPIFY.md)
4. **Iniciar ventas** 🎉

---

## 📞 Dudas rápidas

**P: ¿Puedo editar el tema desde el admin?**  
R: Sí. En **Themes → Edit code** puedes cambiar cualquier cosa. Cambios en vivo.

**P: ¿Se pierden mis datos si cambio de tema?**  
R: No. Los productos, órdenes, clientes quedan igual. Solo cambia la apariencia.

**P: ¿Cuándo agrego el pixel Meta?**  
R: Después de testear el sitio. Sigue: CREAR_PIXEL_META_SHOPIFY.md

**P: ¿Necesito código para nada?**  
R: No para hoy. Todo es visual en el admin.

---

**¡Listo! Solo son 5 pasos rápidos mañana.** ✅  
Después tienes un sitio ebook completamente funcional.

Buenas noches 😴
