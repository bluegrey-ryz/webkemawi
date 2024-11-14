ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([109.359409, -7.547240, 109.380299, -7.533148]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BatasRT_1 = new ol.format.GeoJSON();
var features_BatasRT_1 = format_BatasRT_1.readFeatures(json_BatasRT_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BatasRT_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasRT_1.addFeatures(features_BatasRT_1);
var lyr_BatasRT_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasRT_1, 
                style: style_BatasRT_1,
                popuplayertitle: "Batas RT",
                interactive: true,
    title: 'Batas RT<br />\
    <img src="styles/legend/BatasRT_1_0.png" /> RT 1 RW 1<br />\
    <img src="styles/legend/BatasRT_1_1.png" /> RT 1 RW 2<br />\
    <img src="styles/legend/BatasRT_1_2.png" /> RT 1 RW 3<br />\
    <img src="styles/legend/BatasRT_1_3.png" /> RT 1 RW 4<br />\
    <img src="styles/legend/BatasRT_1_4.png" /> RT 1 RW 5<br />\
    <img src="styles/legend/BatasRT_1_5.png" /> RT 2  RW 4<br />\
    <img src="styles/legend/BatasRT_1_6.png" /> RT 2 RW 1<br />\
    <img src="styles/legend/BatasRT_1_7.png" /> RT 2 RW 2<br />\
    <img src="styles/legend/BatasRT_1_8.png" /> RT 2 RW 3<br />\
    <img src="styles/legend/BatasRT_1_9.png" /> RT 2 RW 5<br />\
    <img src="styles/legend/BatasRT_1_10.png" /> RT 3  RW 3<br />\
    <img src="styles/legend/BatasRT_1_11.png" /> RT 3 RW 1<br />\
    <img src="styles/legend/BatasRT_1_12.png" /> RT 3 RW 2<br />\
    <img src="styles/legend/BatasRT_1_13.png" /> RT 3 RW 4<br />\
    <img src="styles/legend/BatasRT_1_14.png" /> RT 3 RW 5<br />\
    <img src="styles/legend/BatasRT_1_15.png" /> RT 4 RW  5<br />\
    <img src="styles/legend/BatasRT_1_16.png" /> RT 4 RW 1<br />\
    <img src="styles/legend/BatasRT_1_17.png" /> RT 4 RW 3<br />\
    <img src="styles/legend/BatasRT_1_18.png" /> RT 4 RW 4<br />\
    <img src="styles/legend/BatasRT_1_19.png" /> RT 5 RW 1<br />\
    <img src="styles/legend/BatasRT_1_20.png" /> RT 5 RW 2<br />\
    <img src="styles/legend/BatasRT_1_21.png" /> RT 5 RW 3<br />\
    <img src="styles/legend/BatasRT_1_22.png" /> RT 5 RW 4<br />\
    <img src="styles/legend/BatasRT_1_23.png" /> RT 5 RW 5<br />\
    <img src="styles/legend/BatasRT_1_24.png" /> RT 6 RW 1<br />\
    <img src="styles/legend/BatasRT_1_25.png" /> RT 6 RW 2<br />\
    <img src="styles/legend/BatasRT_1_26.png" /> RT 6 RW 3<br />\
    <img src="styles/legend/BatasRT_1_27.png" /> RT 6 RW 5<br />\
    <img src="styles/legend/BatasRT_1_28.png" /> RT 7 RW 1<br />\
    <img src="styles/legend/BatasRT_1_29.png" /> RT 7 RW 2<br />\
    <img src="styles/legend/BatasRT_1_30.png" /> RT 7 RW 5<br />\
    <img src="styles/legend/BatasRT_1_31.png" /> RT 8 RW 1<br />\
    <img src="styles/legend/BatasRT_1_32.png" /> RT 8 RW 5<br />\
    <img src="styles/legend/BatasRT_1_33.png" /> RT 9 RW 5<br />\
    <img src="styles/legend/BatasRT_1_34.png" /> <br />'
        });
var format_kali_2 = new ol.format.GeoJSON();
var features_kali_2 = format_kali_2.readFeatures(json_kali_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_kali_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kali_2.addFeatures(features_kali_2);
var lyr_kali_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kali_2, 
                style: style_kali_2,
                popuplayertitle: "kali",
                interactive: true,
                title: '<img src="styles/legend/kali_2.png" /> kali'
            });
