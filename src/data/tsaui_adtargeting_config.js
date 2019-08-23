// geo_location config
const geoLocationData = {
    'geo_location': {
        'type': 'geo_location',
        'name': 'geo_location',
        'description': '\u5730\u7406\u4f4d\u7f6e',
        'tips': null,
        'summary': null,
        'suffix': null,
        'options': {
            'geo_location': {
                'combine_unit': [
                    {
                        'name': 'regions',
                        'form_type': 'tree',
                        'min_occurs': '1',
                        'max_occurs': '400',
                        'allow_parent': '1',
                        'source_key': 'regions',
                        'options': {
                            'name': 'regions',
                            'options': {
                                'tree': {
                                    'list': []
                                }
                            }
                        }
                    },
                    {
                        'name': 'business_districts',
                        'form_type': 'tree',
                        'min_occurs': '1',
                        'max_occurs': '400',
                        'allow_parent': '1',
                        'source_key': 'business_districts',
                        'options': {
                            'name': 'business_districts',
                            'options': {
                                'tree': {
                                    'list': []
                                }
                            }
                        }
                    },
                    // custom_locations is not supported at the moment
                    {
                        'name': 'custom_locations',
                        'form_type': 'custom_locations',
                        'min_occurs': '1',
                        'max_occurs': '400'
                    },
                    {
                        'name': 'location_types',
                        'form_type': 'checkbox',
                        'min_occurs': '1',
                        'max_occurs': 'all',
                        'option': [
                            {
                                'name': 'RECENTLY_IN',
                                'value': 'RECENTLY_IN',
                                'cname': '\u8fd1\u671f'
                            },
                            {
                                'name': 'VISITED_IN',
                                'value': 'VISITED_IN',
                                'cname': '\u53bb\u8fc7'
                            },
                            {
                                'name': 'LIVE_IN',
                                'value': 'LIVE_IN',
                                'cname': '\u5e38\u4f4f'
                            },
                            {
                                'name': 'TRAVEL_IN',
                                'value': 'TRAVEL_IN',
                                'cname': '\u65c5\u884c'
                            }
                        ]
                    }
                ]
            }
        }
    }
}
// behavior_or_interest config
const behaviorInterestData =  {
    'behavior_or_interest': {
        'type': 'category_and_keyword',
        'name': 'behavior_or_interest',
        'description': '\u884c\u4e3a\u5174\u8da3',
        'tips': null,
        'summary': null,
        'suffix': null,
        'combine_keyword_category': true,
        'options': {
            'category_and_keyword': {
                'combine_unit': [
                    {
                        'name': 'interest',
                        'cname': '\u5174\u8da3',
                        'form_type': 'interest',
                        'tips': '\u9009\u62e9\u957f\u671f\u5bf9\u67d0\u7c7b\u4e8b\u60c5\u6709\u5174\u8da3\u7684\u7528\u6237',
                        'combine_unit': [
                            {
                                'name': 'category',
                                'cname': '\u7c7b\u76ee',
                                'form_type': 'cascaded',
                                'source_key': 'interest_category'
                            },
                            {
                                'name': 'keyword',
                                'cname': '\u5173\u952e\u8bcd',
                                'form_type': 'interest_keyword'
                            }
                        ],
                        'options': {
                            'name': 'interest_category',
                            'options': {
                                'tree': {
                                    'min_occurs': 1.0,
                                    'max_occurs': 250.0,
                                    'allow_parent': false,
                                    'list': []
                                }
                            }
                        }
                    },
                    {
                        'name': 'behavior',
                        'cname': '\u884c\u4e3a',
                        'form_type': 'behavior',
                        'is_array': true,
                        'array_min': '1',
                        'array_max': '1',
                        'tips': '\u9009\u62e9\u5728\u7279\u5b9a\u573a\u666f\u6709\u7279\u5b9a\u884c\u4e3a\u7684\u7528\u6237',
                        'combine_unit': [
                            {
                                'name': 'category',
                                'cname': '\u7c7b\u76ee',
                                'form_type': 'cascaded',
                                'source_key': 'behavior_category'
                            },
                            {
                                'name': 'keyword',
                                'cname': '\u5173\u952e\u8bcd',
                                'form_type': 'behavior_keyword'
                            },
                            {
                                'name': 'scene',
                                'cname': '\u884c\u4e3a\u573a\u666f',
                                'form_type': 'checkbox',
                                'min_occurs': '1',
                                'max_occurs': '3',
                                'list': [
                                    {
                                        'name': 'BEHAVIOR_INTEREST_SCENE_ALL',
                                        'value': 'BEHAVIOR_INTEREST_SCENE_ALL',
                                        'cname': '\u5168\u90e8\u573a\u666f',
                                        'tips': '\u9009\u62e9\u5728\u817e\u8baf\u5404\u79cd\u573a\u666f\u4e0b\u6709\u76f8\u5173\u884c\u4e3a\u7684\u7528\u6237'
                                    },
                                    {
                                        'name': 'BEHAVIOR_INTEREST_SCENE_APP',
                                        'value': 'BEHAVIOR_INTEREST_SCENE_APP',
                                        'cname': 'APP',
                                        'tips': '\u9009\u62e9\u5728\u0041\u0050\u0050\u4e0a\u6709\u76f8\u5173\u884c\u4e3a\u7684\u7528\u6237'
                                    },
                                    {
                                        'name': 'BEHAVIOR_INTEREST_SCENE_ECOMMERCE',
                                        'value': 'BEHAVIOR_INTEREST_SCENE_ECOMMERCE',
                                        'cname': '\u7535\u5546',
                                        'tips': '\u9009\u62e9\u5728\u7535\u5546\u4e0a\u6709\u76f8\u5173\u884c\u4e3a\u7684\u7528\u6237'
                                    },
                                    {
                                        'name': 'BEHAVIOR_INTEREST_SCENE_INFORMATION',
                                        'value': 'BEHAVIOR_INTEREST_SCENE_INFORMATION',
                                        'cname': '\u8d44\u8baf',
                                        'tips': '\u9009\u62e9\u5728\u8d44\u8baf\u3001\u9605\u8bfb\u3001\u641c\u7d22\u4e0a\u6709\u76f8\u5173\u884c\u4e3a\u7684\u7528\u6237'
                                    }
                                ]
                            },
                            {
                                'name': 'time_window',
                                'cname': '\u884c\u4e3a\u65f6\u6548\u6027',
                                'form_type': 'select',
                                'min_occurs': '1',
                                'max_occurs': '1',
                                'tips': '\u6839\u636e\u7528\u6237\u7684\u884c\u4e3a\u53d1\u751f\u65f6\u95f4\uff0c\u9009\u62e9\u67d0\u65f6\u95f4\u6bb5\u5185\u6709\u76f8\u5173\u884c\u4e3a\u7684\u7528\u6237',
                                'list': [
                                    {
                                        'name': 'BEHAVIOR_INTEREST_TIME_WINDOW_SEVEN_DAY',
                                        'value': 'BEHAVIOR_INTEREST_TIME_WINDOW_SEVEN_DAY',
                                        'cname': '7\u5929'
                                    },
                                    {
                                        'name': 'BEHAVIOR_INTEREST_TIME_WINDOW_FIFTEEN_DAY',
                                        'value': 'BEHAVIOR_INTEREST_TIME_WINDOW_FIFTEEN_DAY',
                                        'cname': '15\u5929'
                                    },
                                    {
                                        'name': 'BEHAVIOR_INTEREST_TIME_WINDOW_THIRTY_DAY',
                                        'value': 'BEHAVIOR_INTEREST_TIME_WINDOW_THIRTY_DAY',
                                        'cname': '30\u5929'
                                    },
                                    {
                                        'name': 'BEHAVIOR_INTEREST_TIME_WINDOW_THREE_MONTH',
                                        'value': 'BEHAVIOR_INTEREST_TIME_WINDOW_THREE_MONTH',
                                        'cname': '3\u4e2a\u6708'
                                    },
                                    {
                                        'name': 'BEHAVIOR_INTEREST_TIME_WINDOW_SIX_MONTH',
                                        'value': 'BEHAVIOR_INTEREST_TIME_WINDOW_SIX_MONTH',
                                        'cname': '6\u4e2a\u6708'
                                    },
                                    {
                                        'name': 'BEHAVIOR_INTEREST_TIME_WINDOW_ONE_YEAR',
                                        'value': 'BEHAVIOR_INTEREST_TIME_WINDOW_ONE_YEAR',
                                        'cname': '1\u5e74'
                                    }
                                ]
                            },
                            {
                                'name': 'intensity',
                                'cname': '\u884c\u4e3a\u5f3a\u5ea6',
                                'form_type': 'checkbox',
                                'min_occurs': '1',
                                'max_occurs': '1',
                                'tips': '\u6839\u636e\u7528\u6237\u5728\u5f53\u524d\u573a\u666f\u3001\u65f6\u6548\u6027\u5185\u7684\u884c\u4e3a\u6295\u5165\u7a0b\u5ea6\uff0c\u53ef\u9009\u62e9\u4e0d\u9650\u6216\u6295\u5165\u5ea6\u9ad8\u7684\u7528\u6237',
                                'list': [
                                    {
                                        'name': 'BEHAVIOR_INTEREST_INTENSITY_ALL',
                                        'value': 'BEHAVIOR_INTEREST_INTENSITY_ALL',
                                        'cname': '\u5168\u90e8\u5f3a\u5ea6'
                                    },
                                    {
                                        'name': 'BEHAVIOR_INTEREST_INTENSITY_HIGH',
                                        'value': 'BEHAVIOR_INTEREST_INTENSITY_HIGH',
                                        'cname': '\u9ad8\u5f3a\u5ea6'
                                    }
                                ]
                            }
                        ],
                        'options': {
                            'name': 'behavior_category',
                            'options': {
                                'tree': {
                                    'min_occurs': 1.0,
                                    'max_occurs': 250.0,
                                    'allow_parent': false,
                                    'list': []
                                }
                            }
                        }
                    }
                ]
            }
        }
    }
};

