var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_lab1_1 = new ol.format.GeoJSON();
var features_lab1_1 = format_lab1_1.readFeatures(json_lab1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lab1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lab1_1.addFeatures(features_lab1_1);
var lyr_lab1_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lab1_1, 
                style: style_lab1_1,
                popuplayertitle: 'lab1',
                interactive: true,
                title: '<img src="styles/legend/lab1_1.png" /> lab1'
            });
var format_building_house_2 = new ol.format.GeoJSON();
var features_building_house_2 = format_building_house_2.readFeatures(json_building_house_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_house_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_house_2.addFeatures(features_building_house_2);
var lyr_building_house_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_house_2, 
                style: style_building_house_2,
                popuplayertitle: 'building_house',
                interactive: false,
                title: '<img src="styles/legend/building_house_2.png" /> building_house'
            });

lyr_OSMStandard_0.setVisible(true);lyr_lab1_1.setVisible(true);lyr_building_house_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_lab1_1,lyr_building_house_2];
lyr_lab1_1.set('fieldAliases', {'fid': 'fid', });
lyr_building_house_2.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'addr2:street': 'addr2:street', 'addr2:housenumber': 'addr2:housenumber', 'source:addr': 'source:addr', 'start_date': 'start_date', 'building:levels': 'building:levels', 'addr:street': 'addr:street', 'addr:housenumber': 'addr:housenumber', 'addr:country': 'addr:country', 'addr:city': 'addr:city', 'qgis2web': 'qgis2web', 'address': 'address', });
lyr_lab1_1.set('fieldImages', {'fid': '', });
lyr_building_house_2.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'addr2:street': 'TextEdit', 'addr2:housenumber': 'TextEdit', 'source:addr': 'TextEdit', 'start_date': 'TextEdit', 'building:levels': 'TextEdit', 'addr:street': 'TextEdit', 'addr:housenumber': 'TextEdit', 'addr:country': 'TextEdit', 'addr:city': 'TextEdit', 'qgis2web': 'TextEdit', 'address': 'TextEdit', });
lyr_lab1_1.set('fieldLabels', {'fid': 'no label', });
lyr_building_house_2.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'addr2:street': 'no label', 'addr2:housenumber': 'no label', 'source:addr': 'no label', 'start_date': 'no label', 'building:levels': 'no label', 'addr:street': 'no label', 'addr:housenumber': 'no label', 'addr:country': 'no label', 'addr:city': 'no label', 'qgis2web': 'no label', 'address': 'no label', });
lyr_building_house_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});