var format_Desa_Kemawii_poly_3 = new ol.format.GeoJSON();
var features_Desa_Kemawii_poly_3 = format_Desa_Kemawii_poly_3.readFeatures(json_Desa_Kemawii_poly_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Desa_Kemawii_poly_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Desa_Kemawii_poly_3.addFeatures(features_Desa_Kemawii_poly_3);
var lyr_Desa_Kemawii_poly_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Desa_Kemawii_poly_3, 
                style: style_Desa_Kemawii_poly_3,
                popuplayertitle: "Desa_Kemawii_poly",
                interactive: false,
                title: '<img src="styles/legend/Desa_Kemawii_poly_3.png" /> Desa_Kemawii_poly'
            });
var format_hutan_4 = new ol.format.GeoJSON();
var features_hutan_4 = format_hutan_4.readFeatures(json_hutan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_hutan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hutan_4.addFeatures(features_hutan_4);
var lyr_hutan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hutan_4, 
                style: style_hutan_4,
                popuplayertitle: "hutan",
                interactive: true,
                title: '<img src="styles/legend/hutan_4.png" /> hutan'
            });
var format_administrasidesa_ar_25k_5 = new ol.format.GeoJSON();
var features_administrasidesa_ar_25k_5 = format_administrasidesa_ar_25k_5.readFeatures(json_administrasidesa_ar_25k_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_administrasidesa_ar_25k_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_administrasidesa_ar_25k_5.addFeatures(features_administrasidesa_ar_25k_5);
var lyr_administrasidesa_ar_25k_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_administrasidesa_ar_25k_5, 
                style: style_administrasidesa_ar_25k_5,
                popuplayertitle: "administrasidesa_ar_25k",
                interactive: false,
                title: '<img src="styles/legend/administrasidesa_ar_25k_5.png" /> administrasidesa_ar_25k'
            });
var format_jalan_6 = new ol.format.GeoJSON();
var features_jalan_6 = format_jalan_6.readFeatures(json_jalan_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_jalan_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalan_6.addFeatures(features_jalan_6);
var lyr_jalan_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalan_6, 
                style: style_jalan_6,
                popuplayertitle: "jalan",
                interactive: true,
                title: '<img src="styles/legend/jalan_6.png" /> jalan'
            });
var format_pemakaman_7 = new ol.format.GeoJSON();
var features_pemakaman_7 = format_pemakaman_7.readFeatures(json_pemakaman_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_pemakaman_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pemakaman_7.addFeatures(features_pemakaman_7);
var lyr_pemakaman_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pemakaman_7, 
                style: style_pemakaman_7,
                popuplayertitle: "pemakaman",
                interactive: true,
                title: '<img src="styles/legend/pemakaman_7.png" /> pemakaman'
            });
var format_Masjid_8 = new ol.format.GeoJSON();
var features_Masjid_8 = format_Masjid_8.readFeatures(json_Masjid_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Masjid_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Masjid_8.addFeatures(features_Masjid_8);
var lyr_Masjid_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Masjid_8, 
                style: style_Masjid_8,
                popuplayertitle: "Masjid",
                interactive: true,
                title: '<img src="styles/legend/Masjid_8.png" /> Masjid'
            });
var format_Gunung_9 = new ol.format.GeoJSON();
var features_Gunung_9 = format_Gunung_9.readFeatures(json_Gunung_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Gunung_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gunung_9.addFeatures(features_Gunung_9);
var lyr_Gunung_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gunung_9, 
                style: style_Gunung_9,
                popuplayertitle: "Gunung",
                interactive: true,
                title: '<img src="styles/legend/Gunung_9.png" /> Gunung'
            });
var format_Shop_10 = new ol.format.GeoJSON();
var features_Shop_10 = format_Shop_10.readFeatures(json_Shop_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Shop_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Shop_10.addFeatures(features_Shop_10);
var lyr_Shop_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Shop_10, 
                style: style_Shop_10,
                popuplayertitle: "Shop",
                interactive: true,
                title: '<img src="styles/legend/Shop_10.png" /> Shop'
            });
