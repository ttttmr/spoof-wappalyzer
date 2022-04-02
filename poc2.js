// hook removeEventListener
let rel = removeEventListener;
removeEventListener = (name, func, opt) => {
  if (
    name === "message" &&
    func &&
    func.toString().includes("wappalyzer.technologies") !== -1 &&
    func.toString().includes("removeEventListener") !== -1 &&
    func.toString().includes("__UNDEFINED__") !== -1 &&
    func.toString().includes("postMessage") !== -1
  ) {
    poc();
    rel(name, func, opt);
  } else {
    rel(name, func, opt);
  }
};

const poc = () => {
  postMessage({
    wappalyzer: {
      js: [
        {
          name: "2B Advice",
          chain: "BBCookieControler",
          value: true,
        },
        {
          name: "33Across",
          chain: "Tynt",
          value: true,
        },
        {
          name: "4-Tell",
          chain: "_4TellBoost",
          value: true,
        },
        {
          name: "@sulu/web",
          chain: "web.startComponents",
          value: true,
        },
        {
          name: "A-Frame",
          chain: "AFRAME.version",
          value: true,
        },
        {
          name: "A8.net",
          chain: "A8salesCookieRepository",
          value: true,
        },
        {
          name: "A8.net",
          chain: "a8sales",
          value: true,
        },
        {
          name: "A8.net",
          chain: "map_A8",
          value: true,
        },
        {
          name: "AB Tasty",
          chain: "ABTasty",
          value: true,
        },
        {
          name: "AB Tasty",
          chain: "_abtasty",
          value: true,
        },
        {
          name: "AB Tasty",
          chain: "loadABTasty",
          value: true,
        },
        {
          name: "AD EBiS",
          chain: "ebis.c.pageurl",
          value: true,
        },
        {
          name: "ADFOX",
          chain: "AdFox_getCodeScript",
          value: true,
        },
        {
          name: "ADFOX",
          chain: "Site.adFoxParams",
          value: true,
        },
        {
          name: "ADFOX",
          chain: "adFoxParams",
          value: true,
        },
        {
          name: "ADFOX",
          chain: "adfoxAsyncParams",
          value: true,
        },
        {
          name: "ADFOX",
          chain: "adfoxBiddersMap",
          value: true,
        },
        {
          name: "AOS",
          chain: "AOS.init",
          value: true,
        },
        {
          name: "AOS",
          chain: "AOS.refresh",
          value: true,
        },
        {
          name: "AOS",
          chain: "AOS.refreshHard",
          value: true,
        },
        {
          name: "AT Internet Analyzer",
          chain: "ATInternet",
          value: true,
        },
        {
          name: "AT Internet Analyzer",
          chain: "xtsite",
          value: true,
        },
        {
          name: "AT Internet XiTi",
          chain: "xt_click",
          value: true,
        },
        {
          name: "AWIN",
          chain: "AWIN.Tracking",
          value: true,
        },
        {
          name: "AccessiBe",
          chain: "acsb",
          value: true,
        },
        {
          name: "AccessiBe",
          chain: "acsbJS",
          value: true,
        },
        {
          name: "Accessibility Toolbar Plugin",
          chain: "MicAccessTool.prototype.openCloseBoxKeyboard",
          value: true,
        },
        {
          name: "Accesso",
          chain: "accesso",
          value: true,
        },
        {
          name: "Ace",
          chain: "ace.EditSession",
          value: true,
        },
        {
          name: "Ace",
          chain: "ace.Editor",
          value: true,
        },
        {
          name: "Ace",
          chain: "ace.version",
          value: true,
        },
        {
          name: "Ackee",
          chain: "ackeeTracker",
          value: true,
        },
        {
          name: "Acquia Customer Data Platform",
          chain: "agiloneObject",
          value: true,
        },
        {
          name: "Acquia Personalization",
          chain: "AcquiaLift",
          value: true,
        },
        {
          name: "Acquia Personalization",
          chain: "_tcaq",
          value: true,
        },
        {
          name: "Act-On",
          chain: "ActOn",
          value: true,
        },
        {
          name: "Actito",
          chain: "_actGoal",
          value: true,
        },
        {
          name: "Actito",
          chain: "smartFocus",
          value: true,
        },
        {
          name: "ActiveCampaign",
          chain: "acEnableTracking",
          value: true,
        },
        {
          name: "Acuity Scheduling",
          chain: "ACUITY_MODAL_INIT",
          value: true,
        },
        {
          name: "AcuityAds",
          chain: "acuityAdsEventQueue",
          value: true,
        },
        {
          name: "AcuityAds",
          chain: "acuityAdsPixelKey",
          value: true,
        },
        {
          name: "AdBridg",
          chain: "AdBridg.cmd",
          value: true,
        },
        {
          name: "AdOcean",
          chain: "ado.master",
          value: true,
        },
        {
          name: "AdOcean",
          chain: "ado.placement",
          value: true,
        },
        {
          name: "AdOcean",
          chain: "ado.slave",
          value: true,
        },
        {
          name: "AdOpt",
          chain: "adoptApp.domain",
          value: true,
        },
        {
          name: "AdOpt",
          chain: "adopt_website_code",
          value: true,
        },
        {
          name: "AdRiver",
          chain: "AdriverCounter",
          value: true,
        },
        {
          name: "AdRiver",
          chain: "AdriverPrebid",
          value: true,
        },
        {
          name: "AdRiver",
          chain: "adfoxBiddersMap.adriver",
          value: true,
        },
        {
          name: "AdRiver",
          chain: "adriver",
          value: true,
        },
        {
          name: "AdRoll",
          chain: "adroll_adv_id",
          value: true,
        },
        {
          name: "AdRoll",
          chain: "adroll_pix_id",
          value: true,
        },
        {
          name: "AdRoll CMP System",
          chain: "__adroll_consent",
          value: true,
        },
        {
          name: "AdRoll CMP System",
          chain: "__adroll_consent_is_gdpr",
          value: true,
        },
        {
          name: "AdScale",
          chain: "_adscale",
          value: true,
        },
        {
          name: "AdScale",
          chain: "adscaleAddToCart",
          value: true,
        },
        {
          name: "AdScale",
          chain: "adscaleViewProduct",
          value: true,
        },
        {
          name: "AdThrive",
          chain: "adthrive",
          value: true,
        },
        {
          name: "AdThrive",
          chain: "adthriveVideosInjected",
          value: true,
        },
        {
          name: "Ada",
          chain: "__AdaEmbedConstructor",
          value: true,
        },
        {
          name: "Ada",
          chain: "adaEmbed",
          value: true,
        },
        {
          name: "AdaSiteCompliance",
          chain: "ADASTOOLBOXAPPSTATE",
          value: true,
        },
        {
          name: "AdaSiteCompliance",
          chain: "adascHelper",
          value: true,
        },
        {
          name: "Adabra",
          chain: "adabraPreview",
          value: true,
        },
        {
          name: "Adabra",
          chain: "adabra_version_panel",
          value: true,
        },
        {
          name: "Adabra",
          chain: "adabra_version_track",
          value: true,
        },
        {
          name: "Adalyser",
          chain: "adalyserModules",
          value: true,
        },
        {
          name: "Adcash",
          chain: "SuLoaded",
          value: true,
        },
        {
          name: "Adcash",
          chain: "SuUrl",
          value: true,
        },
        {
          name: "Adcash",
          chain: "ac_bgclick_URL",
          value: true,
        },
        {
          name: "Adcash",
          chain: "ct_nOpp",
          value: true,
        },
        {
          name: "Adcash",
          chain: "ct_nSuUrl",
          value: true,
        },
        {
          name: "Adcash",
          chain: "ct_siteunder",
          value: true,
        },
        {
          name: "Adcash",
          chain: "ct_tag",
          value: true,
        },
        {
          name: "AddThis",
          chain: "addthis",
          value: true,
        },
        {
          name: "AddToAny",
          chain: "a2apage_init",
          value: true,
        },
        {
          name: "Admiral",
          chain: "admiral",
          value: true,
        },
        {
          name: "Admitad",
          chain: "ADMITAD",
          value: true,
        },
        {
          name: "Admitad",
          chain: "admitad",
          value: true,
        },
        {
          name: "Admixer",
          chain: "admixerAds",
          value: true,
        },
        {
          name: "Admixer",
          chain: "admixerML",
          value: true,
        },
        {
          name: "Admo.tv",
          chain: "ADMO_TT",
          value: true,
        },
        {
          name: "Admo.tv",
          chain: "ADMO_config",
          value: true,
        },
        {
          name: "Adobe Analytics",
          chain: "s_c_il.0._c",
          value: true,
        },
        {
          name: "Adobe Analytics",
          chain: "s_c_il.0.constructor.name",
          value: true,
        },
        {
          name: "Adobe Analytics",
          chain: "s_c_il.1._c",
          value: true,
        },
        {
          name: "Adobe Analytics",
          chain: "s_c_il.1.constructor.name",
          value: true,
        },
        {
          name: "Adobe Analytics",
          chain: "s_c_il.2._c",
          value: true,
        },
        {
          name: "Adobe Analytics",
          chain: "s_c_il.2.constructor.name",
          value: true,
        },
        {
          name: "Adobe Analytics",
          chain: "s_c_il.3._c",
          value: true,
        },
        {
          name: "Adobe Analytics",
          chain: "s_c_il.3.constructor.name",
          value: true,
        },
        {
          name: "Adobe Analytics",
          chain: "s_c_il.4._c",
          value: true,
        },
        {
          name: "Adobe Analytics",
          chain: "s_c_il.4.constructor.name",
          value: true,
        },
        {
          name: "Adobe Analytics",
          chain: "s_c_il.5._c",
          value: true,
        },
        {
          name: "Adobe Analytics",
          chain: "s_c_il.5.constructor.name",
          value: true,
        },
        {
          name: "Adobe Client Data Layer",
          chain: "adobeDataLayer.version",
          value: true,
        },
        {
          name: "Adobe ColdFusion",
          chain: "_cfEmails",
          value: true,
        },
        {
          name: "Adobe DTM",
          chain: "_satellite.buildDate",
          value: true,
        },
        {
          name: "Adobe Experience Platform Identity Service",
          chain: "s_c_il.0._c",
          value: true,
        },
        {
          name: "Adobe Experience Platform Identity Service",
          chain: "s_c_il.1._c",
          value: true,
        },
        {
          name: "Adobe Experience Platform Identity Service",
          chain: "s_c_il.2._c",
          value: true,
        },
        {
          name: "Adobe Experience Platform Identity Service",
          chain: "s_c_il.3._c",
          value: true,
        },
        {
          name: "Adobe Experience Platform Identity Service",
          chain: "s_c_il.4._c",
          value: true,
        },
        {
          name: "Adobe Experience Platform Identity Service",
          chain: "s_c_il.5._c",
          value: true,
        },
        {
          name: "Adobe Experience Platform Launch",
          chain: "_satellite.buildInfo",
          value: true,
        },
        {
          name: "Adobe RoboHelp",
          chain: "gbWhLang",
          value: true,
        },
        {
          name: "Adobe RoboHelp",
          chain: "gbWhMsg",
          value: true,
        },
        {
          name: "Adobe RoboHelp",
          chain: "gbWhProxy",
          value: true,
        },
        {
          name: "Adobe RoboHelp",
          chain: "gbWhUtil",
          value: true,
        },
        {
          name: "Adobe RoboHelp",
          chain: "gbWhVer",
          value: true,
        },
        {
          name: "Adobe Target",
          chain: "adobe.target",
          value: true,
        },
        {
          name: "Adobe Target",
          chain: "adobe.target.VERSION",
          value: true,
        },
        {
          name: "Advally",
          chain: "advally",
          value: true,
        },
        {
          name: "Advert Stream",
          chain: "advst_is_above_the_fold",
          value: true,
        },
        {
          name: "Adyen",
          chain: "adyen.encrypt.version",
          value: true,
        },
        {
          name: "Aero Commerce",
          chain: "AeroEvents.on",
          value: true,
        },
        {
          name: "Affirm",
          chain: "_affirm_config",
          value: true,
        },
        {
          name: "Affirm",
          chain: "affirm.Rollbar",
          value: true,
        },
        {
          name: "AfterBuy",
          chain: "AfterbuyString",
          value: true,
        },
        {
          name: "Ahoy",
          chain: "ahoy",
          value: true,
        },
        {
          name: "Aimtell",
          chain: "_aimtellLoad",
          value: true,
        },
        {
          name: "Aimtell",
          chain: "_aimtellPushToken",
          value: true,
        },
        {
          name: "Aimtell",
          chain: "_aimtellWebhook",
          value: true,
        },
        {
          name: "Air360",
          chain: "Air360.SDK_Version",
          value: true,
        },
        {
          name: "Akamai Web Application Protector",
          chain: "AKSB",
          value: true,
        },
        {
          name: "Akamai mPulse",
          chain: "BOOMR_API_key",
          value: true,
        },
        {
          name: "Albacross",
          chain: "_nQsv",
          value: true,
        },
        {
          name: "AlertifyJS",
          chain: "alertify.defaults.autoReset",
          value: true,
        },
        {
          name: "Alexa Certified Site Metrics",
          chain: "_atrk_opts.domain",
          value: true,
        },
        {
          name: "Algolia",
          chain: "AlgoliaSearch",
          value: true,
        },
        {
          name: "Algolia",
          chain: "__algolia",
          value: true,
        },
        {
          name: "Algolia",
          chain: "algoliasearch.version",
          value: true,
        },
        {
          name: "Ali Reviews",
          chain: "alireviews_tags",
          value: true,
        },
        {
          name: "AlloyUI",
          chain: "AUI",
          value: true,
        },
        {
          name: "Alpine.js",
          chain: "Alpine.version",
          value: true,
        },
        {
          name: "Amazon Pay",
          chain: "AmazonPayments",
          value: true,
        },
        {
          name: "Amazon Pay",
          chain: "OffAmazonPayments",
          value: true,
        },
        {
          name: "Amazon Pay",
          chain: "enableAmazonPay",
          value: true,
        },
        {
          name: "Amazon Pay",
          chain: "onAmazonPaymentsReady",
          value: true,
        },
        {
          name: "Amazon Webstore",
          chain: "amzn",
          value: true,
        },
        {
          name: "Ambassador",
          chain: "_mbsy.integrations",
          value: true,
        },
        {
          name: "AmeriCommerce",
          chain: "AC.storeDomain",
          value: true,
        },
        {
          name: "Amplience",
          chain: "amplianceTemplates",
          value: true,
        },
        {
          name: "Amplitude",
          chain: "AMPLITUDE_KEY",
          value: true,
        },
        {
          name: "Analysys Ark",
          chain: "AnalysysAgent",
          value: true,
        },
        {
          name: "Angular",
          chain: "ng.coreTokens",
          value: true,
        },
        {
          name: "Angular",
          chain: "ng.probe",
          value: true,
        },
        {
          name: "Angular Material",
          chain: "ngMaterial",
          value: true,
        },
        {
          name: "AngularDart",
          chain: "ngTestabilityRegistries",
          value: true,
        },
        {
          name: "AngularJS",
          chain: "angular",
          value: true,
        },
        {
          name: "AngularJS",
          chain: "angular.version.full",
          value: true,
        },
        {
          name: "Ant Design",
          chain: "antd.version",
          value: true,
        },
        {
          name: "AntV G2",
          chain: "G2.Chart",
          value: true,
        },
        {
          name: "AntV G2",
          chain: "G2.VERSION",
          value: true,
        },
        {
          name: "AntV G6",
          chain: "g6.Graph",
          value: true,
        },
        {
          name: "AntV G6",
          chain: "g6.version",
          value: true,
        },
        {
          name: "AnyClip",
          chain: "anyclip",
          value: true,
        },
        {
          name: "Apache Wicket",
          chain: "Wicket",
          value: true,
        },
        {
          name: "Aplazame",
          chain: "aplazame",
          value: true,
        },
        {
          name: "Apollo",
          chain: "__APOLLO_CLIENT__",
          value: true,
        },
        {
          name: "Apollo",
          chain: "__APOLLO_CLIENT__.version",
          value: true,
        },
        {
          name: "ApostropheCMS",
          chain: "APOS_DIALOGS.dialogAttributes",
          value: true,
        },
        {
          name: "ApostropheCMS",
          chain: "apos.csrfCookieName",
          value: true,
        },
        {
          name: "AppDynamics",
          chain: "ADRUM.conf.agentVer",
          value: true,
        },
        {
          name: "AppNexus",
          chain: "appnexus",
          value: true,
        },
        {
          name: "AppNexus",
          chain: "appnexusVideo",
          value: true,
        },
        {
          name: "Appcues",
          chain: "Appcues",
          value: true,
        },
        {
          name: "Apple Business Chat",
          chain: "appleBusinessChat.version",
          value: true,
        },
        {
          name: "Apple Pay",
          chain: "ApplePay",
          value: true,
        },
        {
          name: "Apple Pay",
          chain: "braintree.applePay",
          value: true,
        },
        {
          name: "Apple Pay",
          chain: "checkout.enabledpayments.applepay",
          value: true,
        },
        {
          name: "Apple Pay",
          chain: "dw.applepay",
          value: true,
        },
        {
          name: "Apple Pay",
          chain: "enableApplePay",
          value: true,
        },
        {
          name: "Apple Sign-in",
          chain: "AppleID",
          value: true,
        },
        {
          name: "Appsflyer",
          chain: "AppsFlyerSdkObject",
          value: true,
        },
        {
          name: "Apptus",
          chain: "ApptusEsales",
          value: true,
        },
        {
          name: "Apptus",
          chain: "apptusConfig",
          value: true,
        },
        {
          name: "Apptus",
          chain: "apptusDebug",
          value: true,
        },
        {
          name: "Arc",
          chain: "arc.p2pClient",
          value: true,
        },
        {
          name: "Arc",
          chain: "arcWidgetJsonp",
          value: true,
        },
        {
          name: "Arc XP",
          chain: "Fusion.arcSite",
          value: true,
        },
        {
          name: "Artifactory",
          chain: "ArtifactoryUpdates",
          value: true,
        },
        {
          name: "ArvanCloud",
          chain: "ArvanCloud",
          value: true,
        },
        {
          name: "AsciiDoc",
          chain: "asciidoc",
          value: true,
        },
        {
          name: "Asciinema",
          chain: "asciinema",
          value: true,
        },
        {
          name: "Atlassian Bitbucket",
          chain: "bitbucket",
          value: true,
        },
        {
          name: "Atlassian Jira",
          chain: "jira.id",
          value: true,
        },
        {
          name: "Atome",
          chain: "atomeWidget",
          value: true,
        },
        {
          name: "Attentive",
          chain: "__attentive",
          value: true,
        },
        {
          name: "Attentive",
          chain: "__attentive_domain",
          value: true,
        },
        {
          name: "Attentive",
          chain: "attn_email_save",
          value: true,
        },
        {
          name: "Attraqt",
          chain: "_attraqt",
          value: true,
        },
        {
          name: "AudioEye",
          chain: "$ae.attrHooks",
          value: true,
        },
        {
          name: "AudioEye",
          chain: "window.AudioEye.version",
          value: true,
        },
        {
          name: "Aurelia",
          chain: "_aureliaConfigureModuleLoader",
          value: true,
        },
        {
          name: "Aurelia",
          chain: "localAurelia",
          value: true,
        },
        {
          name: "Auryc",
          chain: "aurycJsLibConfig.base.code_version",
          value: true,
        },
        {
          name: "Autopilot",
          chain: "Autopilot",
          value: true,
        },
        {
          name: "Autopilot",
          chain: "AutopilotAnywhere",
          value: true,
        },
        {
          name: "Avangate",
          chain: "AvaCart.version",
          value: true,
        },
        {
          name: "Avangate",
          chain: "__avng8_callbacks",
          value: true,
        },
        {
          name: "Avangate",
          chain: "avaSlugify",
          value: true,
        },
        {
          name: "Avis Verifies",
          chain: "avisVerifies",
          value: true,
        },
        {
          name: "Aweber",
          chain: "awt_analytics",
          value: true,
        },
        {
          name: "Awesomplete",
          chain: "awesomplete",
          value: true,
        },
        {
          name: "Axeptio",
          chain: "axeptioSDK",
          value: true,
        },
        {
          name: "Axeptio",
          chain: "axeptioSettings",
          value: true,
        },
        {
          name: "Axios",
          chain: "axios.get",
          value: true,
        },
        {
          name: "actionhero.js",
          chain: "actionheroClient",
          value: true,
        },
        {
          name: "amCharts",
          chain: "AmCharts",
          value: true,
        },
        {
          name: "amoCRM",
          chain: "AMOCRM",
          value: true,
        },
        {
          name: "amoCRM",
          chain: "AMO_PIXEL_CLIENT",
          value: true,
        },
        {
          name: "amoCRM",
          chain: "amoFormsWidget",
          value: true,
        },
        {
          name: "amoCRM",
          chain: "amoSocialButton",
          value: true,
        },
        {
          name: "anime.js",
          chain: "anime.version",
          value: true,
        },
        {
          name: "Babel",
          chain: "_babelPolyfill",
          value: true,
        },
        {
          name: "Bablic",
          chain: "bablic",
          value: true,
        },
        {
          name: "Backbone.js",
          chain: "Backbone",
          value: true,
        },
        {
          name: "Backbone.js",
          chain: "Backbone.VERSION",
          value: true,
        },
        {
          name: "Backdrop",
          chain: "Backdrop",
          value: true,
        },
        {
          name: "Baidu Maps",
          chain: "BMAP_API_VERSION",
          value: true,
        },
        {
          name: "Baidu Maps",
          chain: "bmap.version",
          value: true,
        },
        {
          name: "BambooHR",
          chain: "scrollToBambooHR",
          value: true,
        },
        {
          name: "Bambuser",
          chain: "BambuserLiveShopping",
          value: true,
        },
        {
          name: "Bambuser",
          chain: "_bambuser",
          value: true,
        },
        {
          name: "Base",
          chain: "Base.App.open_nav",
          value: true,
        },
        {
          name: "Bazaarvoice",
          chain: "BV.api",
          value: true,
        },
        {
          name: "Beans",
          chain: "Beans3",
          value: true,
        },
        {
          name: "Beeketing",
          chain: "beeketingAnalyticsParams",
          value: true,
        },
        {
          name: "Beeketing",
          chain: "beeketingSDKLoaded",
          value: true,
        },
        {
          name: "Bentobox",
          chain: "BentoAnalytics",
          value: true,
        },
        {
          name: "Beyable",
          chain: "BEYABLE",
          value: true,
        },
        {
          name: "Beyable",
          chain: "beYableDomain",
          value: true,
        },
        {
          name: "Beyable",
          chain: "beYableKey",
          value: true,
        },
        {
          name: "BigCommerce",
          chain: "bigcommerce_config",
          value: true,
        },
        {
          name: "BigCommerce",
          chain: "bigcommerce_i18n",
          value: true,
        },
        {
          name: "Birdeye",
          chain: "bfiframe",
          value: true,
        },
        {
          name: "Bitrix24",
          chain: "Bitrix24FormLoader",
          value: true,
        },
        {
          name: "Bitrix24",
          chain: "Bitrix24FormObject",
          value: true,
        },
        {
          name: "Bitrix24",
          chain: "b24Tracker",
          value: true,
        },
        {
          name: "BittAds",
          chain: "bitt",
          value: true,
        },
        {
          name: "Bizweb",
          chain: "Bizweb",
          value: true,
        },
        {
          name: "Blackbaud Luminate Online",
          chain: "BLACKBAUD",
          value: true,
        },
        {
          name: "Blackbaud Luminate Online",
          chain: "don_premium_map",
          value: true,
        },
        {
          name: "Blessing Skin",
          chain: "blessing.version",
          value: true,
        },
        {
          name: "Blitz",
          chain: "Blitz",
          value: true,
        },
        {
          name: "Blitz",
          chain: "blitzReplace",
          value: true,
        },
        {
          name: "Bloomreach Discovery",
          chain: "BrTrk.scriptVersion",
          value: true,
        },
        {
          name: "Bloomreach Discovery",
          chain: "br_data.acct_id",
          value: true,
        },
        {
          name: "Blue",
          chain: "blueProductId",
          value: true,
        },
        {
          name: "Blue",
          chain: "bluecpy_id",
          value: true,
        },
        {
          name: "Blue Triangle",
          chain: "_bttUtil.version",
          value: true,
        },
        {
          name: "BlueConic",
          chain: "BlueConicEngagement",
          value: true,
        },
        {
          name: "BlueConic",
          chain: "blueConicClient",
          value: true,
        },
        {
          name: "BlueConic",
          chain: "blueConicPreListeners",
          value: true,
        },
        {
          name: "BlueConic",
          chain: "loadValuesFromBlueConic",
          value: true,
        },
        {
          name: "Bluecore",
          chain: "_bluecoreTrack",
          value: true,
        },
        {
          name: "Bluecore",
          chain: "bluecore_action_trigger",
          value: true,
        },
        {
          name: "Bluecore",
          chain: "triggermail",
          value: true,
        },
        {
          name: "Bluecore",
          chain: "triggermail_email_address",
          value: true,
        },
        {
          name: "Blueknow",
          chain: "Blueknow",
          value: true,
        },
        {
          name: "Blueknow",
          chain: "BlueknowTracker",
          value: true,
        },
        {
          name: "Bokeh",
          chain: "Bokeh",
          value: true,
        },
        {
          name: "Bokeh",
          chain: "Bokeh.version",
          value: true,
        },
        {
          name: "Bokun",
          chain: "BokunWidgetEmbedder",
          value: true,
        },
        {
          name: "Bokun",
          chain: "__bokunWidgets",
          value: true,
        },
        {
          name: "Bokun",
          chain: "bokunBookingChannelUUID",
          value: true,
        },
        {
          name: "Bokun",
          chain: "bokunSessionId",
          value: true,
        },
        {
          name: "Bolt Payments",
          chain: "BoltCheckout",
          value: true,
        },
        {
          name: "Bolt Payments",
          chain: "BoltPopup",
          value: true,
        },
        {
          name: "Bolt Payments",
          chain: "BoltTrack",
          value: true,
        },
        {
          name: "Bolt Payments",
          chain: "bolt_callbacks",
          value: true,
        },
        {
          name: "Bookero",
          chain: "bookero_config",
          value: true,
        },
        {
          name: "Bookingkit",
          chain: "BookingKitApp",
          value: true,
        },
        {
          name: "Booksy",
          chain: "booksy",
          value: true,
        },
        {
          name: "Boomerang",
          chain: "BOOMR",
          value: true,
        },
        {
          name: "Boomerang",
          chain: "BOOMR_lstart",
          value: true,
        },
        {
          name: "Boomerang",
          chain: "BOOMR_mq",
          value: true,
        },
        {
          name: "Bootstrap",
          chain: "bootstrap.Alert.VERSION",
          value: true,
        },
        {
          name: "Bootstrap",
          chain: "jQuery.fn.tooltip.Constructor.VERSION",
          value: true,
        },
        {
          name: "Booxi",
          chain: "booxi",
          value: true,
        },
        {
          name: "Booxi",
          chain: "booxiController",
          value: true,
        },
        {
          name: "Booxi",
          chain: "bxe_core",
          value: true,
        },
        {
          name: "Borderfree",
          chain: "bfx._apiKey",
          value: true,
        },
        {
          name: "Borderfree",
          chain: "bfx._brand",
          value: true,
        },
        {
          name: "BowNow",
          chain: "_bownow_ts",
          value: true,
        },
        {
          name: "BrainSINS",
          chain: "BrainSINS",
          value: true,
        },
        {
          name: "BrainSINS",
          chain: "BrainSINSRecommender",
          value: true,
        },
        {
          name: "BrainSINS",
          chain: "brainsins_token",
          value: true,
        },
        {
          name: "BrainSINS",
          chain: "launchBrainSINS",
          value: true,
        },
        {
          name: "Braintree",
          chain: "Braintree",
          value: true,
        },
        {
          name: "Braintree",
          chain: "Braintree.version",
          value: true,
        },
        {
          name: "Branch",
          chain: "branch.setBranchViewData",
          value: true,
        },
        {
          name: "Branch",
          chain: "branch_callback__0",
          value: true,
        },
        {
          name: "Brandfolder",
          chain: "Brandfolder.account",
          value: true,
        },
        {
          name: "Braze",
          chain: "appboy",
          value: true,
        },
        {
          name: "Braze",
          chain: "appboyQueue",
          value: true,
        },
        {
          name: "Bread",
          chain: "BreadCalc",
          value: true,
        },
        {
          name: "Bread",
          chain: "BreadError",
          value: true,
        },
        {
          name: "Bread",
          chain: "BreadLoaded",
          value: true,
        },
        {
          name: "Bread",
          chain: "BreadShopify",
          value: true,
        },
        {
          name: "Bread",
          chain: "bread.appHost",
          value: true,
        },
        {
          name: "Breinify",
          chain: "Breinify.version",
          value: true,
        },
        {
          name: "BrightEdge",
          chain: "BEJSSDK.CLIENT_VERSION",
          value: true,
        },
        {
          name: "BrightEdge",
          chain: "_bright3.VERSION",
          value: true,
        },
        {
          name: "BrightEdge",
          chain: "be_sdk_options",
          value: true,
        },
        {
          name: "BrightInfo",
          chain: "_BI_",
          value: true,
        },
        {
          name: "BrightInfo",
          chain: "_biq",
          value: true,
        },
        {
          name: "BrightInfo",
          chain: "biJsUrl",
          value: true,
        },
        {
          name: "Broadstreet",
          chain: "broadstreet",
          value: true,
        },
        {
          name: "Bronto",
          chain: "BrontoShopify",
          value: true,
        },
        {
          name: "Bronto",
          chain: "bronto.versions.sca",
          value: true,
        },
        {
          name: "Bronto",
          chain: "brontoCookieConsent",
          value: true,
        },
        {
          name: "Browser-Update.org",
          chain: "$bu_.version",
          value: true,
        },
        {
          name: "Browser-Update.org",
          chain: "$bu_getBrowser",
          value: true,
        },
        {
          name: "Bsale",
          chain: "Bsale.version",
          value: true,
        },
        {
          name: "Bubble",
          chain: "_bubble_page_load_data",
          value: true,
        },
        {
          name: "Bubble",
          chain: "bubble_environment",
          value: true,
        },
        {
          name: "Bubble",
          chain: "bubble_hostname_modifier",
          value: true,
        },
        {
          name: "Bubble",
          chain: "bubble_version",
          value: true,
        },
        {
          name: "BugHerd",
          chain: "BugHerdConfig",
          value: true,
        },
        {
          name: "BugSnag",
          chain: "Bugsnag",
          value: true,
        },
        {
          name: "BugSnag",
          chain: "bugsnag",
          value: true,
        },
        {
          name: "BugSnag",
          chain: "bugsnagClient",
          value: true,
        },
        {
          name: "Bugzilla",
          chain: "BUGZILLA",
          value: true,
        },
        {
          name: "BuySellAds",
          chain: "_bsa",
          value: true,
        },
        {
          name: "BuySellAds",
          chain: "_bsaPRO",
          value: true,
        },
        {
          name: "BuySellAds",
          chain: "_bsap",
          value: true,
        },
        {
          name: "BuySellAds",
          chain: "_bsap_serving_callback",
          value: true,
        },
        {
          name: "Buyapowa",
          chain: "Buyapowa.CanaryCheck",
          value: true,
        },
        {
          name: "BySide",
          chain: "BySide",
          value: true,
        },
        {
          name: "BySide",
          chain: "bysideWebcare_banner",
          value: true,
        },
        {
          name: "Bynder",
          chain: "Bynder.cloudfront",
          value: true,
        },
        {
          name: "basket.js",
          chain: "basket.isValidItem",
          value: true,
        },
        {
          name: "CKEditor",
          chain: "CKEDITOR",
          value: true,
        },
        {
          name: "CKEditor",
          chain: "CKEDITOR.version",
          value: true,
        },
        {
          name: "CKEditor",
          chain: "CKEDITOR_BASEPATH",
          value: true,
        },
        {
          name: "CNZZ",
          chain: "cnzz_protocol",
          value: true,
        },
        {
          name: "CS Cart",
          chain: "fn_buy_together_apply_discount",
          value: true,
        },
        {
          name: "CS Cart",
          chain: "fn_calculate_total_shipping",
          value: true,
        },
        {
          name: "CS Cart",
          chain: "fn_compare_strings",
          value: true,
        },
        {
          name: "Caast.tv",
          chain: "caast.open",
          value: true,
        },
        {
          name: "Caast.tv",
          chain: "caastInstance",
          value: true,
        },
        {
          name: "Cafe24",
          chain: "EC_GLOBAL_DATETIME",
          value: true,
        },
        {
          name: "Cafe24",
          chain: "EC_GLOBAL_INFO",
          value: true,
        },
        {
          name: "Cafe24",
          chain: "EC_ROOT_DOMAIN",
          value: true,
        },
        {
          name: "CalendarHero",
          chain: "ZOOMAI.VARS",
          value: true,
        },
        {
          name: "Calendly",
          chain: "Calendly",
          value: true,
        },
        {
          name: "CallRail",
          chain: "CallTrk",
          value: true,
        },
        {
          name: "CallRail",
          chain: "CallTrkSwap",
          value: true,
        },
        {
          name: "CallRail",
          chain: "crwpVer",
          value: true,
        },
        {
          name: "Callbell",
          chain: "Callbell",
          value: true,
        },
        {
          name: "Callbell",
          chain: "callbellSettings",
          value: true,
        },
        {
          name: "Captch Me",
          chain: "Captchme",
          value: true,
        },
        {
          name: "Carbon Ads",
          chain: "_carbonads",
          value: true,
        },
        {
          name: "Carbon Ads",
          chain: "_carbonads_go",
          value: true,
        },
        {
          name: "Cargo",
          chain: "Cargo.Config",
          value: true,
        },
        {
          name: "Cargo",
          chain: "__cargo_js_ver__",
          value: true,
        },
        {
          name: "Cart Functionality",
          chain: "google_tag_params.ecomm_pagetype",
          value: true,
        },
        {
          name: "CartStack",
          chain: "_cartstack",
          value: true,
        },
        {
          name: "Catberry.js",
          chain: "catberry",
          value: true,
        },
        {
          name: "Catberry.js",
          chain: "catberry.version",
          value: true,
        },
        {
          name: "Chameleon",
          chain: "chmln.Snippet.urls.fast",
          value: true,
        },
        {
          name: "Chameleon",
          chain: "chmlnData.organizationAttributes",
          value: true,
        },
        {
          name: "Chaport",
          chain: "chaport",
          value: true,
        },
        {
          name: "Chaport",
          chain: "chaportConfig",
          value: true,
        },
        {
          name: "ChargeAfter",
          chain: "ChargeAfter",
          value: true,
        },
        {
          name: "Chargebee",
          chain: "Chargebee",
          value: true,
        },
        {
          name: "Chargebee",
          chain: "chargebeeTrackFunc",
          value: true,
        },
        {
          name: "Chart.js",
          chain: "Chart",
          value: true,
        },
        {
          name: "Chart.js",
          chain: "Chart.defaults.doughnut",
          value: true,
        },
        {
          name: "Chart.js",
          chain: "chart.ctx.bezierCurveTo",
          value: true,
        },
        {
          name: "Chartbeat",
          chain: "_sf_async_config",
          value: true,
        },
        {
          name: "Chartbeat",
          chain: "_sf_endpt",
          value: true,
        },
        {
          name: "Chatra",
          chain: "ChatraID",
          value: true,
        },
        {
          name: "Chatra",
          chain: "ChatraSetup",
          value: true,
        },
        {
          name: "Chatwoot",
          chain: "$chatwoot",
          value: true,
        },
        {
          name: "Chatwoot",
          chain: "chatwootSDK",
          value: true,
        },
        {
          name: "Chekkit",
          chain: "chekkitSettings.toggleChat",
          value: true,
        },
        {
          name: "Chevereto",
          chain: "CHEVERETO.version",
          value: true,
        },
        {
          name: "Chili Piper",
          chain: "ChiliPiper",
          value: true,
        },
        {
          name: "Chitika",
          chain: "ch_client",
          value: true,
        },
        {
          name: "Chitika",
          chain: "ch_color_site_link",
          value: true,
        },
        {
          name: "Chorus",
          chain: "Chorus.AddScript",
          value: true,
        },
        {
          name: "Chorus",
          chain: "ChorusAds.beforeAdsRequested",
          value: true,
        },
        {
          name: "Chorus",
          chain: "ChorusCampaigns.recordClickUrl",
          value: true,
        },
        {
          name: "ChurnZero",
          chain: "ChurnZero",
          value: true,
        },
        {
          name: "ChurnZero",
          chain: "ChurnZero.version",
          value: true,
        },
        {
          name: "Clarity",
          chain: "ClarityIcons",
          value: true,
        },
        {
          name: "Classy",
          chain: "Classy",
          value: true,
        },
        {
          name: "ClearSale",
          chain: "csdm",
          value: true,
        },
        {
          name: "Clerk.io",
          chain: "__clerk_cb_0",
          value: true,
        },
        {
          name: "Clerk.io",
          chain: "__clerk_q",
          value: true,
        },
        {
          name: "CleverTap",
          chain: "clevertap",
          value: true,
        },
        {
          name: "Cleverbridge",
          chain: "cbCartProductSelection",
          value: true,
        },
        {
          name: "ClickDimensions",
          chain: "clickdimensions",
          value: true,
        },
        {
          name: "ClickFunnels",
          chain: "CFAppDomain",
          value: true,
        },
        {
          name: "ClickFunnels",
          chain: "CFSurveyParticipantID",
          value: true,
        },
        {
          name: "ClickHeat",
          chain: "clickHeatServer",
          value: true,
        },
        {
          name: "ClickTale",
          chain: "ClickTale",
          value: true,
        },
        {
          name: "ClickTale",
          chain: "ClickTaleEvent",
          value: true,
        },
        {
          name: "ClickTale",
          chain: "ClickTaleGlobal",
          value: true,
        },
        {
          name: "ClickTale",
          chain: "clickTaleStartEventSignal",
          value: true,
        },
        {
          name: "Clickbank",
          chain: "cbtb",
          value: true,
        },
        {
          name: "Clicky",
          chain: "clicky",
          value: true,
        },
        {
          name: "ClientJS",
          chain: "ClientJS",
          value: true,
        },
        {
          name: "Cloudflare",
          chain: "CloudFlare",
          value: true,
        },
        {
          name: "Cloudflare Browser Insights",
          chain: "__cfBeaconCustomTag",
          value: true,
        },
        {
          name: "Cloudimage",
          chain: "ciResponsive.config.domain",
          value: true,
        },
        {
          name: "Cloudinary",
          chain: "_cloudinary",
          value: true,
        },
        {
          name: "Cloverly",
          chain: "removeCloverly",
          value: true,
        },
        {
          name: "CoRover",
          chain: "CoRover_tag",
          value: true,
        },
        {
          name: "CodeMirror",
          chain: "CodeMirror",
          value: true,
        },
        {
          name: "CodeMirror",
          chain: "CodeMirror.version",
          value: true,
        },
        {
          name: "CoinHive",
          chain: "CoinHive",
          value: true,
        },
        {
          name: "Coinimp",
          chain: "Client.Anonymous",
          value: true,
        },
        {
          name: "ColorMeShop",
          chain: "Colorme",
          value: true,
        },
        {
          name: "Comm100",
          chain: "Comm100API",
          value: true,
        },
        {
          name: "Comm100",
          chain: "comm100_chatButton",
          value: true,
        },
        {
          name: "Comm100",
          chain: "comm100_livechat_open_link",
          value: true,
        },
        {
          name: "Commanders Act TagCommander",
          chain: "tc_vars",
          value: true,
        },
        {
          name: "Commerce.js",
          chain: "CommercejsSpace",
          value: true,
        },
        {
          name: "Concrete CMS",
          chain: "CCM_IMAGE_PATH",
          value: true,
        },
        {
          name: "Concrete CMS",
          chain: "Concrete",
          value: true,
        },
        {
          name: "Constant Contact",
          chain: "_ctct_m",
          value: true,
        },
        {
          name: "Constant Contact",
          chain: "ctctOnLoadCallback",
          value: true,
        },
        {
          name: "ContentSquare",
          chain: "CS_CONF.trackerDomain",
          value: true,
        },
        {
          name: "Contently",
          chain: "_contently.siteId",
          value: true,
        },
        {
          name: "Contlo",
          chain: "CONTLO_ENV",
          value: true,
        },
        {
          name: "Conversant Consent Tool",
          chain: "conversant",
          value: true,
        },
        {
          name: "Convert",
          chain: "convert",
          value: true,
        },
        {
          name: "Convert",
          chain: "convertData",
          value: true,
        },
        {
          name: "Convert",
          chain: "convert_temp",
          value: true,
        },
        {
          name: "ConvertFlow",
          chain: "convertflow",
          value: true,
        },
        {
          name: "Cookie Information",
          chain: "CookieInformation.config.cdnUrl",
          value: true,
        },
        {
          name: "CookieFirst",
          chain: "cookiefirst_show_settings",
          value: true,
        },
        {
          name: "CookieYes",
          chain: "cookieYes",
          value: true,
        },
        {
          name: "Cooladata",
          chain: "cooladata",
          value: true,
        },
        {
          name: "Corebine",
          chain: "corebine",
          value: true,
        },
        {
          name: "Correos Ecommerce",
          chain: "Comandia",
          value: true,
        },
        {
          name: "Countly",
          chain: "Countly",
          value: true,
        },
        {
          name: "Coveo",
          chain: "Coveo",
          value: true,
        },
        {
          name: "Cratejoy",
          chain: "statjoyServer",
          value: true,
        },
        {
          name: "Crazy Egg",
          chain: "CE2",
          value: true,
        },
        {
          name: "Crisp Live Chat",
          chain: "$crisp",
          value: true,
        },
        {
          name: "Crisp Live Chat",
          chain: "CRISP_WEBSITE_ID",
          value: true,
        },
        {
          name: "Criteo",
          chain: "Criteo",
          value: true,
        },
        {
          name: "Criteo",
          chain: "criteo_pubtag",
          value: true,
        },
        {
          name: "Criteo",
          chain: "criteo_q",
          value: true,
        },
        {
          name: "Crobox",
          chain: "crobox",
          value: true,
        },
        {
          name: "Cross Pixel",
          chain: "cp_C4w1ldN2d9PmVrkN",
          value: true,
        },
        {
          name: "CrownPeak",
          chain: "CrownPeakAutocomplete",
          value: true,
        },
        {
          name: "CrownPeak",
          chain: "CrownPeakSearch",
          value: true,
        },
        {
          name: "Crypto-Loot",
          chain: "CRLT.CONFIG.ASMJS_NAME",
          value: true,
        },
        {
          name: "Crypto-Loot",
          chain: "CryptoLoot",
          value: true,
        },
        {
          name: "Cufon",
          chain: "Cufon",
          value: true,
        },
        {
          name: "Customily",
          chain: "customily.sticky",
          value: true,
        },
        {
          name: "Czater",
          chain: "$czater",
          value: true,
        },
        {
          name: "Czater",
          chain: "$czaterMethods",
          value: true,
        },
        {
          name: "comScore",
          chain: "COMSCORE",
          value: true,
        },
        {
          name: "comScore",
          chain: "_COMSCORE",
          value: true,
        },
        {
          name: "core-js",
          chain: "__core-js_shared__",
          value: true,
        },
        {
          name: "core-js",
          chain: "__core-js_shared__.versions.0.version",
          value: true,
        },
        {
          name: "core-js",
          chain: "_babelPolyfill",
          value: true,
        },
        {
          name: "core-js",
          chain: "core",
          value: true,
        },
        {
          name: "core-js",
          chain: "core.version",
          value: true,
        },
        {
          name: "crypto-js",
          chain: "CryptoJS.Rabbit",
          value: true,
        },
        {
          name: "crypto-js",
          chain: "CryptoJS.algo",
          value: true,
        },
        {
          name: "D3",
          chain: "d3.version",
          value: true,
        },
        {
          name: "DERAK.CLOUD",
          chain: "derakCloud.init",
          value: true,
        },
        {
          name: "DNN",
          chain: "DotNetNuke",
          value: true,
        },
        {
          name: "DNN",
          chain: "dnn.apiversion",
          value: true,
        },
        {
          name: "DPlayer",
          chain: "DPlayer",
          value: true,
        },
        {
          name: "DPlayer",
          chain: "DPlayer.version",
          value: true,
        },
        {
          name: "Daily Deals",
          chain: "ddAddToCheckout",
          value: true,
        },
        {
          name: "Daily Deals",
          chain: "ddAddToOrder",
          value: true,
        },
        {
          name: "DailyKarma",
          chain: "dkWidgetInit",
          value: true,
        },
        {
          name: "DailyKarma",
          chain: "dk_widget",
          value: true,
        },
        {
          name: "Dart",
          chain: "___dart__$dart_dartObject_ZxYxX_0_",
          value: true,
        },
        {
          name: "Dart",
          chain: "___dart_dispatch_record_ZxYxX_0_",
          value: true,
        },
        {
          name: "DataLife Engine",
          chain: "dle_root",
          value: true,
        },
        {
          name: "DataTables",
          chain: "$.fn.dataTable.version",
          value: true,
        },
        {
          name: "DataTables",
          chain: "jQuery.fn.dataTable.version",
          value: true,
        },
        {
          name: "Datadog",
          chain: "DD_LOGS",
          value: true,
        },
        {
          name: "Datadog",
          chain: "DD_RUM",
          value: true,
        },
        {
          name: "Day.js",
          chain: "dayjs",
          value: true,
        },
        {
          name: "Decibel",
          chain: "decibelInsight",
          value: true,
        },
        {
          name: "Decibel",
          chain: "decibelInsightLayer",
          value: true,
        },
        {
          name: "DedeCMS",
          chain: "DedeContainer",
          value: true,
        },
        {
          name: "Demandbase",
          chain: "Demandbase",
          value: true,
        },
        {
          name: "Demandbase",
          chain: "Demandbase.version",
          value: true,
        },
        {
          name: "Digistore24",
          chain: "DIGISTORE_LINK_ID_KEY",
          value: true,
        },
        {
          name: "Digistore24",
          chain: "DIGISTORE_VENDORKEY",
          value: true,
        },
        {
          name: "Digistore24",
          chain: "getTheSourceForDigistoreLinks",
          value: true,
        },
        {
          name: "DigitalRiver",
          chain: "DigitalRiver",
          value: true,
        },
        {
          name: "Discourse",
          chain: "Discourse",
          value: true,
        },
        {
          name: "Discuz! X",
          chain: "DISCUZCODE",
          value: true,
        },
        {
          name: "Discuz! X",
          chain: "discuzVersion",
          value: true,
        },
        {
          name: "Discuz! X",
          chain: "discuz_uid",
          value: true,
        },
        {
          name: "Disqus",
          chain: "DISQUS",
          value: true,
        },
        {
          name: "Disqus",
          chain: "disqus_shortname",
          value: true,
        },
        {
          name: "Disqus",
          chain: "disqus_url",
          value: true,
        },
        {
          name: "Dito",
          chain: "dito.AppSettings",
          value: true,
        },
        {
          name: "DivideBuy",
          chain: "display_dividebuy_modal",
          value: true,
        },
        {
          name: "Django",
          chain: "__admin_media_prefix__",
          value: true,
        },
        {
          name: "Django",
          chain: "django",
          value: true,
        },
        {
          name: "Docusaurus",
          chain: "search.indexName",
          value: true,
        },
        {
          name: "Dojo",
          chain: "dojo",
          value: true,
        },
        {
          name: "Dojo",
          chain: "dojo.version.major",
          value: true,
        },
        {
          name: "Dokan",
          chain: "dokan",
          value: true,
        },
        {
          name: "DokuWiki",
          chain: "DOKU_TPL",
          value: true,
        },
        {
          name: "DokuWiki",
          chain: "doku_edit_text_content",
          value: true,
        },
        {
          name: "Doofinder",
          chain: "doofinder.classic.version",
          value: true,
        },
        {
          name: "Dotdigital",
          chain: "dmPt",
          value: true,
        },
        {
          name: "Dotdigital",
          chain: "dm_insight_id",
          value: true,
        },
        {
          name: "Dotdigital",
          chain: "dmtrackingobjectname",
          value: true,
        },
        {
          name: "DreamWeaver",
          chain: "MM_preloadImages",
          value: true,
        },
        {
          name: "DreamWeaver",
          chain: "MM_showHideLayers",
          value: true,
        },
        {
          name: "DreamWeaver",
          chain: "MM_showMenu",
          value: true,
        },
        {
          name: "Dreamdata",
          chain: "BizTrackingA",
          value: true,
        },
        {
          name: "Dreamdata",
          chain: "Bizible",
          value: true,
        },
        {
          name: "Drift",
          chain: "drift",
          value: true,
        },
        {
          name: "Drift",
          chain: "driftt",
          value: true,
        },
        {
          name: "Drupal",
          chain: "Drupal",
          value: true,
        },
        {
          name: "Duda",
          chain: "SystemID",
          value: true,
        },
        {
          name: "Duda",
          chain: "d_version",
          value: true,
        },
        {
          name: "Dynamic Yield",
          chain: "DY.AdDetection",
          value: true,
        },
        {
          name: "Dynamic Yield",
          chain: "DYExps.sectionConfig",
          value: true,
        },
        {
          name: "Dynamic Yield",
          chain: "_dy_memStore",
          value: true,
        },
        {
          name: "Dynatrace",
          chain: "dtrum",
          value: true,
        },
        {
          name: "db-ip",
          chain: "ENV.dbip",
          value: true,
        },
        {
          name: "decimal.js",
          chain: "Decimal.ROUND_HALF_FLOOR",
          value: true,
        },
        {
          name: "deepMiner",
          chain: "deepMiner",
          value: true,
        },
        {
          name: "EKM",
          chain: "_ekmpinpoint",
          value: true,
        },
        {
          name: "EPrints",
          chain: "EPJS_menu_template",
          value: true,
        },
        {
          name: "EPrints",
          chain: "EPrints",
          value: true,
        },
        {
          name: "EX.CO",
          chain: "__EXCO",
          value: true,
        },
        {
          name: "EX.CO",
          chain: "__EXCO_INTEGRATION_TYPE",
          value: true,
        },
        {
          name: "EX.CO",
          chain: "excoPixelUrl",
          value: true,
        },
        {
          name: "EasyStore",
          chain: "EasyStore",
          value: true,
        },
        {
          name: "Ecwid",
          chain: "Ecwid",
          value: true,
        },
        {
          name: "Ecwid",
          chain: "EcwidCart",
          value: true,
        },
        {
          name: "Editor.js",
          chain: "EditorJS",
          value: true,
        },
        {
          name: "Elastic APM",
          chain: "elasticApm",
          value: true,
        },
        {
          name: "Elementor",
          chain: "elementorFrontend.getElements",
          value: true,
        },
        {
          name: "Elevar",
          chain: "ElevarGtmSuite",
          value: true,
        },
        {
          name: "Elevar",
          chain: "elevar_gtm_errors",
          value: true,
        },
        {
          name: "Elevar",
          chain: "webpackChunkelevar_gtm_suite_scripts",
          value: true,
        },
        {
          name: "Elm",
          chain: "Elm.Main.embed",
          value: true,
        },
        {
          name: "Elm",
          chain: "Elm.Main.init",
          value: true,
        },
        {
          name: "Eloqua",
          chain: "_elq",
          value: true,
        },
        {
          name: "Eloqua",
          chain: "_elqQ",
          value: true,
        },
        {
          name: "Eloqua",
          chain: "eloqContactData",
          value: true,
        },
        {
          name: "Eloqua",
          chain: "eloquaActionSettings",
          value: true,
        },
        {
          name: "Eloqua",
          chain: "elqCookieValue",
          value: true,
        },
        {
          name: "Eloqua",
          chain: "elqCurESite",
          value: true,
        },
        {
          name: "Eloqua",
          chain: "elqLoad",
          value: true,
        },
        {
          name: "Eloqua",
          chain: "elqSiteID",
          value: true,
        },
        {
          name: "Eloqua",
          chain: "elq_global",
          value: true,
        },
        {
          name: "Emarsys",
          chain: "Scarab",
          value: true,
        },
        {
          name: "Emarsys",
          chain: "ScarabQueue",
          value: true,
        },
        {
          name: "EmbedSocial",
          chain: "EMBEDSOCIALHASHTAG",
          value: true,
        },
        {
          name: "EmbedSocial",
          chain: "EmbedSocialIframeLightbox",
          value: true,
        },
        {
          name: "Embedly",
          chain: "embedly",
          value: true,
        },
        {
          name: "Ember.js",
          chain: "Ember",
          value: true,
        },
        {
          name: "Ember.js",
          chain: "Ember.VERSION",
          value: true,
        },
        {
          name: "Ember.js",
          chain: "EmberENV",
          value: true,
        },
        {
          name: "Enable",
          chain: "enable_toolbar.is_premium",
          value: true,
        },
        {
          name: "Enjin CMS",
          chain: "Enjin_Core_Storage_Cache",
          value: true,
        },
        {
          name: "Enjin CMS",
          chain: "Enjin_UI",
          value: true,
        },
        {
          name: "Envybox",
          chain: "EnvyWidget",
          value: true,
        },
        {
          name: "Enyo",
          chain: "enyo",
          value: true,
        },
        {
          name: "Epom",
          chain: "epomCustomParams",
          value: true,
        },
        {
          name: "Errorception",
          chain: "_errs",
          value: true,
        },
        {
          name: "Etherpad",
          chain: "padeditbar",
          value: true,
        },
        {
          name: "Etherpad",
          chain: "padimpexp",
          value: true,
        },
        {
          name: "Etix",
          chain: "Etix.javaContext",
          value: true,
        },
        {
          name: "Etracker",
          chain: "_etracker",
          value: true,
        },
        {
          name: "Evidon",
          chain: "EB.EvidonConsent",
          value: true,
        },
        {
          name: "Evidon",
          chain: "evidon",
          value: true,
        },
        {
          name: "Exhibit",
          chain: "Exhibit",
          value: true,
        },
        {
          name: "Exhibit",
          chain: "Exhibit.version",
          value: true,
        },
        {
          name: "ExitIntel",
          chain: "exitintel.VERSION",
          value: true,
        },
        {
          name: "ExitIntel",
          chain: "exitintelAccount",
          value: true,
        },
        {
          name: "ExitIntel",
          chain: "exitintelConfig",
          value: true,
        },
        {
          name: "ExpertRec",
          chain: "_er_config",
          value: true,
        },
        {
          name: "Exponea",
          chain: "exponea.version",
          value: true,
        },
        {
          name: "ExtJS",
          chain: "Ext",
          value: true,
        },
        {
          name: "ExtJS",
          chain: "Ext.version",
          value: true,
        },
        {
          name: "ExtJS",
          chain: "Ext.versions.extjs.version",
          value: true,
        },
        {
          name: "Extole",
          chain: "extole.VERSION",
          value: true,
        },
        {
          name: "Ezoic",
          chain: "EzoicA",
          value: true,
        },
        {
          name: "Ezoic",
          chain: "EzoicBanger",
          value: true,
        },
        {
          name: "Ezoic",
          chain: "ezoicTestActive",
          value: true,
        },
        {
          name: "e-goi",
          chain: "Egoimmerce",
          value: true,
        },
        {
          name: "e-goi",
          chain: "_egoiaq",
          value: true,
        },
        {
          name: "eClass",
          chain: "fe_eclass",
          value: true,
        },
        {
          name: "eClass",
          chain: "fe_eclass_guest",
          value: true,
        },
        {
          name: "eKomi",
          chain: "ekomiWidgetMain",
          value: true,
        },
        {
          name: "ePages",
          chain: "epages",
          value: true,
        },
        {
          name: "eSyndiCat",
          chain: "esyndicat",
          value: true,
        },
        {
          name: "ef.js",
          chain: "ef.version",
          value: true,
        },
        {
          name: "ef.js",
          chain: "efCore",
          value: true,
        },
        {
          name: "emBlue",
          chain: "emblueOnSiteApp",
          value: true,
        },
        {
          name: "etika",
          chain: "EtikaProductJsHelper",
          value: true,
        },
        {
          name: "etika",
          chain: "etikaBannerInject",
          value: true,
        },
        {
          name: "etika",
          chain: "etikaGlobal",
          value: true,
        },
        {
          name: "Facebook Chat Plugin",
          chain: "facebookChatSettings",
          value: true,
        },
        {
          name: "Facebook Login",
          chain: "FB.getLoginStatus",
          value: true,
        },
        {
          name: "Facebook Pixel",
          chain: "_fbq",
          value: true,
        },
        {
          name: "FancyBox",
          chain: "$.fancybox.version",
          value: true,
        },
        {
          name: "FancyBox",
          chain: "Fancybox.version",
          value: true,
        },
        {
          name: "FancyBox",
          chain: "jQuery.fancybox.version",
          value: true,
        },
        {
          name: "Fanplayr",
          chain: "fanplayr.platform.version",
          value: true,
        },
        {
          name: "Fast Checkout",
          chain: "FAST_VERSION",
          value: true,
        },
        {
          name: "Fast Checkout",
          chain: "Fast.Events",
          value: true,
        },
        {
          name: "Fasterize",
          chain: "fstrz",
          value: true,
        },
        {
          name: "Fathom",
          chain: "fathom.blockTrackingForMe",
          value: true,
        },
        {
          name: "Fbits",
          chain: "fbits",
          value: true,
        },
        {
          name: "Feefo",
          chain: "feefoTracker",
          value: true,
        },
        {
          name: "Feefo",
          chain: "feefoWidget",
          value: true,
        },
        {
          name: "Fera",
          chain: "fera",
          value: true,
        },
        {
          name: "FilePond",
          chain: "FilePond",
          value: true,
        },
        {
          name: "FilePond",
          chain: "FilePond.create",
          value: true,
        },
        {
          name: "FilePond",
          chain: "FilePond.setOptions",
          value: true,
        },
        {
          name: "Findify",
          chain: "FindifyAnalytics",
          value: true,
        },
        {
          name: "Findify",
          chain: "findify",
          value: true,
        },
        {
          name: "FingerprintJS",
          chain: "Fingerprint",
          value: true,
        },
        {
          name: "FingerprintJS",
          chain: "Fingerprint2",
          value: true,
        },
        {
          name: "FingerprintJS",
          chain: "Fingerprint2.VERSION",
          value: true,
        },
        {
          name: "FingerprintJS",
          chain: "FingerprintJS",
          value: true,
        },
        {
          name: "Firebase",
          chain: "firebase.SDK_VERSION",
          value: true,
        },
        {
          name: "FirstImpression.io",
          chain: "FI.options",
          value: true,
        },
        {
          name: "FirstImpression.io",
          chain: "fiPrebidAnalyticsHandler",
          value: true,
        },
        {
          name: "Fit Analytics",
          chain: "FitAnalyticsWidget",
          value: true,
        },
        {
          name: "Fit Analytics",
          chain: "_fitAnalytics",
          value: true,
        },
        {
          name: "FlagSmith",
          chain: "flagsmith",
          value: true,
        },
        {
          name: "Flarum",
          chain: "app.cache.discussionList",
          value: true,
        },
        {
          name: "Flarum",
          chain: "app.forum.freshness",
          value: true,
        },
        {
          name: "Flickity",
          chain: "Flickity",
          value: true,
        },
        {
          name: "Flocktory",
          chain: "flocktory",
          value: true,
        },
        {
          name: "Flocktory",
          chain: "flocktoryPurchase",
          value: true,
        },
        {
          name: "Flow",
          chain: "flow.cart",
          value: true,
        },
        {
          name: "Flow",
          chain: "flow.countryPicker",
          value: true,
        },
        {
          name: "Flow",
          chain: "flow_cart_localize",
          value: true,
        },
        {
          name: "Flowplayer",
          chain: "flowplayer",
          value: true,
        },
        {
          name: "Flowplayer",
          chain: "flowplayer.version",
          value: true,
        },
        {
          name: "Flutter",
          chain: "flutterCanvasKit",
          value: true,
        },
        {
          name: "Fomo",
          chain: "fomo.version",
          value: true,
        },
        {
          name: "Font Awesome",
          chain: "FontAwesomeCdnConfig",
          value: true,
        },
        {
          name: "Font Awesome",
          chain: "___FONT_AWESOME___",
          value: true,
        },
        {
          name: "Forter",
          chain: "ftr__startScriptLoad",
          value: true,
        },
        {
          name: "Foswiki",
          chain: "foswiki",
          value: true,
        },
        {
          name: "Four",
          chain: "Four",
          value: true,
        },
        {
          name: "Foursixty",
          chain: "FoursixtyEmbed",
          value: true,
        },
        {
          name: "Fourthwall",
          chain: "FourthwallAnalytics",
          value: true,
        },
        {
          name: "Fourthwall",
          chain: "fourthwallTheme",
          value: true,
        },
        {
          name: "Framer Sites",
          chain: "Framer.Animatable",
          value: true,
        },
        {
          name: "Framer Sites",
          chain: "Framer.version",
          value: true,
        },
        {
          name: "FreakOut",
          chain: "FOut",
          value: true,
        },
        {
          name: "FreakOut",
          chain: "_fout_jsurl",
          value: true,
        },
        {
          name: "FreakOut",
          chain: "_fout_queue",
          value: true,
        },
        {
          name: "FreeTextBox",
          chain: "FTB_API",
          value: true,
        },
        {
          name: "FreeTextBox",
          chain: "FTB_AddEvent",
          value: true,
        },
        {
          name: "Fresco",
          chain: "Fresco.version",
          value: true,
        },
        {
          name: "Freshchat",
          chain: "Freshbots",
          value: true,
        },
        {
          name: "Freshop",
          chain: "freshop",
          value: true,
        },
        {
          name: "Freshop",
          chain: "freshopInitialized",
          value: true,
        },
        {
          name: "Freshworks CRM",
          chain: "ZargetForm",
          value: true,
        },
        {
          name: "Freshworks CRM",
          chain: "zarget",
          value: true,
        },
        {
          name: "Freshworks CRM",
          chain: "zargetAPI",
          value: true,
        },
        {
          name: "Friendbuy",
          chain: "friendbuy",
          value: true,
        },
        {
          name: "Friendbuy",
          chain: "friendbuyAPI.merchantId",
          value: true,
        },
        {
          name: "Frosmo",
          chain: "_frosmo",
          value: true,
        },
        {
          name: "Frosmo",
          chain: "frosmo",
          value: true,
        },
        {
          name: "FullStory",
          chain: "FS.clearUserCookie",
          value: true,
        },
        {
          name: "Fusion Ads",
          chain: "_fusion",
          value: true,
        },
        {
          name: "Fynd Platform",
          chain: "__fyndAction",
          value: true,
        },
        {
          name: "fullPage.js",
          chain: "fullpage_api.version",
          value: true,
        },
        {
          name: "GOV.UK Frontend",
          chain: "GOVUKFrontend",
          value: true,
        },
        {
          name: "GOV.UK Template",
          chain: "GOVUK",
          value: true,
        },
        {
          name: "GOV.UK Toolkit",
          chain: "GOVUK.details",
          value: true,
        },
        {
          name: "GOV.UK Toolkit",
          chain: "GOVUK.modules",
          value: true,
        },
        {
          name: "GOV.UK Toolkit",
          chain: "GOVUK.primaryLinks",
          value: true,
        },
        {
          name: "GSAP",
          chain: "TweenLite.version",
          value: true,
        },
        {
          name: "GSAP",
          chain: "TweenMax.version",
          value: true,
        },
        {
          name: "GSAP",
          chain: "gsap.version",
          value: true,
        },
        {
          name: "GSAP",
          chain: "gsapVersions",
          value: true,
        },
        {
          name: "Gallery",
          chain: "$.fn.gallery_valign",
          value: true,
        },
        {
          name: "Gallery",
          chain: "galleryAuthToken",
          value: true,
        },
        {
          name: "Gambio",
          chain: "gambio",
          value: true,
        },
        {
          name: "Gauges",
          chain: "_gauges",
          value: true,
        },
        {
          name: "Gemius",
          chain: "gemius_hit",
          value: true,
        },
        {
          name: "Gemius",
          chain: "gemius_init",
          value: true,
        },
        {
          name: "Gemius",
          chain: "gemius_pending",
          value: true,
        },
        {
          name: "Gemius",
          chain: "pp_gemius_hit",
          value: true,
        },
        {
          name: "GeneXus",
          chain: "gx.gxVersion",
          value: true,
        },
        {
          name: "Genesys Cloud",
          chain: "PURECLOUD_WEBCHAT_FRAME_CONFIG",
          value: true,
        },
        {
          name: "Gerrit",
          chain: "Gerrit",
          value: true,
        },
        {
          name: "Gerrit",
          chain: "gerrit_ui",
          value: true,
        },
        {
          name: "Get Satisfaction",
          chain: "GSFN",
          value: true,
        },
        {
          name: "GetFeedback",
          chain: "usabilla_live",
          value: true,
        },
        {
          name: "GetMeAShop",
          chain: "gmas_base_url",
          value: true,
        },
        {
          name: "GetMeAShop",
          chain: "search_api_base_uri",
          value: true,
        },
        {
          name: "GetResponse",
          chain: "GRAPP",
          value: true,
        },
        {
          name: "GetResponse",
          chain: "GRWF2",
          value: true,
        },
        {
          name: "GetSocial",
          chain: "GETSOCIAL_VERSION",
          value: true,
        },
        {
          name: "GitBook",
          chain: "__GITBOOK_INITIAL_PROPS__",
          value: true,
        },
        {
          name: "GitBook",
          chain: "__GITBOOK_INITIAL_STATE__",
          value: true,
        },
        {
          name: "GitBook",
          chain: "__GITBOOK_LAZY_MODULES__",
          value: true,
        },
        {
          name: "GitLab",
          chain: "GitLab",
          value: true,
        },
        {
          name: "GitLab",
          chain: "gl.dashboardOptions",
          value: true,
        },
        {
          name: "Gladly",
          chain: "Gladly",
          value: true,
        },
        {
          name: "Global-e",
          chain: "GLOBALE_ENGINE_CONFIG",
          value: true,
        },
        {
          name: "Global-e",
          chain: "GlobalE",
          value: true,
        },
        {
          name: "GloriaFood",
          chain: "glfBindButtons",
          value: true,
        },
        {
          name: "GloriaFood",
          chain: "glfWidget",
          value: true,
        },
        {
          name: "Gnuboard",
          chain: "g4_bbs_img",
          value: true,
        },
        {
          name: "Gnuboard",
          chain: "g4_is_admin",
          value: true,
        },
        {
          name: "Gnuboard",
          chain: "g5_is_admin",
          value: true,
        },
        {
          name: "Gnuboard",
          chain: "g5_js_ver",
          value: true,
        },
        {
          name: "GoAffPro",
          chain: "gfp_api_server",
          value: true,
        },
        {
          name: "GoAnywhere",
          chain: "appContainer",
          value: true,
        },
        {
          name: "GoJS",
          chain: "go.GraphObject",
          value: true,
        },
        {
          name: "GoJS",
          chain: "go.version",
          value: true,
        },
        {
          name: "GoStats",
          chain: "_goStatsRun",
          value: true,
        },
        {
          name: "GoStats",
          chain: "_go_track_src",
          value: true,
        },
        {
          name: "GoStats",
          chain: "go_msie",
          value: true,
        },
        {
          name: "Goftino",
          chain: "Goftino.setWidget",
          value: true,
        },
        {
          name: "Goftino",
          chain: "goftinoRemoveLoad",
          value: true,
        },
        {
          name: "Goftino",
          chain: "goftino_1",
          value: true,
        },
        {
          name: "Goftino",
          chain: "goftino_getUrl",
          value: true,
        },
        {
          name: "Google AdSense",
          chain: "Goog_AdSense_",
          value: true,
        },
        {
          name: "Google AdSense",
          chain: "Goog_AdSense_OsdAdapter",
          value: true,
        },
        {
          name: "Google AdSense",
          chain: "__google_ad_urls",
          value: true,
        },
        {
          name: "Google AdSense",
          chain: "google_ad_",
          value: true,
        },
        {
          name: "Google Ads Conversion Tracking",
          chain: "google_trackConversion",
          value: true,
        },
        {
          name: "Google Analytics",
          chain: "GoogleAnalyticsObject",
          value: true,
        },
        {
          name: "Google Analytics",
          chain: "gaGlobal",
          value: true,
        },
        {
          name: "Google Analytics Enhanced eCommerce",
          chain: "gaplugins.EC",
          value: true,
        },
        {
          name: "Google Call Conversion Tracking",
          chain: "_googCallTrackingImpl",
          value: true,
        },
        {
          name: "Google Call Conversion Tracking",
          chain: "google_wcc_status",
          value: true,
        },
        {
          name: "Google Charts",
          chain: "__googleVisualizationAbstractRendererElementsCount__",
          value: true,
        },
        {
          name: "Google Charts",
          chain: "__gvizguard__",
          value: true,
        },
        {
          name: "Google Code Prettify",
          chain: "prettyPrint",
          value: true,
        },
        {
          name: "Google Font API",
          chain: "WebFonts",
          value: true,
        },
        {
          name: "Google Optimize",
          chain: "google_optimize",
          value: true,
        },
        {
          name: "Google Remarketing Tag",
          chain: "gtag",
          value: true,
        },
        {
          name: "Google Tag Manager",
          chain: "google_tag_manager",
          value: true,
        },
        {
          name: "Google Tag Manager",
          chain: "googletag",
          value: true,
        },
        {
          name: "Google Web Toolkit",
          chain: "__gwt_",
          value: true,
        },
        {
          name: "Google Web Toolkit",
          chain: "__gwt_activeModules",
          value: true,
        },
        {
          name: "Google Web Toolkit",
          chain: "__gwt_getMetaProperty",
          value: true,
        },
        {
          name: "Google Web Toolkit",
          chain: "__gwt_isKnownPropertyValue",
          value: true,
        },
        {
          name: "Google Web Toolkit",
          chain: "__gwt_stylesLoaded",
          value: true,
        },
        {
          name: "Google Web Toolkit",
          chain: "__gwtlistener",
          value: true,
        },
        {
          name: "Gorgias",
          chain: "gorgiasChat",
          value: true,
        },
        {
          name: "Grafana",
          chain: "__grafana_public_path__",
          value: true,
        },
        {
          name: "Grafana",
          chain: "grafanaBootData.settings.buildInfo['version']",
          value: true,
        },
        {
          name: "Gravatar",
          chain: "Gravatar",
          value: true,
        },
        {
          name: "Gravitec",
          chain: "Gravitec",
          value: true,
        },
        {
          name: "Gravitec",
          chain: "gravitecWebpackJsonp",
          value: true,
        },
        {
          name: "Greenhouse",
          chain: "populateGreenhouseJobs",
          value: true,
        },
        {
          name: "Grin",
          chain: "Grin",
          value: true,
        },
        {
          name: "Gumlet",
          chain: "gumlet",
          value: true,
        },
        {
          name: "Gumstack",
          chain: "Gumstack",
          value: true,
        },
        {
          name: "Hammer.js",
          chain: "Ha.VERSION",
          value: true,
        },
        {
          name: "Hammer.js",
          chain: "Hammer",
          value: true,
        },
        {
          name: "Hammer.js",
          chain: "Hammer.VERSION",
          value: true,
        },
        {
          name: "Handlebars",
          chain: "Handlebars",
          value: true,
        },
        {
          name: "Handlebars",
          chain: "Handlebars.VERSION",
          value: true,
        },
        {
          name: "Handtalk",
          chain: "HandTalk",
          value: true,
        },
        {
          name: "HappyFox Live Chat",
          chain: "HappyFoxChatObject",
          value: true,
        },
        {
          name: "Haravan",
          chain: "Haravan",
          value: true,
        },
        {
          name: "HeadJS",
          chain: "head.browser.name",
          value: true,
        },
        {
          name: "Heap",
          chain: "heap.version.heapJsVersion",
          value: true,
        },
        {
          name: "Hello Bar",
          chain: "HelloBar",
          value: true,
        },
        {
          name: "Hello Bar",
          chain: "hellobarSiteSettings",
          value: true,
        },
        {
          name: "Help Scout",
          chain: "__onBeaconDestroy",
          value: true,
        },
        {
          name: "Help Scout",
          chain: "beaconStore",
          value: true,
        },
        {
          name: "HelpDocs",
          chain: "HDAnalytics",
          value: true,
        },
        {
          name: "HelpDocs",
          chain: "HDUtils",
          value: true,
        },
        {
          name: "HelpDocs",
          chain: "hd_instant_search",
          value: true,
        },
        {
          name: "Hero",
          chain: "HeroWebPluginSettings",
          value: true,
        },
        {
          name: "HetrixTools",
          chain: "htoolz",
          value: true,
        },
        {
          name: "Highcharts",
          chain: "Highcharts",
          value: true,
        },
        {
          name: "Highcharts",
          chain: "Highcharts.version",
          value: true,
        },
        {
          name: "Highlight.js",
          chain: "hljs.highlightBlock",
          value: true,
        },
        {
          name: "Highlight.js",
          chain: "hljs.listLanguages",
          value: true,
        },
        {
          name: "Histats",
          chain: "Histats.ver",
          value: true,
        },
        {
          name: "Hogan.js",
          chain: "Hogan",
          value: true,
        },
        {
          name: "Hotjar",
          chain: "HotLeadfactory",
          value: true,
        },
        {
          name: "Hotjar",
          chain: "HotleadController",
          value: true,
        },
        {
          name: "Hotjar",
          chain: "hj.apiUrlBase",
          value: true,
        },
        {
          name: "Howler.js",
          chain: "Howler",
          value: true,
        },
        {
          name: "Howler.js",
          chain: "HowlerGlobal",
          value: true,
        },
        {
          name: "HubSpot",
          chain: "_hsq",
          value: true,
        },
        {
          name: "HubSpot",
          chain: "hubspot",
          value: true,
        },
        {
          name: "HubSpot Chat",
          chain: "HubSpotConversations",
          value: true,
        },
        {
          name: "HulkApps GDPR/CCPA Compliance Manager",
          chain: "hulkSetCookie",
          value: true,
        },
        {
          name: "HulkApps Infinite Product Options",
          chain: "hulkapps.po_url",
          value: true,
        },
        {
          name: "HulkApps Product Reviews",
          chain: "hulkappsProductReview",
          value: true,
        },
        {
          name: "HulkApps Product Reviews",
          chain: "hulkappsReviews",
          value: true,
        },
        {
          name: "Humm",
          chain: "checkout.enabledpayments.humm",
          value: true,
        },
        {
          name: "Hushly",
          chain: "__hly_widget_object",
          value: true,
        },
        {
          name: "Hyperspeed",
          chain: "hyperscripts",
          value: true,
        },
        {
          name: "hantana",
          chain: "Hantana",
          value: true,
        },
        {
          name: "hoolah",
          chain: "hoolah",
          value: true,
        },
        {
          name: "INFOnline",
          chain: "iam_data",
          value: true,
        },
        {
          name: "INFOnline",
          chain: "szmvars",
          value: true,
        },
        {
          name: "IPB",
          chain: "IPBoard",
          value: true,
        },
        {
          name: "IPB",
          chain: "ipb_var",
          value: true,
        },
        {
          name: "IPB",
          chain: "ipsSettings",
          value: true,
        },
        {
          name: "Iamport",
          chain: "IMP.request_pay",
          value: true,
        },
        {
          name: "IdoSell Shop",
          chain: "IAI_Ajax",
          value: true,
        },
        {
          name: "Iluria",
          chain: "Iluria",
          value: true,
        },
        {
          name: "Iluria",
          chain: "iluriaShowPagination",
          value: true,
        },
        {
          name: "Image Relay",
          chain: "ImageRelay.accounts",
          value: true,
        },
        {
          name: "Imber",
          chain: "$imber.getVisitor",
          value: true,
        },
        {
          name: "Imber",
          chain: "IMBER_ID",
          value: true,
        },
        {
          name: "Imber",
          chain: "IMBER_SOCKET",
          value: true,
        },
        {
          name: "Immutable.js",
          chain: "Immutable",
          value: true,
        },
        {
          name: "Immutable.js",
          chain: "Immutable.version",
          value: true,
        },
        {
          name: "Impact",
          chain: "ImpactRadiusEvent",
          value: true,
        },
        {
          name: "Impact",
          chain: "irEvent",
          value: true,
        },
        {
          name: "Imweb",
          chain: "IMWEB_TEMPLATE",
          value: true,
        },
        {
          name: "Indi",
          chain: "indi.formatStats",
          value: true,
        },
        {
          name: "Indi",
          chain: "indiCountly.check_any_consent",
          value: true,
        },
        {
          name: "Indi",
          chain: "indi_carousel.productCta",
          value: true,
        },
        {
          name: "InfernoJS",
          chain: "Inferno",
          value: true,
        },
        {
          name: "InfernoJS",
          chain: "Inferno.version",
          value: true,
        },
        {
          name: "Infolinks",
          chain: "infolinks_pid",
          value: true,
        },
        {
          name: "Infolinks",
          chain: "infolinks_wsid",
          value: true,
        },
        {
          name: "Insider",
          chain: "Insider",
          value: true,
        },
        {
          name: "Inspectlet",
          chain: "__insp",
          value: true,
        },
        {
          name: "Inspectlet",
          chain: "__inspld",
          value: true,
        },
        {
          name: "Instabot",
          chain: "Instabot",
          value: true,
        },
        {
          name: "Instana",
          chain: "ineum",
          value: true,
        },
        {
          name: "InstantClick",
          chain: "InstantClick",
          value: true,
        },
        {
          name: "Instapage",
          chain: "_instapageSnowplow",
          value: true,
        },
        {
          name: "Instapage",
          chain: "instapageSp",
          value: true,
        },
        {
          name: "Interact",
          chain: "InteractApp.name",
          value: true,
        },
        {
          name: "Interact",
          chain: "InteractPromotionObject",
          value: true,
        },
        {
          name: "Intercom",
          chain: "Intercom",
          value: true,
        },
        {
          name: "Inveon",
          chain: "InvApp",
          value: true,
        },
        {
          name: "Inveon",
          chain: "invTagManagerParams",
          value: true,
        },
        {
          name: "Invoca",
          chain: "Invoca.PNAPI.version",
          value: true,
        },
        {
          name: "Invoca",
          chain: "InvocaTagId",
          value: true,
        },
        {
          name: "Ionic",
          chain: "Ionic.config",
          value: true,
        },
        {
          name: "Ionic",
          chain: "Ionic.version",
          value: true,
        },
        {
          name: "Isotope",
          chain: "Isotope",
          value: true,
        },
        {
          name: "Isotope",
          chain: "init_isotope",
          value: true,
        },
        {
          name: "Issuu",
          chain: "IssuuReaders",
          value: true,
        },
        {
          name: "Issuu",
          chain: "issuuPanel",
          value: true,
        },
        {
          name: "Iterable",
          chain: "iterableAnalytics",
          value: true,
        },
        {
          name: "Izooto",
          chain: "Izooto",
          value: true,
        },
        {
          name: "Izooto",
          chain: "_izooto",
          value: true,
        },
        {
          name: "inSided",
          chain: "inSidedData",
          value: true,
        },
        {
          name: "inSided",
          chain: "insided",
          value: true,
        },
        {
          name: "ip-label",
          chain: "clobs",
          value: true,
        },
        {
          name: "ipstack",
          chain: "ENV.ipStackAccessToken",
          value: true,
        },
        {
          name: "JS Charts",
          chain: "JSChart",
          value: true,
        },
        {
          name: "JSEcoin",
          chain: "jseMine",
          value: true,
        },
        {
          name: "JShop",
          chain: "jss_1stepDeliveryType",
          value: true,
        },
        {
          name: "JShop",
          chain: "jss_1stepFillShipping",
          value: true,
        },
        {
          name: "JW Player",
          chain: "jwDefaults",
          value: true,
        },
        {
          name: "JW Player",
          chain: "jwplayer",
          value: true,
        },
        {
          name: "JW Player",
          chain: "jwplayerApiUrl",
          value: true,
        },
        {
          name: "JW Player",
          chain: "webpackJsonpjwplayer",
          value: true,
        },
        {
          name: "JavaScript Infovis Toolkit",
          chain: "$jit",
          value: true,
        },
        {
          name: "JavaScript Infovis Toolkit",
          chain: "$jit.version",
          value: true,
        },
        {
          name: "Jenkins",
          chain: "jenkinsCIGlobal",
          value: true,
        },
        {
          name: "Jenkins",
          chain: "jenkinsRules",
          value: true,
        },
        {
          name: "Jetshop",
          chain: "JetshopData",
          value: true,
        },
        {
          name: "Jibres",
          chain: "jibres",
          value: true,
        },
        {
          name: "Jirafe",
          chain: "jirafe",
          value: true,
        },
        {
          name: "JivoChat",
          chain: "jivo_api",
          value: true,
        },
        {
          name: "JivoChat",
          chain: "jivo_version",
          value: true,
        },
        {
          name: "JobberBase",
          chain: "Jobber",
          value: true,
        },
        {
          name: "Jobvite",
          chain: "Jobvite",
          value: true,
        },
        {
          name: "JoomShopping",
          chain: "joomshoppingVideoHtml5",
          value: true,
        },
        {
          name: "Joomla",
          chain: "Joomla",
          value: true,
        },
        {
          name: "Joomla",
          chain: "jcomments",
          value: true,
        },
        {
          name: "Judge.me",
          chain: "judgeme",
          value: true,
        },
        {
          name: "JuicyAds",
          chain: "adsbyjuicy",
          value: true,
        },
        {
          name: "Jumpseller",
          chain: "Jumpseller",
          value: true,
        },
        {
          name: "Justuno",
          chain: "JustunoApp",
          value: true,
        },
        {
          name: "jComponent",
          chain: "MAIN.version",
          value: true,
        },
        {
          name: "jQTouch",
          chain: "jQT",
          value: true,
        },
        {
          name: "jQuery",
          chain: "$.fn.jquery",
          value: true,
        },
        {
          name: "jQuery",
          chain: "jQuery.fn.jquery",
          value: true,
        },
        {
          name: "jQuery DevBridge Autocomplete",
          chain: "$.devbridgeAutocomplete",
          value: true,
        },
        {
          name: "jQuery DevBridge Autocomplete",
          chain: "jQuery.devbridgeAutocomplete",
          value: true,
        },
        {
          name: "jQuery Migrate",
          chain: "jQuery.migrateVersion",
          value: true,
        },
        {
          name: "jQuery Migrate",
          chain: "jQuery.migrateWarnings",
          value: true,
        },
        {
          name: "jQuery Migrate",
          chain: "jqueryMigrate",
          value: true,
        },
        {
          name: "jQuery Mobile",
          chain: "jQuery.mobile.version",
          value: true,
        },
        {
          name: "jQuery UI",
          chain: "jQuery.ui.version",
          value: true,
        },
        {
          name: "jQuery-pjax",
          chain: "jQuery.pjax",
          value: true,
        },
        {
          name: "K2",
          chain: "K2RatingURL",
          value: true,
        },
        {
          name: "KISSmetrics",
          chain: "KM_COOKIE_DOMAIN",
          value: true,
        },
        {
          name: "KQS.store",
          chain: "kqs_box",
          value: true,
        },
        {
          name: "KQS.store",
          chain: "kqs_off",
          value: true,
        },
        {
          name: "KaTeX",
          chain: "katex",
          value: true,
        },
        {
          name: "KaTeX",
          chain: "katex.version",
          value: true,
        },
        {
          name: "Kajabi",
          chain: "Kajabi",
          value: true,
        },
        {
          name: "Kakao",
          chain: "Kakao.VERSION",
          value: true,
        },
        {
          name: "Kameleoon",
          chain: "Kameleoon.Gatherer.SCRIPT_VERSION",
          value: true,
        },
        {
          name: "Kameleoon",
          chain: "kameleoonEndLoadTime",
          value: true,
        },
        {
          name: "Kameleoon",
          chain: "kameleoonS",
          value: true,
        },
        {
          name: "Kamva",
          chain: "Kamva",
          value: true,
        },
        {
          name: "Kapture CRM",
          chain: "Kapchat",
          value: true,
        },
        {
          name: "Kapture CRM",
          chain: "kap_chat_js",
          value: true,
        },
        {
          name: "Karma",
          chain: "karma.vars.version",
          value: true,
        },
        {
          name: "Kartra",
          chain: "init_kartra_tracking",
          value: true,
        },
        {
          name: "Kartra",
          chain: "kartra_tracking_loaded",
          value: true,
        },
        {
          name: "Kendo UI",
          chain: "kendo",
          value: true,
        },
        {
          name: "Kendo UI",
          chain: "kendo.version",
          value: true,
        },
        {
          name: "Kentico CMS",
          chain: "CMS.Application",
          value: true,
        },
        {
          name: "Kevel",
          chain: "ados",
          value: true,
        },
        {
          name: "Kevel",
          chain: "adosResults",
          value: true,
        },
        {
          name: "Kibo Personalization",
          chain: "BaynoteAPI",
          value: true,
        },
        {
          name: "Kibo Personalization",
          chain: "BaynoteJSVersion",
          value: true,
        },
        {
          name: "Kibo Personalization",
          chain: "certona.recommendations",
          value: true,
        },
        {
          name: "Kibo Personalization",
          chain: "certonaRecommendations",
          value: true,
        },
        {
          name: "Kibo Personalization",
          chain: "monetate",
          value: true,
        },
        {
          name: "Kibo Personalization",
          chain: "monetateQ",
          value: true,
        },
        {
          name: "Kibo Personalization",
          chain: "monetateT",
          value: true,
        },
        {
          name: "KineticJS",
          chain: "Kinetic",
          value: true,
        },
        {
          name: "KineticJS",
          chain: "Kinetic.version",
          value: true,
        },
        {
          name: "Kiwi Sizing",
          chain: "KiwiSizing",
          value: true,
        },
        {
          name: "Klarna Checkout",
          chain: "KlarnaOnsiteService",
          value: true,
        },
        {
          name: "Klarna Checkout",
          chain: "_klarnaCheckout",
          value: true,
        },
        {
          name: "Klaro",
          chain: "klaro",
          value: true,
        },
        {
          name: "Klaro",
          chain: "klaroConfig",
          value: true,
        },
        {
          name: "Klasha",
          chain: "KlashaClient",
          value: true,
        },
        {
          name: "Klaviyo",
          chain: "KlaviyoSubscribe",
          value: true,
        },
        {
          name: "Klaviyo",
          chain: "klaviyo",
          value: true,
        },
        {
          name: "Klevu",
          chain: "klevu_apiKey",
          value: true,
        },
        {
          name: "Klevu",
          chain: "klevu_layout",
          value: true,
        },
        {
          name: "Klevu",
          chain: "klevu_sessionId",
          value: true,
        },
        {
          name: "Knockout.js",
          chain: "ko.version",
          value: true,
        },
        {
          name: "Ko-fi",
          chain: "kofiwidget2",
          value: true,
        },
        {
          name: "KobiMaster",
          chain: "kmGetSession",
          value: true,
        },
        {
          name: "KobiMaster",
          chain: "kmPageInfo",
          value: true,
        },
        {
          name: "Koha",
          chain: "KOHA",
          value: true,
        },
        {
          name: "Konduto",
          chain: "Konduto",
          value: true,
        },
        {
          name: "Konduto",
          chain: "getKondutoID",
          value: true,
        },
        {
          name: "Kount",
          chain: "ka.ClientSDK",
          value: true,
        },
        {
          name: "Kount",
          chain: "ka.collectData",
          value: true,
        },
        {
          name: "KueskiPay",
          chain: "kueskypushhead",
          value: true,
        },
        {
          name: "Kustomer",
          chain: "Kustomer",
          value: true,
        },
        {
          name: "keep. archeevo",
          chain: "ArcheevoSnippets.mostviewedDocumentsURL",
          value: true,
        },
        {
          name: "keep. archeevo",
          chain: "embedArcheevoBasicSearch",
          value: true,
        },
        {
          name: "LINE Login",
          chain: "Constants.authorization_request_url",
          value: true,
        },
        {
          name: "LKQD",
          chain: "lkqdCall",
          value: true,
        },
        {
          name: "LKQD",
          chain: "lkqdErrorCount",
          value: true,
        },
        {
          name: "LKQD",
          chain: "lkqdSettings",
          value: true,
        },
        {
          name: "LKQD",
          chain: "lkqd_http_response",
          value: true,
        },
        {
          name: "Laravel",
          chain: "Laravel",
          value: true,
        },
        {
          name: "LatitudePay",
          chain: "checkout.enabledpayments.latitudepay",
          value: true,
        },
        {
          name: "LaunchDarkly",
          chain: "DDC.WS.state",
          value: true,
        },
        {
          name: "LaunchDarkly",
          chain: "launchDarkly",
          value: true,
        },
        {
          name: "Launchrock",
          chain: "lrIgnition",
          value: true,
        },
        {
          name: "Launchrock",
          chain: "lrLoadedJs",
          value: true,
        },
        {
          name: "Launchrock",
          chain: "lrSiteRenderingData.apiEndpoint",
          value: true,
        },
        {
          name: "Launchrock",
          chain: "lrSiteSettingAsBoolean",
          value: true,
        },
        {
          name: "Launchrock",
          chain: "lrignition",
          value: true,
        },
        {
          name: "Layer0",
          chain: "Layer0.Metrics",
          value: true,
        },
        {
          name: "LazySizes",
          chain: "lazySizes",
          value: true,
        },
        {
          name: "LazySizes",
          chain: "lazySizesConfig",
          value: true,
        },
        {
          name: "Leadinfo",
          chain: "GlobalLeadinfoNamespace",
          value: true,
        },
        {
          name: "Leadinfo",
          chain: "leadinfo",
          value: true,
        },
        {
          name: "Leaflet",
          chain: "L.DistanceGrid",
          value: true,
        },
        {
          name: "Leaflet",
          chain: "L.PosAnimation",
          value: true,
        },
        {
          name: "Leaflet",
          chain: "L.version",
          value: true,
        },
        {
          name: "Leanplum",
          chain: "Leanplum",
          value: true,
        },
        {
          name: "Lede",
          chain: "ledeChartbeatViews",
          value: true,
        },
        {
          name: "Lede",
          chain: "ledeEngagement",
          value: true,
        },
        {
          name: "Lede",
          chain: "ledeEngagementReset",
          value: true,
        },
        {
          name: "Legal Monster",
          chain: "legal.__VERSION__",
          value: true,
        },
        {
          name: "Lieferando",
          chain: "Tealium.pagedata.country",
          value: true,
        },
        {
          name: "Liferay",
          chain: "Liferay",
          value: true,
        },
        {
          name: "LimeSpot",
          chain: "LimeSpot.CartItems",
          value: true,
        },
        {
          name: "LimeSpot",
          chain: "LimeSpot.Recommendations",
          value: true,
        },
        {
          name: "LinkSmart",
          chain: "LS_JSON",
          value: true,
        },
        {
          name: "LinkSmart",
          chain: "LinkSmart",
          value: true,
        },
        {
          name: "LinkSmart",
          chain: "_mb_site_guid",
          value: true,
        },
        {
          name: "Linkedin Insight Tag",
          chain: "_linkedin_data_partner_id",
          value: true,
        },
        {
          name: "Linkedin Sign-in",
          chain: "OnLinkedInAuth",
          value: true,
        },
        {
          name: "Linkedin Sign-in",
          chain: "onLinkedInLoad",
          value: true,
        },
        {
          name: "List.js",
          chain: "List",
          value: true,
        },
        {
          name: "Listrak",
          chain: "_LTKSignup",
          value: true,
        },
        {
          name: "Listrak",
          chain: "_LTKSubscriber",
          value: true,
        },
        {
          name: "Lithium",
          chain: "LITHIUM",
          value: true,
        },
        {
          name: "Live Story",
          chain: "LSHelpers",
          value: true,
        },
        {
          name: "Live Story",
          chain: "LiveStory",
          value: true,
        },
        {
          name: "LiveAgent",
          chain: "LiveAgent",
          value: true,
        },
        {
          name: "LiveHelp",
          chain: "LHready",
          value: true,
        },
        {
          name: "LiveIntent",
          chain: "LI.advertiserId",
          value: true,
        },
        {
          name: "LivePerson",
          chain: "lpTag.Chronos",
          value: true,
        },
        {
          name: "LiveRamp DPM",
          chain: "dpmComscoreVars",
          value: true,
        },
        {
          name: "LiveRamp PCM",
          chain: "wpJsonpLiverampGdprCmp",
          value: true,
        },
        {
          name: "LiveStreet CMS",
          chain: "LIVESTREET_SECURITY_KEY",
          value: true,
        },
        {
          name: "LiveZilla",
          chain: "lz_chat_execute",
          value: true,
        },
        {
          name: "LiveZilla",
          chain: "lz_code_id",
          value: true,
        },
        {
          name: "LiveZilla",
          chain: "lz_tracking_set_widget_visibility",
          value: true,
        },
        {
          name: "Livefyre",
          chain: "FyreLoader",
          value: true,
        },
        {
          name: "Livefyre",
          chain: "L.version",
          value: true,
        },
        {
          name: "Livefyre",
          chain: "LF.CommentCount",
          value: true,
        },
        {
          name: "Livefyre",
          chain: "fyre",
          value: true,
        },
        {
          name: "Livewire",
          chain: "livewire",
          value: true,
        },
        {
          name: "Loadable-Components",
          chain: "__LOADABLE_LOADED_CHUNKS__",
          value: true,
        },
        {
          name: "Lodash",
          chain: "_.VERSION",
          value: true,
        },
        {
          name: "Lodash",
          chain: "_.differenceBy",
          value: true,
        },
        {
          name: "Lodash",
          chain:
            "_.templateSettings.imports._.templateSettings.imports._.VERSION",
          value: true,
        },
        {
          name: "Loggly",
          chain: "LogglyTracker",
          value: true,
        },
        {
          name: "Login with Amazon",
          chain: "onAmazonLoginReady",
          value: true,
        },
        {
          name: "LoginRadius",
          chain: "LoginRadius",
          value: true,
        },
        {
          name: "LoginRadius",
          chain: "LoginRadiusDefaults",
          value: true,
        },
        {
          name: "LoginRadius",
          chain: "LoginRadiusSDK",
          value: true,
        },
        {
          name: "LoginRadius",
          chain: "LoginRadiusUtility",
          value: true,
        },
        {
          name: "Loja Integrada",
          chain: "LOJA_ID",
          value: true,
        },
        {
          name: "Loja Virtual",
          chain: "id_loja_virtual",
          value: true,
        },
        {
          name: "Loja Virtual",
          chain: "link_loja_virtual",
          value: true,
        },
        {
          name: "Loja Virtual",
          chain: "loja_sem_dominio",
          value: true,
        },
        {
          name: "Loop Returns",
          chain: "Loop.config.variantParam",
          value: true,
        },
        {
          name: "Loop54",
          chain: "Loop54.config.libVersion",
          value: true,
        },
        {
          name: "Lootly",
          chain: "Lootly.config",
          value: true,
        },
        {
          name: "Lootly",
          chain: "lootlyWidgetInit",
          value: true,
        },
        {
          name: "Loqate",
          chain: "loqateAccountCode",
          value: true,
        },
        {
          name: "Loqate",
          chain: "pca.platform.productList",
          value: true,
        },
        {
          name: "LoyaltyLion",
          chain: "loyaltylion.version",
          value: true,
        },
        {
          name: "Lucky Orange",
          chain: "__wtw_lucky_site_id",
          value: true,
        },
        {
          name: "Luigi’s Box",
          chain: "Luigis",
          value: true,
        },
        {
          name: "Lytics",
          chain: "__lytics__jstag__.version",
          value: true,
        },
        {
          name: "libphonenumber",
          chain: "libphonenumber.AsYouType",
          value: true,
        },
        {
          name: "libphonenumber",
          chain: "libphonenumber.DIGITS",
          value: true,
        },
        {
          name: "lit-element",
          chain: "litElementVersions.0",
          value: true,
        },
        {
          name: "lit-html",
          chain: "litHtmlVersions.0",
          value: true,
        },
        {
          name: "MAJIN",
          chain: "ma.Touch",
          value: true,
        },
        {
          name: "MDUI",
          chain: "_mduiEventId",
          value: true,
        },
        {
          name: "MDUI",
          chain: "mdui.Drawer",
          value: true,
        },
        {
          name: "MGID",
          chain: "MgSensor.mgqWorker",
          value: true,
        },
        {
          name: "MODX",
          chain: "MODX",
          value: true,
        },
        {
          name: "MODX",
          chain: "MODX_MEDIA_PATH",
          value: true,
        },
        {
          name: "MTCaptcha",
          chain: "mtcaptcha.getVerifiedToken",
          value: true,
        },
        {
          name: "MTCaptcha",
          chain: "mtcaptchaConfig.sitekey",
          value: true,
        },
        {
          name: "MadAdsMedia",
          chain: "setMIframe",
          value: true,
        },
        {
          name: "MadAdsMedia",
          chain: "setMRefURL",
          value: true,
        },
        {
          name: "Magento",
          chain: "Mage",
          value: true,
        },
        {
          name: "Magento",
          chain: "VarienForm",
          value: true,
        },
        {
          name: "Magisto",
          chain: "MagistoPlayerFrame",
          value: true,
        },
        {
          name: "Magisto",
          chain: "magisto_server",
          value: true,
        },
        {
          name: "Mailmunch",
          chain: "MailMunchWidgets",
          value: true,
        },
        {
          name: "Mailmunch",
          chain: "mailmunch",
          value: true,
        },
        {
          name: "MakeShopKorea",
          chain: "Makeshop",
          value: true,
        },
        {
          name: "MakeShopKorea",
          chain: "MakeshopLogUniqueId",
          value: true,
        },
        {
          name: "ManyChat",
          chain: "mcwidget",
          value: true,
        },
        {
          name: "Mapbox GL JS",
          chain: "mapboxgl.version",
          value: true,
        },
        {
          name: "Marfeel",
          chain: "marfeel",
          value: true,
        },
        {
          name: "Marionette.js",
          chain: "Marionette",
          value: true,
        },
        {
          name: "Marionette.js",
          chain: "Marionette.VERSION",
          value: true,
        },
        {
          name: "Marked",
          chain: "marked",
          value: true,
        },
        {
          name: "Marketo",
          chain: "Munchkin",
          value: true,
        },
        {
          name: "Marketo Forms",
          chain: "formatMarketoForm",
          value: true,
        },
        {
          name: "Marko",
          chain: "markoComponent",
          value: true,
        },
        {
          name: "Marko",
          chain: "markoSections",
          value: true,
        },
        {
          name: "Marko",
          chain: "markoVars",
          value: true,
        },
        {
          name: "Material Design Lite",
          chain: "MaterialIconToggle",
          value: true,
        },
        {
          name: "MathJax",
          chain: "MathJax",
          value: true,
        },
        {
          name: "MathJax",
          chain: "MathJax.version",
          value: true,
        },
        {
          name: "Matomo Analytics",
          chain: "Matomo",
          value: true,
        },
        {
          name: "Matomo Analytics",
          chain: "Piwik",
          value: true,
        },
        {
          name: "Matomo Analytics",
          chain: "_paq",
          value: true,
        },
        {
          name: "Matomo Tag Manager",
          chain: "MatomoTagManager",
          value: true,
        },
        {
          name: "Mattermost",
          chain: "mm_config",
          value: true,
        },
        {
          name: "Mattermost",
          chain: "mm_current_user_id",
          value: true,
        },
        {
          name: "Mattermost",
          chain: "mm_license",
          value: true,
        },
        {
          name: "Mattermost",
          chain: "mm_user",
          value: true,
        },
        {
          name: "Mautic",
          chain: "MauticTrackingObject",
          value: true,
        },
        {
          name: "Maxemail",
          chain: "Mxm.Basket",
          value: true,
        },
        {
          name: "Maxemail",
          chain: "Mxm.FormHandler",
          value: true,
        },
        {
          name: "Maxemail",
          chain: "Mxm.Tracker",
          value: true,
        },
        {
          name: "Medallia",
          chain: "KAMPYLE_COMMON",
          value: true,
        },
        {
          name: "Medallia",
          chain: "k_track",
          value: true,
        },
        {
          name: "Medallia",
          chain: "kampyle",
          value: true,
        },
        {
          name: "MediaElement.js",
          chain: "mejs",
          value: true,
        },
        {
          name: "MediaElement.js",
          chain: "mejs.version",
          value: true,
        },
        {
          name: "MediaWiki",
          chain: "mw.util.toggleToc",
          value: true,
        },
        {
          name: "MediaWiki",
          chain: "wgTitle",
          value: true,
        },
        {
          name: "MediaWiki",
          chain: "wgVersion",
          value: true,
        },
        {
          name: "Mediavine",
          chain: "$mediavine.web",
          value: true,
        },
        {
          name: "Megagroup CMS.S3",
          chain: "megacounter_key",
          value: true,
        },
        {
          name: "MemberStack",
          chain: "MemberStack",
          value: true,
        },
        {
          name: "Mention Me",
          chain: "MentionMe",
          value: true,
        },
        {
          name: "Menufy Website",
          chain: "Views_Website_Layouts_Footer_Menufy",
          value: true,
        },
        {
          name: "Mermaid",
          chain: "mermaid",
          value: true,
        },
        {
          name: "Meteor",
          chain: "Meteor",
          value: true,
        },
        {
          name: "Meteor",
          chain: "Meteor.release",
          value: true,
        },
        {
          name: "Metrilo",
          chain: "metrilo",
          value: true,
        },
        {
          name: "Metrilo",
          chain: "metriloBotRegexp",
          value: true,
        },
        {
          name: "Metrilo",
          chain: "metriloCookie",
          value: true,
        },
        {
          name: "Mews",
          chain: "Mews",
          value: true,
        },
        {
          name: "Microsoft Advertising",
          chain: "UET",
          value: true,
        },
        {
          name: "Microsoft Advertising",
          chain: "uetq",
          value: true,
        },
        {
          name: "Microsoft Application Insights",
          chain: "appInsights.SeverityLevel",
          value: true,
        },
        {
          name: "Microsoft Application Insights",
          chain: "appInsights.addTelemetryInitializer",
          value: true,
        },
        {
          name: "Microsoft Application Insights",
          chain: "appInsightsSDK",
          value: true,
        },
        {
          name: "Microsoft Clarity",
          chain: "clarity",
          value: true,
        },
        {
          name: "Microsoft SharePoint",
          chain: "SPDesignerProgID",
          value: true,
        },
        {
          name: "Microsoft SharePoint",
          chain: "_spBodyOnLoadCalled",
          value: true,
        },
        {
          name: "MindBody",
          chain: "HealcodeWidget",
          value: true,
        },
        {
          name: "Mint",
          chain: "Mint",
          value: true,
        },
        {
          name: "Miva",
          chain: "MivaVM_API",
          value: true,
        },
        {
          name: "Miva",
          chain: "MivaVM_Version",
          value: true,
        },
        {
          name: "Miva",
          chain: "mivaJS",
          value: true,
        },
        {
          name: "Miva",
          chain: "mivaJS.Page",
          value: true,
        },
        {
          name: "Miva",
          chain: "mivaJS.Product_Code",
          value: true,
        },
        {
          name: "Miva",
          chain: "mivaJS.Product_ID",
          value: true,
        },
        {
          name: "Miva",
          chain: "mivaJS.Screen",
          value: true,
        },
        {
          name: "Miva",
          chain: "mivaJS.Store_Code",
          value: true,
        },
        {
          name: "Mixpanel",
          chain: "mixpanel",
          value: true,
        },
        {
          name: "MoEngage",
          chain: "MOENGAGE_API_KEY",
          value: true,
        },
        {
          name: "MoEngage",
          chain: "Moengage",
          value: true,
        },
        {
          name: "MoEngage",
          chain: "downloadMoengage",
          value: true,
        },
        {
          name: "MoEngage",
          chain: "moengage_object",
          value: true,
        },
        {
          name: "MobX",
          chain: "__mobxGlobal",
          value: true,
        },
        {
          name: "MobX",
          chain: "__mobxGlobals",
          value: true,
        },
        {
          name: "MobX",
          chain: "__mobxInstanceCount",
          value: true,
        },
        {
          name: "Mobify",
          chain: "Mobify",
          value: true,
        },
        {
          name: "MochiKit",
          chain: "MochiKit",
          value: true,
        },
        {
          name: "MochiKit",
          chain: "MochiKit.MochiKit.VERSION",
          value: true,
        },
        {
          name: "Modernizr",
          chain: "Modernizr._version",
          value: true,
        },
        {
          name: "MoinMoin",
          chain: "show_switch2gui",
          value: true,
        },
        {
          name: "Moment.js",
          chain: "moment",
          value: true,
        },
        {
          name: "Moment.js",
          chain: "moment.version",
          value: true,
        },
        {
          name: "Monaco Editor",
          chain: "MonacoEnvironment",
          value: true,
        },
        {
          name: "Monaco Editor",
          chain: "monaco.editor",
          value: true,
        },
        {
          name: "Mono.net",
          chain: "_monoTracker",
          value: true,
        },
        {
          name: "MooTools",
          chain: "MooTools",
          value: true,
        },
        {
          name: "MooTools",
          chain: "MooTools.version",
          value: true,
        },
        {
          name: "Moodle",
          chain: "M.core",
          value: true,
        },
        {
          name: "Moodle",
          chain: "Y.Moodle",
          value: true,
        },
        {
          name: "Mopinion",
          chain: "Pastease",
          value: true,
        },
        {
          name: "Mouse Flow",
          chain: "_mfq",
          value: true,
        },
        {
          name: "Movable Ink",
          chain: "MovableInkTrack",
          value: true,
        },
        {
          name: "Mulberry",
          chain: "mulberry.cta",
          value: true,
        },
        {
          name: "Mulberry",
          chain: "mulberryShop",
          value: true,
        },
        {
          name: "Mustache",
          chain: "Mustache.version",
          value: true,
        },
        {
          name: "Muuri",
          chain: "Muuri",
          value: true,
        },
        {
          name: "My Food Link",
          chain: "Myfoodlink",
          value: true,
        },
        {
          name: "My Food Link",
          chain: "myfoodlink",
          value: true,
        },
        {
          name: "MyBB",
          chain: "MyBB",
          value: true,
        },
        {
          name: "MyBB",
          chain: "MyBBEditor",
          value: true,
        },
        {
          name: "MyLiveChat",
          chain: "MyLiveChat.Version",
          value: true,
        },
        {
          name: "MyWebsite",
          chain: "SystemID",
          value: true,
        },
        {
          name: "mParticle",
          chain: "mParticle",
          value: true,
        },
        {
          name: "mParticle",
          chain: "mParticle.config.snippetVersion",
          value: true,
        },
        {
          name: "math.js",
          chain: "mathjs",
          value: true,
        },
        {
          name: "NSW Design System",
          chain: "NSW.initSite",
          value: true,
        },
        {
          name: "NVD3",
          chain: "nv.addGraph",
          value: true,
        },
        {
          name: "NVD3",
          chain: "nv.version",
          value: true,
        },
        {
          name: "Nacelle",
          chain: "nacelleEventData",
          value: true,
        },
        {
          name: "Nagich",
          chain: "interdeal.version",
          value: true,
        },
        {
          name: "NagishLi",
          chain: "$NagishLi",
          value: true,
        },
        {
          name: "NagishLi",
          chain: "initNagishLi",
          value: true,
        },
        {
          name: "NagishLi",
          chain: "nagishli_commons.version",
          value: true,
        },
        {
          name: "Najva",
          chain: "Najva.identifyEmailSubscriber",
          value: true,
        },
        {
          name: "Narvar",
          chain: "NARVARJS_URL",
          value: true,
        },
        {
          name: "Narvar",
          chain: "narvar",
          value: true,
        },
        {
          name: "Nativo",
          chain: "ntvConfig",
          value: true,
        },
        {
          name: "Naver Maps",
          chain: "naver.maps",
          value: true,
        },
        {
          name: "Neto",
          chain: "NETO",
          value: true,
        },
        {
          name: "Nette Framework",
          chain: "Nette",
          value: true,
        },
        {
          name: "Nette Framework",
          chain: "Nette.version",
          value: true,
        },
        {
          name: "New Relic",
          chain: "NREUM",
          value: true,
        },
        {
          name: "New Relic",
          chain: "newrelic",
          value: true,
        },
        {
          name: "NewStore",
          chain: "highstreetBanner.config",
          value: true,
        },
        {
          name: "Next.js",
          chain: "__NEXT_DATA__",
          value: true,
        },
        {
          name: "Nextsale",
          chain: "NextsaleObject",
          value: true,
        },
        {
          name: "Nicepage",
          chain: "_npAccordionInit",
          value: true,
        },
        {
          name: "Nicepage",
          chain: "_npDialogsInit",
          value: true,
        },
        {
          name: "Norton Shopping Guarantee",
          chain: "DO_NORTON_SHOPPING",
          value: true,
        },
        {
          name: "Nosto",
          chain: "nosto",
          value: true,
        },
        {
          name: "Nosto",
          chain: "nostojs",
          value: true,
        },
        {
          name: "Nukeviet CMS",
          chain: "nv_DigitalClock",
          value: true,
        },
        {
          name: "Nukeviet CMS",
          chain: "nv_is_change_act_confirm",
          value: true,
        },
        {
          name: "Nuqlium",
          chain: "nuqliumObject",
          value: true,
        },
        {
          name: "Nuvemshop",
          chain: "LS.store.url",
          value: true,
        },
        {
          name: "Nuvemshop",
          chain: "nuvemShopIdProduct",
          value: true,
        },
        {
          name: "Nuxt.js",
          chain: "$nuxt",
          value: true,
        },
        {
          name: "OXID eShop",
          chain: "oxCookieNote",
          value: true,
        },
        {
          name: "OXID eShop",
          chain: "oxInputValidator",
          value: true,
        },
        {
          name: "OXID eShop",
          chain: "oxLoginBox",
          value: true,
        },
        {
          name: "OXID eShop",
          chain: "oxMiniBasket",
          value: true,
        },
        {
          name: "OXID eShop",
          chain: "oxModalPopup",
          value: true,
        },
        {
          name: "OXID eShop",
          chain: "oxTopMenu",
          value: true,
        },
        {
          name: "Occasion",
          chain: "OCCSN.stack",
          value: true,
        },
        {
          name: "Occasion",
          chain: "occsnMerchantToken",
          value: true,
        },
        {
          name: "Ochanoko",
          chain: "ocnkProducts",
          value: true,
        },
        {
          name: "Octane AI",
          chain: "OctaneConfig",
          value: true,
        },
        {
          name: "Octane AI",
          chain: "oct8neApi",
          value: true,
        },
        {
          name: "Okendo",
          chain: "okeReviewsWidgetOnInit",
          value: true,
        },
        {
          name: "Okendo",
          chain: "okeWidgetControlInit",
          value: true,
        },
        {
          name: "Okendo",
          chain: "okendoReviews",
          value: true,
        },
        {
          name: "Okta",
          chain: "OktaAuth",
          value: true,
        },
        {
          name: "Okta",
          chain: "isOktaEnabled",
          value: true,
        },
        {
          name: "Okta",
          chain: "oktaCurrentSessionUrl",
          value: true,
        },
        {
          name: "Olapic",
          chain: "olapic",
          value: true,
        },
        {
          name: "Olapic",
          chain: "olapic.version",
          value: true,
        },
        {
          name: "Ometria",
          chain: "AddOmetriaBasket",
          value: true,
        },
        {
          name: "Ometria",
          chain: "AddOmetriaIdentify",
          value: true,
        },
        {
          name: "Ometria",
          chain: "ometria",
          value: true,
        },
        {
          name: "Omise",
          chain: "Omise",
          value: true,
        },
        {
          name: "Omise",
          chain: "OmiseCard",
          value: true,
        },
        {
          name: "Omniconvert",
          chain: "_omni",
          value: true,
        },
        {
          name: "Omnisend",
          chain: "_omnisend",
          value: true,
        },
        {
          name: "OneAPM",
          chain: "BWEUM",
          value: true,
        },
        {
          name: "OneAll",
          chain: "oa_social_login",
          value: true,
        },
        {
          name: "OneSignal",
          chain: "OneSignal",
          value: true,
        },
        {
          name: "OneSignal",
          chain: "__oneSignalSdkLoadCount",
          value: true,
        },
        {
          name: "OneStat",
          chain: "OneStat_Pageview",
          value: true,
        },
        {
          name: "Open AdStream",
          chain: "OAS_AD",
          value: true,
        },
        {
          name: "Open Web Analytics",
          chain: "OWA.config.baseUrl",
          value: true,
        },
        {
          name: "Open Web Analytics",
          chain: "owa_baseUrl",
          value: true,
        },
        {
          name: "Open Web Analytics",
          chain: "owa_cmds",
          value: true,
        },
        {
          name: "OpenElement",
          chain: "OE.GETools",
          value: true,
        },
        {
          name: "OpenElement",
          chain: "OEConfWEMenu",
          value: true,
        },
        {
          name: "OpenLayers",
          chain: "OpenLayers.VERSION_NUMBER",
          value: true,
        },
        {
          name: "OpenLayers",
          chain: "ol.CanvasMap",
          value: true,
        },
        {
          name: "OpenUI5",
          chain: "sap.ui.version",
          value: true,
        },
        {
          name: "OpenWeb",
          chain: "SPOTIM.initConversation",
          value: true,
        },
        {
          name: "OpenX",
          chain: "openx.name",
          value: true,
        },
        {
          name: "OpinionLab",
          chain: "OOo.Browser",
          value: true,
        },
        {
          name: "OpinionLab",
          chain: "OOo.version",
          value: true,
        },
        {
          name: "Optimise",
          chain: "OMID",
          value: true,
        },
        {
          name: "Optimizely",
          chain: "optimizely",
          value: true,
        },
        {
          name: "Optimizely",
          chain: "optimizelyClient.clientVersion",
          value: true,
        },
        {
          name: "Optimizely",
          chain: "optimizelySdk",
          value: true,
        },
        {
          name: "Optimove",
          chain: "optimoveSDK",
          value: true,
        },
        {
          name: "Optimove",
          chain: "optimoveSDKVersion",
          value: true,
        },
        {
          name: "OptinMonster",
          chain: "OptinMonsterApp",
          value: true,
        },
        {
          name: "Oracle BlueKai",
          chain: "bluekaiLoaded",
          value: true,
        },
        {
          name: "Oracle Maxymiser",
          chain: "maxy",
          value: true,
        },
        {
          name: "Oracle Maxymiser",
          chain: "mmsystem.getConfig",
          value: true,
        },
        {
          name: "Orankl",
          chain: "Orankl",
          value: true,
        },
        {
          name: "Orankl",
          chain: "oranklInit",
          value: true,
        },
        {
          name: "OrderYOYO",
          chain: "SmartBannerOY",
          value: true,
        },
        {
          name: "Oribi",
          chain: "ORIBI",
          value: true,
        },
        {
          name: "Osano",
          chain: "Osano",
          value: true,
        },
        {
          name: "OutSystems",
          chain: "OutSystemsDebugger",
          value: true,
        },
        {
          name: "OutSystems",
          chain: "outsystems",
          value: true,
        },
        {
          name: "Outbrain",
          chain: "OB_ADV_ID",
          value: true,
        },
        {
          name: "Outbrain",
          chain: "OB_releaseVer",
          value: true,
        },
        {
          name: "Outbrain",
          chain: "OutbrainPermaLink",
          value: true,
        },
        {
          name: "Outbrain",
          chain: "obApi.version",
          value: true,
        },
        {
          name: "Outlook Web App",
          chain: "IsOwaPremiumBrowser",
          value: true,
        },
        {
          name: "PCRecruiter",
          chain: "pcrbaseurl",
          value: true,
        },
        {
          name: "PCRecruiter",
          chain: "pcrdialog",
          value: true,
        },
        {
          name: "PCRecruiter",
          chain: "pcrframeoptions",
          value: true,
        },
        {
          name: "PDF.js",
          chain: "PDFJS",
          value: true,
        },
        {
          name: "PDF.js",
          chain: "PDFJS.version",
          value: true,
        },
        {
          name: "PDF.js",
          chain: "_pdfjsCompatibilityChecked",
          value: true,
        },
        {
          name: "PDF.js",
          chain: "pdfjs-dist/build/pdf.version",
          value: true,
        },
        {
          name: "PDF.js",
          chain: "pdfjsDistBuildPdf.version",
          value: true,
        },
        {
          name: "PDF.js",
          chain: "pdfjsLib.version",
          value: true,
        },
        {
          name: "PHPDebugBar",
          chain: "PhpDebugBar",
          value: true,
        },
        {
          name: "PHPDebugBar",
          chain: "phpdebugbar",
          value: true,
        },
        {
          name: "PIXIjs",
          chain: "PIXI",
          value: true,
        },
        {
          name: "PIXIjs",
          chain: "PIXI.VERSION",
          value: true,
        },
        {
          name: "POWR",
          chain: "POWR_RECEIVERS",
          value: true,
        },
        {
          name: "POWR",
          chain: "loadPowr",
          value: true,
        },
        {
          name: "PWA Studio",
          chain: "__fetchLocaleData__",
          value: true,
        },
        {
          name: "PWA Studio",
          chain: "fetchRootComponent",
          value: true,
        },
        {
          name: "Pace",
          chain: "pacePay",
          value: true,
        },
        {
          name: "Paddle",
          chain: "Paddle.Checkout",
          value: true,
        },
        {
          name: "Paddle",
          chain: "PaddleScriptLocation",
          value: true,
        },
        {
          name: "PagSeguro",
          chain: "PagSeguroDirectPayment",
          value: true,
        },
        {
          name: "PagSeguro",
          chain: "_PagSeguroDirectPayment",
          value: true,
        },
        {
          name: "Pagar.me",
          chain: "PagarMeCheckout",
          value: true,
        },
        {
          name: "Pagar.me",
          chain: "pagarme.balance",
          value: true,
        },
        {
          name: "PageFly",
          chain: "__pagefly_setting__",
          value: true,
        },
        {
          name: "Pagevamp",
          chain: "Pagevamp",
          value: true,
        },
        {
          name: "Paidy",
          chain: "Constants.paidy",
          value: true,
        },
        {
          name: "Pardot",
          chain: "piAId",
          value: true,
        },
        {
          name: "Pardot",
          chain: "piCId",
          value: true,
        },
        {
          name: "Pardot",
          chain: "piHostname",
          value: true,
        },
        {
          name: "Pardot",
          chain: "piProtocol",
          value: true,
        },
        {
          name: "Pardot",
          chain: "piTracker",
          value: true,
        },
        {
          name: "ParkingCrew",
          chain: "pcrewAdloaded",
          value: true,
        },
        {
          name: "Parse.ly",
          chain: "PARSELY",
          value: true,
        },
        {
          name: "Partial.ly",
          chain: "PartiallyButton",
          value: true,
        },
        {
          name: "Partytown",
          chain: "partytown.lib",
          value: true,
        },
        {
          name: "Pattern by Etsy",
          chain: "Etsy",
          value: true,
        },
        {
          name: "Pay It Later",
          chain: "payitlater",
          value: true,
        },
        {
          name: "PayBright",
          chain: "_paybright_config",
          value: true,
        },
        {
          name: "PayPal",
          chain: "PAYPAL",
          value: true,
        },
        {
          name: "PayPal",
          chain: "__paypal_global__",
          value: true,
        },
        {
          name: "PayPal",
          chain: "checkout.enabledpayments.paypal",
          value: true,
        },
        {
          name: "PayPal",
          chain: "enablePaypal",
          value: true,
        },
        {
          name: "PayPal",
          chain: "paypal",
          value: true,
        },
        {
          name: "PayPal",
          chain: "paypalClientId",
          value: true,
        },
        {
          name: "PayPal",
          chain: "paypalJs",
          value: true,
        },
        {
          name: "PayWhirl",
          chain: "paywhirlForShopifySettings",
          value: true,
        },
        {
          name: "Peek",
          chain: "Peek",
          value: true,
        },
        {
          name: "Peek",
          chain: "PeekJsApi",
          value: true,
        },
        {
          name: "Peek",
          chain: "_peekConfig",
          value: true,
        },
        {
          name: "Pendo",
          chain: "pendo.HOST",
          value: true,
        },
        {
          name: "Pendo",
          chain: "pendo.VERSION",
          value: true,
        },
        {
          name: "Pepperjam",
          chain: "Pepperjam",
          value: true,
        },
        {
          name: "Pepperjam",
          chain: "PepperjamTracking",
          value: true,
        },
        {
          name: "PerimeterX",
          chain: "_pxAppId",
          value: true,
        },
        {
          name: "Permutive",
          chain: "permutive",
          value: true,
        },
        {
          name: "PersonaClick",
          chain: "personaclick",
          value: true,
        },
        {
          name: "PersonaClick",
          chain: "personaclick_callback",
          value: true,
        },
        {
          name: "Phaser",
          chain: "Phaser",
          value: true,
        },
        {
          name: "Phaser",
          chain: "Phaser.VERSION",
          value: true,
        },
        {
          name: "Phoenix",
          chain: "Phoenix",
          value: true,
        },
        {
          name: "Piano",
          chain: "PianoESPConfig",
          value: true,
        },
        {
          name: "Piano",
          chain: "gciDataPiano",
          value: true,
        },
        {
          name: "Pico",
          chain: "Pico",
          value: true,
        },
        {
          name: "Picreel",
          chain: "picreel",
          value: true,
        },
        {
          name: "Picturepark",
          chain: "pictureparkConfiguration",
          value: true,
        },
        {
          name: "Pinterest Conversion Tag",
          chain: "pintrk",
          value: true,
        },
        {
          name: "Pipedrive",
          chain: "LeadBooster",
          value: true,
        },
        {
          name: "Pixlee",
          chain: "Pixlee",
          value: true,
        },
        {
          name: "Pixlee",
          chain: "Pixlee_Analytics",
          value: true,
        },
        {
          name: "Pixnet",
          chain: "pix.MIB",
          value: true,
        },
        {
          name: "Plausible",
          chain: "plausible",
          value: true,
        },
        {
          name: "Pligg",
          chain: "pligg_",
          value: true,
        },
        {
          name: "Plotly",
          chain: "Plotly.version",
          value: true,
        },
        {
          name: "Plyr",
          chain: "Plyr",
          value: true,
        },
        {
          name: "Po.st",
          chain: "pwidget_config",
          value: true,
        },
        {
          name: "Podia",
          chain: "Podia.Checkout",
          value: true,
        },
        {
          name: "Podium",
          chain: "PodiumWebChat",
          value: true,
        },
        {
          name: "Podium",
          chain: "podiumWebsiteWidgetLoaded",
          value: true,
        },
        {
          name: "Pojo.me",
          chain: "PojoA11yOptions",
          value: true,
        },
        {
          name: "Polymer",
          chain: "Polymer.version",
          value: true,
        },
        {
          name: "Popmenu",
          chain: "POPMENU_CLIENT",
          value: true,
        },
        {
          name: "Popmenu",
          chain: "popmenuHydrated",
          value: true,
        },
        {
          name: "Popper",
          chain: "Popper.Defaults",
          value: true,
        },
        {
          name: "Popper",
          chain: "createPopper",
          value: true,
        },
        {
          name: "Post Affiliate Pro",
          chain: "PostAffAction",
          value: true,
        },
        {
          name: "Post Affiliate Pro",
          chain: "PostAffCookie",
          value: true,
        },
        {
          name: "Post Affiliate Pro",
          chain: "PostAffInfo",
          value: true,
        },
        {
          name: "Post Affiliate Pro",
          chain: "PostAffTracker",
          value: true,
        },
        {
          name: "Posterous",
          chain: "Posterous",
          value: true,
        },
        {
          name: "Postpay",
          chain: "PostpayJsConfig",
          value: true,
        },
        {
          name: "Postpay",
          chain: "postpay",
          value: true,
        },
        {
          name: "Postpay",
          chain: "wc_postpay_init_params",
          value: true,
        },
        {
          name: "Postscript",
          chain: "Postscript.isSubscriberInputChecked",
          value: true,
        },
        {
          name: "Postscript",
          chain: "postscript.getSubscriberId",
          value: true,
        },
        {
          name: "PowerReviews",
          chain: "POWERREVIEWS",
          value: true,
        },
        {
          name: "Prebid",
          chain: "PREBID_TIMEOUT",
          value: true,
        },
        {
          name: "Prebid",
          chain: "pbjs",
          value: true,
        },
        {
          name: "Prediggo",
          chain: "Prediggo",
          value: true,
        },
        {
          name: "Prediggo",
          chain: "PrediggoSearchFormExternalAc",
          value: true,
        },
        {
          name: "Prefix-Free",
          chain: "PrefixFree",
          value: true,
        },
        {
          name: "PrestaShop",
          chain: "freeProductTranslation",
          value: true,
        },
        {
          name: "PrestaShop",
          chain: "prestashop",
          value: true,
        },
        {
          name: "PrestaShop",
          chain: "priceDisplayMethod",
          value: true,
        },
        {
          name: "PrestaShop",
          chain: "priceDisplayPrecision",
          value: true,
        },
        {
          name: "PrestaShop",
          chain: "rcAnalyticsEvents.eventPrestashopCheckout",
          value: true,
        },
        {
          name: "PriceSpider",
          chain: "PriceSpider.version",
          value: true,
        },
        {
          name: "Primis",
          chain: "SekindoNativeSkinApi",
          value: true,
        },
        {
          name: "Primis",
          chain: "sekindoDisplayedPlacement",
          value: true,
        },
        {
          name: "Primis",
          chain: "sekindoFlowingPlayerOn",
          value: true,
        },
        {
          name: "Prism",
          chain: "Prism",
          value: true,
        },
        {
          name: "Privy",
          chain: "Privy",
          value: true,
        },
        {
          name: "Privy",
          chain: "PrivyWidget",
          value: true,
        },
        {
          name: "Privy",
          chain: "privySettings",
          value: true,
        },
        {
          name: "Profitwell",
          chain: "profitwell",
          value: true,
        },
        {
          name: "Project Wonderful",
          chain: "pw_adloader",
          value: true,
        },
        {
          name: "PromoBuilding",
          chain: "promoApi",
          value: true,
        },
        {
          name: "PromoBuilding",
          chain: "promoDomain",
          value: true,
        },
        {
          name: "PromoBuilding",
          chain: "promoIsOver",
          value: true,
        },
        {
          name: "PromoBuilding",
          chain: "promoStart",
          value: true,
        },
        {
          name: "Prototype",
          chain: "Prototype.Version",
          value: true,
        },
        {
          name: "Protovis",
          chain: "protovis",
          value: true,
        },
        {
          name: "Proximis Unified Commerce",
          chain: "__change",
          value: true,
        },
        {
          name: "PubGuru",
          chain: "pg.version",
          value: true,
        },
        {
          name: "Pure Chat",
          chain: "PCWidget",
          value: true,
        },
        {
          name: "Pure Chat",
          chain: "purechatApi",
          value: true,
        },
        {
          name: "PureCars",
          chain: "_pureCars",
          value: true,
        },
        {
          name: "parcel",
          chain: "parcelRequire",
          value: true,
        },
        {
          name: "particles.js",
          chain: "particlesJS",
          value: true,
        },
        {
          name: "phpBB",
          chain: "phpbb",
          value: true,
        },
        {
          name: "phpBB",
          chain: "style_cookie_settings",
          value: true,
        },
        {
          name: "phpCMS",
          chain: "phpcms",
          value: true,
        },
        {
          name: "phpMyAdmin",
          chain: "pma_absolute_uri",
          value: true,
        },
        {
          name: "pinoox",
          chain: "pinoox",
          value: true,
        },
        {
          name: "prettyPhoto",
          chain: "pp_alreadyInitialized",
          value: true,
        },
        {
          name: "prettyPhoto",
          chain: "pp_descriptions",
          value: true,
        },
        {
          name: "prettyPhoto",
          chain: "pp_images",
          value: true,
        },
        {
          name: "prettyPhoto",
          chain: "pp_titles",
          value: true,
        },
        {
          name: "punBB",
          chain: "PUNBB",
          value: true,
        },
        {
          name: "Q4",
          chain: "q4App.a11yAnnouncement",
          value: true,
        },
        {
          name: "Q4",
          chain: "q4Defaults.fancySignup",
          value: true,
        },
        {
          name: "Qualaroo",
          chain: "QUALAROO_DNT",
          value: true,
        },
        {
          name: "Qualtrics",
          chain: "QSI.ClientSideTargeting",
          value: true,
        },
        {
          name: "Quantcast Measure",
          chain: "quantserve",
          value: true,
        },
        {
          name: "Qubit",
          chain: "__qubit",
          value: true,
        },
        {
          name: "Qubit",
          chain: "onQubitReady",
          value: true,
        },
        {
          name: "Queue-it",
          chain: "QueueIt.Javascript.Version",
          value: true,
        },
        {
          name: "Queue-it",
          chain: "queueit_clientside_config",
          value: true,
        },
        {
          name: "Quicklink",
          chain: "drupalSettings.quicklink",
          value: true,
        },
        {
          name: "Quicklink",
          chain: "quicklink",
          value: true,
        },
        {
          name: "Quill",
          chain: "Quill",
          value: true,
        },
        {
          name: "Quora Pixel",
          chain: "qp.qp",
          value: true,
        },
        {
          name: "RD Station",
          chain: "RDStation",
          value: true,
        },
        {
          name: "RDoc",
          chain: "rdoc_rel_prefix",
          value: true,
        },
        {
          name: "REDAXO",
          chain: "redaxo",
          value: true,
        },
        {
          name: "RainLoop",
          chain: "rainloop",
          value: true,
        },
        {
          name: "RainLoop",
          chain: "rainloopI18N",
          value: true,
        },
        {
          name: "Rakuten",
          chain: "rakutenRanMID",
          value: true,
        },
        {
          name: "Rakuten",
          chain: "rakutenSource",
          value: true,
        },
        {
          name: "Rakuten Digital Commerce",
          chain: "RakutenApplication",
          value: true,
        },
        {
          name: "Raphael",
          chain: "Raphael.version",
          value: true,
        },
        {
          name: "RapidSpike",
          chain: "rspike_timing",
          value: true,
        },
        {
          name: "Raptor",
          chain: "Raptor",
          value: true,
        },
        {
          name: "Raptor",
          chain: "onRaptorLoaded",
          value: true,
        },
        {
          name: "Raptor",
          chain: "raptorBase64",
          value: true,
        },
        {
          name: "Raychat",
          chain: "Raychat",
          value: true,
        },
        {
          name: "Raygun",
          chain: "Raygun",
          value: true,
        },
        {
          name: "Raygun",
          chain: "raygunEnabled",
          value: true,
        },
        {
          name: "Raygun",
          chain: "raygunFactory",
          value: true,
        },
        {
          name: "Rayo",
          chain: "Rayo",
          value: true,
        },
        {
          name: "Razorpay",
          chain: "Razorpay",
          value: true,
        },
        {
          name: "Re:amaze",
          chain: "reamaze.version",
          value: true,
        },
        {
          name: "ReDoc",
          chain: "Redoc.version",
          value: true,
        },
        {
          name: "React",
          chain: "React.version",
          value: true,
        },
        {
          name: "React",
          chain: "ReactOnRails",
          value: true,
        },
        {
          name: "React",
          chain: "__REACT_ON_RAILS_EVENT_HANDLERS_RAN_ONCE__",
          value: true,
        },
        {
          name: "Rebuy",
          chain: "rebuyConfig",
          value: true,
        },
        {
          name: "Recart",
          chain: "__recart",
          value: true,
        },
        {
          name: "Recart",
          chain: "recart",
          value: true,
        },
        {
          name: "Recharge",
          chain: "ReChargeWidget",
          value: true,
        },
        {
          name: "Recruitee",
          chain: "RtApp.mapBoxToken",
          value: true,
        },
        {
          name: "Recurly",
          chain: "recurly.version",
          value: true,
        },
        {
          name: "RedCart",
          chain: "RC_SHOP_ID",
          value: true,
        },
        {
          name: "Reddit",
          chain: "reddit",
          value: true,
        },
        {
          name: "Reevoo",
          chain: "ReevooApi",
          value: true,
        },
        {
          name: "Reflektion",
          chain: "RFK_DEPLOY_TIME",
          value: true,
        },
        {
          name: "Reflektion",
          chain: "RfkParams",
          value: true,
        },
        {
          name: "Reinvigorate",
          chain: "reinvigorate",
          value: true,
        },
        {
          name: "Remix",
          chain: "__remixContext",
          value: true,
        },
        {
          name: "RequireJS",
          chain: "requirejs.version",
          value: true,
        },
        {
          name: "Resengo",
          chain: "wpJsonpResengoReservationWidget",
          value: true,
        },
        {
          name: "Resmio",
          chain: "ResmioButton",
          value: true,
        },
        {
          name: "ResponsiveVoice",
          chain: "responsiveVoice.version",
          value: true,
        },
        {
          name: "Resy",
          chain: "resyWidget",
          value: true,
        },
        {
          name: "Retail Rocket",
          chain: "retailrocket",
          value: true,
        },
        {
          name: "Retail Rocket",
          chain: "rrAddToBasket",
          value: true,
        },
        {
          name: "Retail Rocket",
          chain: "rrApiOnReady",
          value: true,
        },
        {
          name: "Retail Rocket",
          chain: "rrLibrary",
          value: true,
        },
        {
          name: "Retail Rocket",
          chain: "rrPartnerId",
          value: true,
        },
        {
          name: "RevLifter",
          chain: "RevLifterObject",
          value: true,
        },
        {
          name: "RevLifter",
          chain: "revlifter",
          value: true,
        },
        {
          name: "Reveal.js",
          chain: "Reveal.VERSION",
          value: true,
        },
        {
          name: "ReviewSolicitors",
          chain: "rs.getWidgetHtml",
          value: true,
        },
        {
          name: "Rewardful",
          chain: "Rewardful",
          value: true,
        },
        {
          name: "RichRelevance",
          chain: "RR.U",
          value: true,
        },
        {
          name: "RichRelevance",
          chain: "rr_v",
          value: true,
        },
        {
          name: "Rickshaw",
          chain: "Rickshaw",
          value: true,
        },
        {
          name: "RightJS",
          chain: "RightJS",
          value: true,
        },
        {
          name: "Riot",
          chain: "riot",
          value: true,
        },
        {
          name: "Riskified",
          chain: "RISKX",
          value: true,
        },
        {
          name: "Riskified",
          chain: "riskifiedBeaconLoad",
          value: true,
        },
        {
          name: "Robin",
          chain: "_robin_getRobinJs",
          value: true,
        },
        {
          name: "Robin",
          chain: "robin_settings",
          value: true,
        },
        {
          name: "Robin",
          chain: "robin_storage_settings",
          value: true,
        },
        {
          name: "Rockerbox",
          chain: "RB.source",
          value: true,
        },
        {
          name: "Rocket.Chat",
          chain: "RocketChat.livechat",
          value: true,
        },
        {
          name: "Rotic",
          chain: "Rotic.setting",
          value: true,
        },
        {
          name: "RoundCube",
          chain: "rcmail",
          value: true,
        },
        {
          name: "RoundCube",
          chain: "roundcube",
          value: true,
        },
        {
          name: "Route",
          chain: "Routeapp",
          value: true,
        },
        {
          name: "Ruby Receptionists",
          chain: "rubyApi",
          value: true,
        },
        {
          name: "Ruby on Rails",
          chain: "ReactOnRails",
          value: true,
        },
        {
          name: "Ruby on Rails",
          chain: "__REACT_ON_RAILS_EVENT_HANDLERS_RAN_ONCE__",
          value: true,
        },
        {
          name: "Rudderstack",
          chain: "rudderanalytics",
          value: true,
        },
        {
          name: "RxJS",
          chain: "Rx.CompositeDisposable",
          value: true,
        },
        {
          name: "RxJS",
          chain: "Rx.Symbol",
          value: true,
        },
        {
          name: "Ryviu",
          chain: "ryviu_global_settings",
          value: true,
        },
        {
          name: "reCAPTCHA",
          chain: "Recaptcha",
          value: true,
        },
        {
          name: "reCAPTCHA",
          chain: "recaptcha",
          value: true,
        },
        {
          name: "SALESmanago",
          chain: "SalesmanagoObject",
          value: true,
        },
        {
          name: "SAP Commerce Cloud",
          chain: "ACC.config.commonResourcePath",
          value: true,
        },
        {
          name: "SAP Commerce Cloud",
          chain: "ACC.config.rootPath",
          value: true,
        },
        {
          name: "SAP Commerce Cloud",
          chain: "ACC.config.themeResourcePath",
          value: true,
        },
        {
          name: "SAP Commerce Cloud",
          chain: "smartedit",
          value: true,
        },
        {
          name: "SEMrush",
          chain: "SEMRUSH",
          value: true,
        },
        {
          name: "SHE Media",
          chain: "SheMedia",
          value: true,
        },
        {
          name: "SHE Media",
          chain: "blogherads.adq",
          value: true,
        },
        {
          name: "SMF",
          chain: "smf_",
          value: true,
        },
        {
          name: "SMSBump",
          chain: "SMSBumpForm",
          value: true,
        },
        {
          name: "SWFObject",
          chain: "SWFObject",
          value: true,
        },
        {
          name: "SaaSquatch",
          chain: "SAASQUATCH_TENANT_ALIAS",
          value: true,
        },
        {
          name: "SaaSquatch",
          chain: "squatch.CtaWidget",
          value: true,
        },
        {
          name: "SaaSquatch",
          chain: "squatchQuery",
          value: true,
        },
        {
          name: "Sailthru",
          chain: "Sailthru",
          value: true,
        },
        {
          name: "Sailthru",
          chain: "sailthruIdentify",
          value: true,
        },
        {
          name: "Sailthru",
          chain: "sailthruNewsletterRegistration",
          value: true,
        },
        {
          name: "Sailthru",
          chain: "trackSailthruUser",
          value: true,
        },
        {
          name: "Saleor",
          chain: "___NEXT_DATA__.runtimeConfig.SALEOR",
          value: true,
        },
        {
          name: "SalesFire",
          chain: "loadSalesfire",
          value: true,
        },
        {
          name: "Salesfloor",
          chain: "NMConfig.SALESFLOOR_ENV",
          value: true,
        },
        {
          name: "Salesfloor",
          chain: "salesFloorHost",
          value: true,
        },
        {
          name: "Salesforce",
          chain: "SFDCApp",
          value: true,
        },
        {
          name: "Salesforce",
          chain: "SFDCCmp",
          value: true,
        },
        {
          name: "Salesforce",
          chain: "SFDCPage",
          value: true,
        },
        {
          name: "Salesforce",
          chain: "SFDCSessionVars",
          value: true,
        },
        {
          name: "Salesforce Audience Studio",
          chain: "Krux",
          value: true,
        },
        {
          name: "Salesforce Audience Studio",
          chain: "updateKruxCookie",
          value: true,
        },
        {
          name: "Salesforce Commerce Cloud",
          chain: "dwAnalytics",
          value: true,
        },
        {
          name: "Salesforce Interaction Studio",
          chain: "Evergage",
          value: true,
        },
        {
          name: "Salesforce Interaction Studio",
          chain: "evergageHideSections",
          value: true,
        },
        {
          name: "Salesforce Service Cloud",
          chain: "embedded_svc",
          value: true,
        },
        {
          name: "Sana Commerce",
          chain: "Sana.UI",
          value: true,
        },
        {
          name: "Sapper",
          chain: "__SAPPER__",
          value: true,
        },
        {
          name: "Satori",
          chain: "SatoriForm",
          value: true,
        },
        {
          name: "Sazito",
          chain: "Sazito",
          value: true,
        },
        {
          name: "Scorpion",
          chain: "Process.UserData",
          value: true,
        },
        {
          name: "SeQura",
          chain: "Sequra",
          value: true,
        },
        {
          name: "SeQura",
          chain: "SequraConfiguration",
          value: true,
        },
        {
          name: "SeQura",
          chain: "sequraProducts",
          value: true,
        },
        {
          name: "Searchanise",
          chain: "Searchanise",
          value: true,
        },
        {
          name: "Searchspring",
          chain: "SearchSpring",
          value: true,
        },
        {
          name: "Searchspring",
          chain: "SearchSpringConf",
          value: true,
        },
        {
          name: "Searchspring",
          chain: "SearchSpringInit",
          value: true,
        },
        {
          name: "Segmanta",
          chain: "SEGMANTA__DYNAMIC_EMBED_CONFIG",
          value: true,
        },
        {
          name: "Segmanta",
          chain: "SEGMANTA__USER_METADATA",
          value: true,
        },
        {
          name: "Segment",
          chain: "analytics.VERSION",
          value: true,
        },
        {
          name: "Segment Consent Manager ",
          chain: "consentManager.version",
          value: true,
        },
        {
          name: "SegmentStream",
          chain: "segmentstream.VERSION",
          value: true,
        },
        {
          name: "Select2",
          chain: "jQuery.fn.select2",
          value: true,
        },
        {
          name: "Sellacious",
          chain: "SellaciousViewCartAIO",
          value: true,
        },
        {
          name: "Sellfy",
          chain: "_sellfy.version",
          value: true,
        },
        {
          name: "Sellingo",
          chain: "sellingoQuantityCalc",
          value: true,
        },
        {
          name: "Sellsy",
          chain: "SellsySnippet",
          value: true,
        },
        {
          name: "Sendinblue",
          chain: "sendinblue",
          value: true,
        },
        {
          name: "Sensors Data",
          chain: "sa.lib_version",
          value: true,
        },
        {
          name: "Sensors Data",
          chain: "sensorsdata_app_js_bridge_call_js",
          value: true,
        },
        {
          name: "Sentry",
          chain: "Raven.config",
          value: true,
        },
        {
          name: "Sentry",
          chain: "Sentry",
          value: true,
        },
        {
          name: "Sentry",
          chain: "Sentry.SDK_VERSION",
          value: true,
        },
        {
          name: "Sentry",
          chain: "__SENTRY__",
          value: true,
        },
        {
          name: "Sentry",
          chain: "ravenOptions.whitelistUrls",
          value: true,
        },
        {
          name: "Service Management Group",
          chain: "smgETrackParams",
          value: true,
        },
        {
          name: "Service Provider Pro",
          chain: "sppOrderform",
          value: true,
        },
        {
          name: "Setmore",
          chain: "setmorePopup",
          value: true,
        },
        {
          name: "SevenRooms",
          chain: "SevenroomsWidget",
          value: true,
        },
        {
          name: "Sezzle",
          chain: "AwesomeSezzle",
          value: true,
        },
        {
          name: "Sezzle",
          chain: "renderSezzleIframe",
          value: true,
        },
        {
          name: "Sezzle",
          chain: "sezzle_footer_images",
          value: true,
        },
        {
          name: "Shaka Player",
          chain: "shaka.Player.version",
          value: true,
        },
        {
          name: "Shapecss",
          chain: "Shapecss",
          value: true,
        },
        {
          name: "ShareThis",
          chain: "SHARETHIS",
          value: true,
        },
        {
          name: "ShareThis",
          chain: "__sharethis__docReady",
          value: true,
        },
        {
          name: "SharpSpring",
          chain: "sharpspring_tracking_installed",
          value: true,
        },
        {
          name: "SharpSpring Ads",
          chain: "_pa",
          value: true,
        },
        {
          name: "ShellInABox",
          chain: "ShellInABox",
          value: true,
        },
        {
          name: "Shiny",
          chain: "Shiny.addCustomMessageHandler",
          value: true,
        },
        {
          name: "ShinyStat",
          chain: "SSsdk",
          value: true,
        },
        {
          name: "Shogun",
          chain: "shogunAnalytics",
          value: true,
        },
        {
          name: "Shopatron",
          chain: "shptUrl",
          value: true,
        },
        {
          name: "Shopcada",
          chain: "Shopcada",
          value: true,
        },
        {
          name: "Shoper",
          chain: "shoper",
          value: true,
        },
        {
          name: "Shopfa",
          chain: "shopfa",
          value: true,
        },
        {
          name: "Shopify",
          chain: "Shopify",
          value: true,
        },
        {
          name: "Shopify",
          chain: "ShopifyAPI",
          value: true,
        },
        {
          name: "Shopline",
          chain: "shoplytics",
          value: true,
        },
        {
          name: "Shoplo",
          chain: "SHOPLOAJAX",
          value: true,
        },
        {
          name: "Shoppy",
          chain: "Shoppy",
          value: true,
        },
        {
          name: "Shoprunner",
          chain: "_shoprunner_com",
          value: true,
        },
        {
          name: "Shoprunner",
          chain: "_shoprunner_com.version",
          value: true,
        },
        {
          name: "Shoptet",
          chain: "shoptet",
          value: true,
        },
        {
          name: "Shuttle",
          chain: "Shuttle.FrontApp",
          value: true,
        },
        {
          name: "Sift",
          chain: "__siftFlashCB",
          value: true,
        },
        {
          name: "Sift",
          chain: "_sift",
          value: true,
        },
        {
          name: "Signal",
          chain: "signalData",
          value: true,
        },
        {
          name: "Signifyd",
          chain: "SIGNIFYD_GLOBAL",
          value: true,
        },
        {
          name: "Simon",
          chain: "SimonData",
          value: true,
        },
        {
          name: "Simple Analytics",
          chain: "sa_event",
          value: true,
        },
        {
          name: "Simplero",
          chain: "Simplero",
          value: true,
        },
        {
          name: "Sirdata",
          chain: "SDDAN.cmp",
          value: true,
        },
        {
          name: "Sirdata",
          chain: "Sddan.cmpLoaded",
          value: true,
        },
        {
          name: "Site Search 360",
          chain: "ss360Config",
          value: true,
        },
        {
          name: "Site24x7",
          chain: "S247RumQueueImpl",
          value: true,
        },
        {
          name: "Site24x7",
          chain: "s247RUM",
          value: true,
        },
        {
          name: "Site24x7",
          chain: "site24x7RumError",
          value: true,
        },
        {
          name: "Site24x7",
          chain: "site24x7rum",
          value: true,
        },
        {
          name: "SiteSpect",
          chain: "ss_dom_var",
          value: true,
        },
        {
          name: "SiteVibes",
          chain: "SiteVibesManager",
          value: true,
        },
        {
          name: "Skai",
          chain: "Ktag_Constants",
          value: true,
        },
        {
          name: "Skedify",
          chain: "Skedify.Plugin.version",
          value: true,
        },
        {
          name: "Skimlinks",
          chain: "__SKIM_JS_GLOBAL__",
          value: true,
        },
        {
          name: "Skimlinks",
          chain: "addSkimlinks",
          value: true,
        },
        {
          name: "Skimlinks",
          chain: "skimlinksAPI",
          value: true,
        },
        {
          name: "Sky-Shop",
          chain: "L.CONTINUE_SHOPPING",
          value: true,
        },
        {
          name: "SkyVerge",
          chain: "sv_wc_payment_gateway_payment_form_param",
          value: true,
        },
        {
          name: "Smart Ad Server",
          chain: "SmartAdServer",
          value: true,
        },
        {
          name: "Smarter Click",
          chain: "$smcInstall",
          value: true,
        },
        {
          name: "Smarter Click",
          chain: "$smcT5",
          value: true,
        },
        {
          name: "Smarter Click",
          chain: "$smctData",
          value: true,
        },
        {
          name: "Smartling",
          chain: "populateSmartlingDdl",
          value: true,
        },
        {
          name: "Smartsupp",
          chain: "$smartsupp.options.widgetVersion",
          value: true,
        },
        {
          name: "Smartsupp",
          chain: "smartsupp",
          value: true,
        },
        {
          name: "Smile",
          chain: "Smile.channel_key",
          value: true,
        },
        {
          name: "SmugMug",
          chain: "_smugsp",
          value: true,
        },
        {
          name: "Snap Pixel",
          chain: "__SnapPixel",
          value: true,
        },
        {
          name: "Snap Pixel",
          chain: "snaptr.pixelIdList",
          value: true,
        },
        {
          name: "Snap.svg",
          chain: "Snap.version",
          value: true,
        },
        {
          name: "SnapEngage",
          chain: "SnapEngage",
          value: true,
        },
        {
          name: "SnapEngage",
          chain: "SnapEngageChat",
          value: true,
        },
        {
          name: "SnapEngage",
          chain: "snapengage_mobile",
          value: true,
        },
        {
          name: "Sniply",
          chain: "sniply.create_sniply_bar",
          value: true,
        },
        {
          name: "Snoobi",
          chain: "snoobi",
          value: true,
        },
        {
          name: "Snowplow Analytics",
          chain: "GlobalSnowplowNamespace",
          value: true,
        },
        {
          name: "Snowplow Analytics",
          chain: "Snowplow",
          value: true,
        },
        {
          name: "SobiPro",
          chain: "SobiProUrl",
          value: true,
        },
        {
          name: "Socket.io",
          chain: "io.Socket",
          value: true,
        },
        {
          name: "Socket.io",
          chain: "io.version",
          value: true,
        },
        {
          name: "Solve Media",
          chain: "ACPuzzle",
          value: true,
        },
        {
          name: "Solve Media",
          chain: "_ACPuzzle",
          value: true,
        },
        {
          name: "Solve Media",
          chain: "_adcopy-puzzle-image-image",
          value: true,
        },
        {
          name: "Solve Media",
          chain: "adcopy-puzzle-image-image",
          value: true,
        },
        {
          name: "Solvvy",
          chain: "Solvvy",
          value: true,
        },
        {
          name: "SonarQubes",
          chain: "SonarMeasures",
          value: true,
        },
        {
          name: "SonarQubes",
          chain: "SonarRequest",
          value: true,
        },
        {
          name: "Sortable",
          chain: "deployads",
          value: true,
        },
        {
          name: "SoundCloud",
          chain: "SC.Widget.Events.PLAY",
          value: true,
        },
        {
          name: "SoundManager",
          chain: "BaconPlayer",
          value: true,
        },
        {
          name: "SoundManager",
          chain: "SoundManager",
          value: true,
        },
        {
          name: "SoundManager",
          chain: "soundManager.version",
          value: true,
        },
        {
          name: "Sovrn",
          chain: "sovrn",
          value: true,
        },
        {
          name: "Sovrn",
          chain: "sovrn_render",
          value: true,
        },
        {
          name: "Sovrn//Commerce",
          chain: "vglnk",
          value: true,
        },
        {
          name: "Sovrn//Commerce",
          chain: "vl_cB",
          value: true,
        },
        {
          name: "Sovrn//Commerce",
          chain: "vl_disable",
          value: true,
        },
        {
          name: "SpeedCurve",
          chain: "LUX.version",
          value: true,
        },
        {
          name: "SpeedCurve",
          chain: "LUX_t_end",
          value: true,
        },
        {
          name: "SpeedCurve",
          chain: "LUX_t_start",
          value: true,
        },
        {
          name: "SpeedKit",
          chain: "speedKit",
          value: true,
        },
        {
          name: "Sphinx",
          chain: "DOCUMENTATION_OPTIONS",
          value: true,
        },
        {
          name: "Spinnakr",
          chain: "_spinnakr_site_id",
          value: true,
        },
        {
          name: "Split",
          chain: "SPLITIO_API_KEY",
          value: true,
        },
        {
          name: "Split",
          chain: "split_shopper_client",
          value: true,
        },
        {
          name: "Split",
          chain: "split_visitor_client",
          value: true,
        },
        {
          name: "Split",
          chain: "splitio",
          value: true,
        },
        {
          name: "SplitIt",
          chain: "Splitit",
          value: true,
        },
        {
          name: "Splitbee",
          chain: "splitbee",
          value: true,
        },
        {
          name: "SpotHopper",
          chain: "Spothopper",
          value: true,
        },
        {
          name: "SpotX",
          chain: "SpotX.VERSION",
          value: true,
        },
        {
          name: "Spotify Web API",
          chain: "getSpotifyData",
          value: true,
        },
        {
          name: "Spotify Web API",
          chain: "spotify_tracks",
          value: true,
        },
        {
          name: "Spotify Web API",
          chain: "spotifyme",
          value: true,
        },
        {
          name: "Spotii",
          chain: "spotiiConfig",
          value: true,
        },
        {
          name: "Sprig",
          chain: "UserLeap",
          value: true,
        },
        {
          name: "Spring for creators",
          chain: "webpackJsonpteespring-custom-storefront",
          value: true,
        },
        {
          name: "Spryker",
          chain: "spryker.config",
          value: true,
        },
        {
          name: "Square",
          chain: "SqPaymentForm",
          value: true,
        },
        {
          name: "Square",
          chain: "Square.Analytics",
          value: true,
        },
        {
          name: "Square",
          chain: "__BOOTSTRAP_STATE__.storeInfo.square_application_id",
          value: true,
        },
        {
          name: "Squarespace",
          chain: "Squarespace",
          value: true,
        },
        {
          name: "Squarespace",
          chain: "Static.SQUARESPACE_CONTEXT.templateVersion",
          value: true,
        },
        {
          name: "Squarespace Commerce",
          chain: "SQUARESPACE_ROLLUPS.squarespace-commerce",
          value: true,
        },
        {
          name: "Squarespace Commerce",
          chain: "Static.SQUARESPACE_CONTEXT.templateVersion",
          value: true,
        },
        {
          name: "SquirrelMail",
          chain: "squirrelmail_loginpage_onload",
          value: true,
        },
        {
          name: "Stack Analytix",
          chain: "stackAnalysis",
          value: true,
        },
        {
          name: "StackCommerce",
          chain: "stackSonar",
          value: true,
        },
        {
          name: "Stackla",
          chain: "Stackla",
          value: true,
        },
        {
          name: "Stamped",
          chain: "StampedFn",
          value: true,
        },
        {
          name: "Statcounter",
          chain: "_statcounter",
          value: true,
        },
        {
          name: "Statcounter",
          chain: "sc_project",
          value: true,
        },
        {
          name: "Statcounter",
          chain: "sc_security",
          value: true,
        },
        {
          name: "Strato Website",
          chain: "Strftime.configuration",
          value: true,
        },
        {
          name: "Stripe",
          chain: "Stripe.version",
          value: true,
        },
        {
          name: "Stripe",
          chain: "checkout.enabledpayments.stripe",
          value: true,
        },
        {
          name: "Stylitics",
          chain: "Stylitics",
          value: true,
        },
        {
          name: "Stylitics",
          chain: "stylitics",
          value: true,
        },
        {
          name: "Sub2Tech",
          chain: "SUB2.codebaseversion",
          value: true,
        },
        {
          name: "Subbly",
          chain: "subblyProductUrlBase",
          value: true,
        },
        {
          name: "Sublime",
          chain: "loadSublimeSkinz",
          value: true,
        },
        {
          name: "SublimeVideo",
          chain: "sublimevideo",
          value: true,
        },
        {
          name: "SummerCart",
          chain: "SCEvents",
          value: true,
        },
        {
          name: "Sumo",
          chain: "sumo",
          value: true,
        },
        {
          name: "Sumo",
          chain: "sumome",
          value: true,
        },
        {
          name: "Support Hero",
          chain: "supportHeroWidget",
          value: true,
        },
        {
          name: "Support Hero",
          chain: "supporthero",
          value: true,
        },
        {
          name: "Survicate",
          chain: "survicate",
          value: true,
        },
        {
          name: "SweetAlert2",
          chain: "Sweetalert2",
          value: true,
        },
        {
          name: "Swell",
          chain: "swell.version",
          value: true,
        },
        {
          name: "Swiftype",
          chain: "Swiftype",
          value: true,
        },
        {
          name: "Swiper Slider",
          chain: "Swiper",
          value: true,
        },
        {
          name: "Symfony",
          chain: "Sfjs",
          value: true,
        },
        {
          name: "Syndeca",
          chain: "SyndecaAnalyticsObject",
          value: true,
        },
        {
          name: "SyntaxHighlighter",
          chain: "SyntaxHighlighter",
          value: true,
        },
        {
          name: "Syte",
          chain: "SyteApi.getBinImageBB",
          value: true,
        },
        {
          name: "Syte",
          chain: "SyteApp.Analytics",
          value: true,
        },
        {
          name: "Syte",
          chain: "SytePixel",
          value: true,
        },
        {
          name: "script.aculo.us",
          chain: "Scriptaculous.Version",
          value: true,
        },
        {
          name: "scrollreveal",
          chain: "ScrollReveal().version",
          value: true,
        },
        {
          name: "shine.js",
          chain: "Shine",
          value: true,
        },
        {
          name: "snigel AdConsent",
          chain: "adconsent.version",
          value: true,
        },
        {
          name: "snigel AdConsent",
          chain: "snhb.baseSettings",
          value: true,
        },
        {
          name: "snigel AdConsent",
          chain: "snhb.info.cmpVersion",
          value: true,
        },
        {
          name: "styled-components",
          chain: "styled",
          value: true,
        },
        {
          name: "TRUENDO",
          chain: "Truendo",
          value: true,
        },
        {
          name: "TRUENDO",
          chain: "TruendoCookieControlCallback",
          value: true,
        },
        {
          name: "TVSquared",
          chain: "TV2Track",
          value: true,
        },
        {
          name: "TVSquared",
          chain: "_tvq",
          value: true,
        },
        {
          name: "Tabby",
          chain: "Tabby",
          value: true,
        },
        {
          name: "Tabby",
          chain: "TabbyPromo",
          value: true,
        },
        {
          name: "Taboola",
          chain: "_taboola",
          value: true,
        },
        {
          name: "Taboola",
          chain: "_taboolaNetworkMode",
          value: true,
        },
        {
          name: "Taboola",
          chain: "taboola_view_id",
          value: true,
        },
        {
          name: "TagPro",
          chain: "initAdproTags",
          value: true,
        },
        {
          name: "Taggbox",
          chain: "taggboxAjaxurl",
          value: true,
        },
        {
          name: "Taiga",
          chain: "taigaConfig",
          value: true,
        },
        {
          name: "TakeDrop",
          chain: "webpackJsonptakedrop-react",
          value: true,
        },
        {
          name: "Talkable",
          chain: "talkable.config.version",
          value: true,
        },
        {
          name: "Tamara",
          chain: "TamaraProductWidget",
          value: true,
        },
        {
          name: "Tatari",
          chain: "tatari",
          value: true,
        },
        {
          name: "Teachable",
          chain: "isTeachable",
          value: true,
        },
        {
          name: "Teachable",
          chain: "teachableIcons",
          value: true,
        },
        {
          name: "Teachable",
          chain: "trackTeachableGAEvent",
          value: true,
        },
        {
          name: "Tealeaf",
          chain: "TeaLeaf",
          value: true,
        },
        {
          name: "Tealium",
          chain: "TEALIUMENABLED",
          value: true,
        },
        {
          name: "Telescope",
          chain: "Telescope",
          value: true,
        },
        {
          name: "TestFreaks",
          chain: "applyTestFreaks",
          value: true,
        },
        {
          name: "TestFreaks",
          chain: "testFreaks",
          value: true,
        },
        {
          name: "Thesis",
          chain: "thix.history",
          value: true,
        },
        {
          name: "Thesis",
          chain: "thix.t",
          value: true,
        },
        {
          name: "Thinkific",
          chain: "Thinkific",
          value: true,
        },
        {
          name: "Thinkific",
          chain: "ThinkificAnalytics",
          value: true,
        },
        {
          name: "Threekit",
          chain: "threekit.configuratorForm",
          value: true,
        },
        {
          name: "Threekit",
          chain: "threekitAR",
          value: true,
        },
        {
          name: "Threekit",
          chain: "threekitPlayer",
          value: true,
        },
        {
          name: "ThriveCart",
          chain: "ThriveCart",
          value: true,
        },
        {
          name: "TiddlyWiki",
          chain: "tiddler",
          value: true,
        },
        {
          name: "Tidio",
          chain: "tidioChatApi",
          value: true,
        },
        {
          name: "Tiendanube",
          chain: "LS.store.url",
          value: true,
        },
        {
          name: "TikTok Pixel",
          chain: "TiktokAnalyticsObject",
          value: true,
        },
        {
          name: "Timeplot",
          chain: "Timeplot",
          value: true,
        },
        {
          name: "Timify",
          chain: "TimifyWidget",
          value: true,
        },
        {
          name: "TinyMCE",
          chain: "tinyMCE.majorVersion",
          value: true,
        },
        {
          name: "Tiqets",
          chain: "__TIQETS_LOADER_REINIT",
          value: true,
        },
        {
          name: "Titan",
          chain: "titan",
          value: true,
        },
        {
          name: "Titan",
          chain: "titanEnabled",
          value: true,
        },
        {
          name: "TomTom Maps",
          chain: "tomtom.Map",
          value: true,
        },
        {
          name: "TomatoCart",
          chain: "AjaxShoppingCart",
          value: true,
        },
        {
          name: "Totango",
          chain: "totango",
          value: true,
        },
        {
          name: "Totango",
          chain: "totangoLoader",
          value: true,
        },
        {
          name: "TownNews",
          chain: "TNCMS",
          value: true,
        },
        {
          name: "TownNews",
          chain: "TNStats_Tracker",
          value: true,
        },
        {
          name: "TownNews",
          chain: "TNTracker",
          value: true,
        },
        {
          name: "TrackJs",
          chain: "TrackJs",
          value: true,
        },
        {
          name: "TrackJs",
          chain: "trackJs",
          value: true,
        },
        {
          name: "Transifex",
          chain: "Transifex.live.lib_version",
          value: true,
        },
        {
          name: "Trbo",
          chain: "_trbo",
          value: true,
        },
        {
          name: "Trbo",
          chain: "_trbo_start",
          value: true,
        },
        {
          name: "Trbo",
          chain: "_trboq",
          value: true,
        },
        {
          name: "Treasure Data",
          chain: "Treasure.version",
          value: true,
        },
        {
          name: "Trengo",
          chain: "Trengo.eventBus",
          value: true,
        },
        {
          name: "Trix",
          chain: "Trix.VERSION",
          value: true,
        },
        {
          name: "Trumba",
          chain: "$Trumba",
          value: true,
        },
        {
          name: "Trumba",
          chain: "$Trumba.version",
          value: true,
        },
        {
          name: "Trumba",
          chain: "Trumba",
          value: true,
        },
        {
          name: "Trustpilot",
          chain: "Trustpilot",
          value: true,
        },
        {
          name: "Trustspot",
          chain: "trustspot_key",
          value: true,
        },
        {
          name: "Turbo",
          chain: "Turbo",
          value: true,
        },
        {
          name: "Turbolinks",
          chain: "Turbolinks",
          value: true,
        },
        {
          name: "TurfJS",
          chain: "turf.feature",
          value: true,
        },
        {
          name: "TurfJS",
          chain: "turf.point",
          value: true,
        },
        {
          name: "TurfJS",
          chain: "turf.random",
          value: true,
        },
        {
          name: "TurnTo",
          chain: "TurnTo",
          value: true,
        },
        {
          name: "TurnTo",
          chain: "turnToConfig",
          value: true,
        },
        {
          name: "Twik",
          chain: "TWIK_ID",
          value: true,
        },
        {
          name: "Twitch Player",
          chain: "Twitch.Player",
          value: true,
        },
        {
          name: "Twitter Ads",
          chain: "twttr",
          value: true,
        },
        {
          name: "Twitter Emoji (Twemoji)",
          chain: "twemoji",
          value: true,
        },
        {
          name: "Twitter Flight",
          chain: "flight",
          value: true,
        },
        {
          name: "Twitter typeahead.js",
          chain: "typeahead",
          value: true,
        },
        {
          name: "Typecho",
          chain: "TypechoComment",
          value: true,
        },
        {
          name: "Typekit",
          chain: "Typekit.config.js",
          value: true,
        },
        {
          name: "theTradeDesk",
          chain: "TTDUniversalPixelApi",
          value: true,
        },
        {
          name: "theTradeDesk",
          chain: "ttd_dom_ready",
          value: true,
        },
        {
          name: "three.js",
          chain: "THREE.REVISION",
          value: true,
        },
        {
          name: "three.js",
          chain: "__THREE__",
          value: true,
        },
        {
          name: "toastr",
          chain: "toastr.version",
          value: true,
        },
        {
          name: "U-KOMI",
          chain: "GetUkomiSliderItemInfo",
          value: true,
        },
        {
          name: "U-KOMI",
          chain: "ukomiInstaLikeStep01",
          value: true,
        },
        {
          name: "USWDS",
          chain: "uswdsPresent",
          value: true,
        },
        {
          name: "Ueeshop",
          chain: "ueeshop_config",
          value: true,
        },
        {
          name: "UltraCart",
          chain: "ucCatalog",
          value: true,
        },
        {
          name: "Umbraco",
          chain: "UC_IMAGE_SERVICE|ITEM_INFO_SERVICE",
          value: true,
        },
        {
          name: "Umbraco",
          chain: "UC_ITEM_INFO_SERVICE",
          value: true,
        },
        {
          name: "Umbraco",
          chain: "UC_SETTINGS",
          value: true,
        },
        {
          name: "Umbraco",
          chain: "Umbraco",
          value: true,
        },
        {
          name: "Unbxd",
          chain: "Unbxd.version",
          value: true,
        },
        {
          name: "Underscore.js",
          chain: "_.VERSION",
          value: true,
        },
        {
          name: "Underscore.js",
          chain: "_.restArguments",
          value: true,
        },
        {
          name: "Unruly",
          chain: "unruly.native",
          value: true,
        },
        {
          name: "UpSellit",
          chain: "usi_analytics",
          value: true,
        },
        {
          name: "UpSellit",
          chain: "usi_app",
          value: true,
        },
        {
          name: "UpSellit",
          chain: "usi_commons",
          value: true,
        },
        {
          name: "UpSellit",
          chain: "usi_cookies",
          value: true,
        },
        {
          name: "Uploadcare",
          chain: "uploadcare.version",
          value: true,
        },
        {
          name: "Upvoty",
          chain: "upvoty",
          value: true,
        },
        {
          name: "UsableNet",
          chain: "enableUsableNetAssistive",
          value: true,
        },
        {
          name: "Uscreen",
          chain: "analyticsHost",
          value: true,
        },
        {
          name: "UserLike",
          chain: "userlike",
          value: true,
        },
        {
          name: "UserLike",
          chain: "userlikeInit",
          value: true,
        },
        {
          name: "UserRules",
          chain: "_usrp",
          value: true,
        },
        {
          name: "UserVoice",
          chain: "UserVoice",
          value: true,
        },
        {
          name: "Usercentrics",
          chain: "usercentrics.appVersion",
          value: true,
        },
        {
          name: "Userflow",
          chain: "USERFLOWJS_QUEUE",
          value: true,
        },
        {
          name: "Userflow",
          chain: "userflow.endAllFlows",
          value: true,
        },
        {
          name: "Userflow",
          chain: "userflow.endChecklist",
          value: true,
        },
        {
          name: "Userpilot",
          chain: "userpilot.triggerById",
          value: true,
        },
        {
          name: "Userpilot",
          chain: "userpilotInitiatorSDK",
          value: true,
        },
        {
          name: "Userpilot",
          chain: "userpilotPako",
          value: true,
        },
        {
          name: "Ushahidi",
          chain: "Ushahidi",
          value: true,
        },
        {
          name: "Usizy",
          chain: "uSizyUniversal",
          value: true,
        },
        {
          name: "uLogin",
          chain: "uLogin.version",
          value: true,
        },
        {
          name: "uPortal",
          chain: "uportal",
          value: true,
        },
        {
          name: "user.com",
          chain: "UserEngage",
          value: true,
        },
        {
          name: "VAPTCHA",
          chain: "vaptcha",
          value: true,
        },
        {
          name: "VIVVO",
          chain: "vivvo",
          value: true,
        },
        {
          name: "VTEX",
          chain: "vtex",
          value: true,
        },
        {
          name: "VWO",
          chain: "VWO",
          value: true,
        },
        {
          name: "VWO",
          chain: "__vwo",
          value: true,
        },
        {
          name: "VWO Engage",
          chain: "_pushcrewDebuggingQueue",
          value: true,
        },
        {
          name: "Vaadin",
          chain: "vaadin",
          value: true,
        },
        {
          name: "Varbase",
          chain: "drupalSettings.ajaxPageState.libraries",
          value: true,
        },
        {
          name: "Veoxa",
          chain: "VuVeoxaContent",
          value: true,
        },
        {
          name: "VerifyPass",
          chain: "verifypass_api_instantiator",
          value: true,
        },
        {
          name: "VerifyPass",
          chain: "verifypass_is_loaded",
          value: true,
        },
        {
          name: "VerifyPass",
          chain: "verifypass_popup",
          value: true,
        },
        {
          name: "Verloop",
          chain: "Verloop",
          value: true,
        },
        {
          name: "Vidazoo",
          chain: "__vidazooPlayer__",
          value: true,
        },
        {
          name: "Vidazoo",
          chain: "vidazoo",
          value: true,
        },
        {
          name: "Vidazoo",
          chain: "vidazoo.version",
          value: true,
        },
        {
          name: "VideoJS",
          chain: "VideoJS",
          value: true,
        },
        {
          name: "VideoJS",
          chain: "videojs",
          value: true,
        },
        {
          name: "VideoJS",
          chain: "videojs.VERSION",
          value: true,
        },
        {
          name: "Vimeo",
          chain: "Vimeo.Player",
          value: true,
        },
        {
          name: "Vimeo",
          chain: "VimeoPlayer",
          value: true,
        },
        {
          name: "Vimeo OTT",
          chain: "VHX.config",
          value: true,
        },
        {
          name: "Vimeo OTT",
          chain: "_vhx",
          value: true,
        },
        {
          name: "Visa",
          chain: "visaApi",
          value: true,
        },
        {
          name: "Visa",
          chain: "visaImage",
          value: true,
        },
        {
          name: "Visa",
          chain: "visaSrc",
          value: true,
        },
        {
          name: "Vizury",
          chain: "safariVizury",
          value: true,
        },
        {
          name: "Vizury",
          chain: "vizury_data",
          value: true,
        },
        {
          name: "Volusion",
          chain: "volusion",
          value: true,
        },
        {
          name: "Voracio",
          chain: "voracio",
          value: true,
        },
        {
          name: "Vue.ai",
          chain: "getVueUrlSegments",
          value: true,
        },
        {
          name: "Vue.ai",
          chain: "vuex",
          value: true,
        },
        {
          name: "Vue.js",
          chain: "Vue.version",
          value: true,
        },
        {
          name: "vBulletin",
          chain: "vBulletin",
          value: true,
        },
        {
          name: "vcita",
          chain: "LiveSite.btCheckout",
          value: true,
        },
        {
          name: "vcita",
          chain: "Vcita",
          value: true,
        },
        {
          name: "WEBXPAY",
          chain: "WEBXPAY",
          value: true,
        },
        {
          name: "WHMCS",
          chain: "WHMCS",
          value: true,
        },
        {
          name: "Wair",
          chain: "PredictV3.default.version",
          value: true,
        },
        {
          name: "Wair",
          chain: "predictWidget",
          value: true,
        },
        {
          name: "WalkMe",
          chain: "WalkMeAPI",
          value: true,
        },
        {
          name: "WalkMe",
          chain: "_walkmeConfig",
          value: true,
        },
        {
          name: "Wangsu",
          chain: "__cdnRoute",
          value: true,
        },
        {
          name: "Wangsu",
          chain: "playurl.wangsu",
          value: true,
        },
        {
          name: "Web Shop Manager",
          chain: "WSM.Tracking",
          value: true,
        },
        {
          name: "Web Shop Manager",
          chain: "WSM_CHART_COLORS_OPAQUE",
          value: true,
        },
        {
          name: "Web Shop Manager",
          chain: "wsmHideHelpBox",
          value: true,
        },
        {
          name: "Web Shop Manager",
          chain: "wsm_catalogTabby",
          value: true,
        },
        {
          name: "WebEngage",
          chain: "webengage.__v",
          value: true,
        },
        {
          name: "WebMetric",
          chain: "_wmid",
          value: true,
        },
        {
          name: "WebNode",
          chain: "wnd.$system",
          value: true,
        },
        {
          name: "Webflow",
          chain: "Webflow",
          value: true,
        },
        {
          name: "Webgains",
          chain: "ITCLKQ",
          value: true,
        },
        {
          name: "Webix",
          chain: "webix",
          value: true,
        },
        {
          name: "Webtrekk",
          chain: "WebtrekkV3",
          value: true,
        },
        {
          name: "Webtrekk",
          chain: "webtrekk",
          value: true,
        },
        {
          name: "Webtrekk",
          chain: "webtrekkConfig",
          value: true,
        },
        {
          name: "Webtrekk",
          chain: "webtrekkHeatmapObjects",
          value: true,
        },
        {
          name: "Webtrekk",
          chain: "webtrekkLinktrackObjects",
          value: true,
        },
        {
          name: "Webtrekk",
          chain: "webtrekkUnloadObjects",
          value: true,
        },
        {
          name: "Webtrekk",
          chain: "webtrekkV3",
          value: true,
        },
        {
          name: "Webtrekk",
          chain: "wt_tt",
          value: true,
        },
        {
          name: "Webtrekk",
          chain: "wt_ttv2",
          value: true,
        },
        {
          name: "Webtrends",
          chain: "WTOptimize",
          value: true,
        },
        {
          name: "Webtrends",
          chain: "WebTrends",
          value: true,
        },
        {
          name: "Webzi",
          chain: "Webzi",
          value: true,
        },
        {
          name: "Weebly",
          chain: "_W.configDomain",
          value: true,
        },
        {
          name: "Whatfix",
          chain: "_wfx_add_logger",
          value: true,
        },
        {
          name: "Whatfix",
          chain: "_wfx_settings",
          value: true,
        },
        {
          name: "Whatfix",
          chain: "wfx_is_playing__",
          value: true,
        },
        {
          name: "Widen",
          chain: "WidenSessionTimer",
          value: true,
        },
        {
          name: "Widen",
          chain: "WidenUI",
          value: true,
        },
        {
          name: "WidgetWhats",
          chain: "wwwa_loaded",
          value: true,
        },
        {
          name: "Wigzo",
          chain: "wigzo",
          value: true,
        },
        {
          name: "Wiki.js",
          chain: "WIKI.$_apolloInitData",
          value: true,
        },
        {
          name: "Wiki.js",
          chain: "WIKI.$apolloProvider",
          value: true,
        },
        {
          name: "Wink",
          chain: "wink.version",
          value: true,
        },
        {
          name: "Wirecard",
          chain: "WirecardHPP",
          value: true,
        },
        {
          name: "Wirecard",
          chain: "WirecardPaymentPage",
          value: true,
        },
        {
          name: "Wisepops",
          chain: "WisePopsObject",
          value: true,
        },
        {
          name: "Wisepops",
          chain: "wisepops._api",
          value: true,
        },
        {
          name: "Wistia",
          chain: "Wistia",
          value: true,
        },
        {
          name: "Wistia",
          chain: "wistiaEmbeds",
          value: true,
        },
        {
          name: "Wistia",
          chain: "wistiaUtils",
          value: true,
        },
        {
          name: "Wix",
          chain: "wixBiSession",
          value: true,
        },
        {
          name: "Wix",
          chain: "wixPerformanceMeasurements",
          value: true,
        },
        {
          name: "WoowUp",
          chain: "WU._trackProductVTEXField",
          value: true,
        },
        {
          name: "WordPress",
          chain: "wp_username",
          value: true,
        },
        {
          name: "Workable",
          chain: "webpackChunk_workable_candidate",
          value: true,
        },
        {
          name: "Workarea",
          chain: "workarea",
          value: true,
        },
        {
          name: "Wunderkind",
          chain: "bouncex",
          value: true,
        },
        {
          name: "Wurfl",
          chain: "WURFL",
          value: true,
        },
        {
          name: "web-vitals",
          chain: "webVitals",
          value: true,
        },
        {
          name: "webpack",
          chain: "webpackJsonp",
          value: true,
        },
        {
          name: "X-Cart",
          chain: "xcart_web_dir",
          value: true,
        },
        {
          name: "X-Cart",
          chain: "xliteConfig",
          value: true,
        },
        {
          name: "X.ai",
          chain: "xdotaiAction",
          value: true,
        },
        {
          name: "X.ai",
          chain: "xdotaiButton",
          value: true,
        },
        {
          name: "XOOPS",
          chain: "xoops",
          value: true,
        },
        {
          name: "XRegExp",
          chain: "XRegExp.version",
          value: true,
        },
        {
          name: "XenForo",
          chain: "XF.GuestUsername",
          value: true,
        },
        {
          name: "Xtremepush",
          chain: "xtremepush",
          value: true,
        },
        {
          name: "xCharts",
          chain: "xChart",
          value: true,
        },
        {
          name: "YUI",
          chain: "YAHOO.VERSION",
          value: true,
        },
        {
          name: "YUI",
          chain: "YUI.version",
          value: true,
        },
        {
          name: "Yahoo Advertising",
          chain: "adxinserthtml",
          value: true,
        },
        {
          name: "Yahoo Advertising",
          chain: "yahooCvLoad",
          value: true,
        },
        {
          name: "Yahoo Advertising",
          chain: "yahoo_retargeting_pv_id",
          value: true,
        },
        {
          name: "Yahoo Advertising",
          chain: "yahoo_ydn_conv_label",
          value: true,
        },
        {
          name: "Yahoo Advertising",
          chain: "yahoo_ydn_conv_transaction_id",
          value: true,
        },
        {
          name: "Yahoo! Ecommerce",
          chain: "YStore",
          value: true,
        },
        {
          name: "Yahoo! Web Analytics",
          chain: "YWA",
          value: true,
        },
        {
          name: "Yampi Checkout",
          chain: "yampiCheckoutUrl",
          value: true,
        },
        {
          name: "Yampi Virtual store",
          chain: "Yampi.api_domain",
          value: true,
        },
        {
          name: "Yampi Virtual store",
          chain: "Yampi.cart_token",
          value: true,
        },
        {
          name: "Yandex.Direct",
          chain: "yandex_ad_format",
          value: true,
        },
        {
          name: "Yandex.Direct",
          chain: "yandex_partner_id",
          value: true,
        },
        {
          name: "Yandex.Messenger",
          chain: "yandexChatWidget",
          value: true,
        },
        {
          name: "Yandex.Metrika",
          chain: "yandex_metrika",
          value: true,
        },
        {
          name: "Yett",
          chain: "YETT_BLACKLIST",
          value: true,
        },
        {
          name: "Yieldify",
          chain: "_yieldify",
          value: true,
        },
        {
          name: "Yotpo",
          chain: "SwellConfig",
          value: true,
        },
        {
          name: "Yotpo",
          chain: "swellAPI",
          value: true,
        },
        {
          name: "Yotpo",
          chain: "yotpo",
          value: true,
        },
        {
          name: "YouCan",
          chain: "YCPay",
          value: true,
        },
        {
          name: "yellow.ai",
          chain: "ymConfig",
          value: true,
        },
        {
          name: "ZURB Foundation",
          chain: "Foundation.version",
          value: true,
        },
        {
          name: "Zabbix",
          chain: "zbxCallPostScripts",
          value: true,
        },
        {
          name: "Zakeke",
          chain: "zakekeBoot",
          value: true,
        },
        {
          name: "Zakeke",
          chain: "zakekeCustomizeLabel",
          value: true,
        },
        {
          name: "Zakeke",
          chain: "zakekeLoading",
          value: true,
        },
        {
          name: "Zakeke",
          chain: "zakekeProductPage",
          value: true,
        },
        {
          name: "Zanox",
          chain: "zanox",
          value: true,
        },
        {
          name: "Zaraz",
          chain: "zaraz",
          value: true,
        },
        {
          name: "Zaraz",
          chain: "zarazData",
          value: true,
        },
        {
          name: "Zendesk",
          chain: "Zendesk",
          value: true,
        },
        {
          name: "Zenfolio",
          chain: "Zenfolio",
          value: true,
        },
        {
          name: "Zepto",
          chain: "Zepto",
          value: true,
        },
        {
          name: "ZestMoney",
          chain: "ZestMoneyWidget",
          value: true,
        },
        {
          name: "ZestMoney",
          chain: "zestBind",
          value: true,
        },
        {
          name: "ZestMoney",
          chain: "zestMerchant",
          value: true,
        },
        {
          name: "Zeus Technology",
          chain: "zeus.version",
          value: true,
        },
        {
          name: "Zeus Technology",
          chain: "zeusAdUnitPath",
          value: true,
        },
        {
          name: "Zid",
          chain: "zid.store",
          value: true,
        },
        {
          name: "Zid",
          chain: "zidTracking.sendGaProductRemoveFromCartEvent",
          value: true,
        },
        {
          name: "ZingChart",
          chain: "zingchart",
          value: true,
        },
        {
          name: "Zinrelo",
          chain: "zrl_mi",
          value: true,
        },
        {
          name: "Zip",
          chain: "QuadPayShopify",
          value: true,
        },
        {
          name: "Zip",
          chain: "checkout.enabledpayments.zip",
          value: true,
        },
        {
          name: "Zip",
          chain: "quadpayID",
          value: true,
        },
        {
          name: "Zmags Creator",
          chain: "__zmags",
          value: true,
        },
        {
          name: "Zoey",
          chain: "Zoey.module",
          value: true,
        },
        {
          name: "Zoey",
          chain: "zoey.developer",
          value: true,
        },
        {
          name: "Zoey",
          chain: "zoeyDev",
          value: true,
        },
        {
          name: "Zoho PageSense",
          chain: "$pagesense",
          value: true,
        },
        {
          name: "Zoho PageSense",
          chain: "pagesense",
          value: true,
        },
        {
          name: "Zoko",
          chain: "__zoko_app_version",
          value: true,
        },
        {
          name: "Zone.js",
          chain: "Zone.root",
          value: true,
        },
        {
          name: "Zonos",
          chain: "Zonos",
          value: true,
        },
        {
          name: "Zonos",
          chain: "zonos",
          value: true,
        },
        {
          name: "Zonos",
          chain: "zonosCheckout",
          value: true,
        },
      ],
    },
  });
};
