import FurniturePageView from './FurniturePageView'
import {
  aboutPage,
  aftercarePage,
  cartPage,
  privacyPage,
  returnsPage,
  termsPage,
  thresholdPage,
} from '../data/pages'

// Furniture pages (content core §8–§13) — one shared template, data-driven.
// /threshold has no navigation link anywhere; it is routed here only.
export const Returns = () => <FurniturePageView page={returnsPage} />
export const Aftercare = () => <FurniturePageView page={aftercarePage} />
export const Cart = () => <FurniturePageView page={cartPage} />
export const About = () => <FurniturePageView page={aboutPage} />
export const Threshold = () => <FurniturePageView page={thresholdPage} />
export const Terms = () => <FurniturePageView page={termsPage} />
export const Privacy = () => <FurniturePageView page={privacyPage} />