var format_TempatIbadah_11 = new ol.format.GeoJSON();
var features_TempatIbadah_11 = format_TempatIbadah_11.readFeatures(json_TempatIbadah_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TempatIbadah_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TempatIbadah_11.addFeatures(features_TempatIbadah_11);
var lyr_TempatIbadah_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TempatIbadah_11, 
                style: style_TempatIbadah_11,
                popuplayertitle: "Tempat Ibadah",
                interactive: true,
                title: '<img src="styles/legend/TempatIbadah_11.png" /> Tempat Ibadah'
            });
var format_Food_12 = new ol.format.GeoJSON();
var features_Food_12 = format_Food_12.readFeatures(json_Food_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Food_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Food_12.addFeatures(features_Food_12);
var lyr_Food_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Food_12, 
                style: style_Food_12,
                popuplayertitle: "Food",
                interactive: true,
                title: '<img src="styles/legend/Food_12.png" /> Food'
            });
var format_Lapangan_13 = new ol.format.GeoJSON();
var features_Lapangan_13 = format_Lapangan_13.readFeatures(json_Lapangan_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Lapangan_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lapangan_13.addFeatures(features_Lapangan_13);
var lyr_Lapangan_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lapangan_13, 
                style: style_Lapangan_13,
                popuplayertitle: "Lapangan",
                interactive: true,
                title: '<img src="styles/legend/Lapangan_13.png" /> Lapangan'
            });
var format_Kesehatan_14 = new ol.format.GeoJSON();
var features_Kesehatan_14 = format_Kesehatan_14.readFeatures(json_Kesehatan_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Kesehatan_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kesehatan_14.addFeatures(features_Kesehatan_14);
var lyr_Kesehatan_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kesehatan_14, 
                style: style_Kesehatan_14,
                popuplayertitle: "Kesehatan",
                interactive: true,
                title: '<img src="styles/legend/Kesehatan_14.png" /> Kesehatan'
            });
var format_Rumah_15 = new ol.format.GeoJSON();
var features_Rumah_15 = format_Rumah_15.readFeatures(json_Rumah_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Rumah_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rumah_15.addFeatures(features_Rumah_15);
var lyr_Rumah_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rumah_15, 
                style: style_Rumah_15,
                popuplayertitle: "Rumah",
                interactive: true,
                title: '<img src="styles/legend/Rumah_15.png" /> Rumah'
            });
var format_Wisata_16 = new ol.format.GeoJSON();
var features_Wisata_16 = format_Wisata_16.readFeatures(json_Wisata_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Wisata_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wisata_16.addFeatures(features_Wisata_16);
var lyr_Wisata_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wisata_16, 
                style: style_Wisata_16,
                popuplayertitle: "Wisata",
                interactive: true,
                title: '<img src="styles/legend/Wisata_16.png" /> Wisata'
            });
var format_Bengkel_17 = new ol.format.GeoJSON();
var features_Bengkel_17 = format_Bengkel_17.readFeatures(json_Bengkel_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Bengkel_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bengkel_17.addFeatures(features_Bengkel_17);
var lyr_Bengkel_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bengkel_17, 
                style: style_Bengkel_17,
                popuplayertitle: "Bengkel",
                interactive: true,
                title: '<img src="styles/legend/Bengkel_17.png" /> Bengkel'
            });
var format_Sekolah_18 = new ol.format.GeoJSON();
var features_Sekolah_18 = format_Sekolah_18.readFeatures(json_Sekolah_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Sekolah_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sekolah_18.addFeatures(features_Sekolah_18);
var lyr_Sekolah_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sekolah_18, 
                style: style_Sekolah_18,
                popuplayertitle: "Sekolah",
                interactive: true,
                title: '<img src="styles/legend/Sekolah_18.png" /> Sekolah'
            });