// wechat_official_account_category
const wechatOfficialAccountCategory = {
    'wechat_official_account_category': {
        'type': 'category_and_keyword',
        'name': 'wechat_official_account_category',
        'description': '\u5fae\u4fe1\u516c\u4f17\u53f7\u7c7b\u578b',
        'tips': null,
        'summary': '\u6307\u5b9a\u5e7f\u544a\u5c55\u73b0\u5728\u7279\u5b9a\u7c7b\u578b\u7684\u5fae\u4fe1\u516c\u4f17\u53f7\u4e0a',
        'suffix': null,
        'combine_keyword_category': true,
        'options': {
            'category_and_keyword': {
                'combine_unit': [
                    {
                        'cname': '\u7c7b\u76ee',
                        'name': 'wechat_official_account_category',
                        'combine_unit': [
                            {
                                'name': 'category',
                                'cname': '',
                                'form_type': 'cascaded',
                                'source_key': 'wechat_official_account_category',
                                'min_occurs': '0',
                                'max_occurs': '250'
                            }
                        ],
                        'options': {
                            'name': 'wechat_official_account_category',
                            'options': {
                                'tree': {
                                    'min_occurs': 1.0,
                                    'max_occurs': 250.0,
                                    'allow_parent': false,
                                    'list': []
                                }
                            }
                        }
                    }
                ]
            }
        }
    }
}

const mobileUnionCategory = {
    'mobile_union_category': {
        'type': 'category_and_keyword',
        'name': 'mobile_union_category',
        'description': '\u79fb\u52a8\u5a92\u4f53\u7c7b\u578b',
        'tips': null,
        'summary': '\u6307\u5b9a\u5e7f\u544a\u5c55\u73b0\u5728\u7279\u5b9a\u7c7b\u578b\u7684\u5916\u90e8\u5a92\u4f53\u5e73\u53f0\u4e0a',
        'suffix': null,
        'combine_keyword_category': true,
        'options': {
            'category_and_keyword': {
                'combine_unit': [
                    {
                        'name': 'mobile_union_category',
                        'combine_unit': [
                            {
                                'name': 'category',
                                'cname': '\u7c7b\u76ee',
                                'form_type': 'cascaded',
                                'source_key': 'mobile_union_category',
                                'min_occurs': '0',
                                'max_occurs': '250'
                            }
                        ],
                        'options': {
                            'name': 'mobile_union_category',
                            'options': {
                                'tree': {
                                    'min_occurs': 1.0,
                                    'max_occurs': 250.0,
                                    'allow_parent': false,
                                    'list': []
                                }
                            }
                        }
                    }
                ]
            }
        }
    }
}

