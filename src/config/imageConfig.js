/**
 * Centralized Image Path Configuration
 * Update BASE_PATH here when deploying to different environments
 * - Local dev: '/' 
 * - GitHub Pages: '/MyPortFolio-React/'
 * - Custom domain: '/'
 */

const BASE_PATH = '/MyPortFolio-React'

/**
 * Build complete image URL
 * @param {string} relativePath - Path relative to images folder (e.g., 'Shafik-Passport.png' or 'Products/aisa_product.png')
 * @returns {string} - Complete image path
 */
export const img = (relativePath) => `${BASE_PATH}/images/${relativePath}`

/**
 * Image assets mapping - single source of truth
 */
export const IMAGES = {
  // Profile
  profile: img('Shafik-Passport.png'),
  banner: img('NIkShafik Banner.png'),

  // Logos - Companies
  nasadef: img('nasadef_logo.png'),
  nasadefWhite: img('nasadef_logo_white.png'),
  isystec: img('isystec_logo.png'),

  // Logos - Clients
  sbtape: img('sbtape_logo.png'),
  jpnin: img('jpnin_logo.png'),
  iwk: img('iwk_logo.png'),
  rela: img('rela_logo.png'),
  felcra: img('felcra_logo.png'),
  tradewinds: img('tradewinds_logo.png'),

  // Logos - Experience
  gohub: img('gohub_logo.png'),
  asolute: img('asolute_logo.png'),
  hpcs: img('hpcs_logo.png'),
  cara: img('cara_logo.png'),
  vidabeauty: img('vidabeauty_logo.png'),
  depauh: img('depauh_logo.png'),

  // Products
  aisa: img('Products/aisa_product.png'),
  farmsense: img('Products/farmsense_product.png'),
  farmguard: img('Products/farmguard_product.png'),
  wildsec: img('Products/wildsec design.png'),
  floodsense: img('Products/floodsense_product.png'),
  pistolgajah: img('Products/pistolgajah_product.png'),
}

export default { img, IMAGES, BASE_PATH }