var format_Pemerintahan_19 = new ol.format.GeoJSON();
var features_Pemerintahan_19 = format_Pemerintahan_19.readFeatures(json_Pemerintahan_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Pemerintahan_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pemerintahan_19.addFeatures(features_Pemerintahan_19);
var lyr_Pemerintahan_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pemerintahan_19, 
                style: style_Pemerintahan_19,
                popuplayertitle: "Pemerintahan",
                interactive: true,
                title: '<img src="styles/legend/Pemerintahan_19.png" /> Pemerintahan'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_BatasRT_1.setVisible(true);lyr_kali_2.setVisible(true);lyr_Desa_Kemawii_poly_3.setVisible(true);lyr_hutan_4.setVisible(true);lyr_administrasidesa_ar_25k_5.setVisible(true);lyr_jalan_6.setVisible(true);lyr_pemakaman_7.setVisible(true);lyr_Masjid_8.setVisible(true);lyr_Gunung_9.setVisible(true);lyr_Shop_10.setVisible(true);lyr_TempatIbadah_11.setVisible(true);lyr_Food_12.setVisible(true);lyr_Lapangan_13.setVisible(true);lyr_Kesehatan_14.setVisible(true);lyr_Rumah_15.setVisible(true);lyr_Wisata_16.setVisible(true);lyr_Bengkel_17.setVisible(true);lyr_Sekolah_18.setVisible(true);lyr_Pemerintahan_19.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_BatasRT_1,lyr_kali_2,lyr_Desa_Kemawii_poly_3,lyr_hutan_4,lyr_administrasidesa_ar_25k_5,lyr_jalan_6,lyr_pemakaman_7,lyr_Masjid_8,lyr_Gunung_9,lyr_Shop_10,lyr_TempatIbadah_11,lyr_Food_12,lyr_Lapangan_13,lyr_Kesehatan_14,lyr_Rumah_15,lyr_Wisata_16,lyr_Bengkel_17,lyr_Sekolah_18,lyr_Pemerintahan_19];
