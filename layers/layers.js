var wms_layers = [];


        var lyr_MapabaseGoogleEarth_0 = new ol.layer.Tile({
            'title': 'Mapa base Google Earth',
            //'type': 'base',
            'opacity': 0.504000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_Imagemsatlitedolocal_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Imagem satélite do local",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Imagemsatlitedolocal_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-5101798.388060, -2651679.335323, -5101476.618712, -2651532.522393]
                            })
                        });
var format_Pomarrea_2 = new ol.format.GeoJSON();
var features_Pomarrea_2 = format_Pomarrea_2.readFeatures(json_Pomarrea_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pomarrea_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pomarrea_2.addFeatures(features_Pomarrea_2);
var lyr_Pomarrea_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pomarrea_2, 
                style: style_Pomarrea_2,
                popuplayertitle: "Pomar área",
                interactive: false,
                title: '<img src="styles/legend/Pomarrea_2.png" /> Pomar área'
            });
var format_Pomar_3 = new ol.format.GeoJSON();
var features_Pomar_3 = format_Pomar_3.readFeatures(json_Pomar_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pomar_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pomar_3.addFeatures(features_Pomar_3);
var lyr_Pomar_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pomar_3, 
                style: style_Pomar_3,
                popuplayertitle: "Pomar",
                interactive: false,
                title: '<img src="styles/legend/Pomar_3.png" /> Pomar'
            });
var format_Espciesarbreas_4 = new ol.format.GeoJSON();
var features_Espciesarbreas_4 = format_Espciesarbreas_4.readFeatures(json_Espciesarbreas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Espciesarbreas_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Espciesarbreas_4.addFeatures(features_Espciesarbreas_4);
var lyr_Espciesarbreas_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Espciesarbreas_4, 
                style: style_Espciesarbreas_4,
                popuplayertitle: "Espécies arbóreas",
                interactive: true,
                title: '<img src="styles/legend/Espciesarbreas_4.png" /> Espécies arbóreas'
            });

lyr_MapabaseGoogleEarth_0.setVisible(true);lyr_Imagemsatlitedolocal_1.setVisible(true);lyr_Pomarrea_2.setVisible(true);lyr_Pomar_3.setVisible(true);lyr_Espciesarbreas_4.setVisible(true);
var layersList = [lyr_MapabaseGoogleEarth_0,lyr_Imagemsatlitedolocal_1,lyr_Pomarrea_2,lyr_Pomar_3,lyr_Espciesarbreas_4];
lyr_Pomarrea_2.set('fieldAliases', {'id': 'id', });
lyr_Pomar_3.set('fieldAliases', {'id': 'id', });
lyr_Espciesarbreas_4.set('fieldAliases', {'Arvore': 'Arvore', 'Fotos': 'Fotos', 'Observacao': 'Observacao', 'Classifica': 'Classifica', 'Coroamento': 'Coroamento', 'Familia': 'Familia', 'Cientifico': 'Cientifico', 'Popular': 'Popular', });
lyr_Pomarrea_2.set('fieldImages', {'id': 'TextEdit', });
lyr_Pomar_3.set('fieldImages', {'id': 'TextEdit', });
lyr_Espciesarbreas_4.set('fieldImages', {'Arvore': 'TextEdit', 'Fotos': 'ExternalResource', 'Observacao': 'TextEdit', 'Classifica': 'TextEdit', 'Coroamento': 'TextEdit', 'Familia': 'TextEdit', 'Cientifico': 'TextEdit', 'Popular': 'TextEdit', });
lyr_Pomarrea_2.set('fieldLabels', {'id': 'no label', });
lyr_Pomar_3.set('fieldLabels', {'id': 'no label', });
lyr_Espciesarbreas_4.set('fieldLabels', {'Arvore': 'header label - always visible', 'Fotos': 'header label - always visible', 'Observacao': 'header label - always visible', 'Classifica': 'header label - always visible', 'Coroamento': 'header label - always visible', 'Familia': 'header label - always visible', 'Cientifico': 'header label - always visible', 'Popular': 'header label - always visible', });
lyr_Espciesarbreas_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});