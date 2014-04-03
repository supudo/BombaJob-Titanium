var dbTC = Alloy.Collections.TextContent;
dbTC && dbTC.fetch();
var t = dbTC.where({TextContentID: 35});
var ent = t[0];

if (ent != null && ent.attributes != null) {
    var htmlContent = "<html><style>html,body {font-family: Ubuntu; font-size: 16px; color: #000000; margin: 0px; padding: 0px;} a {color: #000000; text-decoration: underline;} </style><body><div style=\"padding: 10px; width: 295px;\">";
    htmlContent += ent.attributes.Content;
    htmlContent += "<br /><br /><br /><a href=\"http://" + Alloy.Globals.SiteURL + "/\">BombaJob.bg</a>";
    htmlContent += "</div></body></html>";
    
    $.wvContent.setHtml(htmlContent, null);
    $.wvContent.backgroundColor = 'transparent';
} 