const customAudiences = {
    'custom_audiences': {
        'type': 'custom_audiences',
        'name': 'custom_audiences',
        'description': '\u81ea\u5b9a\u4e49\u4eba\u7fa4',
        'tips': null,
        'summary': '\u9009\u62e9\u7279\u5b9a\u7528\u6237\u7fa4\u7528\u4e8e\u6295\u653e',
        'suffix': null,
        'options': {
            'min_occurs': '1',
            'max_occurs': '50',
            'custom_audiences_types': [
                {
                    'value': 'custom_audience',
                    'desc': '\u5b9a\u5411\u7528\u6237\u7fa4',
                    'name': 'custom_audience',
                    'tips': '\u60a8\u7684\u5e7f\u544a\u5c06\u4ec5\u6295\u653e\u7ed9\u9009\u5b9a\u7684\u7528\u6237\u002c\u5f53\u591a\u4e2a\u7528\u6237\u7fa4\u88ab\u6dfb\u52a0\u5230\u4e00\u4e2a\u5e7f\u544a\u4e0a\u65f6\uff0c\u8fd9\u4e9b\u7528\u6237\u7fa4\u4e4b\u95f4\u4e3a\u201c\u6216\u8005\u201d\u5173\u7cfb\uff0c\u53ea\u8981\u5176\u4e2d\u4e00\u4e2a\u7528\u6237\u7fa4\u6709\u6548\uff0c\u5e7f\u544a\u5373\u53ef\u88ab\u6295\u653e',
                },
                {
                    'value': 'excluded_custom_audience',
                    'desc': '\u6392\u9664\u7528\u6237\u7fa4',
                    'name': 'excluded_custom_audience',
                    'tips': '\u60a8\u7684\u5e7f\u544a\u5c06\u4e0d\u4f1a\u6295\u653e\u7ed9\u9009\u5b9a\u7684\u7528\u6237'
                }
            ]
        }
    }
}

