#!/bin/bash
# 🚀 SETUP AUTOMATICO - Academia Online Pro
# Sincronización GitHub + Shopify CLI

# Este script configura todo automáticamente
# Solo ejecuta una vez

echo "=========================================="
echo "🚀 Academia Online Pro - Auto Setup"
echo "=========================================="
echo ""

# Verificar si estás en la carpeta correcta
if [ ! -f "package.json" ]; then
    echo "❌ Error: Debes estar en la carpeta del tema Shopify"
    exit 1
fi

# 1. Instalar Shopify CLI (si no está)
echo "1️⃣ Verificando Shopify CLI..."
if ! command -v shopify &> /dev/null; then
    echo "📦 Instalando Shopify CLI..."
    npm install -g @shopify/cli @shopify/app
else
    echo "✅ Shopify CLI ya está instalado"
fi

# 2. Configurar Shopify
echo ""
echo "2️⃣ Configurando Shopify..."
echo "Te pedirá que conectes tu cuenta. Haz click en el link."
shopify app whoami || shopify app setup

# 3. Sincronizar con Shopify
echo ""
echo "3️⃣ Sincronizando con tu tienda Shopify..."
echo "Esto sincronizará todos los cambios en tiempo real"

# Activar modo desarrollo
shopify theme dev

# Listo!
echo ""
echo "✅ ¡CONFIGURACIÓN COMPLETA!"
echo ""
echo "Ahora:"
echo "1. Haz cambios en los archivos"
echo "2. Guarda (Ctrl+S)"
echo "3. ¡Se actualiza automáticamente en tu tienda! 🎉"
echo ""
echo "Para detener: Presiona Ctrl+C"
