<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/"
                xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
      <head>
        <title><xsl:value-of select="/rss/channel/title"/> Web Feed</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
        <style type="text/css">
        /* Basic styles */
        html{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}
        body{margin:0;font-family:ui-sans-serif,system-ui,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji';font-size:16px;line-height:1.5;word-wrap:break-word;color:oklch(25% 0.005 298)}
        *{box-sizing:border-box}
        p{margin-top:0;margin-bottom:16px}
        strong{font-weight:600}
        small{font-size:90%}
        h1,h2,h3,h4,h5,h6{margin-top:24px;margin-bottom:16px;font-weight:600;line-height:1.25}
        h1{padding-bottom:.3em;font-size:2em;border-bottom:1px solid #E0DFE3}
        h2{padding-bottom:.3em;font-size:1.5em;border-bottom:1px solid #E0DFE3}
        h3{font-size:1.25em;margin-top:0;margin-bottom:0}
        a{color:#0366d6;text-decoration:none}
        a:hover{text-decoration:underline}

        /* Utility classes */
        .bg-white{background-color:oklch(0.96 0.005 298)!important}
        .px-4{padding-right:24px!important;padding-left:24px!important}
        .py-2{padding-top:8px!important;padding-bottom:8px!important}
        .py-5{padding-top:32px!important;padding-bottom:32px!important}
        .pb-3{padding-bottom:16px!important}
        .pb-5{padding-bottom:32px!important}
        .mt-3{margin-top:16px!important}
        .mb-1{margin-bottom:4px!important}
        .pr-1{padding-right:4px!important}
        .border-0{border:0!important}
        .text-gray{color:oklch(0.25 0.005 298 / 75%)!important}
        @media (min-width:768px){
          .mt-md-5{margin-top:32px!important}
        }

        /* Component styles */
        .markdown{max-width:768px;margin-right:auto;margin-left:auto}
        .markdown>*:first-child{margin-top:0!important}
        .markdown>*:last-child{margin-bottom:0!important}
        </style>
      </head>
      <body class="bg-white">
        <nav class="px-4 py-2 mt-3 mt-md-5 markdown">
          <p>
            <strong>This is a web feed,</strong> also known as an RSS feed. <strong>Subscribe</strong> by copying the URL from the address bar into your newsreader.
          </p>
        </nav>
        <div class="px-4 pb-3 markdown">
          <header class="py-5">
            <h1 class="border-0">
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style="vertical-align: text-bottom; width: 1.2em; height: 1.2em;" class="pr-1" id="RSSicon" viewBox="0 0 256 256">
                <defs>
                  <linearGradient x1="0.085" y1="0.085" x2="0.915" y2="0.915" id="RSSg">
                    <stop  offset="0.0" stop-color="#E3702D"/><stop  offset="0.1071" stop-color="#EA7D31"/>
                    <stop  offset="0.3503" stop-color="#F69537"/><stop  offset="0.5" stop-color="#FB9E3A"/>
                    <stop  offset="0.7016" stop-color="#EA7C31"/><stop  offset="0.8866" stop-color="#DE642B"/>
                    <stop  offset="1.0" stop-color="#D95B29"/>
                  </linearGradient>
                </defs>
                <rect width="256" height="256" rx="55" ry="55" x="0"  y="0"  fill="#CC5D15"/>
                <rect width="246" height="246" rx="50" ry="50" x="5"  y="5"  fill="#F49C52"/>
                <rect width="236" height="236" rx="47" ry="47" x="10" y="10" fill="url(#RSSg)"/>
                <circle cx="68" cy="189" r="24" fill="#FFF"/>
                <path d="M160 213h-34a82 82 0 0 0 -82 -82v-34a116 116 0 0 1 116 116z" fill="#FFF"/>
                <path d="M184 213A140 140 0 0 0 44 73 V 38a175 175 0 0 1 175 175z" fill="#FFF"/>
              </svg>
              Web Feed Preview
            </h1>
            <h2><xsl:value-of select="/rss/channel/title"/></h2>
            <p><xsl:value-of select="/rss/channel/description"/></p>
            <a target="_blank">
              <xsl:attribute name="href">
                <xsl:value-of select="/rss/channel/link"/>
              </xsl:attribute>
              Visit Website &#x2192;
            </a>
          </header>
          <h2>Recent Items</h2>
          <xsl:for-each select="/rss/channel/item">
            <div class="pb-5">
              <h3 class="mb-1">
                <a target="_blank">
                  <xsl:attribute name="href">
                    <xsl:value-of select="link"/>
                  </xsl:attribute>
                  <xsl:value-of select="title"/>
                </a>
              </h3>
              <small class="text-gray">
                Published: <xsl:value-of select="substring(pubDate, 1, 16)" />
              </small>
            </div>
          </xsl:for-each>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>