const wechatAdBehavior = {
    'wechat_ad_behavior': {
        'type': 'checkbox_group',
        'name': 'wechat_ad_behavior',
        'description': '\u5fae\u4fe1\u5e7f\u544a\u884c\u4e3a',
        'tips': null,
        'summary': '',
        'suffix': null,
        'options': {
            'min_occurs': '1',
            'max_occurs': '2',
            'checkbox_group': [
                {
                    'value': 'actions',
                    'desc': '\u5305\u542b\u7684\u884c\u4e3a',
                    'name': 'actions',
                    'tips': '\u591a\u4e2a\u884c\u4e3a\u4e4b\u95f4\u4e3a\u5e76\u96c6\uff08\u006f\u0072\uff09\u7684\u5173\u7cfb',
                    'min_occurs': '1',
                    'max_occurs': 'all'
                },
                {
                    'value': 'excluded_actions',
                    'desc': '\u6392\u9664\u7684\u884c\u4e3a',
                    'name': 'excluded_actions',
                    'tips': '\u591a\u4e2a\u884c\u4e3a\u4e4b\u95f4\u4e3a\u5e76\u96c6\uff08\u006f\u0072\uff09\u7684\u5173\u7cfb',
                    'min_occurs': '1',
                    'max_occurs': 'all'
                }
            ],
            'list': [
                {
                    'value': 'WECHAT_OFFICIAL_ACCOUNT_FOLLOWED',
                    'desc': '\u5173\u6ce8\u8fc7\u5e7f\u544a\u4e3b\u5fae\u4fe1\u516c\u4f17\u53f7',
                    'name': 'WECHAT_OFFICIAL_ACCOUNT_FOLLOWED',
                    'tips': ''
                },
                {
                    'value': 'WECHAT_COUPON_OBTAINED',
                    'desc': '\u9886\u53d6\u8fc7\u5e7f\u544a\u4e3b\u5fae\u4fe1\u5361\u5238',
                    'name': 'WECHAT_COUPON_OBTAINED',
                    'tips': ''
                },
                {
                    'value': 'WECHAT_OFFICIAL_ACCOUNT_AD_LIKE',
                    'desc': '\u5bf9\u5fae\u4fe1\u516c\u4f17\u53f7\u5e7f\u544a\u611f\u5174\u8da3',
                    'name': 'WECHAT_OFFICIAL_ACCOUNT_AD_LIKE',
                    'tips': ''
                },
                {
                    'value': 'WECHAT_MOMENTS_AD_LIKE',
                    'desc': '\u5bf9\u5fae\u4fe1\u670b\u53cb\u5708\u5e7f\u544a\u611f\u5174\u8da3',
                    'name': 'WECHAT_MOMENTS_AD_LIKE',
                    'tips': ''
                }
            ]
        }
    }
}
// normal targetings' config
let _config = {
    'targeting_fields': {
        'custom_slot': {
            'type': 'custom_type',
            'name': 'custom_slot',
            'description': '\u81ea\u5b9a\u4e49\u7c7b\u578b',
            'tips': '',
            'summary': '',
            'suffix': '\u5c81',
            'options': {
                'custom_type': {
                    'min': 14,
                    'max': 66,
                    'endless': true
                }
            }
        },
        'age': {
            'type': 'range',
            'name': 'age',
            'description': '\u5e74\u9f84',
            'tips': '\u7531\u4e8e\u56fd\u5bb6\u653f\u7b56\uff0c\u82e5\u6295\u653e\u9152\u7c7b\u5e7f\u544a\uff0c\u7cfb\u7edf\u53ea\u4f1a\u5411\u0031\u0038\u5c81\u4ee5\u4e0a\u53d7\u4f17\u5c55\u793a',
            'summary': null,
            'suffix': '\u5c81',
            // step defaults to 1
            // 'step': 3,
            'options': {
                'min': 14.0,
                'max': 66.0,
                'endless': 'true'
            }
        },
        'gender': {
            'type': 'radio',
            'name': 'gender',
            'description': '\u6027\u522b',
            'tips': '',
            'summary': '',
            'suffix': '',
            'options': {
                'radio': {
                    'list': [
                        {
                            'value': 'MALE',
                            'desc': '\u7537',
                            'name': 'Male',
                            'tips': ''
                        },
                        {
                            'value': 'FEMALE',
                            'desc': '\u5973',
                            'name': 'Female',
                            'tips': ''
                        }
                    ],
                    'min_occurs': '1',
                    'max_occurs': '1'
                }
            }
        },
        'education': {
            'type': 'checkbox',
            'name': 'education',
            'description': '\u5b66\u5386',
            'tips': '',
            'summary': '\u7528\u6237\u7684\u6700\u9ad8\u5b66\u5386',
            'suffix': '',
            'options': {
                'checkbox': {
                    'min_occurs': '1',
                    'max_occurs': 'all',
                    'list': [
                        {
                            'value': 'DOCTOR',
                            'desc': '\u535a\u58eb',
                            'name': 'Doctor',
                            'tips': ''
                        },
                        {
                            'value': 'MASTER',
                            'desc': '\u7855\u58eb',
                            'name': 'Master',
                            'tips': ''
                        },
                        {
                            'value': 'BACHELOR',
                            'desc': '\u672c\u79d1',
                            'name': 'College',
                            'tips': ''
                        },
                        {
                            'value': 'JUNIOR_COLLEGE',
                            'desc': '\u4e13\u79d1',
                            'name': 'JuniorCollege',
                            'tips': ''
                        },
                        {
                            'value': 'SENIOR',
                            'desc': '\u9ad8\u4e2d',
                            'name': 'HighSchool',
                            'tips': ''
                        },
                        {
                            'value': 'JUNIOR',
                            'desc': '\u521d\u4e2d',
                            'name': 'MiddleSchool',
                            'tips': ''
                        },
                        {
                            'value': 'PRIMARY',
                            'desc': '\u5c0f\u5b66',
                            'name': 'PrimarySchool',
                            'tips': ''
                        }
                    ]
                }
            }
        },
        'marital_status': {
            'type': 'checkbox',
            'name': 'marital_status',
            'description': '\u5a5a\u604b\u72b6\u6001',
            'tips': '',
            'summary': '',
            'suffix': '',
            'options': {
                'checkbox': {
                    'min_occurs': '1',
                    'max_occurs': 'all',
                    'list': [
                        {
                            'value': 'SINGLE',
                            'desc': '\u5355\u8eab',
                            'name': 'Single',
                            'tips': '\u6ca1\u6709\u604b\u7231\u7684\u5bf9\u8c61\u5904\u4e8e\u5355\u8eab\u72b6\u6001\u7684\u7528\u6237'
                        },
                        {
                            'value': 'NEWLY_MARRIED',
                            'desc': '\u65b0\u5a5a',
                            'name': 'Newlyweds',
                            'tips': '\u4ece\u6709\u7ed3\u5a5a\u8ba1\u5212\uff08\u8ba2\u5a5a\u7b49\uff09\u884c\u4e3a\u5f00\u59cb\u81f3\u7ed3\u5a5a\u4e00\u5e74\u4ee5\u5185\u7684\u7528\u6237'
                        },
                        {
                            'value': 'MARRIED',
                            'desc': '\u5df2\u5a5a',
                            'name': 'Married',
                            'tips': '\u7ed3\u5a5a\u8d85\u8fc7\u4e00\u5e74\u7684\u7528\u6237'
                        },
                        {
                            'value': 'PARENTING',
                            'desc': '\u80b2\u513f\uff08\u5168\u90e8\uff09',
                            'name': 'HaveBaby',
                            'tips': '\u4ece\u6709\u751f\u80b2\u8ba1\u5212\u5f00\u59cb\u81f3\u5c0f\u5b693\u5c81\u4ee5\u5185\u7684\u7528\u6237'
                        },
                        {
                            'value': 'PARENTING_0',
                            'desc': '\u80b2\u513f\uff08\u5b55\u80b2\u4e2d\uff09',
                            'name': 'HaveBabyExpected',
                            'tips': '\u4ece\u6709\u751f\u80b2\u8ba1\u5212\u81f3\u5c0f\u5b69\u5373\u5c06\u51fa\u751f\u7684\u7528\u6237'
                        },
                        {
                            'value': 'PARENTING_0_6',
                            'desc': '\u80b2\u513f\uff08\u5b9d\u5b9d0-6\u4e2a\u6708\uff09',
                            'name': 'HaveBabyHalfYear',
                            'tips': '\u5bb6\u91cc\u6709\u5c0f\u5b69\uff0c\u4e14\u5c0f\u5b69\u5e74\u9f84\u57280-6\u4e2a\u6708\u7684\u7528\u6237'
                        },
                        {
                            'value': 'PARENTING_6_12',
                            'desc': '\u80b2\u513f\uff08\u5b9d\u5b9d6-12\u4e2a\u6708\uff09',
                            'name': 'HaveBabyOneYear',
                            'tips': '\u5bb6\u91cc\u6709\u5c0f\u5b69\uff0c\u4e14\u5c0f\u5b69\u5e74\u9f84\u57286-12\u4e2a\u6708\u7684\u7528\u6237'
                        },
                        {
                            'value': 'PARENTING_12_24',
                            'desc': '\u80b2\u513f\uff08\u5b9d\u5b9d1-2\u5c81\uff09',
                            'name': 'HaveBabyTwoYear',
                            'tips': '\u5bb6\u91cc\u6709\u5c0f\u5b69\uff0c\u4e14\u5c0f\u5b69\u5e74\u9f84\u57281-2\u5c81\u7684\u7528\u6237'
                        },
                        {
                            'value': 'PARENTING_24_36',
                            'desc': '\u80b2\u513f\uff08\u5b9d\u5b9d2-3\u5c81\uff09',
                            'name': 'HaveBabyThreeYear',
                            'tips': '\u5bb6\u91cc\u6709\u5c0f\u5b69\uff0c\u4e14\u5c0f\u5b69\u5e74\u9f84\u57282-3\u5c81\u7684\u7528\u6237'
                        }
                    ]
                }
            }
        },
        'working_status': {
            'type': 'checkbox',
            'name': 'working_status',
            'description': '\u5de5\u4f5c\u72b6\u6001',
            'tips': '',
            'summary': '',
            'suffix': '',
            'options': {
                'checkbox': {
                    'min_occurs': '1',
                    'max_occurs': 'all',
                    'list': [
                        {
                            'value': 'COLLEGE_STUDENT',
                            'desc': '\u5728\u6821\u5927\u5b66\u751f',
                            'name': 'college_student',
                            'tips': ''
                        },
                        {
                            'value': 'BUSINESS_USER',
                            'desc': '\u5546\u65c5\u7528\u6237',
                            'name': 'business_user',
                            'tips': '\u56e0\u5de5\u4f5c\u9700\u8981\u800c\u7ecf\u5e38\u51fa\u5dee\u7684\u5546\u52a1\u7528\u6237'
                        },
                        {
                            'value': 'IT_WORKER',
                            'desc': 'IT\u4e92\u8054\u7f51\u5de5\u4f5c\u8005',
                            'name': 'it_worker',
                            'tips': ''
                        },
                        {
                            'value': 'GOVERNMENT_OFFICER',
                            'desc': '\u653f\u5e9c\u516c\u804c\u4eba\u5458',
                            'name': 'government_officer',
                            'tips': ''
                        },
                        {
                            'value': 'SCIENCE_EDUCATOR',
                            'desc': '\u79d1\u7814\u6559\u80b2\u8005',
                            'name': 'science_educator',
                            'tips': ''
                        },
                        {
                            'value': 'HEALTH_CARE_WORKER',
                            'desc': '\u533b\u62a4\u5de5\u4f5c\u8005',
                            'name': 'health_care_worker',
                            'tips': ''
                        }
                    ]
                }
            }
        },
        'user_os': {
            'type': 'checkbox',
            'name': 'user_os',
            'description': '\u64cd\u4f5c\u7cfb\u7edf',
            'tips': '',
            'summary': '',
            'suffix': '',
            'options': {
                'checkbox': {
                    'min_occurs': '1',
                    'max_occurs': 'all',
                    'list': [
                        {
                            'value': 'IOS',
                            'desc': 'iOS',
                            'name': 'IOS',
                            'tips': ''
                        },
                        {
                            'value': 'ANDROID',
                            'desc': 'Android',
                            'name': 'Android',
                            'tips': ''
                        },
                        {
                            'value': 'WINDOWS',
                            'desc': 'Windows',
                            'name': 'Windows',
                            'tips': ''
                        },
                        {
                            'value': 'SYMBIAN',
                            'desc': 'Symbian',
                            'name': 'Symbian',
                            'tips': ''
                        },
                        {
                            'value': 'JAVA',
                            'desc': 'Java',
                            'name': 'Java',
                            'tips': ''
                        },
                        {
                            'value': 'UNKNOWN',
                            'desc': '\u672a\u77e5',
                            'name': 'OSConfidential',
                            'tips': ''
                        }
                    ]
                }
            }
        },
        'new_device': {
            'type': 'checkbox',
            'name': 'new_device',
            'description': '\u65b0\u8bbe\u5907\u7528\u6237',
            'tips': '',
            'summary': '\u8fd1\u4e09\u4e2a\u6708\u6362\u7528\u65b0\u79fb\u52a8\u8bbe\u5907\u7684\u7528\u6237',
            'suffix': '',
            'options': {
                'checkbox': {
                    'min_occurs': '1',
                    'max_occurs': 'all',
                    'list': [
                        {
                            'value': 'IOS',
                            'desc': '\u82f9\u679c\u65b0\u7528\u6237',
                            'name': 'new_ios',
                            'tips': ''
                        },
                        {
                            'value': 'ANDROID',
                            'desc': '\u5b89\u5353\u65b0\u7528\u6237',
                            'name': 'new_android',
                            'tips': ''
                        }
                    ]
                }
            }
        },
        'device_price': {
            'type': 'checkbox',
            'name': 'device_price',
            'description': '\u8bbe\u5907\u4ef7\u683c',
            'tips': '',
            'summary': '',
            'suffix': '',
            'options': {
                'checkbox': {
                    'min_occurs': '1',
                    'max_occurs': 'all',
                    'list': [
                        {
                            'value': 'PRICE_1500_LESS',
                            'desc': '\uffe5\u0020\u0031\u0035\u0030\u0030\u0020\u4ee5\u4e0b',
                            'name': 'PRICE_1500_LESS',
                            'tips': ''
                        },
                        {
                            'value': 'PRICE_1500_2500',
                            'desc': '\uffe5\u0020\u0031\u0035\u0030\u0030\u0020\u007e\u0020\u0032\u0035\u0030\u0030',
                            'name': 'PRICE_1500_2500',
                            'tips': ''
                        },
                        {
                            'value': 'PRICE_2500_3500',
                            'desc': '\uffe5\u0020\u0032\u0035\u0030\u0030\u0020\u007e\u0020\u0033\u0035\u0030\u0030',
                            'name': 'PRICE_2500_3500',
                            'tips': ''
                        },
                        {
                            'value': 'PRICE_3500_4500',
                            'desc': '\uffe5\u0020\u0033\u0035\u0030\u0030\u0020\u007e\u0020\u0034\u0035\u0030\u0030',
                            'name': 'PRICE_3500_4500',
                            'tips': ''
                        },
                        {
                            'value': 'PRICE_4500_MORE',
                            'desc': '\uffe5\u0020\u0034\u0035\u0030\u0030\u0020\u4ee5\u4e0a',
                            'name': 'PRICE_4500_MORE',
                            'tips': ''
                        }
                    ]
                }
            }
        },
        'network_type': {
            'type': 'checkbox',
            'name': 'network_type',
            'description': '\u8054\u7f51\u65b9\u5f0f',
            'tips': '',
            'summary': '',
            'suffix': '',
            'options': {
                'checkbox': {
                    'min_occurs': '1',
                    'max_occurs': 'all',
                    'list': [
                        {
                            'value': 'WIFI',
                            'desc': 'Wi-Fi',
                            'name': 'Wifi',
                            'tips': ''
                        },
                        {
                            'value': 'NET_2G',
                            'desc': '2G',
                            'name': '2G',
                            'tips': ''
                        },
                        {
                            'value': 'NET_3G',
                            'desc': '3G',
                            'name': '3G',
                            'tips': ''
                        },
                        {
                            'value': 'NET_4G',
                            'desc': '4G',
                            'name': '4G',
                            'tips': ''
                        },
                        {
                            'value': 'UNKNOWN',
                            'desc': '\u672a\u77e5',
                            'name': 'ConnectionTypeConfidential',
                            'tips': ''
                        }
                    ]
                }
            }
        },
        'network_operator': {
            'type': 'checkbox',
            'name': 'network_operator',
            'description': '\u79fb\u52a8\u8fd0\u8425\u5546',
            'tips': '',
            'summary': '',
            'suffix': '',
            'options': {
                'checkbox': {
                    'min_occurs': '1',
                    'max_occurs': 'all',
                    'list': [
                        {
                            'value': 'CMCC',
                            'desc': '\u4e2d\u56fd\u79fb\u52a8',
                            'name': 'CMCC',
                            'tips': ''
                        },
                        {
                            'value': 'CUC',
                            'desc': '\u4e2d\u56fd\u8054\u901a',
                            'name': 'CUC',
                            'tips': ''
                        },
                        {
                            'value': 'CTC',
                            'desc': '\u4e2d\u56fd\u7535\u4fe1',
                            'name': 'CTC',
                            'tips': ''
                        },
                        {
                            'value': 'UNKNOWN',
                            'desc': '\u672a\u77e5',
                            'name': 'TelcomOperatorConfidential',
                            'tips': ''
                        }
                    ]
                }
            }
        },
        'network_scene': {
            'type': 'checkbox',
            'name': 'network_scene',
            'description': '\u4e0a\u7f51\u573a\u666f',
            'tips': '',
            'summary': '',
            'suffix': '',
            'options': {
                'checkbox': {
                    'min_occurs': '1',
                    'max_occurs': 'all',
                    'list': [
                        {
                            'value': 'PUBLIC_PLACE',
                            'desc': '\u516c\u5171\u573a\u6240',
                            'name': 'PUBLIC_PLACE',
                            'tips': ''
                        },
                        {
                            'value': 'HOME',
                            'desc': '\u5bb6\u5ead',
                            'name': 'HOME',
                            'tips': ''
                        },
                        {
                            'value': 'COMPANY',
                            'desc': '\u4f01\u4e1a',
                            'name': 'COMPANY',
                            'tips': ''
                        },
                        {
                            'value': 'SCHOOL',
                            'desc': '\u5b66\u6821',
                            'name': 'SCHOOL',
                            'tips': ''
                        }
                    ]
                }
            }
        },
        'dressing_index': {
            'type': 'checkbox',
            'name': 'dressing_index',
            'description': '\u7a7f\u8863\u6307\u6570',
            'tips': '',
            'summary': '\u6839\u636e\u6c14\u6e29\u3001\u6e7f\u5ea6\u3001\u98ce\u7b49\u6c14\u8c61\u6761\u4ef6\uff0c\u5bf9\u4eba\u4eec\u9002\u5b9c\u7a7f\u7740\u7684\u670d\u88c5\u8fdb\u884c\u5206\u7ea7 ',
            'suffix': '',
            'options': {
                'checkbox': {
                    'min_occurs': '1',
                    'max_occurs': 'all',
                    'list': [
                        {
                            'value': 'FREEZING',
                            'desc': '\u5bd2\u51b7',
                            'name': 'freezing',
                            'tips': ''
                        },
                        {
                            'value': 'COLD',
                            'desc': '\u51b7',
                            'name': 'cold',
                            'tips': ''
                        },
                        {
                            'value': 'CHILLY',
                            'desc': '\u51c9',
                            'name': 'chilly',
                            'tips': ''
                        },
                        {
                            'value': 'COOL',
                            'desc': '\u6e29\u51c9',
                            'name': 'cool',
                            'tips': ''
                        },
                        {
                            'value': 'MILDLY_COOL',
                            'desc': '\u51c9\u8212\u9002',
                            'name': 'mildly_cool',
                            'tips': ''
                        },
                        {
                            'value': 'MILD',
                            'desc': '\u8212\u9002',
                            'name': 'mild',
                            'tips': ''
                        },
                        {
                            'value': 'WARM',
                            'desc': '\u70ed\u8212\u9002',
                            'name': 'warm',
                            'tips': ''
                        },
                        {
                            'value': 'TORRIDITY',
                            'desc': '\u708e\u70ed',
                            'name': 'torridity',
                            'tips': ''
                        }
                    ]
                }
            }
        },
        'uv_index': {
            'type': 'checkbox',
            'name': 'uv_index',
            'description': '\u7d2b\u5916\u7ebf\u6307\u6570',
            'tips': '',
            'summary': '',
            'suffix': '',
            'options': {
                'checkbox': {
                    'min_occurs': '1',
                    'max_occurs': 'all',
                    'list': [
                        {
                            'value': 'WEAK',
                            'desc': '\u5f31',
                            'name': 'UVI_weak',
                            'tips': ''
                        },
                        {
                            'value': 'TEND_WEAK',
                            'desc': '\u504f\u5f31',
                            'name': 'UVI_tend_weak',
                            'tips': ''
                        },
                        {
                            'value': 'MEDIUM',
                            'desc': '\u4e2d\u7b49',
                            'name': 'UVI_middle',
                            'tips': ''
                        },
                        {
                            'value': 'TEND_STRONG',
                            'desc': '\u504f\u5f3a',
                            'name': 'UVI_tend_strong',
                            'tips': ''
                        },
                        {
                            'value': 'STRONG',
                            'desc': '\u5f3a',
                            'name': 'UVI_strong',
                            'tips': ''
                        }
                    ]
                }
            }
        },
        'makeup_index': {
            'type': 'checkbox',
            'name': 'makeup_index',
            'description': '\u5316\u5986\u6307\u6570',
            'tips': '',
            'summary': '\u6839\u636e\u6c14\u8c61\u6761\u4ef6\u5bf9\u4eba\u7684\u76ae\u80a4\u7684\u5f71\u54cd\u5236\u5b9a\u51fa\u6765\u7684\u6307\u6570\uff0c\u4e3b\u8981\u5f71\u54cd\u6709\u6e29\u5ea6\u3001\u6e7f\u5ea6\u3001\u98ce\u901f\u3001\u7d2b\u5916\u7ebf\u5f3a\u5ea6',
            'suffix': '',
            'options': {
                'checkbox': {
                    'min_occurs': '1',
                    'max_occurs': 'all',
                    'list': [
                        {
                            'value': 'PREVENT_CRACKING',
                            'desc': '\u4fdd\u6e7f\u9632\u9f9f\u88c2',
                            'name': 'MKI_moisturize_against_chapping',
                            'tips': ''
                        },
                        {
                            'value': 'MOISTURING',
                            'desc': '\u4fdd\u6e7f',
                            'name': 'MKI_moisturize',
                            'tips': ''
                        },
                        {
                            'value': 'OIL_CONTROL',
                            'desc': '\u63a7\u6cb9',
                            'name': 'MKI_oilcontrol',
                            'tips': ''
                        },
                        {
                            'value': 'UV_PROTECT',
                            'desc': '\u9632\u6652',
                            'name': 'UVI_sunblock',
                            'tips': ''
                        }
                    ]
                }
            }
        },
        'climate': {
            'type': 'checkbox',
            'name': 'climate',
            'description': '\u6c14\u8c61',
            'tips': '',
            'summary': '',
            'suffix': '',
            'options': {
                'checkbox': {
                    'min_occurs': '1',
                    'max_occurs': 'all',
                    'list': [
                        {
                            'value': 'SHINE',
                            'desc': '\u6674\u5929',
                            'name': 'sunshine',
                            'tips': ''
                        },
                        {
                            'value': 'CLOUDY',
                            'desc': '\u9634\u5929',
                            'name': 'cloudy',
                            'tips': ''
                        },
                        {
                            'value': 'RAINY',
                            'desc': '\u96e8\u5929',
                            'name': 'rainy',
                            'tips': ''
                        },
                        {
                            'value': 'FOGGY',
                            'desc': '\u96fe',
                            'name': 'foggy',
                            'tips': ''
                        },
                        {
                            'value': 'SNOWY',
                            'desc': '\u96ea',
                            'name': 'snowy',
                            'tips': ''
                        },
                        {
                            'value': 'SANDY',
                            'desc': '\u6c99\u5c18',
                            'name': 'sandy',
                            'tips': ''
                        }
                    ]
                }
            }
        },
        'temperature': {
            'type': 'range',
            'name': 'temperature',
            'description': '\u6e29\u5ea6',
            'tips': '',
            'summary': '',
            'suffix': '\u2103',
            'options': {
                'min': 223,
                'max': 323,
                // label = value + label_offset
                'label_offset': -273
            }
        },
        'app_install_status': {
            'type': 'radio',
            'name': 'app_install_status',
            'description': 'App\u5b89\u88c5',
            'tips': '',
            'summary': '\u5df2\u5b89\u88c5\u6216\u672a\u5b89\u88c5\u6240\u63a8\u5e7fApp\u7684\u7528\u6237',
            'suffix': '',
            'options': {
                'radio': {
                    'list': [
                        {
                            'value': 'NOT_INSTALLED',
                            'desc': '\u672a\u5b89\u88c5\u8be5\u5e94\u7528\u7684\u7528\u6237',
                            'name': '',
                            'tips': ''
                        },
                        {
                            'value': 'INSTALLED',
                            'desc': '\u5df2\u5b89\u88c5\u8be5\u5e94\u7528\u7684\u7528\u6237',
                            'name': '',
                            'tips': ''
                        }
                    ],
                    'min_occurs': 1,
                    'max_occurs': 1
                }
            }
        },
        'consumption_status': {
            'type': 'checkbox',
            'name': 'consumption_status',
            'description': '\u6d88\u8d39\u72b6\u6001',
            'tips': '',
            'summary': '',
            'suffix': '',
            'options': {
                'checkbox': {
                    'min_occurs': '1',
                    'max_occurs': 'all',
                    'list': [
                        {
                            'value': 'HIGH',
                            'desc': '\u9ad8\u6d88\u8d39',
                            'name': 'High',
                            'tips': '\u5177\u6709\u8f83\u5f3a\u7684\u7ecf\u6d4e\u5b9e\u529b\uff0c\u80fd\u591f\u652f\u4ed8\u8f83\u9ad8\u6570\u989d\u7684\u8d39\u7528\uff08\u5982\u6c7d\u8f66\u8d2d\u4e70\u3001\u623f\u4ea7\u7b49\uff09\u7684\u5934\u90e8\u7528\u6237'
                        },
                        {
                            'value': 'LOW',
                            'desc': '\u4f4e\u6d88\u8d39',
                            'name': 'Low',
                            'tips': '\u8f83\u4f4e\u7684\u7ecf\u6d4e\u80fd\u529b\uff0c\u8d2d\u7269\u8ffd\u6c42\u4ef7\u683c\u4f4e\u5ec9\uff0c\u4e0d\u8ffd\u6c42\u54c1\u8d28\u7684\u7528\u6237'
                        }
                    ]
                }
            }
        },
        'gamer_consumption_ability': {
            'type': 'range',
            'name': 'gamer_consumption_ability',
            'description': '\u6e38\u620f\u7528\u6237\u6d88\u8d39\u80fd\u529b',
            'tips': '',
            'summary': '',
            'suffix': '\u5143\u002f\u6708',
            'options': {
                'min': [1, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 200, 300, 400, 500],
                'max': [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 200, 300, 400, 500, 999999999],
                'endless': true,
                // label of last value in max array, valid when endless = true
                'endLabel': '500 \u5143\u4ee5\u4e0a\u002f\u6708'
            }
        },
        'paid_user': {
            'type': 'checkbox',
            'name': 'paid_user',
            'description': '\u4ed8\u8d39\u7528\u6237',
            'tips': '',
            'summary': '\u6709\u7f51\u4e0a\u4ed8\u8d39\u884c\u4e3a\u7684\u7528\u6237',
            'suffix': '',
            'options': {
                'checkbox': {
                    'min_occurs': '1',
                    'max_occurs': 'all',
                    'list': [
                        {
                            'value': 'APP_PAID',
                            'desc': 'App\u4ed8\u8d39',
                            'name': 'PaymentSnsGame',
                            'tips': ''
                        },
                        {
                            'value': 'ECOMMERCE_PAID',
                            'desc': '\u7535\u5546\u4ed8\u8d39',
                            'name': 'PaymentPaipai',
                            'tips': ''
                        }
                    ]
                }
            }
        },
        'residential_community_price': {
            'type': 'range',
            'name': 'residential_community_price',
            'description': '\u5c45\u6c11\u793e\u533a\u4ef7\u683c',
            'tips': '',
            'summary': '',
            'suffix': '\u5143\u002f\u006d\u00b2',
            'options': {
                'min': [1, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000],
                'max': [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000, 999999999],
                'endless': true,
                // label of last value in max array, valid when endless = true
                'endLabel': '100000 \u5143\u4ee5\u4e0a\u002f\u006d\u00b2'
            }
        },
        'air_quality_index': {
            'type': 'radio',
            'name': 'air_quality_index',
            'description': '\u7a7a\u6c14\u8d28\u91cf\u6307\u6570',
            'tips': '',
            'summary': '',
            'suffix': '',
            'options': {
                'radio': {
                    'min_occurs': '1',
                    'max_occurs': 'all',
                    'list': [
                        {
                            'value': 'GOOD',
                            'desc': '\u4f18',
                            'name': 'GOOD',
                            'tips': ''
                        },
                        {
                            'value': 'MODERATE',
                            'desc': '\u826f',
                            'name': 'MODERATE',
                            'tips': ''
                        },
                        {
                            'value': 'LIGHTLY_POLLUTED',
                            'desc': '\u8f7b\u5ea6\u6c61\u67d3',
                            'name': 'LIGHTLY_POLLUTED',
                            'tips': ''
                        },
                        {
                            'value': 'MODERATELY_POLLUTED',
                            'desc': '\u4e2d\u5ea6\u6c61\u67d3',
                            'name': 'MODERATELY_POLLUTED',
                            'tips': ''
                        },
                        {
                            'value': 'HEAVILY_POLLUTED',
                            'desc': '\u91cd\u5ea6\u6c61\u67d3',
                            'name': 'HEAVILY_POLLUTED',
                            'tips': ''
                        },
                        {
                            'value': 'SEVERELY_POLLUTED',
                            'desc': '\u4e25\u91cd\u6c61\u67d3',
                            'name': 'SEVERELY_POLLUTED',
                            'tips': ''
                        }
                    ]
                }
            }
        },
        'financial_situation': {
            'type': 'checkbox',
            'name': 'financial_situation',
            'description': '\u8d44\u4ea7\u72b6\u6001',
            'tips': '',
            'summary': '\u8fd1\u4e00\u4e2a\u6708\u5185\u6709\u8d2d\u4e70\u865a\u62df\u5546\u54c1\u002f\u5b9e\u7269\u7535\u5546\u5546\u54c1\u884c\u4e3a\u7684\u7528\u6237',
            'suffix': '',
            'options': {
                'checkbox': {
                    'min_occurs': '1',
                    'max_occurs': 'all',
                    'list': [
                        {
                            'value': 'CAR_OWNERS',
                            'desc': '\u6709\u8f66\u4eba\u58eb',
                            'name': 'CAR_OWNERS',
                            'tips': '\u4e2a\u4eba\u6216\u5bb6\u5ead\u540d\u4e0b\u62e5\u6709\u4e00\u5957\u6216\u591a\u5957\u623f\u4ea7\u6240\u6709\u6743\u6216\u957f\u671f\u53ef\u81ea\u4e3b\u88c5\u4fee\u4f7f\u7528\u6743\u7684\u4eba\u7fa4'
                        },
                        {
                            'value': 'HOME_OWNERS',
                            'desc': '\u6709\u623f\u4eba\u58eb',
                            'name': 'HOME_OWNERS',
                            'tips': '\u4e2a\u4eba\u6216\u5bb6\u5ead\u540d\u4e0b\u62e5\u6709\u4e00\u8f86\u6216\u591a\u8f86\u5c0f\u578b\u6c7d\u8f66\u6240\u6709\u6743\u6216\u957f\u671f\u4f7f\u7528\u6743\u7684\u4eba\u7fa4'
                        }
                    ]
                }
            }
        },
        'consumption_type': {
            'type': 'checkbox',
            'name': 'consumption_type',
            'description': '\u6d88\u8d39\u7c7b\u578b',
            'tips': '',
            'summary': '',
            'suffix': '',
            'options': {
                'checkbox': {
                    'min_occurs': '1',
                    'max_occurs': 'all',
                    'list': [
                        {
                            'value': 'PAID_GOODS_VIRTUAL',
                            'desc': '\u865a\u62df\u5546\u54c1',
                            'name': 'PAID_GOODS_VIRTUAL',
                            'tips': '\u5305\u62ec\u975e\u5b9e\u4f53\u7269\u54c1\u548c\u975e\u7ebf\u4e0b\u670d\u52a1\u3002\u4f8b\u5982\u8bdd\u8d39\u3001\u0049\u0050\u7535\u8bdd\u3001\u0051\u5e01\u3001\u6e38\u620f\u70b9\u5361\u3001\u7535\u5b50\u4e66\u3001\u8f6f\u4ef6\u3001\u0041\u0050\u0050\u3001\u5728\u7ebf\u8bfe\u7a0b\u3001\u7ebf\u4e0a\u4f1a\u5458\u3001\u76f4\u64ad\u6253\u8d4f\u7b49\u3002'
                        },
                        {
                            'value': 'PAID_GOODS_REAL',
                            'desc': '\u5b9e\u7269\u5546\u54c1',
                            'name': 'PAID_GOODS_REAL',
                            'tips': '\u5305\u62ec\u5b9e\u4f53\u5546\u54c1\u548c\u7ebf\u4e0b\u670d\u52a1\u3002\u4f8b\u5982\u95e8\u7968\u3001\u52a0\u6cb9\u5361\u3001\u673a\u7968\u3001\u9152\u5e97\u8ba2\u5355\u3001\u7406\u8d22\u4fdd\u9669\u3001\u5f69\u7968\u7b49\u3002'
                        }
                    ]
                }
            }
        }
    },
    'display_fields': [
        'geo_location',//地理位置
        'age',//年龄
        'gender',//性别
        'education',//学历
        'marital_status',//婚恋状态
        'working_status',//工作状态
        'financial_situation',//资产状态
        'behavior_or_interest',//行为兴趣
        'app_install_status',//APP安装
        'custom_audiences',//自定义人群
        'consumption_type',//消费类型
        'gamer_consumption_ability',//游戏用户消费能力
        'consumption_status',//消费状态
        'residential_community_price',//居民社区价格
        'network_scene',//上网场景
        'network_type',//联网方式
        'network_operator',//移动运营商
        'device_price',//设备价格
        'wechat_official_account_category', //微信公众号类型
        'mobile_union_category',//移动媒体类型
        // 'user_os',//操作系统
        // 'new_device',//新设备用户
        // 'paid_user',//付费用户
        // 'air_quality_index',//空气质量指数
        // 'wechat_ad_behavior',//微信广告行为

        // 'temperature',//温度
        // 'uv_index',//紫外线指数
        // 'dressing_index',//穿衣指数
        // 'makeup_index',//化妆指数
        // 'climate',//气象
        
    ]
};

// add behavior_or_interest config
_config.targeting_fields.behavior_or_interest = behaviorInterestData.behavior_or_interest;

// add geo_location config
_config.targeting_fields.geo_location = geoLocationData.geo_location;

// add mobile_union_category config
_config.targeting_fields.wechat_official_account_category = wechatOfficialAccountCategory.wechat_official_account_category;

// add mobile_union_category config
_config.targeting_fields.mobile_union_category = mobileUnionCategory.mobile_union_category;

// add custom_audiences config
_config.targeting_fields.custom_audiences = customAudiences.custom_audiences;

// add wechat_ad_behavior config
_config.targeting_fields.wechat_ad_behavior = wechatAdBehavior.wechat_ad_behavior;

export const config = _config;
export default {
    config
};