lyr_BatasRT_1.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_kali_2.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_Desa_Kemawii_poly_3.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'layer': 'layer', 'tourism': 'tourism', 'health_fac': 'health_fac', 'office': 'office', 'tunnel': 'tunnel', 'aeroway': 'aeroway', 'capacity': 'capacity', 'parking': 'parking', 'staff_coun': 'staff_coun', 'roof_mater': 'roof_mater', 'addr_house': 'addr_house', 'width': 'width', 'military': 'military', 'building': 'building', 'isced_leve': 'isced_leve', 'operator': 'operator', 'healthcare': 'healthcare', 'access_roo': 'access_roo', 'health_f_1': 'health_f_1', 'religion': 'religion', 'beds': 'beds', 'shop': 'shop', 'staff_co_1': 'staff_co_1', 'building_m': 'building_m', 'oneway': 'oneway', 'opening_ho': 'opening_ho', 'leisure': 'leisure', 'railway': 'railway', 'smoothness': 'smoothness', 'toilets_di': 'toilets_di', 'medical_sy': 'medical_sy', 'name': 'name', 'government': 'government', 'bridge': 'bridge', 'operator_t': 'operator_t', 'rooms': 'rooms', 'status': 'status', 'historic': 'historic', 'addr_stree': 'addr_stree', 'denominati': 'denominati', 'landuse': 'landuse', 'toilets_ha': 'toilets_ha', 'amenity': 'amenity', 'barrier': 'barrier', 'health_f_2': 'health_f_2', 'access': 'access', 'highway': 'highway', 'surface': 'surface', 'emergency': 'emergency', 'public_tra': 'public_tra', });
lyr_hutan_4.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_administrasidesa_ar_25k_5.set('fieldAliases', {'fid': 'fid', 'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_jalan_6.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Nama Jalan': 'Nama Jalan', 'LebarJalan': 'LebarJalan', });
lyr_pemakaman_7.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Masjid_8.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Gunung_9.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Shop_10.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_TempatIbadah_11.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_Food_12.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Lapangan_13.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Kesehatan_14.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Rumah_15.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Wisata_16.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Bengkel_17.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Sekolah_18.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Pemerintahan_19.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_BatasRT_1.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_kali_2.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_Desa_Kemawii_poly_3.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'layer': 'TextEdit', 'tourism': 'TextEdit', 'health_fac': 'TextEdit', 'office': 'TextEdit', 'tunnel': 'TextEdit', 'aeroway': 'TextEdit', 'capacity': 'TextEdit', 'parking': 'TextEdit', 'staff_coun': 'TextEdit', 'roof_mater': 'TextEdit', 'addr_house': 'TextEdit', 'width': 'TextEdit', 'military': 'TextEdit', 'building': 'TextEdit', 'isced_leve': 'TextEdit', 'operator': 'TextEdit', 'healthcare': 'TextEdit', 'access_roo': 'TextEdit', 'health_f_1': 'TextEdit', 'religion': 'TextEdit', 'beds': 'TextEdit', 'shop': 'TextEdit', 'staff_co_1': 'TextEdit', 'building_m': 'TextEdit', 'oneway': 'TextEdit', 'opening_ho': 'TextEdit', 'leisure': 'TextEdit', 'railway': 'TextEdit', 'smoothness': 'TextEdit', 'toilets_di': 'TextEdit', 'medical_sy': 'TextEdit', 'name': 'TextEdit', 'government': 'TextEdit', 'bridge': 'TextEdit', 'operator_t': 'TextEdit', 'rooms': 'TextEdit', 'status': 'TextEdit', 'historic': 'TextEdit', 'addr_stree': 'TextEdit', 'denominati': 'TextEdit', 'landuse': 'TextEdit', 'toilets_ha': 'TextEdit', 'amenity': 'TextEdit', 'barrier': 'TextEdit', 'health_f_2': 'TextEdit', 'access': 'TextEdit', 'highway': 'TextEdit', 'surface': 'TextEdit', 'emergency': 'TextEdit', 'public_tra': 'TextEdit', });
lyr_hutan_4.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_administrasidesa_ar_25k_5.set('fieldImages', {'fid': 'TextEdit', 'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_jalan_6.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Nama Jalan': 'TextEdit', 'LebarJalan': 'TextEdit', });
lyr_pemakaman_7.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Masjid_8.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Gunung_9.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Shop_10.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_TempatIbadah_11.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_Food_12.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Lapangan_13.set('fieldImages', {'id': '', 'Nama': '', });
lyr_Kesehatan_14.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Rumah_15.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Wisata_16.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Bengkel_17.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Sekolah_18.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Pemerintahan_19.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_BatasRT_1.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_kali_2.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_Desa_Kemawii_poly_3.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'layer': 'no label', 'tourism': 'no label', 'health_fac': 'no label', 'office': 'no label', 'tunnel': 'no label', 'aeroway': 'no label', 'capacity': 'no label', 'parking': 'no label', 'staff_coun': 'no label', 'roof_mater': 'no label', 'addr_house': 'no label', 'width': 'no label', 'military': 'no label', 'building': 'no label', 'isced_leve': 'no label', 'operator': 'no label', 'healthcare': 'no label', 'access_roo': 'no label', 'health_f_1': 'no label', 'religion': 'no label', 'beds': 'no label', 'shop': 'no label', 'staff_co_1': 'no label', 'building_m': 'no label', 'oneway': 'no label', 'opening_ho': 'no label', 'leisure': 'no label', 'railway': 'no label', 'smoothness': 'no label', 'toilets_di': 'no label', 'medical_sy': 'no label', 'name': 'no label', 'government': 'no label', 'bridge': 'no label', 'operator_t': 'no label', 'rooms': 'no label', 'status': 'no label', 'historic': 'no label', 'addr_stree': 'no label', 'denominati': 'no label', 'landuse': 'no label', 'toilets_ha': 'no label', 'amenity': 'no label', 'barrier': 'no label', 'health_f_2': 'no label', 'access': 'no label', 'highway': 'no label', 'surface': 'no label', 'emergency': 'no label', 'public_tra': 'no label', });
lyr_hutan_4.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_administrasidesa_ar_25k_5.set('fieldLabels', {'fid': 'no label', 'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_jalan_6.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Nama Jalan': 'no label', 'LebarJalan': 'no label', });
lyr_pemakaman_7.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Masjid_8.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Gunung_9.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Shop_10.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_TempatIbadah_11.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_Food_12.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Lapangan_13.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Kesehatan_14.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Rumah_15.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Wisata_16.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Bengkel_17.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Sekolah_18.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Pemerintahan_19.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Pemerintahan_19.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});