/**
 * MKT API mock data
 */

// /images/add response mock
// images_add: 'https://pgdt.gtimg.cn/gdt/0/DAAP10yAPoxxxxxxxxOBRSWIbRP.jpg/0',
const images_add_resp = {
    'data': {
        'image_id': '4152626:9xxxxxxxxxxxxxxxx8',
        'signature': '9e77ffd034e06de52a032xxxxxx28',
        'type': 'IMAGE_TYPE_JPG',
        'height': 560,
        'width': 1000,
        'file_size': 75643,
        'preview_url': 'https://i.gtimg.cn/qzone/biz/gdt/portal/styles/images/logo@2x.png'
    },
    'code': 0,
    'message': ''
}

const smart_cropped_images_add_resp = {
    'data': {
        'image_id': '5945061',
        'signature': '9e77ffd034e06de52a032xxxxxx28',
        'type': 'IMAGE_TYPE_JPG',
        'height': 258,
        'width': 525,
        'file_size': 75643,
        'preview_url': 'https://pgdt.gtimg.cn/gdt/0/EAAP10yAINAECAAAFUrBcuFocCCIWho5g.jpg/0',
        'is_smart_cropped': true,   // whether the image is smart cropped
        'origin_image_id': '5886156',
        'origin_image_url': 'https://pgdt.gtimg.cn/gdt/0/DAAP10yAMgASwABJBctyZbBysh1S-r.jpg/0'
    },
    'code': 0,
    'message': ''
}

const custom_cropped_images_add_resp = {
    'data': {
        'image_id': '5947796',
        'signature': '9e77ffd034e06de52a032xxxxxx28',
        'type': 'IMAGE_TYPE_JPG',
        'height': 258,
        'width': 525,
        'file_size': 75643,
        'preview_url': 'https://pgdt.gtimg.cn/gdt/0/EAAP10yAINAECAAAFl9BcuGeJA65a2c3E.jpg/0',
        'is_smart_cropped': true,
        'origin_image_id': '5886156',
        'origin_image_url': 'https://pgdt.gtimg.cn/gdt/0/DAAP10yAMgASwABJBctyZbBysh1S-r.jpg/0'
    },
    'code': 0,
    'message': ''
}

// /images/get response mock
const images_get_resp = {
    'data': {
        'list':
            [{
                'image_id': '4152626:9e77ffd034e06dexxxxxxx616b28',
                'signature': '9e77ffd034e0xxxx2664b4616b28',
                'type': 'IMAGE_TYPE_JPG',
                'height': 560,
                'width': 1000,
                'file_size': 75643,
                'preview_url': 'https://i.gtimg.cn/qzone/biz/gdt/portal/styles/images/logo@2x.png'
            }],
        'page_info':
        {
            'page': 1,
            'page_size': 10,
            'total_number': 1,
            'total_page': 1
        }
    },
    'code': 0,
    'message': ''
}

const custom_cropped_images_get_resp = {
    'data': {
        'list':
            [{
                'image_id': '5947796',
                'signature': '9e77ffd034e0xxxx2664b4616b28',
                'type': 'IMAGE_TYPE_JPG',
                'height': 258,
                'width': 525,
                'file_size': 75643,
                'preview_url': 'https://pgdt.gtimg.cn/gdt/0/EAAP10yAINAECAAAFl9BcuGeJA65a2c3E.jpg/0'
            }],
        'page_info':
        {
            'page': 1,
            'page_size': 10,
            'total_number': 1,
            'total_page': 1
        }
    },
    'code': 0,
    'message': ''
}

// /videos/get response mock
const videos_get_resp = {
    'code': 0,
    'message': '',
    'data': {
        'video_id': 222085,
        'width': 640,
        'height': 360,
        'video_frames': 375,
        'video_fps': 25,
        'video_codec': 'H264',
        'video_bit_rate': 420194,
        'audio_codec': 'AAC',
        'audio_bit_rate': 128001,
        'file_size': 1036889,
        'type': 'TYPE_MP4',
        'signature': '19efcaeda3c30e1cf28170d86ecbf5e0',
        'system_status': 'MEDIA_STATUS_VALID',
        'description': 'media_description',
        'preview_url': 'http:\/\/118.212.145.149\/vcloud.tc.qq.com\/1050_000001002h06q0hs0a000z5p8vdvt48a.f20.mp4?vkey=00A21D5851D627CFFBD4A53306B89BBEBE9CF9AE646BB80208AA70CA864D72F7E80B2DA90495D257C35656AE78FCE346AA7AF5E5489DE2DA621DF49C0EFA298CB5A166D75F341B8E30378FA780DE533F08CF6FE2F12B0F78'
    }
}

// /videos/add response mock
const videos_add_resp = {
    'data':
        {
            'video_id': 222085,
            'description': '',
            'signature': '395de54b988816273b2bdcea0881563b',
            'type': 'MEDIA_TYPE_MP4',
            'file_size': 1294733,
            'height': 360,
            'width': 640,
            'video_frames': 441,
            'video_fps': 24,
            'video_codec': 'H264',
            'video_bit_rate': 508373,
            'audio_codec': 'AAC',
            'audio_bit_rate': 48591,
            'preview_url': 'http:\/\/118.212.145.149\/vcloud.tc.qq.com\/1050_000001002h06q0hs0a000z5p8vdvt48a.f20.mp4?vkey=00A21D5851D627CFFBD4A53306B89BBEBE9CF9AE646BB80208AA70CA864D72F7E80B2DA90495D257C35656AE78FCE346AA7AF5E5489DE2DA621DF49C0EFA298CB5A166D75F341B8E30378FA780DE533F08CF6FE2F12B0F78',
            'system_status': 'MEDIA_STATUS_VALID'
        },
    'code': 0,
    /* test failed response */
    /* 'code': -1, */
    'message': ''
}

module.exports = {
    images_add_resp,
    images_get_resp,
    videos_get_resp,
    videos_add_resp,
    smart_cropped_images_add_resp,
    custom_cropped_images_add_resp,
    custom_cropped_images_get_resp
}