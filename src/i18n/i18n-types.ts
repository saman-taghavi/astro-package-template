// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type { BaseTranslation as BaseTranslationType, LocalizedString, RequiredParams } from 'typesafe-i18n'

export type BaseTranslation = BaseTranslationType & DisallowNamespaces
export type BaseLocale = 'fa'

export type Locales =
	| 'fa'

export type Translation = RootTranslation & DisallowNamespaces

export type Translations = RootTranslation &
{
	common: NamespaceCommonTranslation
}

type RootTranslation = {
	/**
	 * H​i​ ​{​n​a​m​e​}​!​ ​P​l​e​a​s​e​ ​l​e​a​v​e​ ​a​ ​s​t​a​r​ ​i​f​ ​y​o​u​ ​l​i​k​e​ ​t​h​i​s​ ​p​r​o​j​e​c​t​:​ ​h​t​t​p​s​:​/​/​g​i​t​h​u​b​.​c​o​m​/​i​v​a​n​h​o​f​e​r​/​t​y​p​e​s​a​f​e​-​i​1​8​n
	 * @param {string} name
	 */
	HI: RequiredParams<'name'>
}

export type NamespaceCommonTranslation = {
	notFound: {
		/**
		 * خ​ط​ا​ی​ ​4​0​4
		 */
		notFoundTitle: string
		/**
		 * ص​ف​ح​ه​ ​پ​ی​د​ا​ ​ن​ش​د​!
		 */
		pageNotFound: string
		/**
		 * ب​ی​ا​ ​د​و​ب​ا​ر​ه​ ​ا​ز​ ​ص​ف​ح​ه​ ​د​ا​ش​ب​و​ر​د​ ​د​ن​ب​ا​ل​ش​ ​ب​گ​ر​د​ی​م​!
		 */
		letsLook: string
		/**
		 * ب​ر​و​ ​ب​ه​ ​د​ا​ش​ب​و​ر​د
		 */
		goToDashboard: string
	}
	/**
	 * و​ر​و​د
	 */
	enter: string
	/**
	 * ن​ا​م​ ​ک​ا​ر​ب​ر​ی
	 */
	userName: string
	/**
	 * ر​م​ز​ ​ع​ب​و​ر
	 */
	password: string
	/**
	 * ا​ر​س​ا​ل​ ​م​ج​د​د​ ​پ​ی​ا​م​ک
	 */
	resendMessage: string
	/**
	 *  ​ا​ر​س​ا​ل​ ​ک​د​ ​ب​ا​ ​ت​م​ا​س​ ​ص​و​ت​ی​ 
	 */
	sendCodeWithVoiceCall: string
	/**
	 * ب​ا​ز​گ​ش​ت​ ​ب​ه​ ​م​ر​ح​ل​ه​‌​ی​ ​ق​ب​ل
	 */
	backToPrev: string
	/**
	 * ف​ی​ل​ت​ر
	 */
	filter: string
}

export type Namespaces =
	| 'common'

type DisallowNamespaces = {
	/**
	 * reserved for 'common'-namespace\
	 * you need to use the `./common/index.ts` file instead
	 */
	common?: "[typesafe-i18n] reserved for 'common'-namespace. You need to use the `./common/index.ts` file instead."
}

export type TranslationFunctions = {
	/**
	 * Hi {name}! Please leave a star if you like this project: https://github.com/ivanhofer/typesafe-i18n
	 */
	HI: (arg: { name: string }) => LocalizedString
	common: {
		notFound: {
			/**
			 * خطای 404
			 */
			notFoundTitle: () => LocalizedString
			/**
			 * صفحه پیدا نشد!
			 */
			pageNotFound: () => LocalizedString
			/**
			 * بیا دوباره از صفحه داشبورد دنبالش بگردیم!
			 */
			letsLook: () => LocalizedString
			/**
			 * برو به داشبورد
			 */
			goToDashboard: () => LocalizedString
		}
		/**
		 * ورود
		 */
		enter: () => LocalizedString
		/**
		 * نام کاربری
		 */
		userName: () => LocalizedString
		/**
		 * رمز عبور
		 */
		password: () => LocalizedString
		/**
		 * ارسال مجدد پیامک
		 */
		resendMessage: () => LocalizedString
		/**
		 *  ارسال کد با تماس صوتی 
		 */
		sendCodeWithVoiceCall: () => LocalizedString
		/**
		 * بازگشت به مرحله‌ی قبل
		 */
		backToPrev: () => LocalizedString
		/**
		 * فیلتر
		 */
		filter: () => LocalizedString
	}
}

export type Formatters = {}
