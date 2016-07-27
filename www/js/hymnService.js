angular.module('starter.hymnservices', [])

    .factory('Hymns', function() {
        // Might use a resource here that returns a JSON array

        // Some fake testing data
        var hymns = [
            {
                "hymnNumber":1,
                "stanzas":[
                    {
                        "hymnId":1,
                        "stanzaNumber":1,
                        "stanza":" Is there a heart o’er-bound by sorrow?\r\nIs there a life weighed down by care?\r\nCome to the cross, each burden bearing,\r\nAll your anxiety - leave it there.\r\nAll your anxiety, all your care,\r\nBring to the Mercy seat, leave it there;\r\nNever a burden He cannot bear,\r\nNever a Friend like Jesus.\r"
                    },
                    {
                        "hymnId":1,
                        "stanzaNumber":2,
                        "stanza":" No other Friend so keen to help you;\r\nNo other Friend so quick to hear;\r\nNo other place to leave your burden;\r\nNo other one to hear your prayer.\r"
                    },
                    {
                        "hymnId":1,
                        "stanzaNumber":3,
                        "stanza":" Come then, at once, delay no longer;\r\nHeed His entreaty, kind and sweet;\r\nYou need not fear a disappointment;\r\nYou shall find peace at the mercy seat.\r\n"
                    }
                ],
                "title":"ALL YOUR ANXIETY"
            },
            {
                "hymnNumber":2,
                "stanzas":[
                    {
                        "hymnId":2,
                        "stanzaNumber":1,
                        "stanza":" Hear the blessed Saviour calling the oppressed,\r\n“O ye heavy laden, come to Me and rest;\r\nCome, no longer tarry, I your load will bear,\r\nBring Me ev’ry burden, bring Me ev’ry care.”\r\nCome unto Me; I will give you rest;\r\nTake My yoke upon you, hear Me and be blest;\r\nI am meek and lowly, Come and trust My might;\r\nCome, My yoke is easy, come My burden’s light.\r"
                    },
                    {
                        "hymnId":2,
                        "stanzaNumber":2,
                        "stanza":" Are you disappointed, wand’ring here and there,\r\nDragging chains of doubt and loaded down with care?\r\nDo unholy feelings struggle in your breast?\r\nBring your case to Jesus, He will give you rest.\r"
                    },
                    {
                        "hymnId":2,
                        "stanzaNumber":3,
                        "stanza":" Stumbling on the mountains dark with sin and shame,\r\nStumbling tow’rd the pit of hell’s consuming flames,\r\nBy the pow’rs of sin deluded and oppressed,\r\nHear the tender Shepherd, “Come to Me and rest.”\r"
                    },
                    {
                        "hymnId":2,
                        "stanzaNumber":4,
                        "stanza":" Have you cares of business, cares of pressing debt?\r\nCares of social life or cares of hopes unmet?\r\nAre you by remorse or sense of guilt depressed,\r\nCome right on to Jesus, He will give you rest.\r"
                    },
                    {
                        "hymnId":2,
                        "stanzaNumber":5,
                        "stanza":" Have you by temptations often conquered been,\r\nHas a sense of weakness brought distress within?\r\nChrist will sanctify you, if you’ll claim His best,\r\nIn the Holy Spirit, He will give you rest.\r\n"
                    }
                ],
                "title":"COME UNTO ME"
            },
            {
                "hymnNumber":3,
                "stanzas":[
                    {
                        "hymnId":3,
                        "stanzaNumber":1,
                        "stanza":" Impatient heart, be still !\r\nWhat tho’ He tarries long?\r\nWhat tho’ the triumph song\r\nIs still delay’d?\r\nThou hast His promise sure,\r\nAnd that is all secure;\r\nBe not afraid! Be not afraid!\r\nBe still ! ... be still !\r\nImpatient heart ... be still !\r"
                    },
                    {
                        "hymnId":3,
                        "stanzaNumber":2,
                        "stanza":" My eager heart, be still!\r\nThy Lord will surely come,\r\nAnd take thee to His home,\r\nWith Him to dwell;\r\nIt may not be today;\r\nAnd yet, my soul, it may;\r\nI cannot tell, I cannot tell.\r\nBe still ! ... be still !\r\nMy eager heart ... be still !\r"
                    },
                    {
                        "hymnId":3,
                        "stanzaNumber":3,
                        "stanza":" My anxious heart, be still!\r\nWatch, work, and pray, and then\r\nIt will not matter when\r\nThy Lord shall come;\r\nAt midnight, or at noon;\r\nHe cannot come too soon\r\nTo take thee home, To take thee home.\r\nBe still ! ... be still !\r\nMy anxious heart ... be still !\r\n"
                    }
                ],
                "title":"IMPATIENT HEART, BE STILL"
            },
            {
                "hymnNumber":4,
                "stanzas":[
                    {
                        "hymnId":4,
                        "stanzaNumber":1,
                        "stanza":" If the world from you withhold of its silver and its gold,\r\nAnd you have to get along with meager fare,\r\nJust remember, in His word, how He feeds the little bird;\r\nTake your burden to the Lord and leave it there.\r\nLeave it there, leave it there,\r\nTake your burden to the Lord and leave it there;\r\nIf you trust and never doubt,\r\nHe will surely bring you out;\r\nTake your burden to the Lord and leave it there.\r"
                    },
                    {
                        "hymnId":4,
                        "stanzaNumber":2,
                        "stanza":" If your body suffers pain and your health you can’t regain,\r\nAnd your soul is almost sinking in despair,\r\nJesus knows the pain you feel, He can save and He can heal;\r\nTake your burden to the Lord and leave it there.\r"
                    },
                    {
                        "hymnId":4,
                        "stanzaNumber":3,
                        "stanza":" When your enemies assail and your heart begins to fail,\r\nDon’t forget that God in heaven answers prayer;\r\nHe will make a way for you and will lead you safely thru;\r\nTake your burden to the Lord and leave it there.\r"
                    },
                    {
                        "hymnId":4,
                        "stanzaNumber":4,
                        "stanza":" When your youthful days are gone and old age is stealing on,\r\nAnd your body bends beneath the weight of care;\r\nHe will never leave you then, He’ll go with you to the end;\r\nTake your burden to the Lord and leave it there.\r\n"
                    }
                ],
                "title":"LEAVE IT THERE"
            },
            {
                "hymnNumber":5,
                "stanzas":[
                    {
                        "hymnId":5,
                        "stanzaNumber":1,
                        "stanza":" Never be sad or desponding\r\nIf thou hast faith to believe;\r\nGrace, for the duties before thee,\r\nAsk of thy God and receive.\r\nNev... er give up,...\r\nNev...er give up...\r\nNever give up to thy sorrows,\r\nJesus will bid them depart;\r\nTrust ... in the Lord,...\r\nTrust ... in the Lord, ...\r\nSing when your trials are greatest,\r\nTrust in the Lord and take heart.\r"
                    },
                    {
                        "hymnId":5,
                        "stanzaNumber":2,
                        "stanza":" What if thy burdens oppress thee;\r\nWhat tho’ thy life may be drear;\r\nLook on the side that is brightest,\r\nPray, and thy path will be clear.\r"
                    },
                    {
                        "hymnId":5,
                        "stanzaNumber":3,
                        "stanza":" Never be sad or desponding,\r\nThere is a morrow for thee;\r\nSoon thou shalt dwell in its brightness,\r\nThere with the Lord thou shalt be.\r"
                    },
                    {
                        "hymnId":5,
                        "stanzaNumber":4,
                        "stanza":" Never be sad or desponding,\r\nLean on the arm of thy Lord;\r\nDwell in the depths of His mercy,\r\nThou shalt receive thy reward.\r\n"
                    }
                ],
                "title":"NEVER GIVE UP"
            },
            {
                "hymnNumber":6,
                "stanzas":[
                    {
                        "hymnId":6,
                        "stanzaNumber":1,
                        "stanza":" Yield not to temptation,\r\nFor yielding is sin;\r\nEach victory will help you\r\nSome other to win;\r\nFight manfully onward,\r\nDark passions subdue;\r\nLook ever to Jesus,\r\nHe’ll carry you through.\r\nAsk the Saviour to help you;\r\nComfort, Strengthen, and keep you;\r\nHe is willing to aid you,\r\nHe will carry you through.\r"
                    },
                    {
                        "hymnId":6,
                        "stanzaNumber":2,
                        "stanza":" Shun evil companions,\r\nBad language disdain;\r\nGod’s name hold in reverence,\r\nNor take it in vain;\r\nBe thoughtful and earnest,\r\nKind-hearted and true;\r\nLook ever to Jesus,\r\nHe’ll carry you through.\r"
                    },
                    {
                        "hymnId":6,
                        "stanzaNumber":3,
                        "stanza":" To him that o’ercometh,\r\nGod giveth a crown;\r\nThro’ faith we will conquer,\r\nThough often cast down;\r\nHe who is our Saviour,\r\nOur strength will renew;\r\nLook ever to Jesus,\r\nHe’ll carry you through.\r\n"
                    }
                ],
                "title":"YIELD NOT TO TEMPTATION"
            },
            {
                "hymnNumber":7,
                "stanzas":[
                    {
                        "hymnId":7,
                        "stanzaNumber":1,
                        "stanza":" O soul, are you weary and troubled?\r\nNo light in the darkness you see?\r\nThere’s light for a look at the Saviour,\r\nAnd life more abundant and free!\r\nTurn your eyes upon Jesus,\r\nLook full in His wonderful face,\r\nAnd the things of earth will grow strangely dim\r\nIn the light of His glory and grace.\r"
                    },
                    {
                        "hymnId":7,
                        "stanzaNumber":2,
                        "stanza":" Thro’ death into life everlasting\r\nHe passed, and we follow Him there;\r\nOver us sin no more has dominion -\r\nFor more than conq’rors we are!\r"
                    },
                    {
                        "hymnId":7,
                        "stanzaNumber":3,
                        "stanza":" His word shall not fail you - He promised;\r\nBelieve Him, and all will be well:\r\nThen go to a world that is dying,\r\nHis perfect salvation to tell!\r\n"
                    }
                ],
                "title":"TURN YOUR EYES UPON JESUS"
            },
            {
                "hymnNumber":8,
                "stanzas":[
                    {
                        "hymnId":8,
                        "stanzaNumber":1,
                        "stanza":" O for a thousand tongues to sing,\r\nBlessed be the name of the Lord!\r\nThe glories of my God and King!\r\nBlessed be the name of the Lord!\r\nBlessed be the name, blessed be the name,\r\nBlessed be the name of the Lord!\r\nBlessed be the name, blessed be the name,\r\nBlessed be the name of the Lord!\r"
                    },
                    {
                        "hymnId":8,
                        "stanzaNumber":2,
                        "stanza":" Jesus! the name that charms our fears,\r\nBlessed be the name of the Lord!\r\n’Tis music in the sinner’s ears,\r\nBlessed be the name of the Lord!\r"
                    },
                    {
                        "hymnId":8,
                        "stanzaNumber":3,
                        "stanza":" He breaks the pow’r of cancelled sin,\r\nBlessed be the name of the Lord!\r\nHis blood can make the foulest clean,\r\nBlessed be the name of the Lord!\r"
                    },
                    {
                        "hymnId":8,
                        "stanzaNumber":4,
                        "stanza":" I never shall forget that day,\r\nBlessed be the name of the Lord!\r\nWhen Jesus washed my sins away,\r\nBlessed be the name of the Lord!\r\n"
                    }
                ],
                "title":"BLESSED BE THE NAME"
            },
            {
                "hymnNumber":9,
                "stanzas":[
                    {
                        "hymnId":9,
                        "stanzaNumber":1,
                        "stanza":" “Great is Thy faithfulness,” O God my Father!\r\nThere is no shadow of turning with Thee;\r\nThou changest not, Thy compassions, they fail not,\r\nAs Thou hast been Thou forever wilt be.\r\n“Great is Thy faithfulness!\r\nGreat is Thy faithfulness!”\r\nMorning by morning new mercies I see;\r\nAll I have needed Thy hand hath provided -\r\n“Great is Thy faithfulness,” Lord, unto me!\r"
                    },
                    {
                        "hymnId":9,
                        "stanzaNumber":2,
                        "stanza":" Summer and winter, and spring time and harvest,\r\nSun, moon and stars in their courses above,\r\nJoin with all nature in manifold witness,\r\nTo Thy great faithfulness, mercy and love.\r"
                    },
                    {
                        "hymnId":9,
                        "stanzaNumber":3,
                        "stanza":" Pardon for sin and a peace that endureth,\r\nThine own dear presence to cheer and to guide;\r\nStrength for today and bright hope for tomorrow,\r\nBlessings all mine, with ten thousands beside!\r\n"
                    }
                ],
                "title":"GREAT IS THY FAITHFULNESS"
            },
            {
                "hymnNumber":10,
                "stanzas":[
                    {
                        "hymnId":10,
                        "stanzaNumber":1,
                        "stanza":" Oh, for a thousand tongues to sing\r\nMy great Redeemer’s praise,\r\nThe glories of my God and King,\r\nThe triumphs of His grace!\r"
                    },
                    {
                        "hymnId":10,
                        "stanzaNumber":2,
                        "stanza":" My gracious Master and my God,\r\nAssist me to proclaim,\r\nTo spread through all the earth abroad\r\nThe honours of Thy name.\r"
                    },
                    {
                        "hymnId":10,
                        "stanzaNumber":3,
                        "stanza":" Jesus! the name that charms our fears.\r\nThat bids our sorrows cease;\r\n’Tis music in the sinner’s ears,\r\n’Tis life, and health, and peace.\r"
                    },
                    {
                        "hymnId":10,
                        "stanzaNumber":4,
                        "stanza":" He breaks the power of cancelled sin,\r\nHe sets the prisoner free;\r\nHis blood can make the foulest clean,\r\nHis blood availed for me.\r"
                    },
                    {
                        "hymnId":10,
                        "stanzaNumber":5,
                        "stanza":" Hear Him, ye deaf; His praise, ye dumb,\r\nYour loosened tongues employ;\r\nYe blind, behold your Saviour come;\r\nAnd leap, ye lame, for joy!\r\n"
                    }
                ],
                "title":"OH, FOR A THOUSAND TONGUES TO SING!"
            },
            {
                "hymnNumber":11,
                "stanzas":[
                    {
                        "hymnId":11,
                        "stanzaNumber":1,
                        "stanza":" Holy, holy, holy, Lord God Almighty!\r\nEarly in the morning our song shall rise to Thee;\r\nHoly, holy, holy, merciful and mighty!\r\nGod in Three Persons, blessed Trinity!\r"
                    },
                    {
                        "hymnId":11,
                        "stanzaNumber":2,
                        "stanza":" Holy, holy, holy! all the saints adore Thee,\r\nCasting down their golden crowns around the glassy sea;\r\nCherubim and seraphim falling down before Thee,\r\nWho wert and art, and evermore shalt be.\r"
                    },
                    {
                        "hymnId":11,
                        "stanzaNumber":3,
                        "stanza":" Holy, holy, holy! though the darkness hide Thee,\r\nThough the eye of sinful man Thy glory may not see,\r\nOnly Thou art holy; there is none beside Thee,\r\nPerfect in power, in love, and purity.\r"
                    },
                    {
                        "hymnId":11,
                        "stanzaNumber":4,
                        "stanza":" Holy, holy, holy, Lord God Almighty!\r\nAll Thy works shall praise Thy name, in earth,\r\nand sky, and sea!\r\nHoly, holy, holy, merciful and mighty!\r\nGod in Three Persons, blessed Trinity!\r\n"
                    }
                ],
                "title":"HOLY, HOLY, HOLY"
            },
            {
                "hymnNumber":12,
                "stanzas":[
                    {
                        "hymnId":12,
                        "stanzaNumber":1,
                        "stanza":" Praise Him! Praise Him! Jesus our blessed Redeemer,\r\nSing, O earth, His wonderful love proclaim;\r\nHail Him! Hail Him! highest archangels in glory,\r\nStrength and honour give to His holy name.\r\nLike a shepherd, Jesus will guard His children,\r\nIn His arms He carries them all day long;\r\nO ye saints that dwell on the mountain of Zion,\r\nPraise Him! Praise Him! ever in joyful song.\r"
                    },
                    {
                        "hymnId":12,
                        "stanzaNumber":2,
                        "stanza":" Praise Him! Praise Him! Jesus our blessed Redeemer,\r\nFor our sins He suffer’d and bled and died;\r\nHe, our rock, our hope of eternal salvation,\r\nHail Him! Hail Him! Jesus the Crucified.\r\nLoving Saviour, meekly enduring sorrow,\r\nCrown’d with thorns that cruelly pierc’d His brow;\r\nOnce for us rejected, despis’d and forsaken,\r\nPrince of Glory, ever triumphant now.\r"
                    },
                    {
                        "hymnId":12,
                        "stanzaNumber":3,
                        "stanza":" Praise Him! Praise Him! Jesus our blessed Redeemer,\r\nHeav’nly portals, loud with hosannahs ring;\r\nJesus, Saviour, reigneth forever and ever,\r\nCrown Him! Crown Him! Prophet and Priest and King!\r\nDeath is vanquish’d! Tell it with joy, ye faithful,\r\nWhere is now thy victory, boasting grave?\r\nJesus lives! no longer thy portals are cheerless,\r\nJesus lives, the mighty and strong to save.\r\n"
                    }
                ],
                "title":"PRAISE HIM! PRAISE HIM!"
            },
            {
                "hymnNumber":13,
                "stanzas":[
                    {
                        "hymnId":13,
                        "stanzaNumber":1,
                        "stanza":" To God be the glory, great things He hath done,\r\nSo loved He the world that He gave us His Son,\r\nWho yielded His life an atonement for sin,\r\nAnd opened the Life Gate that all may go in.\r\nPraise the Lord, praise the Lord,\r\nLet the earth hear His voice,\r\nPraise the Lord, praise the Lord,\r\nLet the people rejoice!\r\nO come to the Father through Jesus the Son,\r\nAnd give Him the glory, great things He hath done.\r"
                    },
                    {
                        "hymnId":13,
                        "stanzaNumber":2,
                        "stanza":" O perfect redemption, the purchase of blood,\r\nTo every believer the promise of God;\r\nThe vilest offender who truly believes,\r\nThat moment from Jesus a pardon receives.\r"
                    },
                    {
                        "hymnId":13,
                        "stanzaNumber":3,
                        "stanza":" Great things He hath taught us, great things He hath done,\r\nAnd great our rejoicing through Jesus the Son;\r\nBut purer, and higher, and greater will be\r\nOur wonder, our transport when Jesus we see.\r\n"
                    }
                ],
                "title":"TO GOD BE THE GLORY"
            },
            {
                "hymnNumber":14,
                "stanzas":[
                    {
                        "hymnId":14,
                        "stanzaNumber":1,
                        "stanza":" O Lord my God! When I in awesome wonder,\r\nConsider all the works Thy hands hath made,\r\nI see the stars, I hear the rolling thunder,\r\nThy pow’r thro’ out the universe displayed,\r\nThen sings my soul, my Saviour God to Thee;\r\nHow great Thou art, how great Thou art!\r\nAdoration\r\nThen sings my soul, my Saviour God to Thee;\r\nHow great Thou art, how great Thou art!\r"
                    },
                    {
                        "hymnId":14,
                        "stanzaNumber":2,
                        "stanza":" When through the woods and forest glades I wander,\r\nAnd hear the birds sing sweetly in the trees;\r\nWhen I look down from lofty mountain grandeur,\r\nAnd hear the brook and feel the gentle breeze;\r"
                    },
                    {
                        "hymnId":14,
                        "stanzaNumber":3,
                        "stanza":" And when I think that God, His Son not sparing,\r\nSent Him to die, I scarce can take it in;\r\nThat on the cross, my burden gladly bearing,\r\nHe bled and died to take away my sin;\r"
                    },
                    {
                        "hymnId":14,
                        "stanzaNumber":4,
                        "stanza":" When Christ shall come with shout of acclamation,\r\nAnd take me home, what joy shall fill my heart!\r\nThen I shall bow in humble adoration,\r\nAnd there proclaim, my God, how great Thou art!\r\n"
                    }
                ],
                "title":"HOW GREAT THOU ART"
            },
            {
                "hymnNumber":15,
                "stanzas":[
                    {
                        "hymnId":15,
                        "stanzaNumber":1,
                        "stanza":" O worship the King,\r\nAll glorious above,\r\nO gratefully sing\r\nHis power and His love:\r\nOur Shield and Defender,\r\nThe Ancient of Days,\r\nPavillion’d in splendour,\r\nAnd girded with praise.\r"
                    },
                    {
                        "hymnId":15,
                        "stanzaNumber":2,
                        "stanza":" O tell of His might,\r\nO sing of His grace,\r\nWhose robe is the light,\r\nWhose canopy space.\r\nHis chariots of wrath\r\nThe deep thunder-clouds form,\r\nAnd dark is His path\r\nOn the wings of the storm.\r"
                    },
                    {
                        "hymnId":15,
                        "stanzaNumber":3,
                        "stanza":" Thy bountiful care,\r\nWhat tongue can recite?\r\nIt breathes in the air,\r\nIt shines in the light,\r\nIt streams from the hills,\r\nIt descends to the plain,\r\nAnd sweetly distils\r\nIn the dew and the rain.\r"
                    },
                    {
                        "hymnId":15,
                        "stanzaNumber":4,
                        "stanza":" Frail children of dust,\r\nAnd feeble as frail;\r\nIn Thee do we trust,\r\nNor find Thee to fail;\r\nThy mercies, how tender,\r\nHow firm to the end,\r\nOur Maker, Defender,\r\nRedeemer, and Friend !\r"
                    },
                    {
                        "hymnId":15,
                        "stanzaNumber":5,
                        "stanza":" O measureless Might !\r\nIneffable Love !\r\nWhile angels delight\r\nTo hymn Thee above,\r\nThe humbler creation,\r\nThough feeble their lays,\r\nWith true adoration\r\nShall lisp to Thy praise.\r\n"
                    }
                ],
                "title":"WORSHIP THE KING"
            },
            {
                "hymnNumber":16,
                "stanzas":[
                    {
                        "hymnId":16,
                        "stanzaNumber":1,
                        "stanza":" Rejoice in the Lord! oh, let His mercy cheer;\r\nHe sunders the bands that enthrall;\r\nRedeem’d by His blood why should we ever fear\r\nSince Jesus is our “all in all”?\r\n“If God be for us, if God be for us,\r\nIf God be for us, who can be against us?\r\nWho? Who? Who?\r\nWho can be against us, against us?”\r\nAdoration/Assurance & Confidence\r"
                    },
                    {
                        "hymnId":16,
                        "stanzaNumber":2,
                        "stanza":" Be strong in the Lord ! rejoicing in His might,\r\nBe loyal and true day by day;\r\nWhen evils assail, be valiant for the right,\r\nAnd He will be our strength and stay.\r"
                    },
                    {
                        "hymnId":16,
                        "stanzaNumber":3,
                        "stanza":" Confide in His word - His promises so sure;\r\nIn Christ they are “ yea and amen;”\r\nThough earth pass away, they ever shall endure,\r\n’Tis written o’er and o’er again.\r"
                    },
                    {
                        "hymnId":16,
                        "stanzaNumber":4,
                        "stanza":" Abide in the Lord: secure in His control,\r\n’Tis life everlasting begun;\r\nTo pluck from His hand the weakest, trembling soul -\r\nIt never, never can be done!\r\n"
                    }
                ],
                "title":"IF GOD BE FOR US"
            },
            {
                "hymnNumber":17,
                "stanzas":[
                    {
                        "hymnId":17,
                        "stanzaNumber":1,
                        "stanza":" What can wash away my stain?\r\nNothing but the blood of Jesus,\r\nWhat can make me whole again?\r\nNothing but the blood of Jesus.\r\nOh, precious is the flow\r\nThat makes me white as snow;\r\nNo other fount I know,\r\nNothing but the blood of Jesus.\r"
                    },
                    {
                        "hymnId":17,
                        "stanzaNumber":2,
                        "stanza":" For my cleansing this I see -\r\nNothing but the blood of Jesus;\r\nFor my pardon this my plea, -\r\nNothing but the blood of Jesus.\r"
                    },
                    {
                        "hymnId":17,
                        "stanzaNumber":3,
                        "stanza":" Nothing can for sin atone,\r\nNothing but the blood of Jesus:\r\nNought of good that I have done,\r\nNothing but the blood of Jesus.\r"
                    },
                    {
                        "hymnId":17,
                        "stanzaNumber":4,
                        "stanza":" This is all my hope and peace\r\nNothing but the blood of Jesus:\r\nHe is all my righteousness -\r\nNothing but the blood of Jesus.\r"
                    },
                    {
                        "hymnId":17,
                        "stanzaNumber":5,
                        "stanza":" Now by this I overcome:\r\nNothing but the blood of Jesus:\r\nNow by this I’ll reach my home:\r\nNothing but the blood of Jesus!\r\n"
                    }
                ],
                "title":"NOTHING BUT THE BLOOD OF JESUS"
            },
            {
                "hymnNumber":18,
                "stanzas":[
                    {
                        "hymnId":18,
                        "stanzaNumber":1,
                        "stanza":" Blessed assurance, Jesus is mine!\r\nOh, what a fore-taste of glory divine!\r\nHeir of salvation, purchase of God,\r\nBorn of His Spirit, wash’d in His blood.\r\nThis is my story, this is my song,\r\nPraising my Saviour all the day long;\r"
                    },
                    {
                        "hymnId":18,
                        "stanzaNumber":2,
                        "stanza":" Perfect submission, perfect delight,\r\nVisions of rapture now burst on my sight,\r\nAngels descending, bring from above\r\nEchoes of mercy, whispers of love.\r"
                    },
                    {
                        "hymnId":18,
                        "stanzaNumber":3,
                        "stanza":" Perfect submission, all is at rest,\r\nI in my Saviour am happy and blest;\r\nWatching and waiting, looking above,\r\nFill’d with His goodness, lost in His love.\r\n"
                    }
                ],
                "title":"BLESSED ASSURANCE"
            },
            {
                "hymnNumber":19,
                "stanzas":[
                    {
                        "hymnId":19,
                        "stanzaNumber":1,
                        "stanza":" Christ Jesus hath the pow’r,\r\nThe power to forgive,\r\nThe pow’r to quicken whom He will,\r\nAnd make the sinner live.\r\nChrist Jesus hath the pow’r,\r\nO tell it far and near!\r\nO bring to Him your guilty heart,\r\nAnd grace shall banish fear!\r\nChrist Jesus hath the pow’r,\r\nThe pow’r of God He wields!\r\nAssurance & Confidence\r\nChrist Jesus hath the pow’r,\r\nMy heart surrender yields!\r\nChrist Jesus hath the pow’r,\r\nI trust Him ever-more!\r\nChrist Jesus hath the pow’r,\r\nI worship and adore!\r"
                    },
                    {
                        "hymnId":19,
                        "stanzaNumber":2,
                        "stanza":" Christ Jesus hath the pow’r,\r\nThe power to renew,\r\nThe pow’r to cleanse your heart from sin,\r\nAnd make you wholly true.\r\nChrist Jesus hath the pow’r\r\nFor evermore to keep:\r\nO none can pluck you from His hand,\r\nOr rob Him of His sheep!\r"
                    },
                    {
                        "hymnId":19,
                        "stanzaNumber":3,
                        "stanza":" Christ Jesus hath the pow’r,\r\nThe power to console,\r\nThe pow’r to carry all your care -\r\nOn Him your burdens roll.\r\nChrist Jesus hath the pow’r,\r\nTo wipe the tear away;\r\nO place in Him your confidence!\r\nO trust Him, and obey!\r"
                    },
                    {
                        "hymnId":19,
                        "stanzaNumber":4,
                        "stanza":" Christ Jesus hath the pow’r,\r\nThe power to destroy,\r\nThe pow’r to bruise your enemy\r\nWho would your soul annoy.\r\nChrist Jesus hath the pow’r,\r\nWhen on your dying bed,\r\nTo give your soul the victory,\r\nThe pow’r to raise the dead!\r\n"
                    }
                ],
                "title":"CHRIST JESUS HATH THE POWER"
            },
            {
                "hymnNumber":20,
                "stanzas":[
                    {
                        "hymnId":20,
                        "stanzaNumber":1,
                        "stanza":" “I am the Way,” the Saviour said,\r\nAnd I would follow on,\r\nContent to know that after night\r\nShall break a glorious dawn.\r\n“I am the Way, the Truth and the Life,\r\nNo man cometh unto the Father but by me.”\r\n“I am the Way, the Truth and the Life,\r\nNo man cometh unto the Father but by me.”\r"
                    },
                    {
                        "hymnId":20,
                        "stanzaNumber":2,
                        "stanza":" “I am the Truth,” then Truth shall be,\r\nA beacon light to guide\r\nMy bark across the Stormy Sea\r\nTo where still waters glide.\r"
                    },
                    {
                        "hymnId":20,
                        "stanzaNumber":3,
                        "stanza":" “I am the Life,” there is no death,\r\nFor me to fear nor dread,\r\nSince by His all-atoning blood,\r\nMy life to His is wed.\r\n"
                    }
                ],
                "title":"THE WAY, THE TRUTH, THE LIFE"
            },
            {
                "hymnNumber":21,
                "stanzas":[
                    {
                        "hymnId":21,
                        "stanzaNumber":1,
                        "stanza":" Will your anchor hold in the storms of life?\r\nWhen the clouds unfold their wings of strife;\r\nWhen the strong tides lift and the cables strain,\r\nWill your anchor drift, or firm remain?\r\nWe have an anchor that keeps the soul\r\nStedfast and sure while the billows roll:\r\nFasten’d to the Rock which cannot move,\r\nGrounded firm and deep in the Saviour’s love!\r"
                    },
                    {
                        "hymnId":21,
                        "stanzaNumber":2,
                        "stanza":" It is safely moored ’twill the storm withstand,\r\nFor ’tis well secured by the Saviour’s hand;\r\nAnd the cables passed from His heart to mine,\r\nCan defy the blast, through strength divine.\r"
                    },
                    {
                        "hymnId":21,
                        "stanzaNumber":3,
                        "stanza":" It will firmly hold in the straits of fear,\r\nWhen the breakers have told the reef is near,\r\nThough the tempest rave and the wild winds blow,\r\nNot an angry wave shall our bark o’erflow.\r"
                    },
                    {
                        "hymnId":21,
                        "stanzaNumber":4,
                        "stanza":" It will surely hold in the floods of death,\r\nWhen the waters cold, chill our latest breath,\r\nOn the rising tide it can never fail,\r\nWhile our hopes abide within the veil !\r"
                    },
                    {
                        "hymnId":21,
                        "stanzaNumber":5,
                        "stanza":" When our eyes behold, through the gathering night\r\nThe city of gold, our harbour bright,\r\nWe shall anchor fast by the heavenly shore,\r\nWith the storms all past for evermore.\r\n"
                    }
                ],
                "title":"WILL YOUR ANCHOR HOLD?"
            },
            {
                "hymnNumber":22,
                "stanzas":[
                    {
                        "hymnId":22,
                        "stanzaNumber":1,
                        "stanza":" Simply trusting ev’ry day,\r\nTrusting through a stormy way;\r\nEven when my faith is small,\r\nTrusting Jesus, that is all.\r\nTrusting as the moments fly,\r\nTrusting as the days go by;\r\nTrusting Him whate’er befall,\r\nTrusting Jesus, that is all.\r"
                    },
                    {
                        "hymnId":22,
                        "stanzaNumber":2,
                        "stanza":" Brightly doth His Spirit shine\r\nInto this poor heart of mine;\r\nWhile He leads I cannot fall;\r\nTrusting Jesus, that is all.\r"
                    },
                    {
                        "hymnId":22,
                        "stanzaNumber":3,
                        "stanza":" Singing if my way be clear;\r\nPraying if the path be drear;\r\nIf in danger, for Him call;\r\nTrusting Jesus, that is all.\r"
                    },
                    {
                        "hymnId":22,
                        "stanzaNumber":4,
                        "stanza":" Trusting Him while life shall last,\r\nTrusting Him till earth be past;\r\nTill within the jasper wall:\r\nTrusting Jesus, that is all.\r\n"
                    }
                ],
                "title":"SIMPLY TRUSTING EVERYDAY"
            },
            {
                "hymnNumber":23,
                "stanzas":[
                    {
                        "hymnId":23,
                        "stanzaNumber":1,
                        "stanza":" My faith has found a resting place,\r\nNot in device nor creed;\r\nI trust the Ever living One,\r\nHis wounds for me shall plead.\r\nI need no other argument,\r\nI need no other plea,\r\nIt is enough that Jesus died,\r\nAnd that He died for me.\r"
                    },
                    {
                        "hymnId":23,
                        "stanzaNumber":2,
                        "stanza":" Enough for me that Jesus saves,\r\nThis ends my fear and doubt;\r\nA sinful soul I come to Him,\r\nHe’ll never cast me out.\r"
                    },
                    {
                        "hymnId":23,
                        "stanzaNumber":3,
                        "stanza":" My heart is leaning on the word,\r\nThe written word of God,\r\nSalvation by my Saviour’s name,\r\nSalvation through His blood.\r"
                    },
                    {
                        "hymnId":23,
                        "stanzaNumber":4,
                        "stanza":" My great Physician heals the sick,\r\nThe lost He came to save:\r\nFor me His precious blood He shed,\r\nFor me His life He gave.\r\n"
                    }
                ],
                "title":"NO OTHER PLEA"
            },
            {
                "hymnNumber":24,
                "stanzas":[
                    {
                        "hymnId":24,
                        "stanzaNumber":1,
                        "stanza":" When peace, like a river attendeth my way,\r\nWhen sorrows, like sea billows roll;\r\nWhatever my lot, Thou hast taught me to know,\r\n“It is well, it is well with my soul.”\r\nIt is well, . . . with my soul . . . . .\r\nIt is well, it is well with my soul.\r"
                    },
                    {
                        "hymnId":24,
                        "stanzaNumber":2,
                        "stanza":" Tho’ Satan should buffet, if trials should come,\r\nLet this blest assurance control,\r\nThat Christ hath regarded my helpless estate,\r\nAnd hath shed His own blood for my soul.\r"
                    },
                    {
                        "hymnId":24,
                        "stanzaNumber":3,
                        "stanza":" My sin - oh, the bliss of this glorious thought -\r\nMy sin - not in part, but the whole,\r\nIs nailed to His cross: and I bear it no more:\r\nPraise the Lord, praise the Lord, O my soul.\r\nAssurance & Confidence\r"
                    },
                    {
                        "hymnId":24,
                        "stanzaNumber":4,
                        "stanza":" For me, be it Christ, be it Christ hence to live!\r\nIf Jordan above me shall roll,\r\nNo pang shall be mine, for in death as in life\r\nThou wilt whisper Thy peace to my soul.\r"
                    },
                    {
                        "hymnId":24,
                        "stanzaNumber":5,
                        "stanza":" But Lord, ’tis for Thee, for Thy coming we wait,\r\nThe sky, not the grave, is our goal:\r\nOh, trump of the angel! oh, voice of the Lord!\r\nBlessed hope! Blessed rest of my soul.\r\n"
                    }
                ],
                "title":"IT IS WELL WITH MY SOUL"
            },
            {
                "hymnNumber":25,
                "stanzas":[
                    {
                        "hymnId":25,
                        "stanzaNumber":1,
                        "stanza":" Jesus, my Lord, will love me for ever,\r\nFrom Him no pow’r of evil can sever,\r\nHe gave His life to ransom my soul,\r\nNow I belong to Him:\r\nNow I belong to Jesus,\r\nJesus belongs to me,\r\nNot for the years of time alone,\r\nBut for eternity.\r"
                    },
                    {
                        "hymnId":25,
                        "stanzaNumber":2,
                        "stanza":" Once I was lost in sin’s degradation,\r\nJesus came down to bring me salvation,\r\nLifted me up from sorrow and shame,\r\nNow I belong to Him:\r"
                    },
                    {
                        "hymnId":25,
                        "stanzaNumber":3,
                        "stanza":" Joy floods my soul, for Jesus has saved me,\r\nFreed me from sin that long had enslaved me,\r\nHis precious blood He gave to redeem,\r\nNow I belong to Him:\r\n"
                    }
                ],
                "title":"NOW I BELONG TO JESUS"
            },
            {
                "hymnNumber":26,
                "stanzas":[
                    {
                        "hymnId":26,
                        "stanzaNumber":1,
                        "stanza":" I know not why God’s wondrous grace\r\nTo me He hath made known,\r\nNor why, unworthy, Christ in love\r\nRedeem’d me for His own.\r\nBut I know whom I have believed,\r\nAnd am persuaded that He is able\r\nTo keep that which I’ve committed\r\nUnto Him against that day.\r"
                    },
                    {
                        "hymnId":26,
                        "stanzaNumber":2,
                        "stanza":" I know not how this saving faith\r\nTo me He did impart,\r\nNor how believing in His Word\r\nWrought peace within my heart.\r"
                    },
                    {
                        "hymnId":26,
                        "stanzaNumber":3,
                        "stanza":" I know not how the Spirit moves,\r\nConvincing men of sin,\r\nRevealing Jesus thro’ the Word,\r\nCreating faith in Him.\r"
                    },
                    {
                        "hymnId":26,
                        "stanzaNumber":4,
                        "stanza":" I know not what of good or ill\r\nMay be reserved for me,\r\nOf weary ways or golden days\r\nBefore His face I see.\r"
                    },
                    {
                        "hymnId":26,
                        "stanzaNumber":5,
                        "stanza":" I know not when my Lord may come,\r\nAt night or noon-day fair,\r\nNor if I’ll walk the vale with Him,\r\nOr “meet Him in the air.”\r\n"
                    }
                ],
                "title":"KNOW WHOM I HAVE BELIEVED"
            },
            {
                "hymnNumber":27,
                "stanzas":[
                    {
                        "hymnId":27,
                        "stanzaNumber":1,
                        "stanza":" Storms do not alarm me,\r\nThey sometime must cease,\r\nTrials cannot harm me,\r\nFor I have blessed peace;\r\nAll I’ve left behind me,\r\nI long for no more,\r\nBetter things shall find me\r\nOn Canaan’s shore.\r\nLet those who will stay in Egypt land,\r\nI am bound for Canaan,\r\nWhere milk and honey flowing,\r\nShall ev’ry need supply;\r\nAll battles fought and\r\nThe vict’ry won,\r\nPeace and joy my portion,\r\nMy soul shall rest,\r\nOn its shore by and by.\r"
                    },
                    {
                        "hymnId":27,
                        "stanzaNumber":2,
                        "stanza":" Troubles do not fret me,\r\nThey cannot abide,\r\nTho’ they may beset me,\r\nIn Jesus, I will hide;\r\nAll the world’s commotion\r\nAbout me may roar,\r\nThere’s no stormy ocean\r\nOn Canaan’s shore.\r"
                    },
                    {
                        "hymnId":27,
                        "stanzaNumber":3,
                        "stanza":" I in grace abiding,\r\nAm trying to stay,\r\nIn the shadow hiding\r\nOf Canaan’s perfect day;\r\nAll I trust may fail me,\r\n’Twill matter no more,\r\nNothing can assail me\r\nOn Canaan’s shore.\r\n"
                    }
                ],
                "title":"AM BOUND FOR CANAAN"
            },
            {
                "hymnNumber":28,
                "stanzas":[
                    {
                        "hymnId":28,
                        "stanzaNumber":1,
                        "stanza":" All that drew me I have left behind\r\nHere in Canaan better joys I find;\r\nPeace abiding, blessings unconfined,\r\nFor I’m living in Canaan now.\r\nI am living in Canaan now,\r\nWhere the showers of blessing abound,\r\nWhere the riches of grace in plenty are found,\r\nI am living in Canaan now.\r"
                    },
                    {
                        "hymnId":28,
                        "stanzaNumber":2,
                        "stanza":" Safe abiding I will never fear,\r\nFor my Saviour ever will be near;\r\nWhen I call Him He will always hear,\r\nFor I’m living in Canaan now.\r"
                    },
                    {
                        "hymnId":28,
                        "stanzaNumber":3,
                        "stanza":" I am drinking from a ceaseless well;\r\nHere in Canaan where I love to dwell,\r\nSo to others I am glad to tell,\r\nThat I’m living in Canaan now.\r"
                    },
                    {
                        "hymnId":28,
                        "stanzaNumber":4,
                        "stanza":" Praises ever I am glad to bring\r\nUnto Jesus, my Redeemer King,\r\nFor His mercies I will shout and sing,\r\nFor I’m living in Canaan now.\r\n"
                    }
                ],
                "title":"LIVING IN CANAAN"
            },
            {
                "hymnNumber":29,
                "stanzas":[
                    {
                        "hymnId":29,
                        "stanzaNumber":1,
                        "stanza":" I don’t know about tomorrow,\r\nI just live from day to day;\r\nI don’t borrow from it’s sunshine,\r\nFor it’s skies may turn to gray;\r\nI don’t worry o’er the future,\r\nFor I know what Jesus said,\r\nAnd today I’ll walk beside Him,\r\nFor He knows what is ahead.\r\nMany things about tomorrow\r\nI don’t seem to understand;\r\nBut I know who holds tomorrow,\r\nAnd I know who holds my hand.\r"
                    },
                    {
                        "hymnId":29,
                        "stanzaNumber":2,
                        "stanza":" Ev’ry step is getting brighter\r\nAs the golden stairs I climb;\r\nEv’ry burden’s getting lighter,\r\nEv’ry cloud is silver lined;\r\nThere the sun is always shining,\r\nThere no tear will dim the eye;\r\nAt the ending of the rainbow,\r\nWhere the mountains touch the sky.\r"
                    },
                    {
                        "hymnId":29,
                        "stanzaNumber":3,
                        "stanza":" I don’t know about tomorrow,\r\nIt may bring me poverty;\r\nBut the One who feeds the sparrow\r\nIs the One who stands by me;\r\nAnd the path that be my portion,\r\nAssurance & Confidence\r\nMay be through the flame or flood,\r\nBut His presence goes before me,\r\nAnd I’m covered with His blood.\r\n"
                    }
                ],
                "title":"KNOW WHO HOLDS TOMORROW"
            },
            {
                "hymnNumber":30,
                "stanzas":[
                    {
                        "hymnId":30,
                        "stanzaNumber":1,
                        "stanza":" Upon life’s boundless ocean where mighty\r\nbillows roll,\r\nI’ve fixed my hope in Jesus, blest anchor of my soul;\r\nWhen trials fierce assail me as storms are\r\ngathering o’er,\r\nI rest upon His mercy and trust Him more.\r\nI’ve anchored in Jesus,\r\nThe storms of life I’ll brave,\r\nI’ve anchored in Jesus,\r\nI fear no wind or wave,\r\nI’ve anchored in Jesus\r\nFor He hath pow’r to save,\r\nI’ve anchored to the Rock of Ages.\r"
                    },
                    {
                        "hymnId":30,
                        "stanzaNumber":2,
                        "stanza":" He keeps my soul from evil and gives me blessed peace,\r\nHis voice hath stilled the waters and bid their\r\ntumult cease;\r\nMy Pilot and Deliverer, to Him I all confide,\r\nFor always when I need Him, He’s at my side.\r"
                    },
                    {
                        "hymnId":30,
                        "stanzaNumber":3,
                        "stanza":" He is my Friend and Saviour, in Him my anchor’s cast,\r\nHe drives away my sorrows and shields me from\r\nthe blast;\r\nBy faith I’m looking upward beyond life’s troubled sea,\r\nThere I behold a haven prepared for me.\r\n"
                    }
                ],
                "title":"VE ANCHORED IN JESUS"
            },
            {
                "hymnNumber":31,
                "stanzas":[
                    {
                        "hymnId":31,
                        "stanzaNumber":1,
                        "stanza":" Shackled by a heavy burden,\r\n’Neath a load of guilt and shame;\r\nThen the hand of Jesus touched me,\r\nAnd now I am no longer the same.\r\nHe touched me, Oh, He touched me,\r\nAnd Oh, the joy that floods my soul;\r\nSomething happened, and now I know,\r\nHe touched me and made me whole.\r"
                    },
                    {
                        "hymnId":31,
                        "stanzaNumber":2,
                        "stanza":" Since I met this blessed Saviour,\r\nSince He cleansed and made me whole;\r\nI will never cease to praise Him,\r\nI’ll shout it while eternity rolls.\r\n"
                    }
                ],
                "title":"HE TOUCHED ME"
            },
            {
                "hymnNumber":32,
                "stanzas":[
                    {
                        "hymnId":32,
                        "stanzaNumber":1,
                        "stanza":" O what a wonderful, wonderful day -\r\nDay I will never forget;\r\nAfter I’d wandered in darkness away,\r\nJesus my Saviour I met.\r\nO what a tender, compassionate Friend!\r\nHe met the need of my heart;\r\nShadows dispelling, with joy I am telling,\r\nHe made all the darkness depart!\r\nHeaven came down and glory filled my soul,\r\nWhen at the cross the Saviour made me whole;\r\nMy sins were washed away\r\nAnd my night was turned to day!\r\nHeaven came down and glory filled my soul !\r"
                    },
                    {
                        "hymnId":32,
                        "stanzaNumber":2,
                        "stanza":" Born of the Spirit with life from above\r\nInto God’s fam’ly divine,\r\nJustified fully thru Calvary’s love,\r\nO what a standing is mine!\r\nAnd the transaction so quickly was made\r\nWhen as a sinner I came,\r\nTook of the offer of grace He did proffer -\r\nHe saved me, O praise His dear name.\r"
                    },
                    {
                        "hymnId":32,
                        "stanzaNumber":3,
                        "stanza":" Now I’ve a hope that will surely endure\r\nAfter the passing of time;\r\nI have a future in heaven for sure,\r\nThere in those mansions sublime.\r\nAssurance & Confidence\r\nAnd it’s because of that wonderful day\r\nWhen at the cross I believed;\r\nRiches eternal and blessings supernal\r\nFrom His precious hand I received.\r\n"
                    }
                ],
                "title":"HEAVEN CAME DOWN"
            },
            {
                "hymnNumber":33,
                "stanzas":[
                    {
                        "hymnId":33,
                        "stanzaNumber":1,
                        "stanza":" What a wonderful change in my life has been wrought\r\nSince Jesus came into my heart;\r\nI have light in my soul for which long I had sought,\r\nSince Jesus came into my heart.\r\nSince Jesus came into my heart,\r\nSince Jesus came into my heart;\r\nFloods of joy o’er my soul\r\nLike the sea billows roll,\r\nSince Jesus came into my heart.\r"
                    },
                    {
                        "hymnId":33,
                        "stanzaNumber":2,
                        "stanza":" I have ceased from my wand’ring and going astray,\r\nSince Jesus came into my heart;\r\nAnd my sins which were many are all washed away,\r\nSince Jesus came into my heart.\r"
                    },
                    {
                        "hymnId":33,
                        "stanzaNumber":3,
                        "stanza":" I shall go there to dwell in that City I know,\r\nSince Jesus came into my heart;\r\nAnd I’m happy, so happy as onward I go,\r\nSince Jesus came into my heart.\r\n"
                    }
                ],
                "title":"SINCE JESUS CAME INTO MY HEART"
            },
            {
                "hymnNumber":34,
                "stanzas":[
                    {
                        "hymnId":34,
                        "stanzaNumber":1,
                        "stanza":" There’s a peace in my heart that the world never gave,\r\nA peace it can not take away;\r\nThough the trials of life may surround like a cloud,\r\nI’ve a peace that has come there to stay !\r\nCon . . . . stantly abid . . . ing,\r\nJe . . . sus is mine; . . .\r\nCon . . . . stantly abid . . . ing,\r\nrapture divine;\r\nHe never leaves me lonely,\r\nwhispers, O so kind -\r\n“I will never leave thee,”\r\nJesus is mine.\r"
                    },
                    {
                        "hymnId":34,
                        "stanzaNumber":2,
                        "stanza":" All the world seem’d to sing of a Saviour and King,\r\nWhen peace sweetly came to my heart;\r\nTroubles all fled away and my night turn’d to day,\r\nBlessed Jesus, how glorious Thou art!\r"
                    },
                    {
                        "hymnId":34,
                        "stanzaNumber":3,
                        "stanza":" This treasure I have in a temple of clay,\r\nWhile here on His foot-stool I roam;\r\nBut He’s coming to take me some glorious day,\r\nOver there to my heavenly home!\r\n"
                    }
                ],
                "title":"CONSTANTLY ABIDING"
            },
            {
                "hymnNumber":35,
                "stanzas":[
                    {
                        "hymnId":35,
                        "stanzaNumber":1,
                        "stanza":" I was once a sinner, but I came\r\nPardon to receive from my Lord:\r\nThis was freely given, and I found\r\nThat He always kept His word.\r\nThere’s a new name written down in glory,\r\nAnd it’s mine, O yes, it’s mine !\r\nAnd the white-robed angels sing the story\r\n“A sinner has come home.”\r\nFor there’s a new name written down in glory,\r\nAnd it’s mine, O yes, it’s mine;\r\nWith my sins forgiven I am bound for heaven,\r\nNever more to roam.\r"
                    },
                    {
                        "hymnId":35,
                        "stanzaNumber":2,
                        "stanza":" I was humbly kneeling at the cross,\r\nFearing naught but God’s angry frown;\r\nWhen the heavens opened and I saw\r\nThat my name was written down.\r"
                    },
                    {
                        "hymnId":35,
                        "stanzaNumber":3,
                        "stanza":" In the Book ’tis written, “Saved by Grace,”\r\nO the joy that came to my soul!\r\nNow I am forgiven, and I know\r\nBy the blood I am made whole.\r\n"
                    }
                ],
                "title":"NEW NAME IN GLORY"
            },
            {
                "hymnNumber":36,
                "stanzas":[
                    {
                        "hymnId":36,
                        "stanzaNumber":1,
                        "stanza":" I am bought not with riches,\r\nNeither silver nor gold;\r\nBut Christ hath redeemed me,\r\nI am safe in His fold;\r\nIn the Book of His Kingdom,\r\nWith its pages so fair,\r\nThrough Jesus my Saviour,\r\nMy name’s written there.\r\nMy name’s written there,\r\nOn the page white and fair;\r\nIn the Book of God’s kingdom,\r\nMy name’s written there.\r"
                    },
                    {
                        "hymnId":36,
                        "stanzaNumber":2,
                        "stanza":" My sins, they were many,\r\nLike the sands of the sea,\r\nBut the blood of my Saviour\r\nIs sufficient for me;\r\nFor His promise is written,\r\nIn bright letters that glow,\r\n“Tho’ your sins be as scarlet,\r\nI will make them like snow”.\r"
                    },
                    {
                        "hymnId":36,
                        "stanzaNumber":3,
                        "stanza":" Oh! that beautiful city,\r\nWith its mansions of light,\r\nWith its glorified beings,\r\nIn pure garments of white;\r\nWhere no evil thing cometh\r\nTo despoil what is fair;\r\nWhere the angels are watching,\r\nMy name’s written there.\r\n"
                    }
                ],
                "title":"MY NAME’S WRITTEN THERE"
            },
            {
                "hymnNumber":37,
                "stanzas":[
                    {
                        "hymnId":37,
                        "stanzaNumber":1,
                        "stanza":" Christ our Redeemer died on the cross,\r\nDied for the sinner, paid all his due;\r\nAll who receive Him need never fear,\r\nYes, He will pass, will pass over you.\r\nWhen I see the blood,\r\nWhen I see the blood,\r\nWhen I see the blood,\r\nI will pass, I will pass over you.\r"
                    },
                    {
                        "hymnId":37,
                        "stanzaNumber":2,
                        "stanza":" Chiefest of sinners, Jesus can save,\r\nAs He has promised, so will He do;\r\nOh, sinner, hear Him, trust in His Word,\r\nThen He will pass, will pass over you.\r"
                    },
                    {
                        "hymnId":37,
                        "stanzaNumber":3,
                        "stanza":" Judgment is coming, all will be there,\r\nWho have rejected, who have refused;\r\nOh, sinner, hasten, let Jesus in,\r\nThen God will pass, will pass over you.\r"
                    },
                    {
                        "hymnId":37,
                        "stanzaNumber":4,
                        "stanza":" Oh, what compassion, oh, boundless love!\r\nJesus hath power, Jesus is true;\r\nAll who believe are safe from the storm,\r\nOh, He will pass, will pass over you.\r\n"
                    }
                ],
                "title":"WHEN I SEE THE BLOOD"
            },
            {
                "hymnNumber":38,
                "stanzas":[
                    {
                        "hymnId":38,
                        "stanzaNumber":1,
                        "stanza":" Have you been to Jesus for the cleansing pow’r?\r\nAre you wash’d in the blood of the Lamb?\r\nAre you fully trusting in His grace this hour?\r\nAre you wash’d in the blood of the Lamb?\r\nAre you washed . . . . in the blood,\r\nIn the soul-cleansing blood of the Lamb?\r\nAre your garments spotless? Are they white as snow?\r\nAre you wash’d in the blood of the Lamb?\r"
                    },
                    {
                        "hymnId":38,
                        "stanzaNumber":2,
                        "stanza":" Are you walking daily by the Saviour’s side?\r\nAre you washed in the blood of the Lamb?\r\nDo you rest each moment in the Crucified?\r\nAre you washed in the blood of the Lamb?\r"
                    },
                    {
                        "hymnId":38,
                        "stanzaNumber":3,
                        "stanza":" When the Bridegroom cometh will your robes be white?\r\nPure and white in the blood of the Lamb?\r\nWill your soul be ready for the mansions bright,\r\nAnd be washed in the blood of the Lamb?\r\nBlood of Jesus\r"
                    },
                    {
                        "hymnId":38,
                        "stanzaNumber":4,
                        "stanza":" Lay aside the garments that are stained with sin,\r\nAnd be washed in the blood of the Lamb;\r\nThere’s a fountain flowing for the soul unclean,\r\nOh be washed in the blood of the Lamb.\r\n"
                    }
                ],
                "title":"HAVE YOU BEEN TO JESUS ?"
            },
            {
                "hymnNumber":39,
                "stanzas":[
                    {
                        "hymnId":39,
                        "stanzaNumber":1,
                        "stanza":" Would you be free from your burden of sin?\r\nThere’s pow’r in the blood, pow’r in the blood;\r\nWould you o’er evil a victory win?\r\nThere’s wonderful pow’r in the blood.\r\nThere is pow’r, pow’r, wonder-working pow’r\r\nIn the blood of the Lamb,\r\nThere is pow’r, pow’r, wonder-working pow’r\r\nIn the precious blood of the Lamb.\r"
                    },
                    {
                        "hymnId":39,
                        "stanzaNumber":2,
                        "stanza":" Would you be free from your passion and pride?\r\nThere’s pow’r in the blood, pow’r in the blood;\r\nCome for a cleansing to Calvary’s tide,\r\nThere’s wonderful pow’r in the blood.\r"
                    },
                    {
                        "hymnId":39,
                        "stanzaNumber":3,
                        "stanza":" Would you be whiter, much whiter than snow?\r\nThere’s pow’r in the blood, pow’r in the blood;\r\nSin stains are lost in its lifegiving flow,\r\nThere’s wonderful pow’r in the blood.\r"
                    },
                    {
                        "hymnId":39,
                        "stanzaNumber":4,
                        "stanza":" Would you do service for Jesus your King?\r\nThere’s pow’r in the blood, pow’r in the blood;\r\nWould you live daily His praises to sing?\r\nThere’s wonderful pow’r in the blood.\r\n"
                    }
                ],
                "title":"POWER IN THE BLOOD"
            },
            {
                "hymnNumber":40,
                "stanzas":[
                    {
                        "hymnId":40,
                        "stanzaNumber":1,
                        "stanza":" Wash me, O Lamb of God,\r\nWash me from sin!\r\nBy Thine atoning blood,\r\nOh, make me clean!\r\nPurge me from ev’ry stain,\r\nLet me Thine image gain,\r\nIn love and mercy reign,\r\nO’er all within.\r"
                    },
                    {
                        "hymnId":40,
                        "stanzaNumber":2,
                        "stanza":" Wash me, O Lamb of God,\r\nWash me from sin!\r\nI long to be like Thee -\r\nAll pure within.\r\nNow let the crimson tide,\r\nShed from Thy wounded side,\r\nBe to my heart applied,\r\nAnd make me clean.\r"
                    },
                    {
                        "hymnId":40,
                        "stanzaNumber":3,
                        "stanza":" Wash me, O Lamb of God,\r\nWash me from sin!\r\nI will not, cannot, rest\r\nTill pure within.\r\nAll human skill is vain,\r\nBut Thou canst cleanse each stain\r\nTill not a spot remain -\r\nMade wholly clean.\r"
                    },
                    {
                        "hymnId":40,
                        "stanzaNumber":4,
                        "stanza":" Wash me, O Lamb of God,\r\nWash me from sin!\r\nBy faith Thy cleansing blood\r\nNow makes me clean.\r\nSo near art Thou to me,\r\nSo sweet my rest in Thee -\r\nOh, blessed purity,\r\nSaved, saved from sin!\r"
                    },
                    {
                        "hymnId":40,
                        "stanzaNumber":5,
                        "stanza":" Wash me, O Lamb of God,\r\nWash me from sin!\r\nThou, while I trust in Thee,\r\nWilt keep me clean.\r\nEach day to Thee I bring\r\nHeart, life - yea, everything;\r\nSaved, while to Thee I cling,\r\nSaved from all sin!\r\n"
                    }
                ],
                "title":"WASH ME, O LAMB OF GOD"
            },
            {
                "hymnNumber":41,
                "stanzas":[
                    {
                        "hymnId":41,
                        "stanzaNumber":1,
                        "stanza":" Onward, Christian Soldiers!\r\nMarching as to war,\r\nLooking unto Jesus,\r\nWho is gone before;\r\nChrist, the Royal Master,\r\nLeads against the foe;\r\nForward into battle,\r\nSee His banners go.\r\nOnward, Christian Soldiers!\r\nMarching as to war,\r\nLooking unto Jesus,\r\nWho is gone before.\r"
                    },
                    {
                        "hymnId":41,
                        "stanzaNumber":2,
                        "stanza":" At the name of Jesus\r\nSatan’s host doth flee;\r\nOn then, Christian soldiers,\r\nOn to victory!\r\nHell’s foundations quiver\r\nAt the shout of praise:\r\nBrothers, lift your voices,\r\nLoud your anthems raise.\r"
                    },
                    {
                        "hymnId":41,
                        "stanzaNumber":3,
                        "stanza":" Like a mighty army\r\nMoves the church of God:\r\nBrothers, we are treading\r\nWhere the saints have trod\r\nWe are not divided,\r\nAll one body we -\r\nOne in hope and doctrine,\r\nOne in charity.\r"
                    },
                    {
                        "hymnId":41,
                        "stanzaNumber":4,
                        "stanza":" Crowns and thrones may perish,\r\nKingdoms rise and wane;\r\nBut the church of Jesus\r\nConstant will remain:\r\nGates of hell can never\r\n‘Gainst that church prevail;\r\nWe have Christ’s own promise -\r\nAnd that cannot fail.\r"
                    },
                    {
                        "hymnId":41,
                        "stanzaNumber":5,
                        "stanza":" Onward then, ye people,\r\nJoin our happy throng;\r\nBlend with ours your voices\r\nIn the triumph song:\r\n“Glory, praise and honour,\r\nUnto Christ the King,” _\r\nThis, through countless ages,\r\nMen and angels sing.\r\n"
                    }
                ],
                "title":"ONWARD, CHRISTIAN SOLDIERS!"
            },
            {
                "hymnNumber":42,
                "stanzas":[
                    {
                        "hymnId":42,
                        "stanzaNumber":1,
                        "stanza":" Thou, my everlasting portion,\r\nMore than friend or life to me;\r\nAll along my pilgrim journey,\r\nSaviour, let me walk with Thee.\r\nClose to Thee,  four times \r\nAll along my pilgrim journey\r\nSaviour, let me walk with Thee.\r"
                    },
                    {
                        "hymnId":42,
                        "stanzaNumber":2,
                        "stanza":" Not for ease or wordly pleasure,\r\nNor for fame my prayer shall be;\r\nGladly will I toil and suffer,\r\nOnly let me walk with Thee.\r\nClose to Thee,  four times\r\nGladly will I toil and suffer,\r\nOnly let me walk with Thee.\r"
                    },
                    {
                        "hymnId":42,
                        "stanzaNumber":3,
                        "stanza":" Lead me through the vale of shadows,\r\nBear me o’er life’s fitful sea;\r\nThen the gate of life eternal\r\nMay I enter, Lord, with Thee.\r\nClose to Thee,  four times \r\nThen the gate of life eternal\r\nMay I enter, Lord, with Thee.\r\n"
                    }
                ],
                "title":"CLOSE TO THEE"
            },
            {
                "hymnNumber":43,
                "stanzas":[
                    {
                        "hymnId":43,
                        "stanzaNumber":1,
                        "stanza":" When we walk with the Lord,\r\nIn the light of His word,\r\nWhat a glory He sheds on our way!\r\nWhile we do His good will,\r\nHe abides with us still,\r\nAnd with all who will trust and obey.\r\nTrust and obey!\r\nFor there’s no other way\r\nTo be happy in Jesus,\r\nBut to trust and obey.\r"
                    },
                    {
                        "hymnId":43,
                        "stanzaNumber":2,
                        "stanza":" Not a shadow can rise,\r\nNot a cloud in the skies,\r\nBut His smile quickly drives it away;\r\nNot a doubt nor a fear,\r\nNot a sigh nor a tear,\r\nCan abide while we trust and obey.\r"
                    },
                    {
                        "hymnId":43,
                        "stanzaNumber":3,
                        "stanza":" Not a burden we bear,\r\nNot a sorrow we share,\r\nBut our toil He doth richly repay;\r\nNot a grief nor a loss,\r\nNot a frown nor a cross,\r\nBut is blest if we trust and obey.\r"
                    },
                    {
                        "hymnId":43,
                        "stanzaNumber":4,
                        "stanza":" But we never can prove\r\nThe delights of His love,\r\nUntil all on the altar we lay;\r\nFor the favour He shows,\r\nAnd the joy He bestows\r\nAre for them who will trust and obey.\r"
                    },
                    {
                        "hymnId":43,
                        "stanzaNumber":5,
                        "stanza":" Then in fellowship sweet\r\nWe will sit at His feet,\r\nOr we’ll walk by His side in the way;\r\nWhat He says we will do,\r\nWhere He sends we will go,\r\nNever fear, only trust and obey.\r\n"
                    }
                ],
                "title":"TRUST AND OBEY"
            },
            {
                "hymnNumber":44,
                "stanzas":[
                    {
                        "hymnId":44,
                        "stanzaNumber":1,
                        "stanza":" There’s a land of peace and plenty,\r\nand its gates are open wide;\r\nAnd the pure in heart and\r\nholy in its shelter may abide,\r\nIt is not thro’ gates of glory\r\nthat a soul must enter in;\r\nBut all who would find entrance\r\nthere must leave the ways of sin.\r\nCome over, come over,\r\nto the land of corn and wine,\r\nThere is nothing can compare with the many\r\nholy pleasures there,\r\nCome over, come over, leave the\r\ndesert plain below and come away,\r\nAway, come o . . . ver.\r"
                    },
                    {
                        "hymnId":44,
                        "stanzaNumber":2,
                        "stanza":" There is bread of heaven growing,\r\nin its fair and fertile fields,\r\nAnd the wine of love its\r\nvineyard to the thirsting mortal yields;\r\nThere are mountain heights of\r\nglory that await the trav’lers rod,\r\nAnd blest retreats where\r\nempty souls draw nearer unto God.\r"
                    },
                    {
                        "hymnId":44,
                        "stanzaNumber":3,
                        "stanza":" Who would stay without its borders,\r\nin the desert dark and drear,\r\nWhen the luscious grapes of\r\neschol are so very, very, near?\r\nEnter in then with rejoicing,\r\nfor the Lord is on your side,\r\nAnd in His glorious presence\r\never more you shall abide.\r\n"
                    }
                ],
                "title":"COME OVER"
            },
            {
                "hymnNumber":45,
                "stanzas":[
                    {
                        "hymnId":45,
                        "stanzaNumber":1,
                        "stanza":" Jesus, my strength, my hope,\r\nOn Thee I cast my care,\r\nWith humble confidence look up,\r\nAnd know Thou hear’st my prayer.\r\nGive me on Thee to wait,\r\nTill I can all things do,\r\nOn Thee, Almighty to create,\r\nAlmighty to renew.\r"
                    },
                    {
                        "hymnId":45,
                        "stanzaNumber":2,
                        "stanza":" I want a godly fear,\r\nA quick-discerning eye\r\nThat looks to Thee when sin is near,\r\nAnd sees the tempter fly:\r\nA spirit still prepared,\r\nAnd armed with jealous care,\r\nFor ever standing on its guard\r\nAnd watching unto prayer.\r"
                    },
                    {
                        "hymnId":45,
                        "stanzaNumber":3,
                        "stanza":" I want a true regard,\r\nA single, steady aim,\r\nUnmoved by threatening or reward,\r\nTo Thee and Thy great name;\r\nA jealous, just concern\r\nFor Thine immortal praise;\r\nA pure desire that all may learn\r\nAnd glorify Thy grace.\r"
                    },
                    {
                        "hymnId":45,
                        "stanzaNumber":4,
                        "stanza":" I rest upon Thy word;\r\nThe promise is for me;\r\nMy succour and salvation, Lord,\r\nShall surely come from Thee:\r\nBut let me still abide,\r\nNor from my hope remove,\r\nTill Thou my patient spirit guide\r\nInto Thy perfect love. Amen.\r\n"
                    }
                ],
                "title":"JESUS, MY STRENGTH, MY HOPE"
            },
            {
                "hymnNumber":46,
                "stanzas":[
                    {
                        "hymnId":46,
                        "stanzaNumber":1,
                        "stanza":" O give us homes built firm upon the Saviour,\r\nWhere Christ is Head and Counsellor and Guide;\r\nWhere ev’ry child is taught His love and favour,\r\nAnd gives his heart to Christ, the Crucified:\r\nHow sweet to know that tho’ his foot-steps waver,\r\nHis faithful Lord is walking by his side!\r"
                    },
                    {
                        "hymnId":46,
                        "stanzaNumber":2,
                        "stanza":" O give us homes with godly fathers, mothers,\r\nWho always place their hope and trust in Him;\r\nWhose tender patience turmoil never bothers,\r\nWhose calm and courage trouble cannot dim;\r\nA home where each finds joy in serving others,\r\nAnd love still shines, tho’ days be dark and grim.\r"
                    },
                    {
                        "hymnId":46,
                        "stanzaNumber":3,
                        "stanza":" O give us homes where Christ is Lord and Master,\r\nThe Bible read, the precious hymns still sung;\r\nWhere pray’r comes first in peace or in disaster,\r\nAnd praise is natural speech to ev’ry tongue;\r\nWhere mountains move before a faith that’s vaster,\r\nAnd Christ sufficient is for old and young.\r"
                    },
                    {
                        "hymnId":46,
                        "stanzaNumber":4,
                        "stanza":" O Lord, our God, our homes are Thine forever!\r\nWe trust to Thee their problems, toil, and care;\r\nTheir bonds of love no enemy can sever\r\nIf Thou art always Lord and Master there:\r\nBe Thou the center of our least endeavour _\r\nBe Thou our Guest, our hearts and homes to share.\r\n"
                    }
                ],
                "title":"CHRISTIAN HOME"
            },
            {
                "hymnNumber":47,
                "stanzas":[
                    {
                        "hymnId":47,
                        "stanzaNumber":1,
                        "stanza":" Just as God who reigns on high,\r\nSpake to men in days gone by;\r\nSo the Lord is calling men today;\r\nAnd, my brother, this is true,\r\nWhatso’er He says to you,\r\nThere is but one thing to do -\r\nJust obey.\r\nJust obey . . ., Just obey . . .,\r\nIs the way . . ., God’s way . .. ,\r\nWhen His message comes to you,\r\nThere is but one thing to do:\r\nJust obey . . ., Just obey.\r"
                    },
                    {
                        "hymnId":47,
                        "stanzaNumber":2,
                        "stanza":" If you’re in the Saviour’s hands,\r\nYou must do as He commands,\r\nFor there is no other gospel way;\r\nNever put the message by,\r\nNever stop to reason “ why ”,\r\nWhen the Saviour speaks to you -\r\nJust obey.\r"
                    },
                    {
                        "hymnId":47,
                        "stanzaNumber":3,
                        "stanza":" If for mansions fair you sigh,\r\nIn that land beyond the sky,\r\nAfter time with you has pass’d away;\r\nTho’ the way you may not see,\r\nChrist is calling, “ follow me, ”\r\nFaith and duty both will cry -\r\nJust obey.\r\n"
                    }
                ],
                "title":"JUST OBEY"
            },
            {
                "hymnNumber":49,
                "stanzas":[
                    {
                        "hymnId":49,
                        "stanzaNumber":1,
                        "stanza":" While passing thro’ this world of sin,\r\nAnd others your life shall view,\r\nBe clean and pure without, within,\r\nLet others see Jesus in you.\r\nLet others see Jesus in you ,.....\r\nLet others see Jesus in you,.....\r\nKeep telling the story, be faithful and true,\r\nLet others see Jesus in you.\r"
                    },
                    {
                        "hymnId":49,
                        "stanzaNumber":2,
                        "stanza":" Your life’s a book before their eyes,\r\nThey’re reading it thro’ and thro’;\r\nSay, does it point them to the skies,\r\nDo others see Jesus in you?\r"
                    },
                    {
                        "hymnId":49,
                        "stanzaNumber":3,
                        "stanza":" What joy ’twill be at set of sun,\r\nIn mansions beyond the blue,\r\nTo find some souls that you have won;\r\nLet others see Jesus in you.\r"
                    },
                    {
                        "hymnId":49,
                        "stanzaNumber":4,
                        "stanza":" Then live for Christ both day and night,\r\nBe faithful, be brave and true,\r\nAnd lead the lost to life and light;\r\nLet others see Jesus in you.\r\n"
                    }
                ],
                "title":"LET OTHERS SEE JESUS IN YOU"
            },
            {
                "hymnNumber":50,
                "stanzas":[
                    {
                        "hymnId":50,
                        "stanzaNumber":1,
                        "stanza":" When upon life’s billows you are tempest toss’d,\r\nWhen you are discouraged, thinking all is lost,\r\nCount your many blessings, name them one by one,\r\nAnd it will surprise you what the Lord hath done.\r\nCount your blessings, name them one by one,\r\nCount your blessings, see what God hath done;\r\nCount your blessings, name them one by one,\r\nAnd it will surprise you what the Lord hath done.\r"
                    },
                    {
                        "hymnId":50,
                        "stanzaNumber":2,
                        "stanza":" Are you ever burden’d with a load of care?\r\nDoes the cross seem heavy you are called to bear?\r\nCount your many blessings, ev’ry doubt will fly,\r\nAnd you will be singing as the days go by.\r"
                    },
                    {
                        "hymnId":50,
                        "stanzaNumber":3,
                        "stanza":" When you look at others with their lands and gold.\r\nThink that Christ has promised you His wealth untold,\r\nCount your many blessings money cannot buy\r\nYour reward in heaven, nor your home on high.\r"
                    },
                    {
                        "hymnId":50,
                        "stanzaNumber":4,
                        "stanza":" So amid the conflict, whether great or small,\r\nDo not be discouraged, God is over all,\r\nCount your many blessings, angels will attend,\r\nHelp and comfort give you to your journey’s end.\r\n"
                    }
                ],
                "title":"COUNT YOUR BLESSINGS"
            },
            {
                "hymnNumber":51,
                "stanzas":[
                    {
                        "hymnId":51,
                        "stanzaNumber":1,
                        "stanza":" There’s a blessed land that we call Canaan,\r\nLand of promise, land of victory,\r\nWhere the Spirit’s given without measure,\r\nWhere the soul from self has been set free.\r\nIt is wonderful to live in Canaan,\r\nWhere the milk and honey flow,\r\nWhere the land is bearing in abundance\r\nAnd the grapes of Eschol grow.\r\nIt is wonderful to live in Canaan,\r\nJust a lovely place to dwell.\r\nWon’t you join that band where the life is grand,\r\nIn that blessed Canaan land?\r"
                    },
                    {
                        "hymnId":51,
                        "stanzaNumber":2,
                        "stanza":" In the land of Canaan there is blessing,\r\nAll His fullness as He takes control,\r\nBlessed fullness of the Holy Spirit;\r\nO what glory He brings to the soul!\r"
                    },
                    {
                        "hymnId":51,
                        "stanzaNumber":3,
                        "stanza":" Have you crossed the Jordan into Canaan,\r\nHave you left the wilderness behind\r\nAnd received the Spirit in His full-ness?\r\nIf you haven’t then make up your mind.\r\n"
                    }
                ],
                "title":"THAT BLESSED CANAAN LAND"
            },
            {
                "hymnNumber":52,
                "stanzas":[
                    {
                        "hymnId":52,
                        "stanzaNumber":1,
                        "stanza":" When you count the ones who love the Lord,\r\nCount me, count me;\r\nWhen you count up those who trust His Word,\r\nCount me, count me.\r\nCount me with the children of the heav’nly King;\r\nCount me with the servants who would service bring;\r\nCount me with the ransomed who His praises sing;\r\nCount me,... count me...\r"
                    },
                    {
                        "hymnId":52,
                        "stanzaNumber":2,
                        "stanza":" When you count up those who’re saved by grace,\r\nCount me, count me;\r\nWho have found in Christ a hiding place,\r\nCount me, count me.\r"
                    },
                    {
                        "hymnId":52,
                        "stanzaNumber":3,
                        "stanza":" When you count up those who do the right,\r\nCount me, count me;\r\nWho are walking in the Gospel light,\r\nCount me, count me.\r"
                    },
                    {
                        "hymnId":52,
                        "stanzaNumber":4,
                        "stanza":" When you count up those who forward press,\r\nCount me, count me;\r\nWho shall gain the crown of righteousness,\r\nCount me, count me.\r\nChristian Life\r\n"
                    }
                ],
                "title":"COUNT ME"
            },
            {
                "hymnNumber":53,
                "stanzas":[
                    {
                        "hymnId":53,
                        "stanzaNumber":1,
                        "stanza":" So send I you - to labour unrewarded,\r\nTo serve unpaid, unloved, unsought, unknown,\r\nTo bear rebuke, to suffer scorn and scoffing\r\nSo send I you - to toil for Me alone.\r\n“As the Father hath sent Me,\r\nSo send I you.”\r"
                    },
                    {
                        "hymnId":53,
                        "stanzaNumber":2,
                        "stanza":" So send I you -to bind the bruised and broken,\r\nO’er wand’ring souls to work, to weep, to wake,\r\nTo bear the burdens of a world a-weary\r\nSo send I you - to suffer for My sake.\r"
                    },
                    {
                        "hymnId":53,
                        "stanzaNumber":3,
                        "stanza":" So send I you - to loneliness and longing\r\nWith heart a-hung’ring for the loved and known,\r\nForsaking home and kindred, friend and dear one\r\nSo send I you - to know My love alone.\r"
                    },
                    {
                        "hymnId":53,
                        "stanzaNumber":4,
                        "stanza":" So send I you - to leave your life’s ambition,\r\nTo die to dear desire, self-will resign,\r\nTo labour long and love where men revile you\r\nSo send I you - to loose your life in Mine.\r"
                    },
                    {
                        "hymnId":53,
                        "stanzaNumber":5,
                        "stanza":" So send I you - to hearts made hard by hatred,\r\nTo eyes made blind because they will not see,\r\nTo spend, tho’ it be blood to spend and spare not\r\nSo send I you - to taste of Calvary.\r\n"
                    }
                ],
                "title":"SO SEND I YOU"
            },
            {
                "hymnNumber":54,
                "stanzas":[
                    {
                        "hymnId":54,
                        "stanzaNumber":1,
                        "stanza":" Listen to the Master’s pleadings,\r\nThere is urgent work for all,\r\nHeed the Spirit’s interceding,\r\nGive this answer to the call:\r\nI am ready for service for Thee, dear Lord,\r\nHere am I - send me,\r\nI am willing to be what You’d have me be,\r\nI will go to where You want me to go.\r\nI am ready for Service for Thee, dear Lord,\r\nHere am I, send me,\r\nTho’ the pathway seems dark\r\nFor Thee I’ll do or die, I am ready for service Lord.\r"
                    },
                    {
                        "hymnId":54,
                        "stanzaNumber":2,
                        "stanza":" There’s a voice to you now calling,\r\nWill you heed the earnest word,\r\nOn the ear it’s gently calling,\r\nGive this answer to your Lord:\r"
                    },
                    {
                        "hymnId":54,
                        "stanzaNumber":3,
                        "stanza":" Many souls in sins are dying,\r\nHaste to help them while you may,\r\nFor the time is swiftly flying,\r\nWill you now to Jesus say:\r\n"
                    }
                ],
                "title":"AM READY FOR SERVICE"
            },
            {
                "hymnNumber":55,
                "stanzas":[
                    {
                        "hymnId":55,
                        "stanzaNumber":1,
                        "stanza":" Anywhere with Jesus I can safely go;\r\nAnywhere He leads me in this world below;\r\nAnywhere without Him dearest joys would fade;\r\nAnywhere with Jesus, I am not afraid.\r\nAnywhere! anywhere!\r\nFear I cannot know;\r\nAnywhere with Jesus\r\nI can safely go.\r"
                    },
                    {
                        "hymnId":55,
                        "stanzaNumber":2,
                        "stanza":" Anywhere with Jesus I am not alone;\r\nOther friends may fail me, He is still my own;\r\nTho’ His hand may lead me over dreariest ways,\r\nAnywhere with Jesus is a house of praise.\r"
                    },
                    {
                        "hymnId":55,
                        "stanzaNumber":3,
                        "stanza":" Anywhere with Jesus over land and sea,\r\nTelling souls in darkness of salvation free;\r\nReady as He summons me to go or stay,\r\nAnywhere with Jesus when He points the way.\r"
                    },
                    {
                        "hymnId":55,
                        "stanzaNumber":4,
                        "stanza":" Anywhere with Jesus I can go to sleep,\r\nWhen the dark’ning shadows round about me creep;\r\nKnowing I shall waken never more to roam,\r\nAnywhere with Jesus will be home, sweet home.\r\n"
                    }
                ],
                "title":"ANYWHERE WITH JESUS"
            },
            {
                "hymnNumber":56,
                "stanzas":[
                    {
                        "hymnId":56,
                        "stanzaNumber":1,
                        "stanza":"\nI love, I love my Master,\r\nI will not go out free!\r\nFor He is my Redeemer;\r\nHe paid the price for me.\r\nI would not leave His service,\r\nIt is so sweet and blest;\r\nAnd in the weariest moments\r\nHe gives the truest rest.\r"
                    },
                    {
                        "hymnId":56,
                        "stanzaNumber":2,
                        "stanza":" My Master shed His life-blood\r\nMy vassal life to win,\r\nAnd save me from the bondage\r\nOf tyrant self and sin.\r\nHe chose me for His service,\r\nAnd gave me power to choose\r\nThat blessed, perfect freedom,\r\nWhich I shall never lose.\r"
                    },
                    {
                        "hymnId":56,
                        "stanzaNumber":3,
                        "stanza":" I would not halve my service,\r\nHis only it must be!\r\nHis only - Who so loved me,\r\nAnd gave Himself for me.\r\nRejoicing and adoring,\r\nHenceforth my song shall be -\r\n“I love, I love my Master,\r\nI will not go out free!”\r\n"
                    }
                ],
                "title":"LOVE, I LOVE MY MASTER"
            },
            {
                "hymnNumber":57,
                "stanzas":[
                    {
                        "hymnId":57,
                        "stanzaNumber":1,
                        "stanza":" Ho, reapers in the whitened harvest!\r\nOft feeble, faint, and few;\r\nCome, wait upon the blessed Master,\r\nOur strength He will renew.\r\nFor “they that wait upon the Lord... shall\r\nrenew... their strength, they shall mount up\r\nwith wings, they shall mount up with wings as eagles:\r\nThey shall run... and not be weary; they shall\r\nwalk and not faint;\r\nThey shall run... and not be weary; they\r\nshall walk and not faint;\r\nThey shall run and not be weary, shall walk\r\nand not faint.”\r"
                    },
                    {
                        "hymnId":57,
                        "stanzaNumber":2,
                        "stanza":" Too oft a-weary and discouraged,\r\nWe pour a sad complaint;\r\nBelieving in a living Saviour,\r\nWhy should we ever faint?\r"
                    },
                    {
                        "hymnId":57,
                        "stanzaNumber":3,
                        "stanza":" Rejoice! for He is with us alway,\r\nLo, even to the end!\r\nLook up! take courage and go forward -\r\nAll needed grace He’ll send!\r\n"
                    }
                ],
                "title":"THEY THAT WAIT UPON THE LORD"
            },
            {
                "hymnNumber":58,
                "stanzas":[
                    {
                        "hymnId":58,
                        "stanzaNumber":1,
                        "stanza":" If I walk in the pathway of duty,\r\nIf I work till the close of the day;\r\nI shall see the great King in His beauty,\r\nWhen I’ve gone the last mile of the way.\r\nWhen I’ve gone the last mile of the way,...\r\nI will rest at the close of the day,...\r\nAnd I know there are joys that await me,\r\nWhen I’ve gone the last mile of the way.\r"
                    },
                    {
                        "hymnId":58,
                        "stanzaNumber":2,
                        "stanza":" If for Christ I proclaim the glad story,\r\nIf I seek for His sheep gone astray,\r\nI am sure He will show me His glory,\r\nWhen I’ve gone the last mile of the way.\r"
                    },
                    {
                        "hymnId":58,
                        "stanzaNumber":3,
                        "stanza":" Here the dearest of ties we must sever,\r\nTears of sorrow are seen ev’ry day;\r\nBut no sickness, no sighing forever,\r\nWhen I’ve gone the last mile of the way.\r"
                    },
                    {
                        "hymnId":58,
                        "stanzaNumber":4,
                        "stanza":" And if here I have earnestly striven,\r\nAnd have tried all His will to obey,\r\nChristian Service & Reward\r\n’Twill enhance all the rapture of heaven,\r\nWhen I’ve gone the last mile of the way.\r\n"
                    }
                ],
                "title":"THE LAST MILE OF THE WAY"
            },
            {
                "hymnNumber":59,
                "stanzas":[
                    {
                        "hymnId":59,
                        "stanzaNumber":1,
                        "stanza":" In the harvest field now ripened\r\nThere’s a work for all to do;\r\nHark! the voice of God is calling,\r\nTo the harvest calling you.\r\nLittle is much, when God is in it!\r\nLabour not for wealth or fame;\r\nThere’s a crown and you can win it,\r\nIf you’ll go in Jesus’ name.\r"
                    },
                    {
                        "hymnId":59,
                        "stanzaNumber":2,
                        "stanza":" Does the place you’re called to labour\r\nSeem so small and little known?\r\nIt is great if God is in it,\r\nAnd He’ll not forget His own.\r"
                    },
                    {
                        "hymnId":59,
                        "stanzaNumber":3,
                        "stanza":" Are you laid aside from service,\r\nBody worn from toil and care?\r\nYou can still be in the battle\r\nIn the sacred place of pray’r.\r"
                    },
                    {
                        "hymnId":59,
                        "stanzaNumber":4,
                        "stanza":" When the conflict here is ended\r\nAnd our race on earth is run,\r\nHe will say, if we are faithful,\r\n“Welcome home, my child - well done.”\r\n"
                    }
                ],
                "title":"LITTLE IS MUCH WHEN GOD IS IN IT"
            },
            {
                "hymnNumber":60,
                "stanzas":[
                    {
                        "hymnId":60,
                        "stanzaNumber":1,
                        "stanza":" Living below in this old sinful world,\r\nHardly a comfort can afford;\r\nStriving alone to face temptations sore,\r\nWhere could I go but to the Lord?\r\nWhere could I go, O where could I go,\r\nSeeking a refuge for my soul?\r\nNeeding a friend to help me in the end,\r\nWhere could I go but to the Lord?\r"
                    },
                    {
                        "hymnId":60,
                        "stanzaNumber":2,
                        "stanza":" Neighbours are kind, I love them ev’ry one,\r\nWe get along in sweet accord;\r\nBut when my soul needs manna from above,\r\nWhere could I go but to the Lord?\r"
                    },
                    {
                        "hymnId":60,
                        "stanzaNumber":3,
                        "stanza":" Life here is grand with friends I love so dear,\r\nComfort I get from God’s own Word;\r\nYet when I face the chilling hand of death,\r\nWhere could I go but to the Lord?\r\n"
                    }
                ],
                "title":"WHERE COULD I GO?"
            },
            {
                "hymnNumber":61,
                "stanzas":[
                    {
                        "hymnId":61,
                        "stanzaNumber":1,
                        "stanza":" Lord, speak to me, that I may speak\r\nIn living echoes of thy tone;\r\nAs Thou hast sought, so let me seek\r\nThy erring children lost and lone.\r"
                    },
                    {
                        "hymnId":61,
                        "stanzaNumber":2,
                        "stanza":" Oh, lead me, Lord, that I may lead\r\nThe wandering and the wavering feet;\r\nO, feed me, Lord, that I may feed\r\nThy hungering ones with manna sweet.\r"
                    },
                    {
                        "hymnId":61,
                        "stanzaNumber":3,
                        "stanza":" Oh, strengthen me, that while I stand\r\nFirm on the Rock, and strong in Thee,\r\nI may stretch out a loving hand\r\nTo wrestlers with the troubled sea.\r"
                    },
                    {
                        "hymnId":61,
                        "stanzaNumber":4,
                        "stanza":" Oh, teach me, Lord, that I may teach\r\nThe precious things Thou dost impart;\r\nAnd wing my words, that they may reach\r\nThe hidden depths of many a heart.\r"
                    },
                    {
                        "hymnId":61,
                        "stanzaNumber":5,
                        "stanza":" Oh, give Thine own sweet rest to me,\r\nThat I may speak with soothing power\r\nA word in season, as from Thee,\r\nTo weary ones in needful hour.\r\nChristian Service & Reward\r"
                    },
                    {
                        "hymnId":61,
                        "stanzaNumber":6,
                        "stanza":" Oh, fill me with Thy fulness, Lord,\r\nUntil my very heart o’erflow\r\nIn kindling thought, and glowing word,\r\nThy love to tell, Thy praise to show.\r"
                    },
                    {
                        "hymnId":61,
                        "stanzaNumber":7,
                        "stanza":" Oh, use me, Lord, use even me,\r\nJust as Thou wilt, and how, and where;\r\nUntil Thy blessed face I see,\r\nThy rest, Thy joy, Thy glory share.\r\n"
                    }
                ],
                "title":"LORD, SPEAK TO ME, THAT I MAY SPEAK"
            },
            {
                "hymnNumber":62,
                "stanzas":[
                    {
                        "hymnId":62,
                        "stanzaNumber":1,
                        "stanza":" Go, labour on, spend, and be spent,\r\nThy joy to do the Father’s will;\r\nIt is the way the Master went,\r\nShould not the servant tread it still?\r"
                    },
                    {
                        "hymnId":62,
                        "stanzaNumber":2,
                        "stanza":" Go, labour on; ’tis not for nought,\r\nThy earthly loss is heav’nly gain.\r\nMen heed thee, love thee, praise thee not,\r\nThe Master praises, what are men?\r"
                    },
                    {
                        "hymnId":62,
                        "stanzaNumber":3,
                        "stanza":" Men die in darkness at your side,\r\nWithout a hope to cheer the tomb:\r\nTake up the torch, and wave it wide,\r\nThe torch that lights times thickest gloom.\r"
                    },
                    {
                        "hymnId":62,
                        "stanzaNumber":4,
                        "stanza":" Toil on, and in thy toil rejoice,\r\nFor toil comes rest, for exile home;\r\nSoon shalt thou hear the Bridegroom’s voice,\r\nThe midnight peal, “Behold, I come!”\r\n"
                    }
                ],
                "title":"GO, LABOUR ON"
            },
            {
                "hymnNumber":63,
                "stanzas":[
                    {
                        "hymnId":63,
                        "stanzaNumber":1,
                        "stanza":" I am thinking today of that beautiful land\r\nI shall reach when the sun goeth down;\r\nWhen thro’ wonderful grace by my Saviour I stand,\r\nWill there be any stars in my crown?\r\nWill there be any stars, any stars in my crown,\r\nWhen at evening the sun goeth down?\r\nWhen I wake with the blest, in the mansions of rest,\r\nWill there be any stars in my crown?\r"
                    },
                    {
                        "hymnId":63,
                        "stanzaNumber":2,
                        "stanza":" In the strength of the Lord let me labour and pray,\r\nLet me watch as a winner of souls;\r\nThat bright stars may be mine in the glorious day,\r\nWhen His praise like the sea billows roll.\r"
                    },
                    {
                        "hymnId":63,
                        "stanzaNumber":3,
                        "stanza":" O what joy will it be when His face I behold,\r\nLiving gems at His feet to lay down;\r\nIt would sweeten my bliss in the city of gold,\r\nShould there be any stars in my crown?\r\n"
                    }
                ],
                "title":"WILL THERE BE ANY STARS?"
            },
            {
                "hymnNumber":64,
                "stanzas":[
                    {
                        "hymnId":64,
                        "stanzaNumber":1,
                        "stanza":" On a hill far away stood an old rugged cross,\r\nThe emblem of suff’ring and shame;\r\nAnd I love that old cross where the dearest and best\r\nFor a world of lost sinners was slain.\r\nSo I’ll cherish the old rugged cross,...\r\nTill my trophies at last I lay down;\r\nI will cling to the old rugged cross,...\r\nAnd exchange it some day for a crown.\r"
                    },
                    {
                        "hymnId":64,
                        "stanzaNumber":2,
                        "stanza":" O, that old rugged cross, so despised by the world,\r\nHas a wondrous attraction for me;\r\nFor the dear Lamb of God left His glory above,\r\nTo bear it to dark Calvary.\r"
                    },
                    {
                        "hymnId":64,
                        "stanzaNumber":3,
                        "stanza":" In the old rugged cross, stained with blood so divine,\r\nA wondrous beauty I see;\r\nFor ’twas on that old cross Jesus suffered and died,\r\nTo pardon and sanctify me.\r"
                    },
                    {
                        "hymnId":64,
                        "stanzaNumber":4,
                        "stanza":" To the old rugged cross I will ever be true,\r\nIts shame and reproach gladly bear;\r\nChristian Service & Reward/Christ our Saviour\r\nThen He’ll call me some day to my home far away,\r\nWhere His glory forever I’ll share.\r\n"
                    }
                ],
                "title":"THE OLD RUGGED CROSS"
            },
            {
                "hymnNumber":65,
                "stanzas":[
                    {
                        "hymnId":65,
                        "stanzaNumber":1,
                        "stanza":" There is a name I love to hear,\r\nI love to sing its worth;\r\nIt sounds like music in mine ear,\r\nThe sweetest name on earth.\r\nO how I love Jesus,\r\nO how I love Jesus,\r\nO how I love Jesus,\r\nBecause He first loved me!\r"
                    },
                    {
                        "hymnId":65,
                        "stanzaNumber":2,
                        "stanza":" It tells me of a Saviour’s love,\r\nWho died to set me free;\r\nIt tells me of His precious blood,\r\nThe sinner’s perfect plea.\r"
                    },
                    {
                        "hymnId":65,
                        "stanzaNumber":3,
                        "stanza":" It tells me what my Father hath\r\nIn store for ev’ry day,\r\nAnd tho I tread a dark-some path,\r\nYields sunshine all the way.\r"
                    },
                    {
                        "hymnId":65,
                        "stanzaNumber":4,
                        "stanza":" It tells of One whose loving heart\r\nCan feel my deepest woe,\r\nWho in each sorrow bears a part\r\nThat none can bear below.\r\n"
                    }
                ],
                "title":"HOW I LOVE JESUS"
            },
            {
                "hymnNumber":66,
                "stanzas":[
                    {
                        "hymnId":66,
                        "stanzaNumber":1,
                        "stanza":" There have been names that I have loved to hear,\r\nBut never has there been a name so dear\r\nTo this heart of mine, as the name divine,\r\nThe precious, precious name of Jesus.\r\nJesus is the sweetest name I know,\r\nAnd He’s just the same as His lovely name,\r\nAnd that’s the reason why I love Him so;\r\nOh, Jesus is the sweetest name I know.\r"
                    },
                    {
                        "hymnId":66,
                        "stanzaNumber":2,
                        "stanza":" There is no name in earth or Heav’n above,\r\nThat we should give such honour and such love,\r\nAs the blessed name, let us all acclaim,\r\nThat wondrous, glorious name of Jesus.\r"
                    },
                    {
                        "hymnId":66,
                        "stanzaNumber":3,
                        "stanza":" And someday I shall see Him face to face,\r\nTo thank and praise Him for His wondrous grace,\r\nWhich He gave to me, when He made me free,\r\nThe blessed Son of God named Jesus.\r\n"
                    }
                ],
                "title":"JESUS IS THE SWEETEST NAME I KNOW"
            },
            {
                "hymnNumber":67,
                "stanzas":[
                    {
                        "hymnId":67,
                        "stanzaNumber":1,
                        "stanza":" My Jesus I love Thee, I know Thou art mine;\r\nFor Thee all the follies of sin I resign;\r\nMy gracious Redeemer, my Saviour art Thou;\r\nIf ever I loved Thee, my Jesus ’tis now.\r"
                    },
                    {
                        "hymnId":67,
                        "stanzaNumber":2,
                        "stanza":" I love Thee because Thou hast first loved me,\r\nAnd purchased my pardon on Calvary’s tree;\r\nI love Thee for wearing the thorns on Thy brow;\r\nIf ever I loved Thee, my Jesus ’tis now.\r"
                    },
                    {
                        "hymnId":67,
                        "stanzaNumber":3,
                        "stanza":" I’ll love Thee in life, I will love Thee in death,\r\nAnd praise Thee as long as Thou lendest me breath;\r\nAnd say when the death-dew lies cold on my brow;\r\nIf ever I loved Thee, my Jesus, ’tis now.\r"
                    },
                    {
                        "hymnId":67,
                        "stanzaNumber":4,
                        "stanza":" In mansions of glory and endless delight,\r\nI’ll ever adore Thee in Heaven so bright;\r\nI’ll sing with the glittering crown on my brow;\r\nIf ever I loved Thee, my Jesus ’tis now.\r\n"
                    }
                ],
                "title":"MY JESUS I LOVE THEE"
            },
            {
                "hymnNumber":68,
                "stanzas":[
                    {
                        "hymnId":68,
                        "stanzaNumber":1,
                        "stanza":" Saviour, like a shepherd lead us,\r\nMuch we need Thy tender care;\r\nIn Thy pleasant pastures feed us,\r\nFor our use Thy folds prepare;\r\nBlessed Jesus, Blessed Jesus,\r\nThou hast bought us, Thine we are;\r\nBlessed Jesus, Blessed Jesus,\r\nThou hast bought us, Thine we are.\r"
                    },
                    {
                        "hymnId":68,
                        "stanzaNumber":2,
                        "stanza":" We are Thine, do Thou befriend us,\r\nBe the Guardian of our way;\r\nKeep Thy flock, from sin defend us,\r\nSeek us when we go astray;\r\nBlessed Jesus, Blessed Jesus,\r\nHear, O hear us when we pray;\r\nBlessed Jesus, Blessed Jesus,\r\nHear, O hear us when we pray.\r"
                    },
                    {
                        "hymnId":68,
                        "stanzaNumber":3,
                        "stanza":" Thou hast promised to receive us,\r\nPoor and sinful tho’ we be;\r\nThou hast mercy to relieve us,\r\nGrace to cleanse and pow’r to free;\r\nBlessed Jesus, Blessed Jesus,\r\nEarly let us turn to Thee,\r\nBlessed Jesus, Blessed Jesus,\r\nEarly let us turn to Thee.\r"
                    },
                    {
                        "hymnId":68,
                        "stanzaNumber":4,
                        "stanza":" Early let us seek Thy favour,\r\nEarly let us do Thy will;\r\nBlessed Lord and only Saviour,\r\nWith Thy love our bossoms fill:\r\nBlessed Jesus, Blessed Jesus,\r\nThou hast loved us, love us still;\r\nBlessed Jesus, Blessed Jesus,\r\nThou hast loved us, love us still.\r"
                    },
                    {
                        "hymnId":68,
                        "stanzaNumber":5,
                        "stanza":" Like a shepherd come receive us,\r\nWhen Thou comest in the air,\r\nIn Thine arms wilt Thou now take us\r\nTo that joyful union there;\r\nBlessed Jesus Blessed Jesus,\r\nIn that land beyond compare;\r\nBlessed Jesus, Blessed Jesus,\r\nIn that land beyond compare.\r\n"
                    }
                ],
                "title":"SAVIOUR, LIKE A SHEPHERD LEAD US"
            },
            {
                "hymnNumber":69,
                "stanzas":[
                    {
                        "hymnId":69,
                        "stanzaNumber":1,
                        "stanza":" Christ be beside me, Christ be before me,\r\nChrist be behind me - King of my heart;\r\nChrist be within me, Christ be below me,\r\nChrist be above me - never to part.\r"
                    },
                    {
                        "hymnId":69,
                        "stanzaNumber":2,
                        "stanza":" Christ on my right hand, Christ on my left hand,\r\nChrist all around me - shield in the strife;\r\nChrist in my sleeping, Christ in my sitting,\r\nChrist in my rising - Light of my life.\r"
                    },
                    {
                        "hymnId":69,
                        "stanzaNumber":3,
                        "stanza":" Christ be in all hearts thinking about me,\r\nChrist be on all tongues telling of me;\r\nChrist be the vision in eyes that see me,\r\nIn ears that hear me Christ ever be.\r"
                    },
                    {
                        "hymnId":69,
                        "stanzaNumber":4,
                        "stanza":" Christ be beside me, Christ be before me,\r\nChrist be behind me - King of my heart;\r\nChrist be within me, Christ be below me,\r\nChrist be above me - never to part.\r\n"
                    }
                ],
                "title":"CHRIST BE BESIDE ME"
            },
            {
                "hymnNumber":70,
                "stanzas":[
                    {
                        "hymnId":70,
                        "stanzaNumber":1,
                        "stanza":" Have you any room for Jesus,\r\nHe who bore your load of sin?\r\nAs He knocks and asks admission,\r\nSinners, will you let Him in?\r\nRoom for Jesus, King of glory,\r\nHasten now, His word obey,\r\nSwing the heart’s door widely open,\r\nBid Him enter while you may.\r"
                    },
                    {
                        "hymnId":70,
                        "stanzaNumber":2,
                        "stanza":" Room for pleasure, room for business,\r\nBut for Christ the crucified;\r\nNot a place that He can enter,\r\nIn your heart for which He died?\r"
                    },
                    {
                        "hymnId":70,
                        "stanzaNumber":3,
                        "stanza":" Have you any time for Jesus,\r\nAs in grace He calls again?\r\nO today is time accepted,\r\nTomorrow you may call in vain.\r"
                    },
                    {
                        "hymnId":70,
                        "stanzaNumber":4,
                        "stanza":" Room and time now give to Jesus,\r\nSoon will pass God’s day of grace;\r\nSoon thy heart left cold and silent,\r\nAnd thy Saviour’s pleading cease.\r\n"
                    }
                ],
                "title":"HAVE YOU ANY ROOM FOR JESUS?"
            },
            {
                "hymnNumber":71,
                "stanzas":[
                    {
                        "hymnId":71,
                        "stanzaNumber":1,
                        "stanza":" There is One loved me so that for me He died,\r\nHe’s my dear, precious Saviour so true;\r\nOn the cross for my sins He was crucified;\r\nI want to see Jesus, don’t you?\r\nI want to see Jesus, don’t you?\r\nMy Saviour so faithful and true;...\r\nWhen I reach the strand of that love-bright land,\r\nO I want to see Jesus, don’t you?...\r"
                    },
                    {
                        "hymnId":71,
                        "stanzaNumber":2,
                        "stanza":" When I’m weary and faint He is always near,\r\nWith His joy He my strength doth renew;\r\nAnd He comforts my heart, speaking words of cheer:\r\nI want to see Jesus, don’t you?\r"
                    },
                    {
                        "hymnId":71,
                        "stanzaNumber":3,
                        "stanza":" Holy angels keep watch o’er me thro’ the night,\r\nAnd each morning He guards me anew;\r\nIn the smile of His love doth my soul delight;\r\nI want to see Jesus, don’t you?\r"
                    },
                    {
                        "hymnId":71,
                        "stanzaNumber":4,
                        "stanza":" He is fairer than lily or rose to me,\r\nAnd His blessings fall soft as the dew;\r\nO my heart, how it longs His dear face to see:\r\nI want to see Jesus, don’t you?\r"
                    },
                    {
                        "hymnId":71,
                        "stanzaNumber":5,
                        "stanza":" There’s a place for my soul that He doth prepare,\r\nAnd its beauty by faith I can view;\r\nFirst of all, when I enter that mansion fair,\r\nI want to see Jesus, don’t you?\r"
                    },
                    {
                        "hymnId":71,
                        "stanzaNumber":6,
                        "stanza":" My hope is built on nothing less,\r\nThan Jesus’ blood and righteousness,\r\nI dare not trust the sweetest frame,\r\nBut wholly lean on Jesus’ name.\r\nOn Christ, the solid Rock, I stand;\r\nAll other ground is sinking sand,\r\nAll other ground is sinking sand.\r"
                    },
                    {
                        "hymnId":71,
                        "stanzaNumber":7,
                        "stanza":" When darkness seems to hide His face,\r\nI rest on His unchanging grace;\r\nIn every high and stormy gale,\r\nMy anchor holds within the vale.\r"
                    },
                    {
                        "hymnId":71,
                        "stanzaNumber":8,
                        "stanza":" His oath, His covenant, His blood,\r\nSupport me in the whelming flood;\r\nWhen all around my soul gives way,\r\nHe then is all my hope and stay.\r"
                    },
                    {
                        "hymnId":71,
                        "stanzaNumber":9,
                        "stanza":" When He shall come with trumpet sound,\r\nOh, may I then in Him be found;\r\nDressed in His righteousness alone,\r\nFaultless to stand before the throne.\r"
                    },
                    {
                        "hymnId":71,
                        "stanzaNumber":10,
                        "stanza":" Jesus only is our Message,\r\nJesus all our theme shall be,\r\nWe will lift up Jesus ever,\r\nJesus only will we see.\r\nJesus only, Jesus ever,\r\nJesus all in all we sing;\r\nSaviour, Sanctifier, Healer,\r\nBaptizer and coming King.\r"
                    },
                    {
                        "hymnId":71,
                        "stanzaNumber":11,
                        "stanza":" Jesus only is our Saviour,\r\nAll our guilt He bore away,\r\nAll our righteousness He gives us,\r\nAll our strength from day to day.\r"
                    },
                    {
                        "hymnId":71,
                        "stanzaNumber":12,
                        "stanza":" Jesus is our Sanctifier,\r\nCleansing us from self and sin,\r\nAnd with all His Spirit’s fulness,\r\nFilling all our hearts within.\r"
                    },
                    {
                        "hymnId":71,
                        "stanzaNumber":13,
                        "stanza":" Jesus only is our Healer,\r\nAll our sicknesses He bare,\r\nAnd His risen life and fulness,\r\nAll His members still may share.\r"
                    },
                    {
                        "hymnId":71,
                        "stanzaNumber":14,
                        "stanza":" Jesus only is our Power,\r\nHis the gift of Pentecost,\r\nJesus, breathe Thy Power upon us,\r\nFill us with the Holy Ghost.\r"
                    },
                    {
                        "hymnId":71,
                        "stanzaNumber":15,
                        "stanza":" And for Jesus we are waiting\r\nListening for the trumpet’s sound\r\nThen it will be us and Jesus,\r\nLiving ever with our God.\r\n"
                    }
                ],
                "title":"WANT TO SEE JESUS, DON’T YOU?"
            },
            {
                "hymnNumber":72,
                "stanzas":[
                    {
                        "hymnId":72,
                        "stanzaNumber":1,
                        "stanza":" There came from the skies in the days long ago\r\nThe Lord with a message of love;\r\nThe world knew Him not; He was treated with scorn -\r\nThis wonderful gift from above.\r\nThey crowned Him with thorns,\r\nHe was beaten with stripes;\r\nHe was smitten and nailed to the tree,\r\nBut the pain in His heart was the hardest to bear,\r\nThe heart that was broken for me...\r"
                    },
                    {
                        "hymnId":72,
                        "stanzaNumber":2,
                        "stanza":" He came to His own - to the ones that He loved;\r\nThe sheep that had wandered astray;\r\nThey heard not His voice, but the Friend of mankind\r\nWas hated and driven away.\r"
                    },
                    {
                        "hymnId":72,
                        "stanzaNumber":3,
                        "stanza":" The birds have their nests, and the foxes have holes,\r\nBut He had no place for His head;\r\nA pallet of stone on the cold mountain side\r\nWas all that He had for His bed.\r"
                    },
                    {
                        "hymnId":72,
                        "stanzaNumber":4,
                        "stanza":" I cannot reject such a Saviour as He;\r\nDishonour and wound Him again;\r\nI’ll go to His feet and repent of my sin,\r\nBe willing to suffer the pain.\r\nI’ll take up my cross, I will walk by His side,\r\nFor the pathway of duty I see,\r\nI will follow my Lord and abide in His heart,\r\nThe heart that was broken for me...\r\n"
                    }
                ],
                "title":"THE SOLID ROCK"
            },
            {
                "hymnNumber":74,
                "stanzas":[
                    {
                        "hymnId":74,
                        "stanzaNumber":1,
                        "stanza":" In times like these, you need a Saviour,\r\nIn times like these, you need an anchor;\r\nBe very sure, Be very sure,\r\nYour anchor holds, and grips the Solid Rock!\r\nThis Rock is Jesus, Yes He’s the One,\r\nThis Rock is Jesus, the only One;\r\nBe very sure, be very sure,\r\nYour anchor holds, and grips the Solid Rock!\r"
                    },
                    {
                        "hymnId":74,
                        "stanzaNumber":2,
                        "stanza":" In times like these, you need the Bible,\r\nIn times like these, O, be not idle;\r\nBe very sure, be very sure,\r\nYour anchor holds and grips the Solid Rock!\r"
                    },
                    {
                        "hymnId":74,
                        "stanzaNumber":3,
                        "stanza":" In times like these, I have a Saviour,\r\nIn times like these, I have an anchor;\r\nI’m very sure, I’m very sure,\r\nMy anchor holds, and grips the Solid Rock!\r\nThis Rock is Jesus, Yes, He’s the One,\r\nThis Rock is Jesus, the Only One,\r\nI’m very sure, I’m very sure,\r\nMy anchor holds, and grips the Solid Rock!\r\nCommitment & Consecration\r\n"
                    }
                ],
                "title":"THE HEART THAT WAS BROKEN FOR ME"
            },
            {
                "hymnNumber":75,
                "stanzas":[
                    {
                        "hymnId":75,
                        "stanzaNumber":1,
                        "stanza":" I have decided to follow Jesus,\r\nI have decided to follow Jesus,\r\nI have decided to follow Jesus -\r\nNo turning back, No turning back\r\nNo turning back!\r"
                    },
                    {
                        "hymnId":75,
                        "stanzaNumber":2,
                        "stanza":" Tho’ no one joins me, still I will follow,\r\nTho’ no one joins me, still I will follow,\r\nTho’ no one joins me, still I will follow -\r\nNo turning back, No turning back\r\nNo turning back!\r"
                    },
                    {
                        "hymnId":75,
                        "stanzaNumber":3,
                        "stanza":" The world behind me, the cross before me,\r\nThe world behind me, the cross before me,\r\nThe world behind me, the cross before me -\r\nNo turning back, No turning back\r\nNo turning back! \r\n"
                    }
                ],
                "title":"THE CHURCH’S ONE FOUNDATION"
            },
            {
                "hymnNumber":76,
                "stanzas":[
                    {
                        "hymnId":76,
                        "stanzaNumber":1,
                        "stanza":" Faith of our fathers! living still\r\nIn spite of dungeon, fire and sword,\r\nO how our hearts beat high with joy\r\nWhene’er we hear that glorious word!\r\nFaith of our fathers, holy faith!\r\nWe will be true to Thee till death.\r"
                    },
                    {
                        "hymnId":76,
                        "stanzaNumber":2,
                        "stanza":" Faith of our fathers! we will strive\r\nTo win all nations unto Thee,\r\nAnd through the truth that comes from God\r\nMankind shall then be truly free;\r\nFaith of our fathers, holy faith!\r\nWe will be true to Thee till death.\r"
                    },
                    {
                        "hymnId":76,
                        "stanzaNumber":3,
                        "stanza":" Faith of our fathers! we will love\r\nBoth friend and foe in all our strife,\r\nAnd preach Thee, too, as love knows how\r\nBy kindly words and virtuous life;\r\nFaith of our fathers, holy faith!\r\nWe will be true to Thee till death.\r\n"
                    }
                ],
                "title":"IN TIMES LIKE THESE"
            },
            {
                "hymnNumber":77,
                "stanzas":[
                    {
                        "hymnId":77,
                        "stanzaNumber":1,
                        "stanza":" I must needs go home by the way of the cross,\r\nThere’s no other way but this;\r\nI shall ne’er get sight of the Gates of Light\r\nIf the way of the cross I miss.\r\nThe way of the cross leads home, leads home,\r\nThe way of the cross leads home, leads home;\r\nIt is sweet to know, as I onward go,\r\nThe way of the cross leads home.\r"
                    },
                    {
                        "hymnId":77,
                        "stanzaNumber":2,
                        "stanza":" I must needs go on in the blood-sprinkled way,\r\nThe path that the Saviour trod;\r\nIf I ever climb to the heights sublime,\r\nWhere the soul is at home with God.\r"
                    },
                    {
                        "hymnId":77,
                        "stanzaNumber":3,
                        "stanza":" Then I bid farewell to the way of the world,\r\nTo walk in it never more;\r\nFor my Lord says “Come”, and I seek my home,\r\nWhere He waits at the open door.\r\n"
                    }
                ],
                "title":"HAVE DECIDED TO FOLLOW JESUS"
            },
            {
                "hymnNumber":78,
                "stanzas":[
                    {
                        "hymnId":78,
                        "stanzaNumber":1,
                        "stanza":" Alas, and did my Saviour bleed?\r\nAnd did my Sovereign die?\r\nWould He devote that sacred head\r\nFor such a worm as I?\r\nAt the cross, at the cross where I first saw the light,\r\nAnd the burden of my heart rolled away rolled away,\r\nIt was there by faith I received my sight,\r\nAnd now I am happy all the day!\r"
                    },
                    {
                        "hymnId":78,
                        "stanzaNumber":2,
                        "stanza":" Was it for crimes that I have done,\r\nHe groaned upon the tree?\r\nAmazing pity! grace unknown!\r\nAnd love beyond degree!\r"
                    },
                    {
                        "hymnId":78,
                        "stanzaNumber":3,
                        "stanza":" Well might the sun in darkness hide,\r\nAnd shut his glories in,\r\nWhen Christ, the mighty Maker, died\r\nFor man the creature’s sin.\r"
                    },
                    {
                        "hymnId":78,
                        "stanzaNumber":4,
                        "stanza":" But drops of grief can ne’er repay\r\nThe debt of love I owe:\r\nHere, Lord, I gave myself away,\r\n’Tis all that I can do!\r\n"
                    }
                ],
                "title":"FAITH OF OUR FATHERS"
            },
            {
                "hymnNumber":79,
                "stanzas":[
                    {
                        "hymnId":79,
                        "stanzaNumber":1,
                        "stanza":" King of my life, I crown Thee now,\r\nThine shall the glory be;\r\nLest I forget Thy thorn-crowned brow,\r\nLead me to Calvary.\r\nLest I forget Gethsemane;\r\nLest I forget Thine agony;\r\nLest I forget Thy love for me,\r\nLead me to Calvary.\r"
                    },
                    {
                        "hymnId":79,
                        "stanzaNumber":2,
                        "stanza":" Show me the tomb where Thou wast laid,\r\nTenderly mourned and wept;\r\nAngels in robes of light arrayed\r\nGuarded Thee whilst Thou slept.\r"
                    },
                    {
                        "hymnId":79,
                        "stanzaNumber":3,
                        "stanza":" Let me like Mary, thro’ the gloom,\r\nCome with a gift to Thee;\r\nShow to me now the empty tomb,\r\nLead me to Calvary.\r"
                    },
                    {
                        "hymnId":79,
                        "stanzaNumber":4,
                        "stanza":" May I be willing, Lord, to bear\r\nDaily my cross for Thee;\r\nEven Thy cup of grief to share,\r\nThou hast borne all for me.\r\n"
                    }
                ],
                "title":"THE WAY OF THE CROSS LEADS HOME"
            },
            {
                "hymnNumber":80,
                "stanzas":[
                    {
                        "hymnId":80,
                        "stanzaNumber":1,
                        "stanza":" When I survey the wondrous cross\r\nOn which the Prince of glory died,\r\nMy richest gain I count but loss,\r\nAnd pour contempt on all my pride.\r"
                    },
                    {
                        "hymnId":80,
                        "stanzaNumber":2,
                        "stanza":" Forbid it, Lord, that I should boast,\r\nSave in the death of Christ my God:\r\nAll the vain things that charm me most,\r\nI sacrifice them to His blood.\r"
                    },
                    {
                        "hymnId":80,
                        "stanzaNumber":3,
                        "stanza":" See, from His head, His hands, His feet,\r\nSorrow and love flow mingled down;\r\nDid e’er such love and sorrow meet,\r\nOr thorns compose so rich a crown?\r"
                    },
                    {
                        "hymnId":80,
                        "stanzaNumber":4,
                        "stanza":" Were the whole realm of nature mine,\r\nThat were an offering far too small;\r\nLove so amazing, so divine,\r\nDemands my soul, my life, my all.\r\n"
                    }
                ],
                "title":"AT THE CROSS"
            },
            {
                "hymnNumber":81,
                "stanzas":[
                    {
                        "hymnId":81,
                        "stanzaNumber":1,
                        "stanza":" Thy Word is a lamp to my feet,\r\nA light to my path alway;\r\nTo guide and to save me from sin,\r\nAnd show me the heavenly way.\r\nThy word have I hid in my heart,...\r\nThat I might not sin against Thee,...\r\nThat I might not sin, that I might not sin\r\nThy word have I hid in my heart.\r"
                    },
                    {
                        "hymnId":81,
                        "stanzaNumber":2,
                        "stanza":" Forever, O Lord, is Thy word\r\nEstablished and fixed on high;\r\nThy faithfulness unto all men\r\nAbideth forever nigh.\r"
                    },
                    {
                        "hymnId":81,
                        "stanzaNumber":3,
                        "stanza":" At morning, at noon and at night\r\nI ever will give Thee praise;\r\nFor Thou art my portion,O Lord,\r\nAnd shall be through all my days!\r"
                    },
                    {
                        "hymnId":81,
                        "stanzaNumber":4,
                        "stanza":" Thro’ Him whom Thy Word hath foretold,\r\nThe Saviour and Morning Star,\r\nSalvation and peace have been bro’t\r\nTo those who have strayed afar.\r\n"
                    }
                ],
                "title":"LEAD ME TO CALVARY"
            },
            {
                "hymnNumber":82,
                "stanzas":[
                    {
                        "hymnId":82,
                        "stanzaNumber":1,
                        "stanza":" Deeper, deeper, in the love of Jesus,\r\nDaily let me go;\r\nHigher, higher in the school of wisdom,\r\nMore of grace to know.\r\nO deep --- er yet I pray,---\r\nAnd high---er every day---\r\nAnd wis---er, blessed Lord,\r\nIn Thy precious, holy word.\r"
                    },
                    {
                        "hymnId":82,
                        "stanzaNumber":2,
                        "stanza":" Deeper, deeper! blessed Holy Spirit,\r\nTake me deeper still,\r\nCommitment & Consecration\r\nTill my life is wholly lost in Jesus\r\nAnd His perfect will.\r"
                    },
                    {
                        "hymnId":82,
                        "stanzaNumber":3,
                        "stanza":" Deeper, deeper! though it cost hard trials,\r\nDeeper let me go!\r\nRooted in the holy love of Jesus,\r\nLet me fruitful grow.\r"
                    },
                    {
                        "hymnId":82,
                        "stanzaNumber":4,
                        "stanza":" Deeper, higher every day in Jesus,\r\nTill all conflict past,\r\nFinds me conqu’ror, and in His own image\r\nPerfected at last .\r\n"
                    }
                ],
                "title":"WHEN I SURVEY THE WONDROUS CROSS"
            },
            {
                "hymnNumber":83,
                "stanzas":[
                    {
                        "hymnId":83,
                        "stanzaNumber":1,
                        "stanza":" Give of your best to the Master;\r\nGive of the strength of your youth;\r\nThrow your soul’s fresh, glowing ardor\r\nInto the battle for truth .\r\nJesus has set the example;\r\nDauntless was He, young and brave;\r\nGive Him your loyal devotion,\r\nGive Him the best that you have.\r\nGive of your best to the Master:\r\nGive of the strength of your youth;\r\nClad in salvation’s full armour,\r\nJoin in the battle for truth.\r"
                    },
                    {
                        "hymnId":83,
                        "stanzaNumber":2,
                        "stanza":" Give of your best to the Master;\r\nGive Him first place in your heart;\r\nGive Him first place in your service,\r\nConsecrate ev’ry part.\r\nGive, and to you shall be given\r\nGod His beloved Son gave;\r\nGratefully seeking to serve Him,\r\nGive Him the best that you have.\r"
                    },
                    {
                        "hymnId":83,
                        "stanzaNumber":3,
                        "stanza":" Give of your best to the Master;\r\nNaught else is worthy His love;\r\nHe gave Himself for your ransom,\r\nGave up His glory above:\r\nLaid down His life without murmur,\r\nYou from sin’s ruin to save;\r\nGive Him your heart’s adoration,\r\nGive Him the best that you have.\r\n"
                    }
                ],
                "title":"THY WORD HAVE I HID IN MY HEART"
            },
            {
                "hymnNumber":84,
                "stanzas":[
                    {
                        "hymnId":84,
                        "stanzaNumber":1,
                        "stanza":" Nothing between, Lord, nothing between;\r\nLet me Thy glory see,\r\nDraw my soul close to Thee;\r\nThen speak in love to me -\r\nNothing between, Nothing between.\r"
                    },
                    {
                        "hymnId":84,
                        "stanzaNumber":2,
                        "stanza":" Nothing between, Lord, nothing between;\r\nLet not earth’s din and noise\r\nStifle Thy still small voice;\r\nIn it let me rejoice -\r\nNothing between, Nothing between.\r"
                    },
                    {
                        "hymnId":84,
                        "stanzaNumber":3,
                        "stanza":" Nothing between, Lord, nothing between;\r\nNothing of earthly care,\r\nNothing of tear or prayer,\r\nNo robe that self may wear -\r\nNothing between, Nothing between.\r"
                    },
                    {
                        "hymnId":84,
                        "stanzaNumber":4,
                        "stanza":" Nothing between, Lord, nothing between;\r\nUnbelief disappear,\r\nVanish each doubt and fear,\r\nFading when Thou art near -\r\nNothing between, Nothing between.\r"
                    },
                    {
                        "hymnId":84,
                        "stanzaNumber":5,
                        "stanza":" Nothing between, Lord, nothing between;\r\nTill Thine eternal light,\r\nRising on earth’s dark night,\r\nBursts on my open sight -\r\nNothing between, Nothing between.\r\n"
                    }
                ],
                "title":"DEEPER, DEEPER IN THE LOVE OF JESUS"
            },
            {
                "hymnNumber":85,
                "stanzas":[
                    {
                        "hymnId":85,
                        "stanzaNumber":1,
                        "stanza":" Take my life, and let it be\r\nConsecrated, Lord, to Thee;\r\nTake my moments and my days,\r\nLet them flow in ceaseless praise.\r"
                    },
                    {
                        "hymnId":85,
                        "stanzaNumber":2,
                        "stanza":" Take my hands, and let them move\r\nAt the impulse of Thy love;\r\nTake my feet, and let them be\r\nSwift and beautiful for Thee.\r"
                    },
                    {
                        "hymnId":85,
                        "stanzaNumber":3,
                        "stanza":" Take my voice and let me sing\r\nAlways, only, for my King;\r\nTake my lips and let them be\r\nFilled with messages from Thee.\r"
                    },
                    {
                        "hymnId":85,
                        "stanzaNumber":4,
                        "stanza":" Take my silver and my gold;\r\nNot a mite would I withhold;\r\nTake my intellect, and use\r\nEvery power as Thou shalt choose.\r"
                    },
                    {
                        "hymnId":85,
                        "stanzaNumber":5,
                        "stanza":" Take my will and make it Thine,\r\nIt shall be no longer mine;\r\nTake my heart, it is Thine own;\r\nIt shall be Thy royal throne.\r"
                    },
                    {
                        "hymnId":85,
                        "stanzaNumber":6,
                        "stanza":" Take my love; my Lord, I pour\r\nAt Thy feet its treasure-store;\r\nTake myself, and I will be\r\nEver, only, all for Thee.\r\n"
                    }
                ],
                "title":"GIVE OF YOUR BEST TO THE MASTER"
            },
            {
                "hymnNumber":86,
                "stanzas":[
                    {
                        "hymnId":86,
                        "stanzaNumber":1,
                        "stanza":" “Take up thy cross and follow me,’’\r\nI heard my Master say;\r\n‘‘I gave My life to ransom thee\r\nSurrender your all today.”\r\nWherever He leads I’ll go,\r\nWherever He leads I’ll go,\r\nI’ll follow my Christ who loves me so,\r\nWherever He leads I’ll go.\r"
                    },
                    {
                        "hymnId":86,
                        "stanzaNumber":2,
                        "stanza":" He drew me closer to His side,\r\nI sought His will to know,\r\nAnd in that will I now abide,\r\nWherever He leads I’ll go.\r"
                    },
                    {
                        "hymnId":86,
                        "stanzaNumber":3,
                        "stanza":" It may be thro’ the shadows dim,\r\nOr o’er the stormy sea,\r\nI take my cross and follow Him,\r\nWherever He leadeth me.\r"
                    },
                    {
                        "hymnId":86,
                        "stanzaNumber":4,
                        "stanza":" My heart, my life, my all I bring\r\nTo Christ who loves me so;\r\nHe is my Master, Lord, and King,\r\nWherever He leads I’ll go.\r\n"
                    }
                ],
                "title":"NOTHING BETWEEN"
            },
            {
                "hymnNumber":87,
                "stanzas":[
                    {
                        "hymnId":87,
                        "stanzaNumber":1,
                        "stanza":" O Jesus, I have promised\r\nTo serve Thee to the end;\r\nBe Thou for ever near me,\r\nMy Master and my Friend:\r\nI shall not fear the battle\r\nIf Thou art by my side,\r\nNor wander from the pathway\r\nIf Thou wilt be my Guide.\r"
                    },
                    {
                        "hymnId":87,
                        "stanzaNumber":2,
                        "stanza":" O let me feel Thee near me;\r\nThe world is ever near;\r\nI see the sights that dazzle,\r\nThe tempting sounds I hear;\r\nMy foes are ever near me,\r\nAround me and within;\r\nBut, Jesus, draw Thou nearer,\r\nAnd shield my soul from sin.\r"
                    },
                    {
                        "hymnId":87,
                        "stanzaNumber":3,
                        "stanza":" O let me hear Thee speaking\r\nIn accents clear and still,\r\nAbove the storms of passion,\r\nThe murmurs of self-will;\r\nO speak to reassure me,\r\nTo hasten or control;\r\nO speak and make me listen,\r\nThou Guardian of my soul.\r"
                    },
                    {
                        "hymnId":87,
                        "stanzaNumber":4,
                        "stanza":" O Jesus, Thou hast promised\r\nTo all who follow Thee,\r\nThat where Thou art in glory\r\nThere shall Thy servant be;\r\nAnd, Jesus, I have promised\r\nTo serve Thee to the end;\r\nO give me grace to follow\r\nMy Master and my Friend.\r\n"
                    }
                ],
                "title":"TAKE MY LIFE"
            },
            {
                "hymnNumber":88,
                "stanzas":[
                    {
                        "hymnId":88,
                        "stanzaNumber":1,
                        "stanza":" O Love that wilt not me go,\r\nI rest my weary soul in Thee:\r\nI give Thee back the life I owe,\r\nThat in Thine ocean depths its flow\r\nMay richer, fuller be.\r"
                    },
                    {
                        "hymnId":88,
                        "stanzaNumber":2,
                        "stanza":" O Light that follow’st all my way,\r\nI yield my flick’ring torch to Thee:\r\nMy heart restores its borrow’d ray,\r\nThat in Thy sunshine’s blaze its day\r\nMay brighter, fairer be.\r"
                    },
                    {
                        "hymnId":88,
                        "stanzaNumber":3,
                        "stanza":" O Joy that seekest me through pain,\r\nI cannot close my heart to Thee:\r\nI trace the rainbow through the rain,\r\nAnd feel the promise is not vain,\r\nThat morn shall tearless be.\r"
                    },
                    {
                        "hymnId":88,
                        "stanzaNumber":4,
                        "stanza":" O Cross that liftest up my head,\r\nI dare not ask to fly from Thee;\r\nI lay in dust life’s glory dead,\r\nAnd from the ground there blossoms red\r\nLife that shall endless be.\r\n"
                    }
                ],
                "title":"WHEREVER HE LEADS I’LL GO"
            },
            {
                "hymnNumber":89,
                "stanzas":[
                    {
                        "hymnId":89,
                        "stanzaNumber":1,
                        "stanza":" I can hear my Saviour calling,\r\nI can hear my Saviour calling,\r\nI can hear my Saviour calling,\r\n“Take thy cross and follow, follow Me.”\r\nWhere He leads me I will follow,\r\nWhere He leads me I will follow,\r\nWhere He leads me I will follow,\r\nI’ll go with Him, with Him all the way.\r"
                    },
                    {
                        "hymnId":89,
                        "stanzaNumber":2,
                        "stanza":" I’ll go with Him through the garden,\r\nI’ll go with Him through the garden,\r\nI’ll go with Him through the garden,\r\nI’ll go with Him, with Him all the way.\r"
                    },
                    {
                        "hymnId":89,
                        "stanzaNumber":3,
                        "stanza":" I’ll go with Him through the Judgment,\r\nI’ll go with Him through the Judgment,\r\nI’ll go with Him through the Judgment,\r\nI’ll go with Him, with Him all the way.\r"
                    },
                    {
                        "hymnId":89,
                        "stanzaNumber":4,
                        "stanza":" He will give me grace and glory,\r\nHe will give me grace and glory,\r\nHe will give me grace and glory,\r\nAnd go with me, with me all the way.\r\n"
                    }
                ],
                "title":"JESUS, I HAVE PROMISED"
            },
            {
                "hymnNumber":90,
                "stanzas":[
                    {
                        "hymnId":90,
                        "stanzaNumber":1,
                        "stanza":" All to Jesus I surrender,\r\nAll to Him I freely give;\r\nI will ever love and trust Him,\r\nIn His presence daily live.\r\nI surrender all, I surrender all;\r\nAll to Thee, my blessed Saviour,\r\nI surrender all.\r"
                    },
                    {
                        "hymnId":90,
                        "stanzaNumber":2,
                        "stanza":" All to Jesus I surrender,\r\nHumbly at His feet I bow;\r\nWorldly pleasures all forsaken,\r\nTake me, Jesus, Take me now.\r"
                    },
                    {
                        "hymnId":90,
                        "stanzaNumber":3,
                        "stanza":" All to Jesus I surrender,\r\nLord, I give myself to Thee;\r\nFill me with Thy love and power,\r\nLet Thy blessing fall on me.\r"
                    },
                    {
                        "hymnId":90,
                        "stanzaNumber":4,
                        "stanza":" All to Jesus I surrender,\r\nNow I feel the sacred flame;\r\nO the joy of full salvation!\r\nGlory, glory to His Name!\r\n"
                    }
                ],
                "title":"LOVE THAT WILT NOT LET ME GO"
            },
            {
                "hymnNumber":91,
                "stanzas":[
                    {
                        "hymnId":91,
                        "stanzaNumber":1,
                        "stanza":" More love to Thee, O Christ,\r\nMore love to Thee!\r\nHear Thou the prayer I make\r\nOn bended knee;\r\nThis is my earnest plea:\r\nMore love, O Christ, to Thee,\r\nMore love to Thee,\r\nMore love to Thee!\r"
                    },
                    {
                        "hymnId":91,
                        "stanzaNumber":2,
                        "stanza":" Once earthly joy I craved,\r\nSought peace and rest;\r\nNow Thee alone I seek,\r\nGive what is best;\r\nThis all my prayer shall be;\r\nMore love, O Christ, to Thee,\r\nMore love to Thee,\r\nMore love to Thee!\r"
                    },
                    {
                        "hymnId":91,
                        "stanzaNumber":3,
                        "stanza":" Then shall my latest breath\r\nWhisper Thy praise;\r\nThis be the parting cry\r\nMy heart shall raise;\r\nThis still its prayer shall be:\r\nMore love, O Christ, to Thee,\r\nMore love to Thee,\r\nMore love to Thee!\r\n"
                    }
                ],
                "title":"WHERE HE LEADS ME"
            },
            {
                "hymnNumber":92,
                "stanzas":[
                    {
                        "hymnId":92,
                        "stanzaNumber":1,
                        "stanza":" I am Thine, O Lord, I have heard Thy voice,\r\nAnd it told Thy love to me;\r\nBut I long to rise in the arms of faith,\r\nAnd be closer drawn to Thee.\r\nDraw me nearer, nearer blessed Lord,\r\nTo the cross where Thou hast died;\r\nDraw me nearer, nearer, nearer, blessed Lord,\r\nTo Thy precious, bleeding side.\r"
                    },
                    {
                        "hymnId":92,
                        "stanzaNumber":2,
                        "stanza":" Consecrate me now to Thy service, Lord,\r\nBy the pow’r of grace divine;\r\nLet my soul look up with a steadfast hope,\r\nAnd my will be lost in Thine.\r"
                    },
                    {
                        "hymnId":92,
                        "stanzaNumber":3,
                        "stanza":" Oh, the pure delight of a single hour,\r\nThat before Thy throne I spend,\r\nWhen I kneel in prayer, and with Thee my God,\r\nI commune as friend with friend!\r"
                    },
                    {
                        "hymnId":92,
                        "stanzaNumber":4,
                        "stanza":" There are depths of love that I cannot know\r\nTill I cross the narrow sea;\r\nThere are heights of joy that I may not reach\r\nTill I rest in peace with Thee.\r\n"
                    }
                ],
                "title":"SURRENDER ALL"
            },
            {
                "hymnNumber":93,
                "stanzas":[
                    {
                        "hymnId":93,
                        "stanzaNumber":1,
                        "stanza":" Come, Saviour, Jesus, from above!\r\nAssist me with Thy heavenly grace;\r\nEmpty my heart of earthly love,\r\nAnd for Thyself prepare the place.\r"
                    },
                    {
                        "hymnId":93,
                        "stanzaNumber":2,
                        "stanza":" O let Thy sacred presence fill,\r\nAnd set my longing spirit free! \r\nWhich pants to have no other will,\r\nBut day and night to feast on Thee.\r"
                    },
                    {
                        "hymnId":93,
                        "stanzaNumber":3,
                        "stanza":" While in this region here below,\r\nNo other good will I pursue;\r\nI’ll bid this world of noise and show,\r\nWith all its glittering snares, adieu!\r"
                    },
                    {
                        "hymnId":93,
                        "stanzaNumber":4,
                        "stanza":" That path with humble speed I’ll seek,\r\nIn which my Saviour’s footsteps shine;\r\nNor will I hear, nor will I speak,\r\nOf any other love but Thine.\r"
                    },
                    {
                        "hymnId":93,
                        "stanzaNumber":5,
                        "stanza":" Henceforth may no profane delight\r\nDivide this consecrated soul;\r\nPossess it Thou, who hast the right\r\nAs Lord and Master of the whole.\r"
                    },
                    {
                        "hymnId":93,
                        "stanzaNumber":6,
                        "stanza":" Wealth, honour, pleasure, and what else,\r\nThis short-enduring world can give,\r\nTempt as ye will, my soul repels,\r\nTo Christ alone resolved to live.\r"
                    },
                    {
                        "hymnId":93,
                        "stanzaNumber":7,
                        "stanza":" Thee I can love, and Thee alone,\r\nWith pure delight and inward bliss:\r\nTo know Thou tak’st me for Thine own,\r\nO what a happiness is this!\r"
                    },
                    {
                        "hymnId":93,
                        "stanzaNumber":8,
                        "stanza":" Nothing on earth do I desire\r\nBut Thy pure love within my breast:\r\nThis, only this, will I require,\r\nAnd freely give up all the rest.\r\n"
                    }
                ],
                "title":"MORE LOVE TO THEE"
            },
            {
                "hymnNumber":94,
                "stanzas":[
                    {
                        "hymnId":94,
                        "stanzaNumber":1,
                        "stanza":" Master, the tempest is raging!\r\nThe billows are tossing high!\r\nThe sky is o’er-shadowed with blackness,\r\nNo shelter or help is nigh:\r\n“Carest Thou not that we perish?”\r\nHow canst Thou lie asleep,\r\nWhen each moment so madly is threatening\r\nA grave in the angry deep?\r\n“The winds and the waves shall obey My will,\r\nPeace, be still!”\r\nWhether the wrath of the storm-tossed sea,\r\nOr demons, or men, or whatever it be,\r\nNo water can swallow the ship where lies\r\nThe Master of ocean and earth and skies;\r\nThey all shall sweetly obey My will;\r\nPeace be still! peace, be still !\r\nThey all shall sweetly obey My will:\r\nPeace, Peace, be still !\r"
                    },
                    {
                        "hymnId":94,
                        "stanzaNumber":2,
                        "stanza":" Master, with anguish of spirit\r\nI bow in my grief today;\r\nThe depths of my sad heart are troubled;\r\nO waken and save, I pray!\r\nTorrents of sin and of anguish\r\nSweep o’er my sinking soul !\r\nAnd I perish! I perish, dear Master;\r\nO hasten, and take control !\r"
                    },
                    {
                        "hymnId":94,
                        "stanzaNumber":3,
                        "stanza":" Master, the terror is over,\r\nThe elements sweetly rest;\r\nEarth’s sun in the calm lake is mirrored,\r\nAnd heaven’s within my breast.\r\nLinger, O blessed Redeemer,\r\nLeave me alone no more;\r\nAnd with joy I shall make the blest harbour,\r\nAnd rest on the blissful shore.\r\n"
                    }
                ],
                "title":"DRAW ME NEARER, BLESSED LORD"
            },
            {
                "hymnNumber":95,
                "stanzas":[
                    {
                        "hymnId":95,
                        "stanzaNumber":1,
                        "stanza":" Oft in danger, oft in woe,\r\nOnward, Christians, onward go;\r\nFight the fight, maintain the strife,\r\nStrengthened with the Bread of Life.\r"
                    },
                    {
                        "hymnId":95,
                        "stanzaNumber":2,
                        "stanza":" Shrink not, Christians: will ye yield?\r\nWill ye quit the painful field?\r\nWill ye flee in danger’s hour?\r\nKnow ye not your Captain’s power?\r"
                    },
                    {
                        "hymnId":95,
                        "stanzaNumber":3,
                        "stanza":" Let your drooping hearts be glad;\r\nMarch in heavenly armour clad:\r\nFight, nor think the battle long;\r\nSoon shall victory tune your song.\r"
                    },
                    {
                        "hymnId":95,
                        "stanzaNumber":4,
                        "stanza":" Let not sorrow dim your eye,\r\nSoon shall every tear be dry;\r\nLet not fears your course impede,\r\nGreat your strength if great your need.\r"
                    },
                    {
                        "hymnId":95,
                        "stanzaNumber":5,
                        "stanza":" Onward then to glory move,\r\nMore than conquerors ye shall prove;\r\nThough opposed by many a foe,\r\nChristian soldiers, onward go.\r\n"
                    }
                ],
                "title":"COME, SAVIOUR JESUS FROM ABOVE"
            },
            {
                "hymnNumber":96,
                "stanzas":[
                    {
                        "hymnId":96,
                        "stanzaNumber":1,
                        "stanza":" Rise, ye children of salvation,\r\nAll who cleave to Christ the Head;\r\nWake, arise! O mighty nation,\r\nEre the foe on Zion tread.\r\nPour it forth ... a mighty anthem,\r\nLike the thun ... ders of the sea; ...\r\nThro’ the blood of Christ our ransom,\r\nMore than conquerors are we,...\r\nMore than con...querors are we,...\r\nMore than con...querors are we,...\r\nThro’ the blood of Christ our ransom,\r\nMore than conquerors are we.\r"
                    },
                    {
                        "hymnId":96,
                        "stanzaNumber":2,
                        "stanza":" Saints and heroes long before us\r\nFirmly on this ground have stood;\r\nSee their banners waving o’er us\r\nConquerors through Jesus’ blood.\r"
                    },
                    {
                        "hymnId":96,
                        "stanzaNumber":3,
                        "stanza":" Deathless we are all unfearing,\r\nLife laid up with Christ in God;\r\nIn the morn of His appearing\r\nFloweth forth a glory flood.\r"
                    },
                    {
                        "hymnId":96,
                        "stanzaNumber":4,
                        "stanza":" Soon we all shall stand before Him,\r\nSee and know our glorious Lord;\r\nSoon in joy and light adore Him,\r\nEach receiving his reward.\r\n"
                    }
                ],
                "title":"PEACE! BE STILL"
            },
            {
                "hymnNumber":97,
                "stanzas":[
                    {
                        "hymnId":97,
                        "stanzaNumber":1,
                        "stanza":" There is vict’ry within my soul\r\nFor the Spirit with me abides,\r\nLet the waves of temptation roll,\r\nJesus keeps me whate’er betides.\r\nVictory, Victory, Vict’ry in my soul,\r\nI have glorious victory\r\nSince Jesus took control,\r\nVictory, Victory, sweeping like a flood,\r\nI have glorious victory thro’ Jesus’ blood.\r"
                    },
                    {
                        "hymnId":97,
                        "stanzaNumber":2,
                        "stanza":" Tho’ the conflict be fierce and long,\r\nTho’ the tempter my heart assail,\r\nIn my weakness yet I am strong,\r\nFor with Jesus I’ll e’er prevail.\r"
                    },
                    {
                        "hymnId":97,
                        "stanzaNumber":3,
                        "stanza":" I have victory over sin,\r\nI have victory o’er grave;\r\nEven death now has lost its sting,\r\nHalleluyah I know I’m saved.\r\n"
                    }
                ],
                "title":"OFT IN DANGER, OFT IN WOE"
            },
            {
                "hymnNumber":98,
                "stanzas":[
                    {
                        "hymnId":98,
                        "stanzaNumber":1,
                        "stanza":" Christ, our mighty Captain, leads against the foe;\r\nWe will never falter when He bids us go;\r\nTho’ His righteous purpose we may never know,\r\nYet we’ll follow all the way.\r\nForward! forward! ’tis the Lord’s command,\r\nForward! forward! to the promised land;\r\nForward! forward! let the chorus ring:\r\nWe are sure to win with Christ our King!\r"
                    },
                    {
                        "hymnId":98,
                        "stanzaNumber":2,
                        "stanza":" Satan’s fearful onslaughts cannot make us yield,\r\nWhile we trust in Christ, our Buckler and our Shield;\r\nPressing ever on - the Spirit’s sword we wield,\r\nAnd we follow all the way.\r"
                    },
                    {
                        "hymnId":98,
                        "stanzaNumber":3,
                        "stanza":" Let our glorious banner ever be unfurled-\r\nFrom its mighty stronghold evil shall be hurled;\r\nChrist, our mighty Captain, overcomes the world,\r\nAnd we follow all the way.\r"
                    },
                    {
                        "hymnId":98,
                        "stanzaNumber":4,
                        "stanza":" Fierce the battle rages, but ‘twill not be long,\r\nThen triumphant - shall we join the blessed throng,\r\nJoyfully uniting in the victor’s song-\r\nIf we follow all the way.\r\n"
                    }
                ],
                "title":"THE SONG OF THE SOLDIER"
            },
            {
                "hymnNumber":99,
                "stanzas":[
                    {
                        "hymnId":99,
                        "stanzaNumber":1,
                        "stanza":" He knows the bitter, weary way,\r\nThe endless striving day by day,\r\nThe souls that weep, the souls that pray;\r\nMy Father knows, my Father knows.\r"
                    },
                    {
                        "hymnId":99,
                        "stanzaNumber":2,
                        "stanza":" He knows when faint and worn we sink,\r\nHow deep the pain, how near the brink\r\nOf dark despair we pause and shrink;\r\nMy Father knows, my Father knows\r"
                    },
                    {
                        "hymnId":99,
                        "stanzaNumber":3,
                        "stanza":" He knows how hard the fight has been,\r\nThe clouds that come our lives between,\r\nThe wounds the world has never seen;\r\nMy Father knows, my Father knows.\r"
                    },
                    {
                        "hymnId":99,
                        "stanzaNumber":4,
                        "stanza":" He knows! O heart, take up thy cross,\r\nAnd know earth’s treasures are but dross,\r\nAnd all will prove as gain, not loss;\r\nMy Father knows, my Father knows.\r\n"
                    }
                ],
                "title":"THERE IS VICTORY WITHIN MY SOUL"
            },
            {
                "hymnNumber":100,
                "stanzas":[
                    {
                        "hymnId":100,
                        "stanzaNumber":1,
                        "stanza":" On the Cross crucified,\r\nIn great sorrow He died;\r\nThe Giver of life was He -\r\nYet my Lord was despised and rejected of men,\r\nThis Jesus of Calvary.\r\nHe was wounded for our transgressions,\r\nHe was bruised for our iniquities;\r\nSurely He bore our sorrows,\r\nAnd by His stripes we are healed.\r"
                    },
                    {
                        "hymnId":100,
                        "stanzaNumber":2,
                        "stanza":" Price for healing was paid,\r\nAs those cruel stripes were made,\r\nWithin Pilate’s judgment hall-\r\nNow His suff’ring afford perfect healing for all,\r\nThis wonderful Healer’s mine.\r"
                    },
                    {
                        "hymnId":100,
                        "stanzaNumber":3,
                        "stanza":" Came the leper to Christ,\r\nSaying “Surely I know,\r\nThat Thou, Lord, canst make me whole.”-\r\nWhen his great faith was seen Jesus said, “Yes, I will.”\r\nAnd touched him and made him clean.\r"
                    },
                    {
                        "hymnId":100,
                        "stanzaNumber":4,
                        "stanza":" He has healed my sick soul,\r\nMade me ev’ry whit whole,\r\nAnd He’ll do the same to you -\r\nHe’s the same yesterday and today and for ever,\r\nThis Healer of men today.\r\n"
                    }
                ],
                "title":"CHRIST, OUR MIGHTY CAPTAIN"
            },
            {
                "hymnNumber":101,
                "stanzas":[
                    {
                        "hymnId":101,
                        "stanzaNumber":1,
                        "stanza":" He healed them all --- the blind, the lame, the palsied,\r\nThe sick in body and the weak in mind,\r\nWhoever came, no matter how afflicted,\r\nWere sure a sovereign remedy to find.\r"
                    },
                    {
                        "hymnId":101,
                        "stanzaNumber":2,
                        "stanza":" His word gave health, His touch restored the vigour,\r\nTo every weary pain-exhausted frame;\r\nDivine Healing\r\nAnd all He asked before He gave the blessing\r\nWas simple faith in Him from those who came.\r"
                    },
                    {
                        "hymnId":101,
                        "stanzaNumber":3,
                        "stanza":" And is our Lord, the kind, the good, the tender,\r\nLess loving now than in those days of old?\r\nOr is it that our faith is growing feeble,\r\nAnd Christian energy is waxing cold?\r"
                    },
                    {
                        "hymnId":101,
                        "stanzaNumber":4,
                        "stanza":" Why do we not with equal expectation,\r\nNow bring our sick ones to the Lord in prayer\r\nRight through the throng of unbelieving scruples\r\nUp to His very side and leave them there?\r"
                    },
                    {
                        "hymnId":101,
                        "stanzaNumber":5,
                        "stanza":" He never health refused in bygone ages,\r\nNor feared to take the “chastisement” away;\r\nThen why not ask it now, instead of praying\r\nFor “patience” to endure from day to day?\r\n"
                    }
                ],
                "title":"MY FATHER KNOWS"
            },
            {
                "hymnNumber":102,
                "stanzas":[
                    {
                        "hymnId":102,
                        "stanzaNumber":1,
                        "stanza":" Are you trusting the love of the Saviour divine,\r\nDoes His smile make the darkest day bright?\r\nAre you laying on Him all the burdens that fret,\r\nDoes the cross that He gave you seem light? . . .\r\nTell somebody, tell somebody\r\nAll of the wonderful love you know;\r\nTell somebody, tell somebody,\r\nChrist and His goodness show.\r"
                    },
                    {
                        "hymnId":102,
                        "stanzaNumber":2,
                        "stanza":" Are you resting today ’neath the sheltering Rock,\r\nHave you given your Lord full control?\r\nAre you glad in the love that redeemed you from sin,\r\nHas He spoken His peace to your soul? . . .\r"
                    },
                    {
                        "hymnId":102,
                        "stanzaNumber":3,
                        "stanza":" Is there victory now where there once was defeat,\r\nBlessed triumph thro’ Jesus alone?\r\nTell somebody today of a Master and Friend,\r\nAnd His wonderful mercy make known...\r\n"
                    }
                ],
                "title":"THE HEALER"
            },
            {
                "hymnNumber":103,
                "stanzas":[
                    {
                        "hymnId":103,
                        "stanzaNumber":1,
                        "stanza":" I’ll tell the world that I’m a Christian -\r\nI’m not ashamed His name to bear;\r\nI’ll tell the world that I’m a Christian\r\nI’ll take Him with me anywhere.\r\nI’ll tell the world how Jesus saved me,\r\nAnd how He gave me a life brand-new;\r\nAnd I know that if you trust Him\r\nThat all He gave me He’ll give to you,\r\nI’ll tell the world that He’s my Saviour,\r\nNo other one could love me so;\r\nMy life, my all is His forever,\r\nAnd where He leads me I will go.\r"
                    },
                    {
                        "hymnId":103,
                        "stanzaNumber":2,
                        "stanza":" I’ll tell the world that He is coming -\r\nIt may be near or far away;\r\nBut we must live as if His coming\r\nWould be tomorrow or today.\r\nFor when He comes and life is over,\r\nFor those who love Him there’s more to be;\r\nEyes have never seen the wonders\r\nThat He’s preparing for you and me.\r\nO tell the world that you’re a Christian,\r\nBe not ashamed His name to bear;\r\nO tell the world that you’re a Christian,\r\nAnd take Him with you ev’ry where.\r\n"
                    }
                ],
                "title":"HE HEALED THEM ALL"
            },
            {
                "hymnNumber":104,
                "stanzas":[
                    {
                        "hymnId":104,
                        "stanzaNumber":1,
                        "stanza":" Tell the whole wide world of Jesus,\r\nBear the news from shore to shore;\r\nTelling sinners of the Saviour,\r\nLet the light spread more and more.\r\nTell the world, the whole wide world;\r\nBear the news from shore to shore;\r\nTell the whole wide world of Jesus,\r\nPraise His name for ever more !\r"
                    },
                    {
                        "hymnId":104,
                        "stanzaNumber":2,
                        "stanza":" Send abroad the gospel heralds,\r\nLet them take the blessed light\r\nInto every land of darkness,\r\nPiercing through the shades of night.\r"
                    },
                    {
                        "hymnId":104,
                        "stanzaNumber":3,
                        "stanza":" Yes, we’ll send the joyful message\r\nOver mountain, over wave,\r\nTelling everywhere of Jesus,\r\nAnd His mighty power to save.\r"
                    },
                    {
                        "hymnId":104,
                        "stanzaNumber":4,
                        "stanza":" While we pray for other nations,\r\nSend them help with willing hand,\r\nLet us not forget the home fields -\r\nJesus for our native land!\r\n"
                    }
                ],
                "title":"TELL SOMEBODY"
            },
            {
                "hymnNumber":105,
                "stanzas":[
                    {
                        "hymnId":105,
                        "stanzaNumber":1,
                        "stanza":" Send the gospel of salvation,\r\nTo a world of dying men;\r\nTell it out to ev’ry nation,\r\n’Till the Lord shall come again.\r\nGo and tell them, go and tell them,\r\nJesus died for sinful men.\r\nGo and tell them, go and tell them,\r\nHe is coming, He is coming,\r\nHe is coming back again.\r"
                    },
                    {
                        "hymnId":105,
                        "stanzaNumber":2,
                        "stanza":" ’Tis the church’s great commission,\r\n’Tis the Master’s last command;\r\nChrist has died for every creature,\r\nTell it out in every land.\r"
                    },
                    {
                        "hymnId":105,
                        "stanzaNumber":3,
                        "stanza":" Christ is gathering out a people,\r\nTo His name from every race;\r\nHaste to give the invitation\r\nEre shall end the day of grace.\r"
                    },
                    {
                        "hymnId":105,
                        "stanzaNumber":4,
                        "stanza":" Give the gospel as a witness,\r\nTo a world of sinful men;\r\nTill the Bride shall be completed,\r\nAnd the Lord shall come again.\r\n"
                    }
                ],
                "title":"LL TELL THE WORLD"
            },
            {
                "hymnNumber":106,
                "stanzas":[
                    {
                        "hymnId":106,
                        "stanzaNumber":1,
                        "stanza":" “Must I go, and empty-handed,”\r\nThus my dear Redeemer meet?\r\nNot one day of service give Him,\r\nLay no trophy at His feet?\r\n“Must I go, and empty-handed?”\r\nMust I meet my Saviour so?\r\nNot one soul with which to greet Him:\r\nMust I empty-handed go?\r"
                    },
                    {
                        "hymnId":106,
                        "stanzaNumber":2,
                        "stanza":" Not at death I shrink nor falter,\r\nFor my Saviour saves me now;\r\nBut to meet Him empty-handed,\r\nThought of that now clouds my brow.\r"
                    },
                    {
                        "hymnId":106,
                        "stanzaNumber":3,
                        "stanza":" O the years in sinning wasted,\r\nCould I but recall them now,\r\nI would give them to my Saviour,\r\nTo His will I’d gladly bow.\r"
                    },
                    {
                        "hymnId":106,
                        "stanzaNumber":4,
                        "stanza":" O ye saints, arouse, be earnest,\r\nUp and work while yet ’tis day;\r\nEre the night of death o’er take thee,\r\nStrive for souls while still you may.\r\n"
                    }
                ],
                "title":"TELL THE WHOLE WIDE WORLD"
            },
            {
                "hymnNumber":107,
                "stanzas":[
                    {
                        "hymnId":107,
                        "stanzaNumber":1,
                        "stanza":" To the work! to the work! we are servants of God,\r\nLet us follow the path that our Master has trod;\r\nWith the balm of His counsel our strength to renew,\r\nLet us do with our might what our hands find to do.\r\nToiling on, toiling on, toiling on, toiling on;\r\nLet us hope, Let us watch,\r\nAnd labour till the Master comes.\r"
                    },
                    {
                        "hymnId":107,
                        "stanzaNumber":2,
                        "stanza":" To the work! to the work! let the hungry be fed,\r\nTo the fountain of life let the weary be led!\r\nIn the cross and its banner our glory shall be,\r\nWhile we herald the tidings, “Salvation is free”!\r"
                    },
                    {
                        "hymnId":107,
                        "stanzaNumber":3,
                        "stanza":" To the work! to the work! there is labour for all,\r\nFor the kingdom of darkness and error shall fall:\r\nAnd the name of Jehovah exalted shall be,\r\nIn the loud-swelling chorus, “Salvation is free”!\r"
                    },
                    {
                        "hymnId":107,
                        "stanzaNumber":4,
                        "stanza":" To the work! to the work! in the strength of the Lord,\r\nAnd a robe and a crown shall our labour reward,\r\nWhen the home of the faithful our dwelling shall be,\r\nAnd we shout with the ransomed, “Salvation is free!”\r\n"
                    }
                ],
                "title":"GO AND TELL THEM"
            },
            {
                "hymnNumber":108,
                "stanzas":[
                    {
                        "hymnId":108,
                        "stanzaNumber":1,
                        "stanza":" I’ll tell to all that God is love;\r\nFor the world has never known\r\nThe great compassion of His heart\r\nFor the wayward and the lone.\r\nTill the whole world knows,\r\nTill the whole world knows,\r\nI will shout and sing\r\nOf Christ my King,\r\nTill the whole world knows.\r"
                    },
                    {
                        "hymnId":108,
                        "stanzaNumber":2,
                        "stanza":" I’ll tell of mercy’s boundless tide,\r\nLike the waters of the sea,\r\nThat covers ev’ry sin of man;\r\n’Tis salvation full and free.\r"
                    },
                    {
                        "hymnId":108,
                        "stanzaNumber":3,
                        "stanza":" I’ll tell of grace that keeps the soul,\r\nOf abiding peace within,\r\nOf faith that overcomes the world,\r\nWith its tumult and its din.\r"
                    },
                    {
                        "hymnId":108,
                        "stanzaNumber":4,
                        "stanza":" Eternal glory is the goal\r\nThat awaits the sons of light;\r\nEternal darkness, black as death,\r\nFor the children of the night.\r\n"
                    }
                ],
                "title":"MUST I GO AND EMPTY-HANDED?"
            },
            {
                "hymnNumber":109,
                "stanzas":[
                    {
                        "hymnId":109,
                        "stanzaNumber":1,
                        "stanza":" Rescue the perishing, Care for the dying,\r\nSnatch them in pity from sin and the grave;\r\nWeep o’er the erring one, Lift up the fallen,\r\nTell them of Jesus, the Mighty to save.\r\nRescue the perishing,\r\nCare for the dying;\r\nJesus is merciful,\r\nJesus will save.\r"
                    },
                    {
                        "hymnId":109,
                        "stanzaNumber":2,
                        "stanza":" Though they are slighting Him, Still He is waiting,\r\nWaiting the penitent child to receive.\r\nPlead with them earnestly, plead with them gently,\r\nHe will forgive if they only believe.\r"
                    },
                    {
                        "hymnId":109,
                        "stanzaNumber":3,
                        "stanza":" Down in the human heart, Crushed by the tempter,\r\nFeelings lie buried that grace can restore;\r\nTouched by a loving hand, Wakened by kindness,\r\nChords that were broken will vibrate once more.\r"
                    },
                    {
                        "hymnId":109,
                        "stanzaNumber":4,
                        "stanza":" Rescue the perishing, Duty demands it;\r\nStrength for thy labour the Lord will provide;\r\nBack to the narrow way Patiently win them;\r\nTell the poor wanderer a Saviour has died.\r\n"
                    }
                ],
                "title":"TO THE WORK"
            },
            {
                "hymnNumber":110,
                "stanzas":[
                    {
                        "hymnId":110,
                        "stanzaNumber":1,
                        "stanza":" If to Christ our only King\r\nMen redeemed we strive to bring,\r\nJust one way may this be done -\r\nWe must win them one by one.\r\nSo you bring the one next to you\r\nAnd I’ll bring the one next to me;\r\nIn all kinds of weather,\r\nEvangelism\r\nWe’ll all work together,\r\nAnd see what can be done;\r\nIf you’ll bring the one next to you,\r\nAnd I bring the one next to me,\r\nIn no time at all we’ll have them all,\r\nSo win them, win them, one by one.\r"
                    },
                    {
                        "hymnId":110,
                        "stanzaNumber":2,
                        "stanza":" Side by side we stand each day,\r\nSaved are we, but lost are they;\r\nThey will come if we but dare\r\nSpeak a word backed up by prayer.\r"
                    },
                    {
                        "hymnId":110,
                        "stanzaNumber":3,
                        "stanza":" Only cowards dare refuse,\r\nDare this gift of God mis-use;\r\nEre some friend goes to his grave,\r\nSpeak a word his soul to save.\r"
                    },
                    {
                        "hymnId":110,
                        "stanzaNumber":4,
                        "stanza":" Not for hope of great reward\r\nTurn men’s hearts unto the Lord;\r\nJust to see a saved man smile\r\nMakes the effort well worth while.\r\n"
                    }
                ],
                "title":"TILL THE WHOLE WORLD KNOWS"
            },
            {
                "hymnNumber":111,
                "stanzas":[
                    {
                        "hymnId":111,
                        "stanzaNumber":1,
                        "stanza":" Go and tell the story to thy friends to-day,\r\nHow the Lord of glory met thee on thy way;\r\nHow He cleansed thy spir-it from the stain of sin,\r\nDriving out the foes who reigned thy heart within.\r\nGo and tell the story, tell it far and wide,\r\nHow the Lord of glory for the sinner died;\r\nAnd the soul that hears it, and in faith believes,\r\nStraightway he the cleansing from the Lord receives.\r"
                    },
                    {
                        "hymnId":111,
                        "stanzaNumber":2,
                        "stanza":" Go and tell the story, of His pow’r to save,\r\nOf the sinful ‘‘legion’’ sunk beneath the wave;\r\nTell of His compassion, of His love so true,\r\nOf the wondrous things the Lord hath done for you.\r"
                    },
                    {
                        "hymnId":111,
                        "stanzaNumber":3,
                        "stanza":" Go and tell the story, how He reigns above,\r\nWinning men to glory thro’ His dying love;\r\nHow He waits to crown them kings forevermore,\r\nIn the home awaiting, on the other shore.\r\n"
                    }
                ],
                "title":"RESCUE THE PERISHING"
            },
            {
                "hymnNumber":112,
                "stanzas":[
                    {
                        "hymnId":112,
                        "stanzaNumber":1,
                        "stanza":" Do not wait until some deed of greatness\r\nyou may do,\r\nDo not wait to shed your light afar;\r\nTo the many duties ever near you now be true,\r\nBrighten the corner where you are.\r\nBrighten the corner where you are!\r\nBrighten the corner where you are !\r\nSomeone far from harbor you may guide\r\nacross the bar,\r\nBrighten the corner where you are.\r"
                    },
                    {
                        "hymnId":112,
                        "stanzaNumber":2,
                        "stanza":" Just above are clouded skies that you may\r\nhelp to clear,\r\nLet not narrow self your way debar;\r\nTho’ into one heart alone may fall your song of cheer,\r\nBrighten the corner where you are.\r"
                    },
                    {
                        "hymnId":112,
                        "stanzaNumber":3,
                        "stanza":" Here for all your talent you may surely\r\nfind a need,\r\nHere reflect the Bright and Morning Star,\r\nEven from your humble hand the bread of life may feed,\r\nBrighten the corner where you are.\r\n"
                    }
                ],
                "title":"WIN THEM ONE BY ONE"
            },
            {
                "hymnNumber":113,
                "stanzas":[
                    {
                        "hymnId":113,
                        "stanzaNumber":1,
                        "stanza":" How to reach the masses, men of every birth,\r\nFor an answer Jesus gave the key:\r\n“And I, if I be lifted up from the earth,\r\nWill draw all men unto Me.”\r\nEvangelism\r\nLift Him up, . ....Lift Him up,.....\r\nStill He speaks from eternity:\r\n“And I, if I be lifted up from the earth,\r\nWill draw all men unto Me.”\r"
                    },
                    {
                        "hymnId":113,
                        "stanzaNumber":2,
                        "stanza":" Oh! the world is hungry for the living bread,\r\nLift the Saviour up for them to see;\r\nTrust Him, and do not doubt the words that He said,\r\n“I’ll draw all men unto me.”\r"
                    },
                    {
                        "hymnId":113,
                        "stanzaNumber":3,
                        "stanza":" Don’t exalt the preacher, don’t exalt the pew,\r\nPreach the Gospel simple, full and free;\r\nProve Him and you will find that promise is true,\r\n“I’ll draw all men unto me.’’\r"
                    },
                    {
                        "hymnId":113,
                        "stanzaNumber":4,
                        "stanza":" Lift Him up by living as a Christian ought,\r\nLet the world in you the Saviour see;\r\nThen men will gladly follow Him who once taught,\r\n“I’ll draw all men unto Me.”\r\n"
                    }
                ],
                "title":"GO AND TELL THE STORY"
            },
            {
                "hymnNumber":114,
                "stanzas":[
                    {
                        "hymnId":114,
                        "stanzaNumber":1,
                        "stanza":" Carry your Bible with you,\r\nLet all its blessing outflow;\r\nIt will supply you each moment\r\nTake it wherever you go!\r\nTake it wherever you go, you go,\r\nTake it wherever you go, you go;\r\nGod’s message of love\r\nSent down from above,\r\nOh, take it wherever you go!\r"
                    },
                    {
                        "hymnId":114,
                        "stanzaNumber":2,
                        "stanza":" Carry the word of pardon,\r\nSweeter each day it will grow;\r\nSomewhere some heart will be waiting\r\nTake it wherever you go!\r"
                    },
                    {
                        "hymnId":114,
                        "stanzaNumber":3,
                        "stanza":" Carry the wondrous story,\r\nTell it to hearts plung’d in woe;\r\nThis word of gracious redemption\r\nTake it wherever you go!\r"
                    },
                    {
                        "hymnId":114,
                        "stanzaNumber":4,
                        "stanza":" Carry the word of promise,\r\nSinners unpardon’d may know\r\nGod’s path from sin unto safety\r\nTake it wherever you go!\r\n"
                    }
                ],
                "title":"BRIGHTEN THE CORNER WHERE YOU ARE"
            },
            {
                "hymnNumber":115,
                "stanzas":[
                    {
                        "hymnId":115,
                        "stanzaNumber":1,
                        "stanza":" Sing a song, spread some cheer,\r\nThere are sad and lonely people ev’rywhere;\r\nBe a friend, show some love,\r\nIt will lift them from the dungeons of despair.\r\nShow a little bit of love and kindness,\r\nNever go along with hatred’s blindness,\r\nTake a little time to reach for joy, and wear a\r\nhappy face;\r\nSing a little bit when the days are dreary,\r\nGive a little help to a friend who’s weary-\r\nThat’s the way to make the world a happy place!\r"
                    },
                    {
                        "hymnId":115,
                        "stanzaNumber":2,
                        "stanza":" Offer help, bring some hope,\r\nTo the fainting and discouraged on life’s road;\r\nSee a need, lend a hand,\r\nThere are many who are crushed beneath their load.\r"
                    },
                    {
                        "hymnId":115,
                        "stanzaNumber":3,
                        "stanza":" Be a light, show the way,\r\nBe a light within the night for those astray;\r\nSpeak a word, loving word,\r\nThat will bring them back to walk the narrow way.\r\n"
                    }
                ],
                "title":"LIFT HIM UP"
            },
            {
                "hymnNumber":116,
                "stanzas":[
                    {
                        "hymnId":116,
                        "stanzaNumber":1,
                        "stanza":" I love to tell the story of unseen things above,\r\nOf Jesus and His glory, of Jesus and His love;\r\nI love to tell the story because I know ’tis true,\r\nIt satisfies my longings as nothing else can do.\r\nI love to tell the story!\r\n’Twill be my theme in glory _\r\nTo tell the old, old story\r\nOf Jesus and His love.\r"
                    },
                    {
                        "hymnId":116,
                        "stanzaNumber":2,
                        "stanza":" I love to tell the story - ’tis pleasant to repeat\r\nWhat seems, each time I tell it, more wonderfully sweet;\r\nI love to tell the story, for some have never heard\r\nThe message of salvation from God’s own holy word.\r"
                    },
                    {
                        "hymnId":116,
                        "stanzaNumber":3,
                        "stanza":" I love to tell the story, for those who know it best\r\nSeem hungering and thirsting to hear it like the rest;\r\nAnd when in scenes of glory, I sing the new, new song,\r\n’Twill be the old, old story that I have love so long.\r\n"
                    }
                ],
                "title":"CARRY YOUR BIBLE"
            },
            {
                "hymnNumber":117,
                "stanzas":[
                    {
                        "hymnId":117,
                        "stanzaNumber":1,
                        "stanza":" Many a soul in the battle of life\r\nTrembles with fear at the din and the strife,\r\nBearing alone, amid trial and care,\r\nBurdens and sorrows God bids you to share.\r\nDo something for others,\r\nSomething for others today!...\r\nDuty demands it, and Jesus commands it!\r\nDo something for others today.\r"
                    },
                    {
                        "hymnId":117,
                        "stanzaNumber":2,
                        "stanza":" Many in doubt or in fear of the way\r\nMutely appeal for your guidance today;\r\nOn your demeanour the choice may depend-\r\nAre you concerned for the stranger or friend?\r"
                    },
                    {
                        "hymnId":117,
                        "stanzaNumber":3,
                        "stanza":" Many, disheartened by cruel deceit,\r\nBroken and worn by the pangs of defeat,\r\nDoubting, despairingly, helplessly stand,\r\nWaiting, perhaps, for your strengthening hand.\r"
                    },
                    {
                        "hymnId":117,
                        "stanzaNumber":4,
                        "stanza":" Many are turning away from the right\r\nInto the maze of the shadows of night;\r\nGo to them, speak to them, over them pray,\r\nHelp them, support them-do something today.\r\n"
                    }
                ],
                "title":"SHOW A LITTLE BIT OF LOVE AND KINDNESS"
            },
            {
                "hymnNumber":118,
                "stanzas":[
                    {
                        "hymnId":118,
                        "stanzaNumber":1,
                        "stanza":" Speak a word, a loving word for Jesus,\r\nEv’rywhere you go;\r\nTell poor sinners how He died to save them\r\nFrom eternal woe.\r\nSpeak a word for Jesus, speak it quickly,\r\nSwiftly glides the time away,...\r\nDaily tell the wondrous story of the Master’s glory,\r\nSpeak a loving word today.\r"
                    },
                    {
                        "hymnId":118,
                        "stanzaNumber":2,
                        "stanza":" Speak a word, a tender word for Jesus,\r\nTo the sin-sick soul;\r\nTell him Christ, who came to save the vilest,\r\nWaits to make him whole.\r"
                    },
                    {
                        "hymnId":118,
                        "stanzaNumber":3,
                        "stanza":" Speak a word, a warning word for Jesus,\r\nSpeak it day by day,\r\nStrive to lead some weak and wand’ring brother\r\nIn the narrow way.\r\n"
                    }
                ],
                "title":"LOVE TO TELL THE STORY"
            },
            {
                "hymnNumber":119,
                "stanzas":[
                    {
                        "hymnId":119,
                        "stanzaNumber":1,
                        "stanza":" If you’ve found Jesus the Friend that you need,\r\nIf He is loving and true,\r\nIf you have found Him a Saviour indeed,\r\nSomebody else needs Him, too...\r\nSomebody somewhere perhaps at your side;\r\nSomeone is waiting for you;...\r\nSay that for all Jesus suffered and died;\r\nThey-need Him, they need Him, too...\r"
                    },
                    {
                        "hymnId":119,
                        "stanzaNumber":2,
                        "stanza":" If you are happy, and praise fills your heart,\r\nTrust Him to carry you through;\r\nIf He His Spirit and love can impart,\r\nSomebody else needs Him, too...\r"
                    },
                    {
                        "hymnId":119,
                        "stanzaNumber":3,
                        "stanza":" If you have comfort in being God’s child,\r\nIf He is faithful to you,\r\nThink, when you see those whom sin has defiled,\r\nSomebody else needs Him, too....\r"
                    },
                    {
                        "hymnId":119,
                        "stanzaNumber":4,
                        "stanza":" When the Lord gives you His love and His care,\r\nSomething He gives you to do;\r\nYou have the gospel with others to share,\r\nSomebody else needs Him, too...\r\n"
                    }
                ],
                "title":"DO SOMETHING FOR OTHERS"
            },
            {
                "hymnNumber":120,
                "stanzas":[
                    {
                        "hymnId":120,
                        "stanzaNumber":1,
                        "stanza":" Out in the darkness of sorrow and sin,\r\nSomebody needs your love;\r\nLed by the Master, that soul you may win,\r\nSomebody needs your love.\r\nSomebody needs your love,\r\nSomebody needs your love,...\r\nSomeone in sadness,\r\nYearning for gladness,\r\nSomebody needs your love.\r"
                    },
                    {
                        "hymnId":120,
                        "stanzaNumber":2,
                        "stanza":" Many are helpless, and wait for your call,\r\nSomebody needs your love;\r\nShow them that Jesus is all and in all,\r\nSomebody needs your love.\r"
                    },
                    {
                        "hymnId":120,
                        "stanzaNumber":3,
                        "stanza":" Some one is tempted to turn from the right,\r\nSomebody needs your love;\r\nLonging for courage and strength for the fight,\r\nSomebody needs your love.\r"
                    },
                    {
                        "hymnId":120,
                        "stanzaNumber":4,
                        "stanza":" Some are down-hearted, in sorrow they roam,\r\nSomebody needs your love;\r\nMany are sighing for heaven and home,\r\nSomebody needs your love.\r\n"
                    }
                ],
                "title":"SPEAK A WORD"
            },
            {
                "hymnNumber":121,
                "stanzas":[
                    {
                        "hymnId":121,
                        "stanzaNumber":1,
                        "stanza":" There’s no one like my Saviour;\r\nNo friend can be like Him;\r\nMy never failing sunshine\r\nWhen earthly lights grow dim;\r\nWhen summer flow’rs are blooming,\r\nThe brightness of my joy,\r\nO, may His happy service\r\nMy heart and life employ.\r\nNo one, no one like my precious Saviour,\r\nNo one, no one such a friend can be;\r\nNo one, no one like my precious Saviour,\r\nGlory, glory, Jesus cares for me.\r"
                    },
                    {
                        "hymnId":121,
                        "stanzaNumber":2,
                        "stanza":" There’s no one like my Saviour;\r\nIn seasons of distress,\r\nHe draws me closer to Him,\r\nTo comfort and to bless;\r\nHe gives me in temptation,\r\nThe strength of His right arm;\r\nHis angels camp around me,\r\nTo keep me from all harm.\r"
                    },
                    {
                        "hymnId":121,
                        "stanzaNumber":3,
                        "stanza":" There’s no one like my Saviour;\r\nHe pardons all my sin,\r\nAnd gives His Holy Spirit,\r\nA springing well within;\r\nHe leads me out to service,\r\nWith gentle touch and mild;\r\nO, wonder of all wonders,\r\nThat I should be His child.\r"
                    },
                    {
                        "hymnId":121,
                        "stanzaNumber":4,
                        "stanza":" There’s no one like my Saviour,\r\nCome now, and find it true!\r\nHe gave His life a ransom,\r\nHis blood was shed for you;\r\nThen when we reach the city of everlasting light,\r\nWe’ll sing with saints and angels,\r\nAll honour, power and might.\r\nGrace & Forgiveness\r\n"
                    }
                ],
                "title":"SOMEBODY ELSE NEEDS HIM, TOO"
            },
            {
                "hymnNumber":122,
                "stanzas":[
                    {
                        "hymnId":122,
                        "stanzaNumber":1,
                        "stanza":" Sinners Jesus will receive!\r\nSound this word of grace to all\r\nWho the heav’nly pathway leave,\r\nAll who linger, all who fall!\r\nSing it o’er . . . and o’er again, . . .\r\nChrist receiv . . eth sinful men; . . .\r\nMake the mes . . . sage clear and plain: . . .\r\nChrist receiv . . . eth sinful men. . . .\r"
                    },
                    {
                        "hymnId":122,
                        "stanzaNumber":2,
                        "stanza":" Come: and He will give you rest;\r\nTrust Him; for His word is plain,\r\nHe will take the sinful-est;\r\nChrist receiveth sinful men.\r"
                    },
                    {
                        "hymnId":122,
                        "stanzaNumber":3,
                        "stanza":" Now my heart condemns me not,\r\nPure before the law I stand;\r\nHe who cleans’d me from all spot\r\nSatisfied its last demand.\r"
                    },
                    {
                        "hymnId":122,
                        "stanzaNumber":4,
                        "stanza":" Christ receiveth, sinful men;\r\nEven me with all my sin;\r\nPurg’d from ev’ry spot and stain,\r\nHeav’n with Him I enter in.\r\n"
                    }
                ],
                "title":"SOMEBODY NEEDS YOUR LOVE"
            },
            {
                "hymnNumber":123,
                "stanzas":[
                    {
                        "hymnId":123,
                        "stanzaNumber":1,
                        "stanza":" Wonderful grace of Jesus,\r\nGreater than all my sin;\r\nHow shall my tongue describe it,\r\nWhere shall its praise begin?\r\nTaking away my burden,\r\nSetting my spirit free,\r\nFor the wonderful grace of Jesus reaches me.\r\nWonderful the matchless grace of Jesus,\r\nDeeper than the mighty rolling sea;\r\nWonderful grace all sufficient for me,\r\nfor even me\r\nBroader than the scope of my trangressions,\r\nGreater far than all my sin and shame, . . .\r\nO magnify the precious name of Jesus,\r\nPraise His name!\r"
                    },
                    {
                        "hymnId":123,
                        "stanzaNumber":2,
                        "stanza":" Wonderful grace of Jesus,\r\nReaching to all the lost,\r\nBy it I have been pardoned,\r\nSaved to the uttermost,\r\nChains have been torn assunder,\r\nGiving me liberty;\r\nFor the wonderful grace of Jesus reaches me.\r"
                    },
                    {
                        "hymnId":123,
                        "stanzaNumber":3,
                        "stanza":" Wonderful grace of Jesus,\r\nReaching the most defiled,\r\nBy its transforming power,\r\nMaking him God’s dear child,\r\nPurchasing peace and heaven,\r\nFor all eternity;\r\nAnd the wonderful grace of\r\nJesus reaches me.\r\n"
                    }
                ],
                "title":"NO ONE LIKE MY SAVIOUR"
            },
            {
                "hymnNumber":124,
                "stanzas":[
                    {
                        "hymnId":124,
                        "stanzaNumber":1,
                        "stanza":" Great God of wonders! all Thy ways\r\nDisplay the attributes divine;\r\nBut countless acts of pard’ning grace\r\nBeyond Thine other wonders shine:\r\nWho is a pard’ning God like Thee?\r\nOr who has grace so rich and free?\r"
                    },
                    {
                        "hymnId":124,
                        "stanzaNumber":2,
                        "stanza":" In wonder lost, with trembling joy\r\nWe take the pardon of our God:\r\nPardon for crimes of deepest dye,\r\nA pardon bought with Jesus blood.\r\nWho is a pard’ning God like Thee?\r\nOr who has grace so rich and free?\r"
                    },
                    {
                        "hymnId":124,
                        "stanzaNumber":3,
                        "stanza":" Pardon - from an offended God!\r\nPardon - for sins of deepest dye!\r\nPardon - bestowed through Jesus’ blood!\r\nPardon - that brings the rebel nigh!\r\nWho is a pard’ning God like Thee?\r\nOr who has grace so rich and free?\r"
                    },
                    {
                        "hymnId":124,
                        "stanzaNumber":4,
                        "stanza":" O may this strange, this matchless grace,\r\nThis God-like miracle of love,\r\nFill the wide earth with grateful praise,\r\nAs now it fills the choirs above!\r\nWho is a pard’ning God like Thee?\r\nOr who has grace so rich and free?\r\n"
                    }
                ],
                "title":"CHRIST RECEIVETH SINFUL MEN"
            },
            {
                "hymnNumber":125,
                "stanzas":[
                    {
                        "hymnId":125,
                        "stanzaNumber":1,
                        "stanza":" Rock of Ages, cleft for me,\r\nLet me hide myself in Thee!\r\nLet the water and the blood,\r\nFrom Thy riven side which flowed,\r\nBe of sin the double cure;\r\nCleanse me from its guilt and power.\r"
                    },
                    {
                        "hymnId":125,
                        "stanzaNumber":2,
                        "stanza":" Not the labours of my hands,\r\nCan fulfil Thy law’s demands;\r\nCould my zeal no respite know,\r\nCould my tears for ever flow,\r\nAll for sin could not atone;\r\nThou must save and Thou alone.\r"
                    },
                    {
                        "hymnId":125,
                        "stanzaNumber":3,
                        "stanza":" Nothing in my hand I bring,\r\nSimply to Thy cross I cling;\r\nNaked, come to Thee for dress;\r\nHelpless, look to Thee for grace:\r\nFoul, I to the fountain fly;\r\nWash me, Saviour, or I die.\r"
                    },
                    {
                        "hymnId":125,
                        "stanzaNumber":4,
                        "stanza":" While I draw this fleeting breath,\r\nWhen my eyelids close in death,\r\nWhen I soar to worlds unknown,\r\nSee Thee on Thy judgment throne,\r\nRock of Ages, cleft for me,\r\nLet me hide myself in Thee.\r\n"
                    }
                ],
                "title":"WONDERFUL GRACE OF JESUS"
            },
            {
                "hymnNumber":126,
                "stanzas":[
                    {
                        "hymnId":126,
                        "stanzaNumber":1,
                        "stanza":" I heard an old, old story,\r\nHow a Saviour came from glory,\r\nHow He gave His life on Calvary\r\nTo save a wretch like me;\r\nI heard about His groaning,\r\nOf His precious blood’s atoning,\r\nThen I repented of my sins\r\nAnd won the victory.\r\nO victory in Jesus, my Saviour, forever,\r\nHe sought me and bought me\r\nWith His redeeming blood;\r\nHe loved me ere I knew Him,\r\nAnd all my love is due Him,\r\nHe plunged me to victory\r\nBeneath the cleansing flood.\r"
                    },
                    {
                        "hymnId":126,
                        "stanzaNumber":2,
                        "stanza":" I heard about His healing,\r\nOf His cleasing pow’r revealing,\r\nHow He made the lame to walk again\r\nAnd cause the blind to see;\r\nAnd then I cried, “dear Jesus\r\nCome and heal my broken spirit,”\r\nAnd somehow Jesus came and bro’t\r\nTo me the victory.\r"
                    },
                    {
                        "hymnId":126,
                        "stanzaNumber":3,
                        "stanza":" I heard about a mansion\r\nHe has built for me in glory,\r\nAnd I heard about the streets of gold\r\nBeyond the crystal sea;\r\nAbout the angel singing\r\nAnd the old redemption story,\r\nAnd some sweet day I’ll sing up there\r\nThe song of victory.\r\n"
                    }
                ],
                "title":"GREAT GOD OF WONDERS"
            },
            {
                "hymnNumber":127,
                "stanzas":[
                    {
                        "hymnId":127,
                        "stanzaNumber":1,
                        "stanza":" Marvelous grace of our loving Lord,\r\nGrace that exceeds our sin and our guilt,\r\nYonder on Calvary’s mount outpoured\r\nThere where the blood of the Lamb was spilt.\r\nGrace, grace, God’s grace,\r\nGrace that will pardon and cleanse within;\r\nGrace, grace, God’s grace,\r\nGrace that is greater than all our sin.\r"
                    },
                    {
                        "hymnId":127,
                        "stanzaNumber":2,
                        "stanza":" Sin and despair like the sea waves cold,\r\nThreaten the soul with infinite loss;\r\nGrace that is greater, yes, grace untold,\r\nPoint to the Refuge, the Mighty Cross.\r"
                    },
                    {
                        "hymnId":127,
                        "stanzaNumber":3,
                        "stanza":" Dark is the stain that we cannot hide,\r\nWhat can avail to wash it away?\r\nLook! there is flowing a crimson tide;\r\nWhiter than snow you may be today.\r"
                    },
                    {
                        "hymnId":127,
                        "stanzaNumber":4,
                        "stanza":" Marvelous, infinite, matchless grace,\r\nFreely bestowed on all who believe;\r\nYou that are longing to see His face,\r\nWill you this moment His grace receive?\r\n"
                    }
                ],
                "title":"ROCK OF AGES CLEFT FOR ME"
            },
            {
                "hymnNumber":128,
                "stanzas":[
                    {
                        "hymnId":128,
                        "stanzaNumber":1,
                        "stanza":" Just as I am, without one plea,\r\nBut that Thy blood was shed for me,\r\nAnd that Thou bidst me come to Thee,\r\nO Lamb of God, I come, I come.\r"
                    },
                    {
                        "hymnId":128,
                        "stanzaNumber":2,
                        "stanza":" Just as I am, and waiting not\r\nTo rid my soul of one dark blot,\r\nTo Thee, whose blood can cleanse each spot,\r\nO Lamb of God, I come, I come.\r"
                    },
                    {
                        "hymnId":128,
                        "stanzaNumber":3,
                        "stanza":" Just as I am - Though tossed about,\r\nWith many a conflict, many a doubt,\r\nFightings and fears within, without,\r\nO Lamb of God, I come, I come.\r"
                    },
                    {
                        "hymnId":128,
                        "stanzaNumber":4,
                        "stanza":" Just as I am - poor, wretched, blind-\r\nSight, riches, healing of the mind,\r\nYea, all I need, in Thee to find,\r\nO Lamb of God, I come, I come.\r"
                    },
                    {
                        "hymnId":128,
                        "stanzaNumber":5,
                        "stanza":" Just as I am, Thou wilt receive,\r\nWilt welcome, pardon, cleanse, relieve;\r\nBecause Thy promise I believe,\r\nO Lamb of God, I come, I come.\r"
                    },
                    {
                        "hymnId":128,
                        "stanzaNumber":6,
                        "stanza":" Just as I am - Thy love unknown\r\nHas broken every barrier, down;\r\nNow to be Thine, yea, Thine alone,\r\nO Lamb of God, I come, I come.\r"
                    },
                    {
                        "hymnId":128,
                        "stanzaNumber":7,
                        "stanza":" Just as I am, of that free love\r\nThe breadth, length, depth and height to prove,\r\nHere for a season, then above,\r\nO Lamb of God, I come, I come.\r\n"
                    }
                ],
                "title":"VICTORY IN JESUS"
            },
            {
                "hymnNumber":129,
                "stanzas":[
                    {
                        "hymnId":129,
                        "stanzaNumber":1,
                        "stanza":" In tenderness He sought me,\r\nWeary and sick with sin,\r\nAnd on His shoulders brought me\r\nBack to His fold again.\r\nWhile angels in His presence sang,\r\nUntil the courts of heaven rang.\r\nOh, the love that sought me!\r\nOh, the blood that bought me!\r\nOh, the grace that brought me to the fold,\r\nWondrous grace that brought me to the fold!\r"
                    },
                    {
                        "hymnId":129,
                        "stanzaNumber":2,
                        "stanza":" He washed the bleeding sin-wounds,\r\nAnd poured in oil and wine;\r\nHe whispered to assure me\r\n“I’ve found thee, thou art Mine”\r\nI never heard a sweeter voice,\r\nIt made my aching heart rejoice!\r"
                    },
                    {
                        "hymnId":129,
                        "stanzaNumber":3,
                        "stanza":" He pointed to the nail-prints,\r\nFor me His blood was shed,\r\nA mocking crown so thorny,\r\nWas placed upon His head:\r\nI wondered what He saw in me,\r\nTo suffer such deep agony.\r"
                    },
                    {
                        "hymnId":129,
                        "stanzaNumber":4,
                        "stanza":" I’m sitting in His presence,\r\nThe sunshine of His face,\r\nWhile with adoring wonder\r\nHis blessings I retrace.\r\nIt seems as if eternal days\r\nAre far too short to sound His praise.\r"
                    },
                    {
                        "hymnId":129,
                        "stanzaNumber":5,
                        "stanza":" So while the hours are passing,\r\nAll now is perfect rest;\r\nI’m waiting for the morning,\r\nThe brightest and the best,\r\nWhen He will call us to His side,\r\nTo be with Him, His spotless bride.\r\n"
                    }
                ],
                "title":"GRACE GREATER THAN OUR SIN"
            },
            {
                "hymnNumber":130,
                "stanzas":[
                    {
                        "hymnId":130,
                        "stanzaNumber":1,
                        "stanza":" Since the Saviour came to this heart of mine,\r\nMy cup’s fill’d and running over,\r\nFilling my poor soul with His joy divine,\r\nMy cup’s fill’d and running over.\r\nRu. . . nning over,\r\nRu. . . nning over,\r\nMy cup’s fill’d and running over,\r\nSince the Lord saved me,\r\nI’m as happy as can be,\r\nMy cup’s fill’d and running over.\r"
                    },
                    {
                        "hymnId":130,
                        "stanzaNumber":2,
                        "stanza":" With my Lord so dear, I have naught to fear,\r\nMy cup’s fill’d and running over,\r\nTho’ my way be drear He is ever near,\r\nMy cup’s fill’d and running over.\r"
                    },
                    {
                        "hymnId":130,
                        "stanzaNumber":3,
                        "stanza":" Even tho’ I walk thro’ death’s darksome vale,\r\nMy cup’s fill’d and running over,\r\nChrist my Lord shall be my comfort still,\r\nMy cup’s fill’d and running over.\r"
                    },
                    {
                        "hymnId":130,
                        "stanzaNumber":4,
                        "stanza":" Sinner, seek the Lord, trust His precious word,\r\nWhile the angels round you hover,\r\nHeaven’s bells will ring, and you then will sing,\r\nMy cup’s fill’d and running over.\r\n"
                    }
                ],
                "title":"JUST AS I AM, WITHOUT ONE PLEA"
            },
            {
                "hymnNumber":131,
                "stanzas":[
                    {
                        "hymnId":131,
                        "stanzaNumber":1,
                        "stanza":" Out of my bondage, sorrow and night,\r\nJesus I come, Jesus, I come;\r\nInto Thy freedom, gladness and light,\r\nJesus I come to Thee;\r\nOut of my sickness into Thy health,\r\nOut of my want and into Thy wealth,\r\nOut of my sin and into Thy-self,\r\nJesus, I come to Thee.\r"
                    },
                    {
                        "hymnId":131,
                        "stanzaNumber":2,
                        "stanza":" Out of my shameful failure and loss,\r\nJesus, I come, Jesus, I come;\r\nInto the glorious gain of Thy cross,\r\nJesus I come to Thee;\r\nOut of earth’s sorrow into Thy balm,\r\nOut of life’s storms and into Thy calm,\r\nOut of distress to jubilant psalm,\r\nJesus, I come to Thee.\r"
                    },
                    {
                        "hymnId":131,
                        "stanzaNumber":3,
                        "stanza":" Out of unrest and arrogant pride,\r\nJesus, I come, Jesus, I come;\r\nInto Thy blessed will to abide,\r\nJesus, I come to Thee;\r\nOut of myself to dwell in Thy love,\r\nOut of despair into raptures above,\r\nUpward for aye on wings like a dove\r\nJesus, I come to Thee.\r"
                    },
                    {
                        "hymnId":131,
                        "stanzaNumber":4,
                        "stanza":" Out of the fear and dread of the tomb,\r\nJesus, I come, Jesus, I come;\r\nInto the joy and light of my home,\r\nJesus, I come to Thee;\r\nOut of the depths of ruin untold,\r\nInto the peace of Thy sheltering fold,\r\nEver Thy glorious face to behold,\r\nJesus, I come to Thee.\r\n"
                    }
                ],
                "title":"IN TENDERNESS HE SOUGHT ME"
            },
            {
                "hymnNumber":132,
                "stanzas":[
                    {
                        "hymnId":132,
                        "stanzaNumber":1,
                        "stanza":" And can it be, that I should gain\r\nAn interest in the Saviour’s blood?\r\nDied He for me, who caused His pain?\r\nFor me, who Him to death pursued?\r\nAmazing love! how can it be\r\nThat Thou, my God, shouldst die for me?\r"
                    },
                    {
                        "hymnId":132,
                        "stanzaNumber":2,
                        "stanza":" ’Tis mystery all ! th’ Immortal dies!\r\nWho can explore His strange design?\r\nIn vain the first born seraph tries\r\nTo sound the depth of love divine!\r\n’Tis mercy all ! let earth adore,\r\nLet angel-minds inquire no more.\r"
                    },
                    {
                        "hymnId":132,
                        "stanzaNumber":3,
                        "stanza":" He left His Father’s throne above\r\n(So free, so infinite His grace!)\r\nEmptied Himself of all but love,\r\nAnd bled for Adam’s helpless race:\r\n’Tis mercy all, immense and free,\r\nFor, O my God, it found out me!\r"
                    },
                    {
                        "hymnId":132,
                        "stanzaNumber":4,
                        "stanza":" Long my imprisoned spirit lay\r\nFast bound in sin and nature’s night;\r\nThine eye diffused a quickening ray,\r\nI woke, the dungeon flamed with light:\r\nMy chains fell off, my heart was free,\r\nI rose, went forth, and followed Thee.\r"
                    },
                    {
                        "hymnId":132,
                        "stanzaNumber":5,
                        "stanza":" No condemnation now I dread,\r\nJesus, and all in Him, is mine;\r\nAlive in Him, my living Head,\r\nAnd clothed in righteousness divine,\r\nBold I approach the eternal throne,\r\nAnd claim the crown, through Christ my own.\r\n"
                    }
                ],
                "title":"RUNNING OVER"
            },
            {
                "hymnNumber":133,
                "stanzas":[
                    {
                        "hymnId":133,
                        "stanzaNumber":1,
                        "stanza":" Tell me the old, old story,\r\nOf unseen things above,\r\nOf Jesus and His glory,\r\nOf Jesus and His love;\r\nTell me the story simply,\r\nAs to a little child,\r\nFor I am weak and weary,\r\nAnd helpless and defiled.\r\nTell me the Old, Old Story,\r\nTell me the Old, Old Story,\r\nTell me the Old, Old Story,\r\nOf Jesus and His love.\r"
                    },
                    {
                        "hymnId":133,
                        "stanzaNumber":2,
                        "stanza":" Tell me the story slowly,\r\nThat I may take it in-\r\nThat wonderful redemption,\r\nGod’s remedy for sin;\r\nTell me the story often,\r\nFor I forget so soon,\r\nThe “early dew” of morning\r\nHas passed away at noon.\r"
                    },
                    {
                        "hymnId":133,
                        "stanzaNumber":3,
                        "stanza":" Tell me the story softly,\r\nWith earnest tones, and grave;\r\nRemember I’m the sinner\r\nWhom Jesus came to save;\r\nTell me the story always,\r\nGrace & Forgiveness\r\nIf you would really be,\r\nIn any time of trouble,\r\nA comforter to me.\r"
                    },
                    {
                        "hymnId":133,
                        "stanzaNumber":4,
                        "stanza":" Tell me the same old story,\r\nWhen you have cause to fear\r\nThat this world’s empty glory\r\nIs costing me too dear;\r\nYes, and when that world’s glory\r\nIs dawning on my soul,\r\nTell me the old, old story:\r\n“Christ Jesus makes thee whole.”\r\n"
                    }
                ],
                "title":"OUT OF MY BONDAGE"
            },
            {
                "hymnNumber":134,
                "stanzas":[
                    {
                        "hymnId":134,
                        "stanzaNumber":1,
                        "stanza":" Years I spent in vanity and pride,\r\nCaring not my Lord was crucified,\r\nKnowing not it was for me He died\r\nOn Calvary.\r\nMercy there was great and grace was free,\r\nPardon there was multiplied to me;\r\nThere my burden’d soul found liberty,\r\nAt Calvary.\r"
                    },
                    {
                        "hymnId":134,
                        "stanzaNumber":2,
                        "stanza":" By God’s word at last my sin I learned,\r\nThen I trembl’d at the law I’d spurn’d,\r\nTill my guilty soul, imploring turned\r\nTo Calvary.\r"
                    },
                    {
                        "hymnId":134,
                        "stanzaNumber":3,
                        "stanza":" Now I’ve given to Jesus everything,\r\nNow I gladly own Him as my King,\r\nNow my raptured soul can only sing\r\nOf Calvary.\r"
                    },
                    {
                        "hymnId":134,
                        "stanzaNumber":4,
                        "stanza":" Oh! the love that drew salvation’s plan,\r\nOh! the grace that brought it down to man,\r\nOh! the mighty gulf that God did span\r\nAt Calvary.\r\n"
                    }
                ],
                "title":"AND CAN IT BE THAT I SHOULD GAIN"
            },
            {
                "hymnNumber":135,
                "stanzas":[
                    {
                        "hymnId":135,
                        "stanzaNumber":1,
                        "stanza":" We read of a beautiful heaven,\r\nPrepared for the pure and the free;\r\nThese truths in God’s word He has given,\r\nHow beautiful heaven must be.\r\nHow beautiful heaven must be,\r\nSweet home of the happy and free;\r\nFair haven of rest for the weary,\r\nHow beautiful heaven must be.\r"
                    },
                    {
                        "hymnId":135,
                        "stanzaNumber":2,
                        "stanza":" In heaven, no drooping nor pining,\r\nNo wishing for elsewhere to be;\r\nGod’s light is forever there shining,\r\nHow beautiful heaven must be.\r"
                    },
                    {
                        "hymnId":135,
                        "stanzaNumber":3,
                        "stanza":" I’m longing to go to fair heaven,\r\nTo be with the happy and free;\r\nTo spend the long ages in singing,\r\nHow beautiful heaven must be .\r"
                    },
                    {
                        "hymnId":135,
                        "stanzaNumber":4,
                        "stanza":" The angels so sweetly are singing,\r\nUp there by the beautiful sea;\r\nSweet chords from their gold harps are ringing,\r\nHow beautiful heaven must be.\r\n"
                    }
                ],
                "title":"TELL ME THE OLD, OLD STORY"
            },
            {
                "hymnNumber":136,
                "stanzas":[
                    {
                        "hymnId":136,
                        "stanzaNumber":1,
                        "stanza":" Sing the wondrous love of Jesus,\r\nSing His mercy and His grace;\r\nIn the mansion, bright and blessed,\r\nHe’ll prepare for us a place.\r\nWhen we all get to heaven,\r\nWhat a day of rejoicing that will be!\r\nWhen we all see Jesus,\r\nWe’ll sing and shout the victory.\r"
                    },
                    {
                        "hymnId":136,
                        "stanzaNumber":2,
                        "stanza":" While we walk the pilgrim pathway,\r\nClouds will overspread the sky;\r\nHeaven\r\nBut when trav’ling days are over,\r\nNot a shadow, not a sigh.\r"
                    },
                    {
                        "hymnId":136,
                        "stanzaNumber":3,
                        "stanza":" Let us, then, be true and faithful,\r\nTrusting, serving every day\r\nJust one glimpse of Him in glory,\r\nWill the toils of life repay.\r"
                    },
                    {
                        "hymnId":136,
                        "stanzaNumber":4,
                        "stanza":" Onward to the prize before us!\r\nSoon His beauty we’ll behold;\r\nSoon the pearly gates will open,\r\nWe shall tread the streets of gold.\r\n"
                    }
                ],
                "title":"AT CALVARY"
            },
            {
                "hymnNumber":137,
                "stanzas":[
                    {
                        "hymnId":137,
                        "stanzaNumber":1,
                        "stanza":" There is a home eternal,\r\nBeautiful and bright,\r\nWhere sweet joys supernal\r\nNever are dimm’d by night;\r\nWhite rob’d angels are singing\r\nEver around the bright throne;\r\nWhen, oh, When shall I see thee,\r\nBeautiful, beautiful Home?\r\nHome! beautiful Home!\r\nBright, beautiful Home!\r\nBright Home of our Saviour,\r\nBright, beautiful Home!\r"
                    },
                    {
                        "hymnId":137,
                        "stanzaNumber":2,
                        "stanza":" Flowers are ever springing\r\nIn that Home so fair;\r\nLittle children singing,\r\nPraises to Jesus there.\r\nHow they swell the glad anthem,\r\nEver around the bright throne!\r\nWhen, oh, when shall I see thee,\r\nBeautiful, beautiful Home?\r"
                    },
                    {
                        "hymnId":137,
                        "stanzaNumber":3,
                        "stanza":" Soon shall I join the ransomed,\r\nFar beyond the sky;\r\nChrist is my salvation,\r\nWhy should I fear to die?\r\nSoon my eyes shall behold Him\r\nSeated upon the bright throne;\r\nThen, oh, then shall I see thee.\r\nBeautiful, beautiful Home?\r\n"
                    }
                ],
                "title":"HOW BEAUTIFUL HEAVEN MUST BE"
            },
            {
                "hymnNumber":138,
                "stanzas":[
                    {
                        "hymnId":138,
                        "stanzaNumber":1,
                        "stanza":" On the mountain of Zion beyond the blue sky,\r\nStands a city so wondrous and fair;\r\nI expect to depart for that land, by and by,-\r\nFor I’m laying my treasure up there.\r\nI am laying my treasure up there, up there,\r\nIn that beautiful city so fair;...\r\nWhen its glories unfold I’ll have riches untold,\r\nFor I’m laying my treasure up there.\r"
                    },
                    {
                        "hymnId":138,
                        "stanzaNumber":2,
                        "stanza":" There’s a mansion awaiting God’s people, I’m told,\r\nWhich the Saviour has gone to prepare;\r\nThere the walls are of jasper, the streets are of gold,\r\nI am laying my treasure up there.\r"
                    },
                    {
                        "hymnId":138,
                        "stanzaNumber":3,
                        "stanza":" All the love of my heart, and my soul, mind and strength,\r\nAnd the work that with Jesus I share,\r\nAre but some of the riches I’ll find there at length,\r\nFor I’m laying my treasure up there.\r"
                    },
                    {
                        "hymnId":138,
                        "stanzaNumber":4,
                        "stanza":" So altho’ a poor pilgrim on earth I may roam,\r\nEver constant in watching and prayer,\r\nSoon I’ll hear the glad summons to start for my home,\r\nFor I’m laying my treasure up there.\r\n"
                    }
                ],
                "title":"WHEN WE ALL GET TO HEAVEN"
            },
            {
                "hymnNumber":139,
                "stanzas":[
                    {
                        "hymnId":139,
                        "stanzaNumber":1,
                        "stanza":" I shall see the King\r\nWhere the angels sing,\r\nI shall see the King some day,\r\nIn the better land,\r\nOn the golden strand,\r\nAnd with Him shall ever stay.\r\nIn His glory, I shall see the King,\r\nAnd forever endless praises sing;\r\n’Twas on calvary Jesus died for me;\r\nI shall see the King some day.\r"
                    },
                    {
                        "hymnId":139,
                        "stanzaNumber":2,
                        "stanza":" In the land of song,\r\nIn the glory throng,\r\nWhere there never comes a night,\r\nWith my Lord once slain\r\nI shall ever reign\r\nIn the glory-land of light.\r"
                    },
                    {
                        "hymnId":139,
                        "stanzaNumber":3,
                        "stanza":" I shall see the King,\r\nAll my tributes bring,\r\nAnd shall look upon His face;\r\nThen my song shall be\r\nHow He ransomed me\r\nAnd has kept me by His grace.\r"
                    },
                    {
                        "hymnId":139,
                        "stanzaNumber":4,
                        "stanza":"2 ‘‘HOLY, HOLY’’ IS WHAT THE ANGELS SING\r"
                    },
                    {
                        "hymnId":139,
                        "stanzaNumber":5,
                        "stanza":" There is singing up in heaven\r\nsuch as we have never known,\r\nWhere the angels sing the praises of the Lamb\r\nupon the throne;\r\nTheir sweet harps are ever tuneful and their\r\nvoices alway clear,\r\nO that we might be more like them while we\r\nserve the Master here!\r\n‘‘Holy, holy’’ is what the angels sing,\r\nAnd I expect to help them make the courts of\r\nheaven ring;\r\nBut when I sing redemption’s story they will\r\nfold their wings,\r\nFor angels never felt the joys that\r\nour salvation brings.\r"
                    },
                    {
                        "hymnId":139,
                        "stanzaNumber":6,
                        "stanza":" But I hear another anthem,\r\nblending voices clear and strong,\r\n“Unto Him who hath redeemed us\r\nand hath bought us,’’ is the song;\r\nWe have come thru tribulations\r\nto this land so fair and bright,\r\nIn the fountain freely flowing\r\nHe hath made our garments white.\r"
                    },
                    {
                        "hymnId":139,
                        "stanzaNumber":7,
                        "stanza":" Then the angels stand and listen,\r\nfor they cannot join that song,\r\nLike the sound of many waters,\r\nby that happy, blood washed throng;\r\nFor they sing about great trials,\r\nbattles fought and vict’ries won,\r\nAnd they praise their great\r\nRedeemer who hath said to them, “well done”.\r"
                    },
                    {
                        "hymnId":139,
                        "stanzaNumber":8,
                        "stanza":" So, altho’ I’m not an angel ,\r\nyet I know that over there\r\nI will join a blessed chorus that the angels\r\ncannot share;\r\nI will sing about my Saviour,\r\nwho upon dark Calvary\r\nFreely pardoned my transgression,\r\ndied to set a sinner free.\r"
                    },
                    {
                        "hymnId":139,
                        "stanzaNumber":9,
                        "stanza":"3. THE END OF THE ROAD\r"
                    },
                    {
                        "hymnId":139,
                        "stanzaNumber":10,
                        "stanza":" When I come to the end of the long, long road,\r\nThe shadows will flee away,\r\nAnd I’ll stand in the glorious light of God,\r\nWhere dwelleth eternal day...\r\nHeaven\r\nWhen I come to the end, the end of the road,\r\nTo the land of eternity,\r\nWhen I come to the end of life’s long road,\r\nThe face of my Lord I’ll see.\r"
                    },
                    {
                        "hymnId":139,
                        "stanzaNumber":11,
                        "stanza":" Looking back o’er the years that were hard and drear,\r\nThe hand of the Christ I’ll see;\r\nWhile my heart will go forth with a song of praise,\r\nBecause of His love for me...\r"
                    },
                    {
                        "hymnId":139,
                        "stanzaNumber":12,
                        "stanza":" When I come to the end of the long, long, road,\r\nAnd trials will all be past ,\r\nI shall look in the face of my dearest Friend,\r\nSafe home in His heav’n at last....\r\n"
                    }
                ],
                "title":"BEAUTIFUL HOME!"
            },
            {
                "hymnNumber":140,
                "stanzas":[
                    {
                        "hymnId":140,
                        "stanzaNumber":1,
                        "stanza":" When I come to the river at ending of day,\r\nWhen the last winds of sorrow have blown;\r\nThere’ll be somebody waiting to show me the way,\r\nI won’t have to cross Jordan alone.\r\nI won’t have to cross Jordan alone,\r\nJesus died for my sins to atone;\r\nWhen the darkness I see,\r\nHe’ll be waiting for me,\r\nI won’t have to cross Jordan alone.\r"
                    },
                    {
                        "hymnId":140,
                        "stanzaNumber":2,
                        "stanza":" Often times I’m forsaken, and weary and sad,\r\nWhen it seems that my friends have all gone;\r\nThere is one tho’t that cheers me and makes my heart glad,\r\nI won’t have to cross Jordan alone.\r"
                    },
                    {
                        "hymnId":140,
                        "stanzaNumber":3,
                        "stanza":" Tho’ the billows of sorrow and trouble may sweep,\r\nChrist the Saviour will care for His own;\r\nTill the end of the journey, my soul He will keep,\r\nI won’t have to cross Jordan alone.\r\n"
                    }
                ],
                "title":"LAYING MY TREASURE UP THERE"
            },
            {
                "hymnNumber":141,
                "stanzas":[
                    {
                        "hymnId":141,
                        "stanzaNumber":1,
                        "stanza":" There’s a land beyond the river,\r\nThat we call the sweet forever,\r\nAnd we only reach that shore by faith’s decree;\r\nOne by one we’ll gain the portals,\r\nThere to dwell with the immortals,\r\nWhen they ring the golden bells for you and me.\r\nDon’t you hear the bells now ringing?\r\nDon’t you here the angels singing?\r\n’Tis the glory hallelujah Jubilee\r\nIn that far-off sweet forever,\r\nJust beyond the shining river,\r\nWhen they ring the golden bells for you and me\r"
                    },
                    {
                        "hymnId":141,
                        "stanzaNumber":2,
                        "stanza":" We shall know no sin or sorrow,\r\nIn that haven of tomorrow,\r\nWhen our barque shall sail beyond the silver sea;\r\nWe shall only know the blessing\r\nOf our Father’s sweet caressing,\r\nWhen they ring the golden bells for you and me.\r"
                    },
                    {
                        "hymnId":141,
                        "stanzaNumber":3,
                        "stanza":" When our days shall know their number,\r\nWhen in death we sweetly slumber,\r\nWhen the King commands the spirit to be free;\r\nNevermore with anguish laden,\r\nWe shall reach that lovely Aiden,\r\nWhen they ring the golden bells for you and me.\r\n"
                    }
                ],
                "title":"SHALL SEE THE KING"
            },
            {
                "hymnNumber":144,
                "stanzas":[
                    {
                        "hymnId":144,
                        "stanzaNumber":1,
                        "stanza":" No tears in heaven, no sorrows given,\r\nAll will be glory in that land;\r\nThere’ll be no sadness, all will be gladness\r\nWhen we shall join that happy band.\r\nNo tears, no tears, no tears up there,\r\nSorrow and pain will all have flown;\r\nNo tears, no tears, no tears up there,\r\nNo tears in heaven will be known.\r"
                    },
                    {
                        "hymnId":144,
                        "stanzaNumber":2,
                        "stanza":" Glory is waiting, waiting up yonder,\r\nWhere we shall spend an endless day;\r\nThere with our Saviour, we’ll be forever,\r\nWhere no more sorrow can dismay.\r"
                    },
                    {
                        "hymnId":144,
                        "stanzaNumber":3,
                        "stanza":" Some morning yonder, we’ll cease to ponder\r\nO’er things this life has bro’t to view;\r\nAll will be clearer, loved ones be dearer,\r\nIn heav’n where all will be made new.\r\n"
                    }
                ],
                "title":"WON’T HAVE TO CROSS JORDAN ALONE"
            },
            {
                "hymnNumber":145,
                "stanzas":[
                    {
                        "hymnId":145,
                        "stanzaNumber":1,
                        "stanza":" Tempted and tried we’re oft made to wonder\r\nWhy it should be thus all the day long,\r\nWhile there are others living about us,\r\nNever molested tho’ in the wrong.\r\nFarther along we’ll know all about it,\r\nFarther along we’ll understand why;\r\nCheer up, my brother, live in the sunshine,\r\nWe’ll understand it all by and by.\r"
                    },
                    {
                        "hymnId":145,
                        "stanzaNumber":2,
                        "stanza":" When death has come and taken our loved ones,\r\nIt leaves our home so lonely and drear;\r\nThen do we wonder why others prosper,\r\nLiving so wicked year after year.\r"
                    },
                    {
                        "hymnId":145,
                        "stanzaNumber":3,
                        "stanza":" Faithful till death said our loving Master,\r\nA few more days to labour and wait;\r\nToils of the road will then seem as nothing,\r\nAs we sweep thru the beautiful gate.\r"
                    },
                    {
                        "hymnId":145,
                        "stanzaNumber":4,
                        "stanza":" When we see Jesus coming in glory,\r\nWhen He comes from His home in the sky;\r\nThen we shall meet Him in that bright mansion,\r\nWe’ll understand it all by and by.\r\n"
                    }
                ],
                "title":"WHEN THEY RING THE GOLDEN BELLS"
            },
            {
                "hymnNumber":146,
                "stanzas":[
                    {
                        "hymnId":146,
                        "stanzaNumber":1,
                        "stanza":" Lord, as of old at Pentecost\r\nThou didst thy pow’r display,\r\nWith cleansing, purifying flame\r\nDescend on us today.\r\nLord, send the old-time pow’r.\r\nThe Pentecostal pow’r!\r\nThy floodgates of blessing on us Throw open\r\nwide!\r\nLord, send the old-time pow’r, the\r\npentecostal pow’r,\r\nThat sinners be converted and Thy name\r\nglorified!\r"
                    },
                    {
                        "hymnId":146,
                        "stanzaNumber":2,
                        "stanza":" For mighty works for Thee prepare,\r\nAnd strengthen ev’ry heart:\r\nCome, take possession of Thine own,\r\nAnd never-more depart.\r"
                    },
                    {
                        "hymnId":146,
                        "stanzaNumber":3,
                        "stanza":" All self consume, all sin destroy!\r\nWith earnest zeal endue\r\nEach waiting heart to work for Thee;\r\nO Lord, our faith renew!\r"
                    },
                    {
                        "hymnId":146,
                        "stanzaNumber":4,
                        "stanza":" Speak, Lord! before Thy throne we wait,\r\nThy promise we believe,\r\nAnd will not let Thee go until\r\nThe blessing we receive!\r\n"
                    }
                ],
                "title":"FACE TO FACE"
            },
            {
                "hymnNumber":147,
                "stanzas":[
                    {
                        "hymnId":147,
                        "stanzaNumber":1,
                        "stanza":" “There shall be showers of blessing:”\r\nThis is the promise of love;\r\nThere shall be seasons refreshing,\r\nSent from the Saviour above.\r\nShowers of blessing,\r\nShowers of blessing we need;\r\nMercy drops round us are falling,\r\nBut for the showers we plead.\r"
                    },
                    {
                        "hymnId":147,
                        "stanzaNumber":2,
                        "stanza":" “There shall be showers of blessing:”\r\nPrecious reviving again;\r\nOver the hills and the valleys,\r\nSound of abundance of rain.\r"
                    },
                    {
                        "hymnId":147,
                        "stanzaNumber":3,
                        "stanza":" “There shall be showers of blessing:”\r\nSend them upon us, O Lord!\r\nGrant to us now a refreshing;\r\nCome, and now honour Thy Word.\r"
                    },
                    {
                        "hymnId":147,
                        "stanzaNumber":4,
                        "stanza":" “There shall be showers of blessing:”\r\nOh, that today they might fall,\r\nNow, as to God we’re confessing,\r\nNow as on Jesus we call!\r"
                    },
                    {
                        "hymnId":147,
                        "stanzaNumber":5,
                        "stanza":" “There shall be showers of blessing:”\r\nIf we but trust and obey;\r\nThere shall be seasons refreshing,\r\nIf we let God have His way.\r\n"
                    }
                ],
                "title":"SWEET BY AND BY"
            },
            {
                "hymnNumber":148,
                "stanzas":[
                    {
                        "hymnId":148,
                        "stanzaNumber":1,
                        "stanza":" Joys are flowing like a river,\r\nSince the Comforter has come;\r\nHe abides with us for ever,\r\nMakes the trusting heart His home.\r\nHoly Spirit\r\nBlessed quietness, holy quietness,\r\nWhat assurance in my soul !\r\nOn the stormy sea, He speaks peace to me,\r\nHow the billows cease to roll.\r"
                    },
                    {
                        "hymnId":148,
                        "stanzaNumber":2,
                        "stanza":" Bringing life, and health, and gladness,\r\nAll around this heav’nly Guest;\r\nBanish’d unbelief and sadness,\r\nChang’d our weariness to rest.\r"
                    },
                    {
                        "hymnId":148,
                        "stanzaNumber":3,
                        "stanza":" Like the rain that falls from heaven,\r\nLike the sunlight from the sky,\r\nSo the Holy Ghost is given,\r\nComing on us from on high.\r"
                    },
                    {
                        "hymnId":148,
                        "stanzaNumber":4,
                        "stanza":" What a wonderful salvation,\r\nWhere we always see His face;\r\nWhat a perfect habitation,\r\nWhat a quiet resting-place.\r\n"
                    }
                ],
                "title":"NO TEARS IN HEAVEN"
            },
            {
                "hymnNumber":149,
                "stanzas":[
                    {
                        "hymnId":149,
                        "stanzaNumber":1,
                        "stanza":" When first the risen Lord of pow’r\r\nHis chosen ones sent forth,\r\nA charge He gave, that solemn hour,\r\nTo preach His saving worth.\r\n“Go ye,’’ said He, “to all mankind;\r\nDeclare My Word, and ye shall find:\r\nThese signs shall surely follow them\r\nWho on My Name believe.’’\r"
                    },
                    {
                        "hymnId":149,
                        "stanzaNumber":2,
                        "stanza":" “No demons shall before them stand,\r\nNo poison do them harm;\r\nNor subtle serpent in their hand\r\nCause pain or dread alarm.”\r\nFor Satan’s kingdom He o’ercame,\r\nTo give His people right to claim:\r\n“These signs shall surely follow them\r\nWho on My Name believe.”\r"
                    },
                    {
                        "hymnId":149,
                        "stanzaNumber":3,
                        "stanza":" “They shall with other tongues declare\r\nThe wonders of their God:\r\nThe sick beneath their hands, by prayer,\r\nShall rise, to prove My Word,”\r\nSo let it be ! Firm as His Throne\r\nStands this clear promise to His own:\r\n“These signs shall surely follow them\r\nWho on My Name believe.”\r"
                    },
                    {
                        "hymnId":149,
                        "stanzaNumber":4,
                        "stanza":" Crowned with the flame of Pentecost,\r\nA faithful, fearless band\r\nProclaimed His Name: a ransomed host\r\nArose from every land.\r\nThe Lord worked with them from on High,\r\nHis proven Word could none deny:\r\n“These signs shall surely follow them\r\nWho on My Name believe.”\r"
                    },
                    {
                        "hymnId":149,
                        "stanzaNumber":5,
                        "stanza":" No word of Thine is void of power;\r\nNo promise, Lord, is vain.\r\nBe this a Pentecostal hour -\r\nConfirm Thy Word again!\r\nNor can’st Thou fail! Thou art the same\r\nAs when of old Thou did’st proclaim:\r\n“These signs shall surely follow them\r\nWho on My Name believe.”\r\n"
                    }
                ],
                "title":"FARTHER ALONG"
            },
            {
                "hymnNumber":150,
                "stanzas":[
                    {
                        "hymnId":150,
                        "stanzaNumber":1,
                        "stanza":" Long ago in days of old, stood a man of God we’re told,\r\nAs he talked to Elijah that day;\r\nHis request he did repeat, standing at Elijah’s feet,\r\n“A double portion” I can hear him say.\r\nGive me, Lord, a double portion,\r\npour Thy Spirit on me,\r\nThru eyes of faith Thy wondrous works I can see;\r\nBut I need Thy helping hand,\r\nIn this troubled, sinful land,\r\nGive me, Lord, a double portion from Thee.\r\nHoly Spirit\r"
                    },
                    {
                        "hymnId":150,
                        "stanzaNumber":2,
                        "stanza":" As Elijah stood that day, to Elisha he did say,\r\n“Ask me what I shall do unto thee”\r\nAnd Elisha then replied, walking at Elijah’s side,\r\n“A double portion, let it fall on me.”\r"
                    },
                    {
                        "hymnId":150,
                        "stanzaNumber":3,
                        "stanza":" Lord, I always to Thee pray, just for strength from day to day,\r\nBut I see there’s so much to be done,\r\nThat I have to kneel a new and this favour ask of You,\r\nA double portion this fight must be won.\r\n"
                    }
                ],
                "title":"PENTECOSTAL POWER"
            },
            {
                "hymnNumber":151,
                "stanzas":[
                    {
                        "hymnId":151,
                        "stanzaNumber":1,
                        "stanza":" If you are tired of the load of your sin,\r\nLet Jesus come into your heart;\r\nIf you desire a new life to begin,\r\nLet Jesus come into your heart.\r\nJust now, your doubtings give o’er;\r\nJust now, reject Him no more;\r\nJust now, throw open the door;\r\nLet Jesus come into your heart.\r"
                    },
                    {
                        "hymnId":151,
                        "stanzaNumber":2,
                        "stanza":" If ’tis for purity now that you sigh,\r\nLet Jesus come into your heart;\r\nFountains for cleansing are flowing nearby,\r\nLet Jesus come into your heart.\r"
                    },
                    {
                        "hymnId":151,
                        "stanzaNumber":3,
                        "stanza":" If there’s a temptest your voice cannot still,\r\nLet Jesus come into your heart;\r\nIf there’s a void this world never can fill,\r\nLet Jesus come into your heart.\r"
                    },
                    {
                        "hymnId":151,
                        "stanzaNumber":4,
                        "stanza":" If you would join the glad songs of the blest,\r\nLet Jesus come into your heart;\r\nIf you would enter the mansions of rest,\r\nLet Jesus come into your heart.\r\n"
                    }
                ],
                "title":"THERE SHALL BE SHOWERS OF BLESSING"
            },
            {
                "hymnNumber":152,
                "stanzas":[
                    {
                        "hymnId":152,
                        "stanzaNumber":1,
                        "stanza":" The cross upon which Jesus died\r\nIs a shelter in which we can hide,\r\n“And its grace so free is sufficient for me,”\r\nAnd deep is its fountain; as wide as the sea.\r\nThere’s room at the cross for you,\r\nThere’s room at the cross for you,\r\nTho’ millions have come\r\nThere’s still room for one ,\r\nYes, there’s room at the cross for you.\r"
                    },
                    {
                        "hymnId":152,
                        "stanzaNumber":2,
                        "stanza":" Tho’ millions have found Him a Friend\r\nAnd have turned from the sins they have sinned,\r\nThe Saviour still waits to open the gates,\r\nAnd welcome a sinner before it’s too late.\r"
                    },
                    {
                        "hymnId":152,
                        "stanzaNumber":3,
                        "stanza":" The hand of my Saviour is strong,\r\nAnd the love of my Saviour is long,\r\nThrough sunshine or rain through loss or in gain,\r\nThe blood flows from Calv’ry to cleanse ev’ry stain.\r\n"
                    }
                ],
                "title":"JOYS ARE FLOWING LIKE A RIVER"
            },
            {
                "hymnNumber":153,
                "stanzas":[
                    {
                        "hymnId":153,
                        "stanzaNumber":1,
                        "stanza":" Have you wandered away from your Father’s care,\r\nHeavy-hearted and sad do you roam?\r\nThere’s a sweet gentle voice calling now to you -\r\nWand’ring child, wand’ring child, O, come home.\r\nChild, come home, child, come home,\r\nWand’ring child, why longer roam?\r\n’Tis thy Father entreats,\r\nWand’ring child, O, come home.\r"
                    },
                    {
                        "hymnId":153,
                        "stanzaNumber":2,
                        "stanza":" Is your frail bark adrift on life’s raging sea,\r\nAre you tossed on its billows and foam?\r\nThere’s a safe harbour home, waiting now for you -\r\nWand’ring child, wand’ring child, O, come home.\r\nInvitation\r"
                    },
                    {
                        "hymnId":153,
                        "stanzaNumber":3,
                        "stanza":" He is pleading today, heed His gentle voice,\r\nAs He bids you no longer to roam,\r\nTo that dear Father’s house haste without delay -\r\nWand’ring child, wand’ring child, O, come home.\r\n"
                    }
                ],
                "title":"WITH SIGNS FOLLOWING"
            },
            {
                "hymnNumber":154,
                "stanzas":[
                    {
                        "hymnId":154,
                        "stanzaNumber":1,
                        "stanza":" Once again the Gospel message,\r\nFrom the Saviour you have heard;\r\nWill you heed the invitation?\r\nWill you turn and seek the Lord?\r\nCome believing! come believing!\r\nCome to Jesus! look and live!...\r\nCome believing! come believing!\r\nCome to Jesus! look and live!\r"
                    },
                    {
                        "hymnId":154,
                        "stanzaNumber":2,
                        "stanza":" Many summers you have wasted,\r\nRipen’d harvests you have seen;\r\nWinter snows by Spring have melted:\r\nYet you linger in your sin.\r"
                    },
                    {
                        "hymnId":154,
                        "stanzaNumber":3,
                        "stanza":" Jesus for your choice is waiting;\r\nTarry not: at once decide!\r\nWhile the Spirit now is striving,\r\nYield, and seek the Saviour’s side.\r"
                    },
                    {
                        "hymnId":154,
                        "stanzaNumber":4,
                        "stanza":" Cease of fitness to be thinking;\r\nDo not longer try to feel !\r\nIt is trusting, and not feeling,\r\nThat will give the Spirit’s seal.\r"
                    },
                    {
                        "hymnId":154,
                        "stanzaNumber":5,
                        "stanza":" Let your will to God be given,\r\nTrust in Christ’s atoning blood;\r\nLook to Jesus now in heaven,\r\nRest on His unchanging word.\r\n"
                    }
                ],
                "title":"GIVE ME A DOUBLE PORTION"
            },
            {
                "hymnNumber":155,
                "stanzas":[
                    {
                        "hymnId":155,
                        "stanzaNumber":1,
                        "stanza":" Why do you wait, dear brother,\r\nOh, why do you tarry so long?\r\nYour Saviour is waiting to give you\r\nA place in His sanctified throng.\r\nWhy not? Why not?\r\nWhy not come to Him now? (2ce).\r"
                    },
                    {
                        "hymnId":155,
                        "stanzaNumber":2,
                        "stanza":" What do you hope, dear brother,\r\nTo gain by a further delay?\r\nThere’s no one to save you but Jesus,\r\nThere’s no other way but His way.\r"
                    },
                    {
                        "hymnId":155,
                        "stanzaNumber":3,
                        "stanza":" Do you not feel, dear brother,\r\nHis Spirit now striving within?\r\nOh, why not accept His salvation,\r\nAnd throw off your burden of sin?\r"
                    },
                    {
                        "hymnId":155,
                        "stanzaNumber":4,
                        "stanza":" Why do you wait, dear brother?\r\nThe harvest is passing away;\r\nYour Saviour is longing to bless you,\r\nThere’s danger and death in delay!\r\n"
                    }
                ],
                "title":"LET JESUS COME INTO YOUR HEART"
            },
            {
                "hymnNumber":156,
                "stanzas":[
                    {
                        "hymnId":156,
                        "stanzaNumber":1,
                        "stanza":" The Shepherd of Love is seeking the lost\r\nIn paths that are rough and steep;\r\nHe’s calling the lambs that have gone astray,\r\nHe’s calling, calling His sheep.\r\nOut of your darkness of sin and shame,\r\nInto His love, forever the same;\r\nCome to Him now, believe on His name,\r\nO answer the call today.\r"
                    },
                    {
                        "hymnId":156,
                        "stanzaNumber":2,
                        "stanza":" The Shepherd of Love knows His sheep by name,\r\nAnd tenderly leads the way;\r\nO weary one, come to the Shepherd’s fold,\r\nHe’s calling, calling today.\r"
                    },
                    {
                        "hymnId":156,
                        "stanzaNumber":3,
                        "stanza":" The Shepherd of Love our ransom hath paid,\r\nAnd offers salvation free;\r\nHe’s patiently waiting for thee to come,\r\nHe’s calling, calling for thee.\r"
                    },
                    {
                        "hymnId":156,
                        "stanzaNumber":4,
                        "stanza":" The Shepherd of Love now seeketh His sheep,\r\nHe seeketh whate’er the cost;\r\nBehold, He is calling the wand’rer home,\r\nHe’s calling, calling the lost.\r"
                    },
                    {
                        "hymnId":156,
                        "stanzaNumber":5,
                        "stanza":"1. WHO’LL BE THE NEXT?\r"
                    },
                    {
                        "hymnId":156,
                        "stanzaNumber":6,
                        "stanza":" Who’ll be the next to follow Jesus?\r\nWho’ll be the next His cross to bear?\r\nSomeone is ready, someone is waiting,\r\nWho’ll be the next a crown to wear?\r\nWho’ll be the next, who’ll be the next,\r\nWho’ll be the next to follow Jesus?\r\nWho’ll be the next to follow Jesus now? -\r\nFollow Jesus now?\r"
                    },
                    {
                        "hymnId":156,
                        "stanzaNumber":7,
                        "stanza":" Who’ll be the next to follow Jesus?\r\nCome and bow at His precious feet.\r\nWho’ll be the next to lay every burden\r\nDown at the Father’s Mercy seat?\r"
                    },
                    {
                        "hymnId":156,
                        "stanzaNumber":8,
                        "stanza":" Who’ll be the next to follow Jesus?\r\nWho’ll be the next to praise His name?\r\nWho’ll swell the chorus of free redemption,\r\nSing, Hallelujah! Praise the Lamb?\r\n"
                    }
                ],
                "title":"ROOM AT THE CROSS FOR YOU"
            },
            {
                "hymnNumber":157,
                "stanzas":[
                    {
                        "hymnId":157,
                        "stanzaNumber":1,
                        "stanza":" “Almost persuaded:” now to believe;\r\n“Almost persuaded:” Christ to receive;\r\nSeems now some soul to say,\r\n“Go, Spirit, go Thy way:\r\nSome more convenient day\r\nOn Thee I’ll call.’’\r"
                    },
                    {
                        "hymnId":157,
                        "stanzaNumber":2,
                        "stanza":" “Almost persuaded:” come, come today!\r\n“Almost persuaded:” turn not away!\r\nJesus invites you here,\r\nAngels are lingering near,\r\nPrayers rise from heart so dear,\r\nO wanderer, come!\r"
                    },
                    {
                        "hymnId":157,
                        "stanzaNumber":3,
                        "stanza":" “Almost persuaded:’’ harvest is past!\r\n“Almost persuaded:’’ doom comes at last!\r\n“Almost’’ cannot avail;\r\n“Almost’’ is but to fail:\r\nSad, sad, that bitter wail -\r\n“Almost’’ - but lost!\r\nPrayer\r\n"
                    }
                ],
                "title":"WANDERING CHILD, O COME HOME"
            },
            {
                "hymnNumber":158,
                "stanzas":[
                    {
                        "hymnId":158,
                        "stanzaNumber":1,
                        "stanza":" My God, is any hour so sweet,\r\nFrom blush of morn to evening star,\r\nAs that which calls me to Thy feet,\r\nThe hour of prayer?.\r"
                    },
                    {
                        "hymnId":158,
                        "stanzaNumber":2,
                        "stanza":" Blest be that tranquil hour of morn,\r\nAnd blest that hour of solemn eve,\r\nWhen, on the wings of prayer upborne,\r\nThe world I leave.\r"
                    },
                    {
                        "hymnId":158,
                        "stanzaNumber":3,
                        "stanza":" For then a day-spring shines on me,\r\nBrighter than morn’s ethereal glow;\r\nAnd richer dews descend from Thee\r\nThan earth can know.\r"
                    },
                    {
                        "hymnId":158,
                        "stanzaNumber":4,
                        "stanza":" Then is my strength by Thee renewed;\r\nThen are my sins by Thee forgiven;\r\nThen dost Thou cheer my solitude\r\nWith hope of heaven.\r"
                    },
                    {
                        "hymnId":158,
                        "stanzaNumber":5,
                        "stanza":" No word can tell what blest relief,\r\nThere for my every want I find;\r\nWhat strength for warfare, balm for grief;\r\nWhat peace of mind.\r"
                    },
                    {
                        "hymnId":158,
                        "stanzaNumber":6,
                        "stanza":" Hushed is each doubt, gone every fear;\r\nMy spirit seems in heaven to stay;\r\nAnd even the penitential tear\r\nIs wiped away.\r"
                    },
                    {
                        "hymnId":158,
                        "stanzaNumber":7,
                        "stanza":" Lord, till I reach Your blissful shore,\r\nNo privilege so dear shall be,\r\nAs thus my inmost soul to pour\r\nIn prayer to Thee.\r\n"
                    }
                ],
                "title":"COME BELIEVING"
            },
            {
                "hymnNumber":159,
                "stanzas":[
                    {
                        "hymnId":159,
                        "stanzaNumber":1,
                        "stanza":" Prayer is the soul’s sincere desire,\r\nUttered or unexpressed!\r\nThe motion of a hidden fire\r\nThat trembles in the breast.\r"
                    },
                    {
                        "hymnId":159,
                        "stanzaNumber":2,
                        "stanza":" Prayer is the burden of a sigh,\r\nThe falling of a tear,\r\nThe upward glancing of an eye,\r\nWhen none but God is near.\r"
                    },
                    {
                        "hymnId":159,
                        "stanzaNumber":3,
                        "stanza":" Prayer is the simplest form of speech\r\nThat infant lips can try;\r\nPrayer the sublimest strains that reach\r\nThe majesty on high.\r"
                    },
                    {
                        "hymnId":159,
                        "stanzaNumber":4,
                        "stanza":" Prayer is the contrite sinner’s voice\r\nReturning from his ways\r\nWhile angels in their songs rejoice,\r\nAnd cry; Behold he prays!\r"
                    },
                    {
                        "hymnId":159,
                        "stanzaNumber":5,
                        "stanza":" Prayer is the Christian’s vital breath,\r\nThe Christian’s native air,\r\nHis watchword at the gates of death;\r\nHe enters heaven with prayer.\r"
                    },
                    {
                        "hymnId":159,
                        "stanzaNumber":6,
                        "stanza":" O Thou by whom we come to God,\r\nThe Life, the Truth, the Way!\r\nThe path of prayer Thyself has trod:\r\nLord! teach us how to pray.\r\n"
                    }
                ],
                "title":"WHY DO YOU WAIT?"
            },
            {
                "hymnNumber":160,
                "stanzas":[
                    {
                        "hymnId":160,
                        "stanzaNumber":1,
                        "stanza":" Guide me, O Thou Great Jehovah!\r\nPilgrim thro’ this barren land;\r\nI am weak, but Thou art mighty,\r\nHold me with Thy pow’rful hand:\r\nBread of heaven! 2ce\r\nFeed me now and ever more. 2ce\r"
                    },
                    {
                        "hymnId":160,
                        "stanzaNumber":2,
                        "stanza":" Open now, the crystal fountain,\r\nWhence the healing stream doth flow:\r\nLet the fiery, cloudy pillar\r\nLead me all my journey through:\r\nStrong Deliverer! 2ce\r\nBe Thou still my strength and shield.2ce\r"
                    },
                    {
                        "hymnId":160,
                        "stanzaNumber":3,
                        "stanza":" If I tread the verge of Jordan,\r\nBid my anxious fears subside:\r\nBear me through the swelling torrent,\r\nLand me safe on Canaan’s side:\r\nSongs of praises! 2ce\r\nI will ever give to Thee. 2ce\r"
                    },
                    {
                        "hymnId":160,
                        "stanzaNumber":4,
                        "stanza":" Saviour, come! we long to see Thee,\r\nLong to dwell with Thee above;\r\nAnd to know in full communion,\r\nAll the sweetness of Thy love.\r\nCome, Lord Jesus! 2ce\r\nTake Thy waiting people home.2ce\r\n"
                    }
                ],
                "title":"THE SHEPHERD OF LOVE"
            },
            {
                "hymnNumber":162,
                "stanzas":[
                    {
                        "hymnId":162,
                        "stanzaNumber":1,
                        "stanza":" I must tell Jesus all of my trials;\r\nI cannot bear these burdens alone;\r\nIn my distress He kindly will help me;\r\nHe ever loves and cares for His own.\r\nI must tell Jesus! I must tell Jesus!\r\nI cannot bear my burdens alone:\r\nI must tell Jesus! I must tell Jesus!\r\nJesus can help me, Jesus alone.\r"
                    },
                    {
                        "hymnId":162,
                        "stanzaNumber":2,
                        "stanza":" I must tell Jesus all of my troubles;\r\nHe is a kind, compassionate Friend;\r\nIf I but ask Him, He will deliver,\r\nMake of my troubles quickly an end.\r"
                    },
                    {
                        "hymnId":162,
                        "stanzaNumber":3,
                        "stanza":" Tempted and tried I need a great Saviour,\r\nOne who can help my burdens to bear;\r\nI must tell Jesus, I must tell Jesus;\r\nHe all my cares and sorrows will share.\r"
                    },
                    {
                        "hymnId":162,
                        "stanzaNumber":4,
                        "stanza":" O how the world to evil allures me!\r\nO how my heart is tempted to sin!\r\nI must tell Jesus, and He will help me\r\nOver the world the vict’ry to win.\r\n"
                    }
                ],
                "title":"ALMOST PERSUADED"
            },
            {
                "hymnNumber":163,
                "stanzas":[
                    {
                        "hymnId":163,
                        "stanzaNumber":1,
                        "stanza":" I need Thee ev’ry hour,\r\nMost gracious Lord;\r\nNo tender voice like Thine\r\nCan peace afford.\r\nI need Thee, oh, I need Thee,\r\nEv’ry hour I need Thee;\r\nOh, bless me now, my Saviour,\r\nI come to Thee!\r"
                    },
                    {
                        "hymnId":163,
                        "stanzaNumber":2,
                        "stanza":" I need Thee every hour,\r\nStay Thou near by;\r\nTemptations lose their power\r\nWhen Thou art nigh.\r"
                    },
                    {
                        "hymnId":163,
                        "stanzaNumber":3,
                        "stanza":" I need Thee every hour,\r\nIn joy or pain;\r\nCome quickly and abide,\r\nOr life is vain.\r"
                    },
                    {
                        "hymnId":163,
                        "stanzaNumber":4,
                        "stanza":" I need Thee every hour,\r\nTeach me Thy will;\r\nAnd Thy rich promises\r\nIn me fulfil.\r"
                    },
                    {
                        "hymnId":163,
                        "stanzaNumber":5,
                        "stanza":" I need Thee every hour,\r\nMost Holy One;\r\nOh, make me Thine indeed,\r\nThou blessed Son!\r\n"
                    }
                ],
                "title":"MY GOD, IS ANY HOUR SO SWEET?"
            },
            {
                "hymnNumber":164,
                "stanzas":[
                    {
                        "hymnId":164,
                        "stanzaNumber":1,
                        "stanza":" What a Friend we have in Jesus,\r\nAll our sins and griefs to bear;\r\nWhat a privilege to carry\r\nEv’rything to God in prayer.\r\nOh, what peace we often forfeit,\r\nOh, what needless pain we bear -\r\nAll because we do not carry\r\nEv’rything to God in prayer.\r"
                    },
                    {
                        "hymnId":164,
                        "stanzaNumber":2,
                        "stanza":" Have we trials and temptations?\r\nIs there trouble anywhere?\r\nWe should never be discouraged,\r\nTake it to the Lord in prayer.\r\nCan we find a Friend so faithful,\r\nWho will all our sorrows share?\r\nJesus knows our every weakness,\r\nTake it to the Lord in prayer.\r"
                    },
                    {
                        "hymnId":164,
                        "stanzaNumber":3,
                        "stanza":" Are we weak and heavy laden,\r\nCumbered with a load of care?\r\nPrecious Saviour, still our refuge, -\r\nTake it to the Lord in prayer.\r\nDo thy friends despise, forsake thee?\r\nTake it to the Lord in prayer;\r\nIn His arms He’ll take and shield thee,\r\nThou wilt find a solace there.\r\n"
                    }
                ],
                "title":"PRAYER IS THE SOUL’S SINCERE DESIRE"
            },
            {
                "hymnNumber":165,
                "stanzas":[
                    {
                        "hymnId":165,
                        "stanzaNumber":1,
                        "stanza":" Sweet hour of prayer! sweet hour of prayer!\r\nThat calls me from a world of care\r\nAnd bids me at my Father’s throne\r\nMake all my wants and wishes known;\r\nIn seasons of distress and grief,\r\nMy soul has often found relief,\r\nAnd oft escaped the tempter’s snare\r\nBy thy return, sweet hour of prayer.\r"
                    },
                    {
                        "hymnId":165,
                        "stanzaNumber":2,
                        "stanza":" Sweet hour of prayer! sweet hour of prayer!\r\nThy wings shall my petition bear\r\nTo Him whose truth and faithfulness\r\nEngage the waiting soul to bless;\r\nAnd since He bids me seek His face,\r\nBelieve His Word and trust His grace,\r\nI’ll cast on Him my every care,\r\nAnd wait for thee, sweet hour of prayer.\r"
                    },
                    {
                        "hymnId":165,
                        "stanzaNumber":3,
                        "stanza":" Sweet hour of prayer! sweet hour of prayer!\r\nMay I thy consolation share,\r\nTill, from Mount Pisgah’s lofty height,\r\nI view my home, and take my flight:\r\nThis robe of flesh I’ll drop, and rise\r\nTo seize the everlasting prize;\r\nAnd shout, while passing through the air,\r\nFarewell, farewell, sweet hour of prayer.\r\n"
                    }
                ],
                "title":"GUIDE ME, O THOU GREAT JEHOVAH"
            },
            {
                "hymnNumber":166,
                "stanzas":[
                    {
                        "hymnId":166,
                        "stanzaNumber":1,
                        "stanza":" Pass me not, O gentle Saviour,\r\nHear my humble cry;\r\nWhile on others Thou art calling,\r\nDo not pass me by.\r\nSaviour, Saviour,\r\nHear my humble cry;\r\nWhile on others Thou art calling,\r\nDo not pass me by.\r"
                    },
                    {
                        "hymnId":166,
                        "stanzaNumber":2,
                        "stanza":" Let me at Thy throne of mercy,\r\nFind a sweet relief;\r\nKneeling there in deep contrition,\r\nHelp my unbelief.\r"
                    },
                    {
                        "hymnId":166,
                        "stanzaNumber":3,
                        "stanza":" Trusting only in Thy merit,\r\nWould I seek Thy face;\r\nHeal my wounded, broken spirit,\r\nSave me by Thy grace.\r"
                    },
                    {
                        "hymnId":166,
                        "stanzaNumber":4,
                        "stanza":" Thou the spring of all my comfort,\r\nMore than life to me,\r\nWhom have I on earth beside Thee?\r\nWhom in heaven but Thee?\r\n"
                    }
                ],
                "title":"DID YOU THINK TO PRAY?"
            },
            {
                "hymnNumber":167,
                "stanzas":[
                    {
                        "hymnId":167,
                        "stanzaNumber":1,
                        "stanza":" When the trumpet of the Lord shall sound,\r\nand time shall be no more,\r\nAnd the morning breaks, eternal, bright and fair;\r\nWhen the saved of earth shall gather over on the\r\nother shore,\r\nAnd the roll is called up yonder, I’ll be there.\r\nWhen the roll... is called up yon... der,\r\nWhen the roll....... is called up yon... der,\r\nWhen the roll... is called up yon... der,\r\nWhen the roll is called up yonder, I’ll be there.\r"
                    },
                    {
                        "hymnId":167,
                        "stanzaNumber":2,
                        "stanza":" On that bright and cloudless morning\r\nwhen the dead in Christ shall rise,\r\nAnd the glory of His resurrection share;\r\nWhen His chosen ones shall gather to their\r\nhome beyond the skies,\r\nAnd the roll is called up yonder, I’ll be there.\r"
                    },
                    {
                        "hymnId":167,
                        "stanzaNumber":3,
                        "stanza":" Let us labour for the Master from the dawn\r\ntill setting sun,\r\nLet us talk of all His wondrous love and care,\r\nThen, when all of life is over, and our work\r\non earth is done,\r\nAnd the roll is called up yonder, I’ll be there.\r\n"
                    }
                ],
                "title":"MUST TELL JESUS"
            },
            {
                "hymnNumber":168,
                "stanzas":[
                    {
                        "hymnId":168,
                        "stanzaNumber":1,
                        "stanza":" Jesus may come today, Glad day! Glad day!\r\nAnd I would see my Friend;\r\nDangers and troubles would end\r\nIf Jesus should come today.\r\nGlad day! Glad day!\r\nIs it the crowning day?\r\nI’ll live for today, nor anxious be,\r\nJesus, my Lord, I soon shall see;\r\nGlad day! Glad day!\r\nIs it the crowning day?\r"
                    },
                    {
                        "hymnId":168,
                        "stanzaNumber":2,
                        "stanza":" I may go home today, Glad day! Glad day!\r\nSeemeth I hear their song;\r\nHail to the radiant throng!\r\nIf I should go home today.\r"
                    },
                    {
                        "hymnId":168,
                        "stanzaNumber":3,
                        "stanza":" Why should I anxious be? Glad day! Glad day!\r\nLights appear on the shore,\r\nStorms will affright nevermore,\r\nFor He is ‘‘at hand” today.\r"
                    },
                    {
                        "hymnId":168,
                        "stanzaNumber":4,
                        "stanza":" Faithful I’ll be today, Glad day! Glad day!\r\nAnd I will freely tell\r\nWhy I should love Him so well,\r\nFor He is my all today.\r\n"
                    }
                ],
                "title":"NEED THEE EVERY HOUR"
            },
            {
                "hymnNumber":169,
                "stanzas":[
                    {
                        "hymnId":169,
                        "stanzaNumber":1,
                        "stanza":" Marvelous message we bring,\r\nGlorious carol we sing,\r\nWonderful word of the King:\r\nJesus is coming again!...\r\nComing again, coming again;\r\nMay be morning, may be noon,\r\nMay be evening and may be soon!\r\nComing again, coming again;\r\nO what a wonderful day it will be!\r\nJesus is coming again!\r"
                    },
                    {
                        "hymnId":169,
                        "stanzaNumber":2,
                        "stanza":" Forest and flower exclaim,\r\nMountain and meadow the same,\r\nAll earth and heaven proclaim:\r\nJesus is coming again!...\r"
                    },
                    {
                        "hymnId":169,
                        "stanzaNumber":3,
                        "stanza":" Standing before Him at last,\r\nTrial and trouble all past,\r\nCrowns at His feet we will cast:\r\nJesus is coming again!...\r\n"
                    }
                ],
                "title":"WHAT A FRIEND WE HAVE IN JESUS"
            },
            {
                "hymnNumber":170,
                "stanzas":[
                    {
                        "hymnId":170,
                        "stanzaNumber":1,
                        "stanza":" Lift up your heads, pilgrims aweary,\r\nSee day’s approach now crimson the sky;\r\nNight shadows flee, and your Beloved,\r\nAwaited with longing, at last draweth nigh.\r\nHe is coming again, He is coming again,\r\nThe very same Jesus, rejected of men;\r\nHe is coming again, He is coming again,\r\nWith pow’r and great glory, He is coming again!\r"
                    },
                    {
                        "hymnId":170,
                        "stanzaNumber":2,
                        "stanza":" Dark was the night, sin warred against us!\r\nHeavy the load of sorrow we bore;\r\nBut now we see signs of His coming; -\r\nOur hearts glow within us, joy’s cup runneth o’er!\r"
                    },
                    {
                        "hymnId":170,
                        "stanzaNumber":3,
                        "stanza":" O blessed hope! O blissful promise!\r\nFilling our hearts with rapture divine;\r\nO day of days! hail Thy appearing!\r\nThy transcendent glory forever shall shine!\r"
                    },
                    {
                        "hymnId":170,
                        "stanzaNumber":4,
                        "stanza":" Even so, come, precious Lord Jesus;\r\nCreation waits redemption to see;\r\nCaught up in clouds, soon we shall meet Thee;\r\nO blessed assurance, forever with Thee!\r\n"
                    }
                ],
                "title":"SWEET HOUR OF PRAYER"
            },
            {
                "hymnNumber":171,
                "stanzas":[
                    {
                        "hymnId":171,
                        "stanzaNumber":1,
                        "stanza":" It may be at morn, when the day is awaking,\r\nWhen sunlight thro’ darkness and shadow is breaking,\r\nThat Jesus will come in the fulness of glory,\r\nTo receive from the world “His own.”\r\nO Lord Jesus, how long, how long,\r\nEre we shout the glad song,\r\nChrist returneth!\r\nHallelujah! hallelujah! Amen,\r\nHallelujah! Amen.\r"
                    },
                    {
                        "hymnId":171,
                        "stanzaNumber":2,
                        "stanza":" It may be at mid-day, it may be at twilight,\r\nIt may be, per chance, that the blackness of midnight\r\nWill burst into light in the blaze of His glory,\r\nWhen Jesus receives “His own.”\r"
                    },
                    {
                        "hymnId":171,
                        "stanzaNumber":3,
                        "stanza":" While its hosts cry Hosanna, from heaven descending,\r\nWith glorified saints and the angels attending,\r\nWith grace on His brow, like a halo of glory,\r\nWill Jesus receive “His own.”\r"
                    },
                    {
                        "hymnId":171,
                        "stanzaNumber":4,
                        "stanza":" Oh, joy! oh, delight! should we go without dying,\r\nNo sickness, no sadness, no dread and no crying,\r\nCaught up thro’ the clouds with our Lord into glory,\r\nWhen Jesus receives “His own.”\r\n"
                    }
                ],
                "title":"PASS ME NOT"
            },
            {
                "hymnNumber":172,
                "stanzas":[
                    {
                        "hymnId":172,
                        "stanzaNumber":1,
                        "stanza":" Search me, O God, and know my heart today;\r\nTry me, O Lord, and know my thoughts I pray;\r\nSee if there be some wicked way in me,\r\nCleanse me from ev’ry sin and set me free.\r"
                    },
                    {
                        "hymnId":172,
                        "stanzaNumber":2,
                        "stanza":" I praise Thee, Lord for cleansing me from sin;\r\nFulfil Thy Word, and make me pure within;\r\nFill me with fire, where once I burned with shame\r\nGrant my desire to magnify Thy name.\r"
                    },
                    {
                        "hymnId":172,
                        "stanzaNumber":3,
                        "stanza":" Lord, take my life, and make it wholly Thine;\r\nFill my poor heart with Thy great love divine;\r\nTake all my will, my passion, self and pride;\r\nI now surrender - Lord, in me abide.\r"
                    },
                    {
                        "hymnId":172,
                        "stanzaNumber":4,
                        "stanza":" O Holy Ghost, revival comes from Thee;\r\nSend a revival - start the work in me:\r\nThy Word declares Thou wilt supply our need;\r\nFor blessing now, O Lord, I humbly plead.\r\n"
                    }
                ],
                "title":"WHEN THE ROLL IS CALLED UP YONDER"
            },
            {
                "hymnNumber":173,
                "stanzas":[
                    {
                        "hymnId":173,
                        "stanzaNumber":1,
                        "stanza":" Like the woman at the well I was seeking\r\nFor things that could not satisfy;\r\nAnd then I heard my Saviour speaking:\r\n“Draw from My well that never shall run dry.”\r\nFill my cup, Lord, - I lift it up, Lord!\r\nCome and quench this thirsting of my soul;\r\nBread of heaven, feed me till I want no more -\r\nFill my cup, fill it up and make me whole!\r"
                    },
                    {
                        "hymnId":173,
                        "stanzaNumber":2,
                        "stanza":" There are millions in this world who are craving\r\nThe pleasure earthly things afford;\r\nBut none can match the wondrous treasure\r\nThat I find in Jesus Christ my Lord.\r"
                    },
                    {
                        "hymnId":173,
                        "stanzaNumber":3,
                        "stanza":" So, my brother, if the things this world gave you\r\nLeave hungers that won’t pass away;\r\nMy blessed Lord will come and save you,\r\nIf you kneel to Him and humbly pray:\r\n"
                    }
                ],
                "title":"IS IT THE CROWNING DAY?"
            },
            {
                "hymnNumber":174,
                "stanzas":[
                    {
                        "hymnId":174,
                        "stanzaNumber":1,
                        "stanza":" I’m pressing on the upward way,\r\nNew heights I’m gaining ev’ry day;\r\nStill praying as I onward bound,\r\n“Lord, plant my feet on higher ground.”\r\nLord, lift me up and let me stand,\r\nBy faith, on heaven’s table-land;\r\nWhere love, and joy, and light abound,\r\nLord, plant my feet on higher ground.\r"
                    },
                    {
                        "hymnId":174,
                        "stanzaNumber":2,
                        "stanza":" My heart has no desire to stay\r\nWhere doubts arise, and fears dismay;\r\nThough some may dwell where these abound,\r\nMy constant aim is higher ground.\r"
                    },
                    {
                        "hymnId":174,
                        "stanzaNumber":3,
                        "stanza":" Beyond the mist I fain would rise,\r\nTo rest beneath unclouded skies,\r\nAbove earth’s turmoil peace is found,\r\nBy those who dwell on higher ground.\r"
                    },
                    {
                        "hymnId":174,
                        "stanzaNumber":4,
                        "stanza":" I long to scale the utmost height,\r\nThough rough the way, and hard the fight,\r\nMy song, while climbing, shall resound,\r\nLord, lead me on to higher ground.\r"
                    },
                    {
                        "hymnId":174,
                        "stanzaNumber":5,
                        "stanza":" Lord, lead me up the mountain side,\r\nI dare not climb without my Guide;\r\nAnd, heaven gained, I’ll gaze around,\r\nWith grateful heart from higher ground.\r\n"
                    }
                ],
                "title":"JESUS IS COMING AGAIN"
            },
            {
                "hymnNumber":175,
                "stanzas":[
                    {
                        "hymnId":175,
                        "stanzaNumber":1,
                        "stanza":" Since the Son hath made me free,\r\nLet me taste my liberty;\r\nThee behold with open face,\r\nTriumph in Thy saving grace,\r\nThy great will delight to prove,\r\nGlory in Thy perfect love.\r"
                    },
                    {
                        "hymnId":175,
                        "stanzaNumber":2,
                        "stanza":" Abba, Father, hear Thy child,\r\nLate in Jesus reconciled;\r\nHear, and all the graces shower,\r\nAll the joy, and peace, and power,\r\nAll my Saviour asks above,\r\nAll the life and heaven of love.\r"
                    },
                    {
                        "hymnId":175,
                        "stanzaNumber":3,
                        "stanza":" Heavenly Adam, Life divine,\r\nChange my nature into Thine;\r\nMove and spread throughout my soul,\r\nActuate and fill the whole;\r\nBe it I no longer now\r\nLiving in the flesh, but Thou.\r"
                    },
                    {
                        "hymnId":175,
                        "stanzaNumber":4,
                        "stanza":" Holy Ghost, no more delay;\r\nCome, and in Thy temple stay;\r\nNow Thine inward witness bear,\r\nStrong, and permanent, and clear;\r\nSpring of life, Thyself impart,\r\nRise eternal in my heart.\r\nAmen.\r\n"
                    }
                ],
                "title":"HE IS COMING AGAIN"
            },
            {
                "hymnNumber":176,
                "stanzas":[
                    {
                        "hymnId":176,
                        "stanzaNumber":1,
                        "stanza":" All things are possible to him\r\nThat can in Jesus’ name believe;\r\nLord, I no more Thy name blaspheme,\r\nThy truth I lovingly receive.\r\nI can, I do believe in Thee;\r\nAll things are possible to me.\r"
                    },
                    {
                        "hymnId":176,
                        "stanzaNumber":2,
                        "stanza":" ’Twas most impossible of all\r\nThat here sin’s reign in me should cease;\r\nYet shall it be, I know it shall;\r\nJesus, I trust Thy faithfulness!\r\nIf nothing is too hard for Thee,\r\nAll things are possible to me.\r"
                    },
                    {
                        "hymnId":176,
                        "stanzaNumber":3,
                        "stanza":" Though earth and hell the Word gainsay,\r\nThe Word of God shall never fail;\r\nThe Lord can break sin’s iron sway;\r\n’Tis certain, though impossible.\r\nThe thing impossible shall be,\r\nAll things are possible to me.\r"
                    },
                    {
                        "hymnId":176,
                        "stanzaNumber":4,
                        "stanza":" All things are possible to God;\r\nTo Christ, the power of God in man;\r\nTo me when I am all renewed,\r\nIn Christ am fully formed again.\r\nAnd from the reign of sin set free, -\r\nAll things are possible to me.\r"
                    },
                    {
                        "hymnId":176,
                        "stanzaNumber":5,
                        "stanza":" All things are possible to God;\r\nTo Christ, the power of God in me;\r\nNow shed Thy mighty Self abroad,\r\nLet me no longer live, but Thee;\r\nGive me this hour in Thee to prove\r\nThe sweet omnipotence of love.\r\n"
                    }
                ],
                "title":"CHRIST RETURNETH"
            },
            {
                "hymnNumber":177,
                "stanzas":[
                    {
                        "hymnId":177,
                        "stanzaNumber":1,
                        "stanza":" Blessed are the pure in heart,\r\nThey have learned the angel art,\r\nWhile on earth in heaven to be,\r\nGod, by sense unseen, to see.\r\nCleansed from sin’s offensive stain,\r\nFellowship with Him they gain;\r\nNearness, likeness to their Lord,\r\nTheir exceeding great reward.\r"
                    },
                    {
                        "hymnId":177,
                        "stanzaNumber":2,
                        "stanza":" Worshipping in spirit now,\r\nIn His inner court they bow-\r\nBow before the brightening veil,\r\nGod’s own radiance through it hail.\r\nSerious, simple of intent,\r\nTeachably intelligent,\r\nRapt, they search the written Word\r\nTill His very voice is heard.\r"
                    },
                    {
                        "hymnId":177,
                        "stanzaNumber":3,
                        "stanza":" In creation Him they own,\r\nMeet Him in its haunts, alone;\r\nMost amidst its Sabbath calm,\r\nMorning light and evening balm.\r\nHim they still through busier life\r\nTrust in pain, and care, and strife;\r\nThese, like clouds, o’er noontide blaze,\r\nTemper, not conceal, His rays.\r"
                    },
                    {
                        "hymnId":177,
                        "stanzaNumber":4,
                        "stanza":" Hallowed thus their every breath:\r\nDying, they shall not see death,\r\nWith the Lord in paradise,\r\nTill, like His, their bodies rise.\r\nNearer than the seraphim\r\nIn their flesh shall saints see Him,\r\nWith the Father, in the Son,\r\nThrough the Spirit, ever one.\r\n"
                    }
                ],
                "title":"SEARCH ME, O GOD"
            },
            {
                "hymnNumber":178,
                "stanzas":[
                    {
                        "hymnId":178,
                        "stanzaNumber":1,
                        "stanza":" Come, O my God, the promise seal,\r\nThis mountain, sin, remove;\r\nNow in my fainting soul reveal\r\nThe virtue of Thy love.\r"
                    },
                    {
                        "hymnId":178,
                        "stanzaNumber":2,
                        "stanza":" I want Thy life, Thy purity,\r\nThy righteousness brought in;\r\nI ask, desire, and trust in Thee,\r\nTo be redeemed from sin.\r"
                    },
                    {
                        "hymnId":178,
                        "stanzaNumber":3,
                        "stanza":" Anger and sloth, desire and pride,\r\nThis moment be subdued;\r\nBe cast into the crimson tide\r\nOf my Redeemer’s blood!\r"
                    },
                    {
                        "hymnId":178,
                        "stanzaNumber":4,
                        "stanza":" Saviour, to Thee my soul looks up,\r\nMy present Saviour Thou!\r\nIn all the confidence of hope,\r\nI claim the blessing now.\r"
                    },
                    {
                        "hymnId":178,
                        "stanzaNumber":5,
                        "stanza":" ’Tis done! Thou does this moment\r\nWith full salvation bless;\r\nRedemption through Thy blood I have,\r\nSave, and spotless love and peace.\r\n"
                    }
                ],
                "title":"FILL MY CUP, LORD"
            },
            {
                "hymnNumber":179,
                "stanzas":[
                    {
                        "hymnId":179,
                        "stanzaNumber":1,
                        "stanza":" Saviour from sin, I wait to prove\r\nThat Jesus is Thy healing name;\r\nTo lose, when perfected in love,\r\nWhate’er I have, or can, or am\r\nI stay me on Thy faithful word:\r\nThe servant shall be as his Lord.\r"
                    },
                    {
                        "hymnId":179,
                        "stanzaNumber":2,
                        "stanza":" Answer that gracious end in me\r\nFor which Thy precious life was given;\r\nRedeem from all iniquity;\r\nRestore, and make me meet for heaven:\r\nUnless Thou purge my every stain,\r\nThy suffering and my faith are vain.\r"
                    },
                    {
                        "hymnId":179,
                        "stanzaNumber":3,
                        "stanza":" Didst Thou not die that I might live\r\nNo longer to myself, but Thee,\r\nMight body, soul, and spirit give\r\nTo Him who gave Himself for me?\r\nCome then, my Master and my God,\r\nTake the dear purchase of Thy blood.\r"
                    },
                    {
                        "hymnId":179,
                        "stanzaNumber":4,
                        "stanza":" Thy own peculiar servant claim,\r\nFor Thy own truth and mercy’s sake;\r\nHallow in me Thy glorious name;\r\nMe for Thine own this moment take,\r\nAnd change, and throughly purify;\r\nThine only may I live and die.\r\n"
                    }
                ],
                "title":"HIGHER GROUND"
            },
            {
                "hymnNumber":180,
                "stanzas":[
                    {
                        "hymnId":180,
                        "stanzaNumber":1,
                        "stanza":" The thing my God doth hate\r\nThat I no more may do,\r\nThy creature, Lord, again create,\r\nAnd all my soul renew.\r"
                    },
                    {
                        "hymnId":180,
                        "stanzaNumber":2,
                        "stanza":" My soul shall then, like Thine,\r\nAbhor the thing unclean,\r\nAnd, sanctified by love divine,\r\nFor ever cease from sin.\r"
                    },
                    {
                        "hymnId":180,
                        "stanzaNumber":3,
                        "stanza":" That blessed law of Thine,\r\nJesus, to me impart;\r\nThe Spirit’s law of life divine,\r\nO write it in my heart!\r"
                    },
                    {
                        "hymnId":180,
                        "stanzaNumber":4,
                        "stanza":" Implant it deep within,\r\nWhence it may ne’er remove,\r\nThe law of liberty from sin,\r\nThe perfect law of love.\r"
                    },
                    {
                        "hymnId":180,
                        "stanzaNumber":5,
                        "stanza":" Thy nature be my law,\r\nThy spotless sanctity,\r\nAnd sweetly every moment draw\r\nMy happy soul to Thee.\r"
                    },
                    {
                        "hymnId":180,
                        "stanzaNumber":6,
                        "stanza":" Soul of my life remain!\r\nWho didst for all fulfil,\r\nIn me, O Lord, fulfil again\r\nThy heavenly Father’s will!\r"
                    },
                    {
                        "hymnId":180,
                        "stanzaNumber":7,
                        "stanza":"6. GOD OF ALL POWER, AND TRUTH, & GRACE\r"
                    },
                    {
                        "hymnId":180,
                        "stanzaNumber":8,
                        "stanza":" God of all power, and truth, and grace,\r\nWhich shall from age to age endure,\r\nWhose word, when heaven and earth shall pass,\r\nRemains and stands for ever sure.\r"
                    },
                    {
                        "hymnId":180,
                        "stanzaNumber":9,
                        "stanza":" That I Thy mercy may proclaim,\r\nThat all mankind Thy truth may see,\r\nHallow Thy great and glorious name,\r\nAnd perfect holiness in me.\r"
                    },
                    {
                        "hymnId":180,
                        "stanzaNumber":10,
                        "stanza":" Purge me from every evil blot;\r\nMy idols all be cast aside;\r\nCleanse me from every sinful thought,\r\nFrom all the filth of self and pride.\r"
                    },
                    {
                        "hymnId":180,
                        "stanzaNumber":11,
                        "stanza":" Give me a new, a perfect heart,\r\nFrom doubt, and fear, and sorrow free;\r\nThe mind which was in Christ impart,\r\nAnd let my spirit cleave to Thee.\r"
                    },
                    {
                        "hymnId":180,
                        "stanzaNumber":12,
                        "stanza":" O that I now, from sin released,\r\nThy word may to the utmost prove,\r\nEnter into the promised rest,\r\nThe Canaan of Thy perfect love! Amen.\r\n"
                    }
                ],
                "title":"SINCE THE SON HATH MADE ME FREE"
            },
            {
                "hymnNumber":181,
                "stanzas":[
                    {
                        "hymnId":181,
                        "stanzaNumber":1,
                        "stanza":" Jesus, all-atoning Lamb,\r\nThine, and only Thine, I am:\r\nTake my body, spirit, soul;\r\nOnly Thou possess the whole.\r"
                    },
                    {
                        "hymnId":181,
                        "stanzaNumber":2,
                        "stanza":" Thou my one thing needful be;\r\nLet me ever cleave to Thee;\r\nLet me choose the better part;\r\nLet me give Thee all my heart.\r"
                    },
                    {
                        "hymnId":181,
                        "stanzaNumber":3,
                        "stanza":" Fairer than the sons of men,\r\nDo not let me turn again,\r\nLeave the fountain-head of bliss,\r\nStoop to creature-happiness.\r"
                    },
                    {
                        "hymnId":181,
                        "stanzaNumber":4,
                        "stanza":" Whom have I on earth below?\r\nThee, and only Thee, I know;\r\nWhom have I in heaven but Thee?\r\nThou art all in all to me.\r"
                    },
                    {
                        "hymnId":181,
                        "stanzaNumber":5,
                        "stanza":" All my treasure is above,\r\nAll my riches is Thy love:\r\nWho the worth of love can tell?\r\nInfinite, unsearchable.\r\n"
                    }
                ],
                "title":"ALL THINGS ARE POSSIBLE"
            },
            {
                "hymnNumber":182,
                "stanzas":[
                    {
                        "hymnId":182,
                        "stanzaNumber":1,
                        "stanza":" O Lord, how happy should we be\r\nIf we could cast our care on Thee,\r\nIf we from self could rest,\r\nAnd feel at heart that One above,\r\nIn perfect wisdom, perfect love\r\nIs working for the best.\r"
                    },
                    {
                        "hymnId":182,
                        "stanzaNumber":2,
                        "stanza":" How far from this our daily life,\r\nEver disturbed by anxious strife,\r\nBy sudden wild alarms.\r\nO could we but relinquish all\r\nOur earthly props, and simply fall\r\nOn Thine almighty arms.\r"
                    },
                    {
                        "hymnId":182,
                        "stanzaNumber":3,
                        "stanza":" Could we but kneel and cast our load,\r\nE’en while we pray, upon our God,\r\nThen rise with lightened cheer,\r\nSure that the Father, who is nigh\r\nTo still the famished raven’s cry,\r\nWill hear, in that we fear.\r"
                    },
                    {
                        "hymnId":182,
                        "stanzaNumber":4,
                        "stanza":" Lord, make these faithless hearts of ours\r\nThy lessons learn from birds and flowers:\r\nMake them from self to cease,\r\nLeave all things to a Father’s will,\r\nAnd taste, before Him lying still,\r\nE’en in affliction, peace.\r\n"
                    }
                ],
                "title":"BLESSED ARE THE PURE IN HEART"
            },
            {
                "hymnNumber":183,
                "stanzas":[
                    {
                        "hymnId":183,
                        "stanzaNumber":1,
                        "stanza":" Take time to be holy, speak oft with thy Lord;\r\nAbide in Him always, and feed on His Word;\r\nMake friends of God’s children help those who are weak;\r\nForgetting in nothing, His blessing to seek.\r"
                    },
                    {
                        "hymnId":183,
                        "stanzaNumber":2,
                        "stanza":" Take time to be holy, the world rushes on;\r\nSpend much time in secret with Jesus alone-\r\nBy looking to Jesus, like him thou shalt be;\r\nThy friends in thy conduct His likeness shall see.\r"
                    },
                    {
                        "hymnId":183,
                        "stanzaNumber":3,
                        "stanza":" Take time to be holy, let Him be thy Guide;\r\nAnd run not before Him, whatever betide;\r\nIn joy or in sorrow still follow thy Lord,\r\nAnd, looking to Jesus, still trust in His word.\r"
                    },
                    {
                        "hymnId":183,
                        "stanzaNumber":4,
                        "stanza":" Take time to be holy, be calm in thy soul;\r\nEach thought and each temper beneath His control:\r\nThus led by His Spirit to fountains of love,\r\nThou soon shalt be fitted for service above.\r\n"
                    }
                ],
                "title":"COME, O MY GOD, THE PROMISE SEAL"
            },
            {
                "hymnNumber":184,
                "stanzas":[
                    {
                        "hymnId":184,
                        "stanzaNumber":1,
                        "stanza":" “Called unto holiness,” Church of our God,\r\nPurchased of Jesus, redeemed by His blood;\r\nCalled from the world and its idols to flee,\r\nCalled from the bondage of sin to be free.\r\n“Holiness unto the Lord,” is our\r\nwatchword and song,\r\n“Holiness unto the Lord,” as we’re\r\nmarching along:\r\nSing. . . it, shout it, loud . . .and long,\r\n“Holiness unto the Lord,” now and for ever.\r"
                    },
                    {
                        "hymnId":184,
                        "stanzaNumber":2,
                        "stanza":" “Called unto holiness,” children of Light,\r\nWalking with Jesus in garments of white;\r\nRaiment unsullied, nor tarnished with sin,\r\nGod’s Holy Spirit abiding within.\r"
                    },
                    {
                        "hymnId":184,
                        "stanzaNumber":3,
                        "stanza":" “Called unto holiness,” praise His dear name,\r\nThis blessed secret to faith now made plain,\r\nNot our own righteousness, but Christ within,\r\nLiving and reigning, and saving from sin.\r"
                    },
                    {
                        "hymnId":184,
                        "stanzaNumber":4,
                        "stanza":" “Called unto holiness,” glorious thought!\r\nUp from the wilderness wanderings brought\r\nOut from the shadows and darkness of night\r\nInto the Canaan of perfect delight.\r"
                    },
                    {
                        "hymnId":184,
                        "stanzaNumber":5,
                        "stanza":" “Called unto holiness,” Bride of the Lamb,\r\nWaiting the Bridegroom’s returning again;\r\nLift up your heads, for the day draweth near.\r\nWhen in His beauty the King shall appear.\r\n"
                    }
                ],
                "title":"SAVIOUR FROM SIN, I WAIT TO PROVE"
            },
            {
                "hymnNumber":185,
                "stanzas":[
                    {
                        "hymnId":185,
                        "stanzaNumber":1,
                        "stanza":" Come Holy Ghost, all-quickening fire!\r\nCome, and my hallowed heart inspire,\r\nSprinkled with the atoning blood;\r\nNow to my soul Thyself reveal,\r\nThy mighty working let me feel,\r\nAnd know that I am born of God.\r"
                    },
                    {
                        "hymnId":185,
                        "stanzaNumber":2,
                        "stanza":" Humble, and teachable, and mild,\r\nO may I, as a little child,\r\nMy lowly Master’s steps pursue!\r\nBe anger to my soul unknown,\r\nHate, envy, jealousy, be gone;\r\nIn love create Thou all things new.\r"
                    },
                    {
                        "hymnId":185,
                        "stanzaNumber":3,
                        "stanza":" Let earth no more my heart divide,\r\nWith Christ may I be crucified,\r\nTo Thee with my whole soul aspire;\r\nDead to the world and all its toys,\r\nIts idle pomp, and fading joys,\r\nBe Thou alone my one desire.\r"
                    },
                    {
                        "hymnId":185,
                        "stanzaNumber":4,
                        "stanza":" My will be swallowed up in Thee;\r\nLight in Thy light still may I see,\r\nBeholding Thee with open face,\r\nCalled the full power of faith to prove,\r\nLet all my hallowed heart be love,\r\nAnd all my spotless life be praise\r\n"
                    }
                ],
                "title":"THE THING MY GOD DOTH HATE"
            },
            {
                "hymnNumber":187,
                "stanzas":[
                    {
                        "hymnId":187,
                        "stanzaNumber":1,
                        "stanza":" Another year is dawning-\r\nA path unknown, untried,\r\n’Twould fill me with foreboding,\r\nHad I no hand to guide;\r\nBut He who walked beside me\r\nAll through the yesteryear,\r\nWhatever may betide me,\r\nHas promised to be near.\r\nSanctification/Special Occasion\r"
                    },
                    {
                        "hymnId":187,
                        "stanzaNumber":2,
                        "stanza":" Another year with Jesus!\r\nAh, then, no dread I know.\r\nHis love is ever precious,\r\nHowe’er the winds may blow.\r\nE’en when the storm is fiercest,\r\nIn Him my soul may rest,\r\nAnd find sweet peace and comfort\r\nUpon his loving breast.\r"
                    },
                    {
                        "hymnId":187,
                        "stanzaNumber":3,
                        "stanza":" Another year to trust Him -\r\nYes, I can trust Him still,\r\nWho never yet has failed me\r\nAs I have sought His will.\r\nHis rod and staff He giveth\r\nTo be my strength and stay,\r\nAnd tenderly He leadeth\r\nAlong the homeward way.\r"
                    },
                    {
                        "hymnId":187,
                        "stanzaNumber":4,
                        "stanza":" Another year to serve Him,\r\nTo labour for Him here,\r\nE’en while the shadows lengthen\r\nAnd night is drawing near.\r\nI know not when He’ll call me\r\nTo lay my sickle by-\r\nOh, may I then be faithful,\r\nWhile now the moments fly!\r"
                    },
                    {
                        "hymnId":187,
                        "stanzaNumber":5,
                        "stanza":" Another year to love Him,\r\nWhom I have loved so long;\r\nAnother year to praise Him\r\nIn glad triumphant song.\r\nWhate’er the future holdeth,\r\nOf sorrow, toil, or pain;\r\nHis precious Love endureth\r\nForevermore the same.\r"
                    },
                    {
                        "hymnId":187,
                        "stanzaNumber":6,
                        "stanza":" Another year with Jesus!\r\nI thank Thee, Lord, today\r\nFor Thy unfailing presence\r\nAlong life’s rugged way.\r\nGuide me, O blest Redeemer,\r\nTeach me to do Thy will,\r\nAnd Thy own perfect purpose\r\nIn me each day fulfil.\r\n"
                    }
                ],
                "title":"JESUS, ALL-ATONING LAMB"
            },
            {
                "hymnNumber":188,
                "stanzas":[
                    {
                        "hymnId":188,
                        "stanzaNumber":1,
                        "stanza":" O day of rest and gladness,\r\nO day of joy and light,\r\nO balm of care and sadness,\r\nMost beautiful, most bright!\r\nOn thee the high and lowly,\r\nThrough ages joined in tune,\r\nSing: holy, holy, holy,\r\nTo the great God Triune.\r"
                    },
                    {
                        "hymnId":188,
                        "stanzaNumber":2,
                        "stanza":" On thee, at the creation,\r\nThe light first had its birth;\r\nOn thee, for our salvation,\r\nChrist rose from depths of earth;\r\nOn thee, our Lord victorious\r\nThe Spirit sent from Heaven:\r\nAnd thus on thee most glorious\r\nA triple light was given.\r"
                    },
                    {
                        "hymnId":188,
                        "stanzaNumber":3,
                        "stanza":" Thou art a port protected\r\nFrom storms that round us rise;\r\nA garden intersected\r\nWith streams of paradise;\r\nThou art a cooling fountain\r\nIn life’s dry dreary sand;\r\nFrom thee, like Pisgah’s mountain,\r\nWe view our promised land.\r"
                    },
                    {
                        "hymnId":188,
                        "stanzaNumber":4,
                        "stanza":" Thou art a holy ladder,\r\nWhere angels go and come;\r\nEach Sunday finds us gladder,\r\nNearer to heaven, our home;\r\nA day of sweet reflection,\r\nThou art a day of love;\r\nA day of resurrection\r\nFrom earth to things above.\r"
                    },
                    {
                        "hymnId":188,
                        "stanzaNumber":5,
                        "stanza":" Today on weary nations\r\nThe heavenly manna falls;\r\nTo holy convocations\r\nThe silver trumpet calls,\r\nWhere gospel light is glowing\r\nWith pure and radiant beams.\r\nAnd living water flowing\r\nWith soul-refreshing streams.\r"
                    },
                    {
                        "hymnId":188,
                        "stanzaNumber":6,
                        "stanza":" New graces ever gaining,\r\nFrom, this our day of rest,\r\nWe reach the rest remaining\r\nTo spirits of the blest.\r\nTo Holy Ghost be praises,\r\nTo Father, and to Son;\r\nThe church her voice upraises\r\nTo Thee, blest Three in One.\r\n"
                    }
                ],
                "title":"LORD, HOW HAPPY SHOULD WE BE"
            },
            {
                "hymnNumber":189,
                "stanzas":[
                    {
                        "hymnId":189,
                        "stanzaNumber":1,
                        "stanza":" Another year is dawning!\r\nDear Father, let it be,\r\nIn working or in waiting,\r\nAnother year with Thee;\r\nAnother year of progress,\r\nAnother year of praise,\r\nAnother year of proving,\r\nThy presence all the days.\r"
                    },
                    {
                        "hymnId":189,
                        "stanzaNumber":2,
                        "stanza":" Another year of mercies,\r\nOf faithfulness and grace;\r\nAnother year of gladness\r\nThe glory of Thy face;\r\nAnother year of leaning\r\nUpon Thy loving breast;\r\nAnother year of trusting,\r\nOf quiet, happy rest;\r"
                    },
                    {
                        "hymnId":189,
                        "stanzaNumber":3,
                        "stanza":" Another year of service,\r\nOf witness for Thy love;\r\nAnother year of training\r\nFor holier work above.\r\nAnother year is dawning!\r\nDear Father, let it be,\r\nOn earth, or else in heaven,\r\nAnother year for Thee.\r\nThe Lord’s Love & Care\r\n"
                    }
                ],
                "title":"TAKE TIME TO BE HOLY"
            },
            {
                "hymnNumber":191,
                "stanzas":[
                    {
                        "hymnId":191,
                        "stanzaNumber":1,
                        "stanza":" Wonderful love that rescued me,\r\nSunk deep in sin,\r\nGuilty and vile as I could be -\r\nNo hope within;\r\nWhen ev’ry ray of light had fled,\r\nO glorious day!\r\nRaising my soul from out the dead,\r\nLove found a way.\r\nLove found a way.... to redeem my soul,...\r\nLove found a way ... that could make me whole;...\r\nLove sent my Lord ... to the cross of shame,\r\nLove found a way, O praise His holy name!\r"
                    },
                    {
                        "hymnId":191,
                        "stanzaNumber":2,
                        "stanza":" Love bro’t my Saviour here to die\r\nOn Calvary,\r\nFor such a sinful wretch as I,\r\nHow can it be?\r\nLove bridged the gulf ’twixt me and heav’n,\r\nTaught me to pray;\r\nI am redeemed, set free, forgiv’n,\r\nLove found a way.\r"
                    },
                    {
                        "hymnId":191,
                        "stanzaNumber":3,
                        "stanza":" Love opened wide the gates of light\r\nTo heav’n’s domain,\r\nWhere in eternal pow’r and might\r\nJesus shall reign;\r\nLove lifted me from depths of woe\r\nTo endless day,\r\nThere was no help in earth below,\r\nLove found a way.\r\n"
                    }
                ],
                "title":"COME, HOLY GHOST, ALL-QUICKENING FIRE!"
            },
            {
                "hymnNumber":192,
                "stanzas":[
                    {
                        "hymnId":192,
                        "stanzaNumber":1,
                        "stanza":" I do not ask to see the way\r\nMy feet will have to tread;\r\nBut only that my soul may feed\r\nUpon the living Bread.\r\n’Tis better far that I should walk\r\nBy faith close to His side -\r\nI may not know the way I go,\r\nBut oh, I know my Guide.\r\nHis love ..... can never fail,\r\nHis love ..... can never fail;\r\nMy soul is satisfied to know\r\nHis love can never fail.\r"
                    },
                    {
                        "hymnId":192,
                        "stanzaNumber":2,
                        "stanza":" And if my feet would go astray,\r\nThey cannot, for I know,\r\nThat Jesus guides my falt’ring steps.\r\nAs joyfully I go,\r\nAnd tho’ I may not see His face,\r\nMy faith is strong and clear,\r\nThat in each hour of sore distress\r\nMy Saviour will be near.\r"
                    },
                    {
                        "hymnId":192,
                        "stanzaNumber":3,
                        "stanza":" I will not fear, tho’ darkness come\r\nAbroad o’er all the land,\r\nIf I may only feel the touch\r\nOf His own loving hand.\r\nAnd tho’ I tremble when I think\r\nHow weak I am, how frail,\r\nMy soul is satisfied to know\r\nHis love can never fail.\r\n"
                    }
                ],
                "title":"FOR A HEART TO PRAISE MY GOD"
            },
            {
                "hymnNumber":193,
                "stanzas":[
                    {
                        "hymnId":193,
                        "stanzaNumber":1,
                        "stanza":" God has shown His loving face\r\nFrom His throne in heav’n above:\r\nAnd I’ve found a resting-place,\r\nIn the shelter of His love.\r\nI am resting, resting,\r\nResting sweetly resting in His love;\r\nI am resting in His love,\r\nResting in the shelter of His love.\r\nThe Lord’s Love & Care\r"
                    },
                    {
                        "hymnId":193,
                        "stanzaNumber":2,
                        "stanza":" When the cares of life oppress,\r\nWhen the sky is dark above;\r\nI can always find a rest,\r\nIn the shelter of His love.\r"
                    },
                    {
                        "hymnId":193,
                        "stanzaNumber":3,
                        "stanza":" O, if you were never blest,\r\nWith this peace from heav’n above;\r\nThere’s for you a wondrous rest,\r\nIn the shelter of His love.\r\n"
                    }
                ],
                "title":"ANOTHER YEAR"
            },
            {
                "hymnNumber":194,
                "stanzas":[
                    {
                        "hymnId":194,
                        "stanzaNumber":1,
                        "stanza":" There were ninety and nine that safely lay\r\nIn the shelter of the fold,\r\nBut one was out on the hills away,\r\nFar off from the gates of gold -\r\nAway on the mountains wild and bare,\r\nAway from the tender Shepherd’s care,\r\nAway from the tender Shepherd’s care.\r"
                    },
                    {
                        "hymnId":194,
                        "stanzaNumber":2,
                        "stanza":" “Lord, Thou hast here Thy ninety and nine;\r\nAre they not enough for Thee?”\r\nBut the Shepherd made answer:\r\n“This of Mine has wandered away from Me;\r\nAnd although the road be rough and steep,\r\nI go to the desert to find My sheep,\r\nI go to the desert to find My sheep.”\r"
                    },
                    {
                        "hymnId":194,
                        "stanzaNumber":3,
                        "stanza":" But none of the ransomed ever knew\r\nHow deep were the waters crossed;\r\nNor how dark was the night that the Lord passed thro’\r\nEre He found His sheep that was lost;\r\nOut in the desert He heard its cry -\r\nSick and helpless, and ready to die,\r\nSick and helpless, and ready to die.\r"
                    },
                    {
                        "hymnId":194,
                        "stanzaNumber":4,
                        "stanza":" “Lord, whence are those blood-drops all the way\r\nThat mark out the mountain’s track?”\r\n“They were shed for one who had gone astray\r\nEre the Shepherd could bring him back.”\r\n“Lord, whence are Thy hands so rent and torn?”\r\n“They’re pierced tonight by many a thorn;\r\nThey’re pireced tonight by many a thorn.”\r"
                    },
                    {
                        "hymnId":194,
                        "stanzaNumber":5,
                        "stanza":" But all thro’ the mountains, thunder-riven,\r\nAnd up from the rocky steep.\r\nThere arose a glad cry to the gate of heaven,\r\n“Rejoice! I have found my sheep!”\r\nAnd the angels echoed around the throne,\r\n“Rejoice, for the Lord brings back His own!\r\nRejoice, for the Lord brings back His own.”\r\n"
                    }
                ],
                "title":"DAY OF REST AND GLADNESS"
            },
            {
                "hymnNumber":195,
                "stanzas":[
                    {
                        "hymnId":195,
                        "stanzaNumber":1,
                        "stanza":" I was sinking deep in sin,\r\nFar from the peaceful shore,\r\nVery deeply stained within,\r\nSinking to rise no more;\r\nBut the Master of the sea\r\nHeard my despairing cry,\r\nFrom the waters lifted me,\r\nNow safe am I.\r\nLove lifted me! Love lifted me!\r\nWhen nothing else could help, Love lifted me.\r\nLove lifted me! Love lifted me!\r\nWhen nothing else could help, Love lifted me.\r"
                    },
                    {
                        "hymnId":195,
                        "stanzaNumber":2,
                        "stanza":" All my heart to Him I give,\r\nEver to Him I’ll cling,\r\nIn His blessed presence live,\r\nEver His praises sing.\r\nLove so mighty and so true\r\nMerits my soul’s best songs;\r\nFaithful, loving service, too,\r\nTo Him belongs.\r"
                    },
                    {
                        "hymnId":195,
                        "stanzaNumber":3,
                        "stanza":" Souls in danger, look above,\r\nThe Lord’s Love & Care\r\nJesus completely saves;\r\nHe will lift you by His love\r\nOut of the angry waves.\r\nHe’s the Master of the sea,\r\nBillows His will obey;\r\nHe your Saviour wants to be -\r\nBe saved today.\r\n"
                    }
                ],
                "title":"ANOTHER YEAR IS DAWNING"
            },
            {
                "hymnNumber":196,
                "stanzas":[
                    {
                        "hymnId":196,
                        "stanzaNumber":1,
                        "stanza":" Wonderful story of love; tell it to me again;\r\nWonderful story of love; wake the immortal strain!\r\nAngels with rapture announce it,\r\nShepherds with wonder receive it;\r\nSinner, O won’t you believe it?\r\nWonderful story of love.\r\nWon. . . . der . . .. ful!\r\nWon. . . . der . . .. ful!\r\nWon. . . . der . . .. ful!\r\nWonderful story of love!\r"
                    },
                    {
                        "hymnId":196,
                        "stanzaNumber":2,
                        "stanza":" Wonderful story of love; though you are far away;\r\nWonderful story of love; still He doth call to-day;\r\nCalling from Calvary’s mountain,\r\nDown from the crystal bright fountain,\r\nE’en from the dawn of creation,\r\nWonderful story of love.\r"
                    },
                    {
                        "hymnId":196,
                        "stanzaNumber":3,
                        "stanza":" Wonderful story of love; Jesus provides a rest;\r\nWonderful story of love; for all the pure and blest,\r\nRest in those mansions above us,\r\nWith those who’ve gone on before us,\r\nSinging the rapturous chorus,\r\nWonderful story of love.\r\n"
                    }
                ],
                "title":"DOES JESUS CARE?"
            },
            {
                "hymnNumber":197,
                "stanzas":[
                    {
                        "hymnId":197,
                        "stanzaNumber":1,
                        "stanza":" There is no love like the love of Jesus -\r\nNever to fade or fall,\r\nTill into the fold of the peace of God\r\nHe has gather’d us all.\r\nJesus’ love, precious love,\r\nBoundless and pure and free;\r\nOh, turn to that love, weary wand’ring soul:\r\nJesus pleadeth with thee!\r"
                    },
                    {
                        "hymnId":197,
                        "stanzaNumber":2,
                        "stanza":" There is no eye like the eye of Jesus,\r\nPiercing so far away;\r\nNe’er out of the sight of its tender light\r\nCan the wanderer stray.\r"
                    },
                    {
                        "hymnId":197,
                        "stanzaNumber":3,
                        "stanza":" There is no voice like the voice of Jesus.\r\nTender and sweet its chime,\r\nLike musical ring of a flowing spring,\r\nIn the bright summer time.\r"
                    },
                    {
                        "hymnId":197,
                        "stanzaNumber":4,
                        "stanza":" There is no heart like the heart of Jesus,\r\nFilled with a tender love:\r\nNo throb nor throe that our hearts can know,\r\nBut He feels it above.\r\n"
                    }
                ],
                "title":"LOVE FOUND A WAY"
            },
            {
                "hymnNumber":198,
                "stanzas":[
                    {
                        "hymnId":198,
                        "stanzaNumber":1,
                        "stanza":" A ruler once came to Jesus by night,\r\nTo ask Him the way of salvation and light;\r\nThe Master made answer in words true and plain,\r\n“Ye must be born again!”\r\n“Ye must be born again!”\r\n“Ye must be born again!”\r\nI verily, verily say unto thee -\r\n“Ye must be born again!”\r\nThe Lord’s Love & Care/Warning & Judgment\r"
                    },
                    {
                        "hymnId":198,
                        "stanzaNumber":2,
                        "stanza":" Ye children of men attend to the word\r\nSo solemnly uttered by Jesus the Lord,\r\nAnd let not this message to you be in vain,\r\n“Ye must be born again!”\r"
                    },
                    {
                        "hymnId":198,
                        "stanzaNumber":3,
                        "stanza":" O ye who would enter that glorious rest,\r\nAnd sing with the ransomed the song of the blest;\r\nThe life everlasting if ye would obtain,\r\n“Ye must be born again.”\r"
                    },
                    {
                        "hymnId":198,
                        "stanzaNumber":4,
                        "stanza":" A dear one in heaven thy heart yearns to see,\r\nAt the beautiful gates may be watching for thee;\r\nThen list to the note of this solemn refrain,\r\n“Ye must be born again.”\r\n"
                    }
                ],
                "title":"HIS LOVE CAN NEVER FAIL"
            },
            {
                "hymnNumber":199,
                "stanzas":[
                    {
                        "hymnId":199,
                        "stanzaNumber":1,
                        "stanza":" There’s a line that is drawn by rejecting our Lord,\r\nWhere the call of His Spirit is lost,...\r\nAnd you hurry along with the pleasure-mad throng -\r\nHave you counted, have you counted the cost?\r\nHave you counted the cost, if your soul should be lost,\r\nTho’ you gain the whole world for your own? ...\r\nEven now it may be that the line you have crossed,\r\nHave you counted, have you counted the cost?\r"
                    },
                    {
                        "hymnId":199,
                        "stanzaNumber":2,
                        "stanza":" You may barter your hope of eternity’s morn,\r\nFor a moment of joy at the most,...\r\nFor the glitter of sin and the things it will win-\r\nHave you counted, have you counted the cost?\r"
                    },
                    {
                        "hymnId":199,
                        "stanzaNumber":3,
                        "stanza":" While the door of His mercy is open to you,\r\nEre the depth of His love you exhaust,...\r\nWon’t you come and be healed, won’t you whisper, I yield -\r\nI have counted, I have counted, the cost.\r\n"
                    }
                ],
                "title":"RESTING IN HIS LOVE"
            },
            {
                "hymnNumber":200,
                "stanzas":[
                    {
                        "hymnId":200,
                        "stanzaNumber":1,
                        "stanza":" Where will you spend eternity?\r\nThis question comes to you and me!\r\nTell me, what shall your answer be?\r\nWhere will you spend, eternity?\r\nEternity! Eternity!\r\nWhere will you spend, eternity?\r"
                    },
                    {
                        "hymnId":200,
                        "stanzaNumber":2,
                        "stanza":" Many are choosing Christ today,\r\nTurning from all their sins away;\r\nHeav’n shall their happy portion be;\r\nWhere will you spend eternity?\r\nEternity! Eternity!\r\nWhere will you spend eternity?\r"
                    },
                    {
                        "hymnId":200,
                        "stanzaNumber":3,
                        "stanza":" Leaving the strait and narrow way,\r\nGoing the downward road today,\r\nSad will their final ending be,\r\nLost thro’ a long eternity!\r\nEternity! Eternity!\r\nLost through a long eternity!\r"
                    },
                    {
                        "hymnId":200,
                        "stanzaNumber":4,
                        "stanza":" Repent, believe, this very hour,\r\nTrust in the Saviour’s grace and power;\r\nThen will your joyous answer be,\r\nSaved through a long eternity!\r\nEternity! Eternity!\r\nSaved through a long eternity!\r\n"
                    }
                ],
                "title":"THE NINETY AND NINE"
            },
            {
                "hymnNumber":201,
                "stanzas":[
                    {
                        "hymnId":201,
                        "stanzaNumber":1,
                        "stanza":" There’s a great day coming,\r\nA great day coming,\r\nThere’s a great day coming by and by;\r\nWhen the saints and the sinners shall be\r\nparted right and left,\r\nAre you ready for that day to come?\r\nAre you ready? Are you ready?\r\nAre you ready for the judgment day?\r\nWarning & Judgment\r\nAre you ready? Are you ready?\r\nFor the judgment day?\r"
                    },
                    {
                        "hymnId":201,
                        "stanzaNumber":2,
                        "stanza":" There’s a bright day coming,\r\nA bright day coming,\r\nThere’s a bright day coming by and by;\r\nBut its brightness shall only come\r\nto them that love the Lord,\r\nAre you ready for that day to come?\r"
                    },
                    {
                        "hymnId":201,
                        "stanzaNumber":3,
                        "stanza":" There’s a sad day coming,\r\nA sad day coming,\r\nThere’s a sad day coming by and by;\r\nWhen the sinner shall hear his doom\r\n“Depart, I know ye not,”\r\nAre you ready for that day to come?\r\n"
                    }
                ],
                "title":"LOVE LIFTED ME"
            },
            {
                "hymnNumber":202,
                "stanzas":[
                    {
                        "hymnId":202,
                        "stanzaNumber":1,
                        "stanza":" I dreamed that the great judgment morning\r\nHad dawned and the trumpet had blown;\r\nI dreamed that the nations had gathered\r\nTo judgment before the white throne;\r\nFrom the throne came a bright shining angel,\r\nAnd stood on the land and the sea,\r\nAnd swore with his hand raised to heaven,\r\nThat time was no longer to be.\r\nAnd O, what a weeping and wailing,\r\nAs the lost were told of their fate;\r\nThey cried for the rocks and the mountains,\r\nThey prayed, but their prayer was too late.\r"
                    },
                    {
                        "hymnId":202,
                        "stanzaNumber":2,
                        "stanza":" The rich man was there, but his money\r\nHad melted and vanished away;\r\nA pauper he stood in the judgment,\r\nHis debts were too heavy to pay;\r\nThe great man was there, but his greatness,\r\nWhen death came, was left far behind!\r\nThe angel that opened the records,\r\nNot a trace of his greatness could find.\r"
                    },
                    {
                        "hymnId":202,
                        "stanzaNumber":3,
                        "stanza":" The widow was there with the orphans,\r\nGod heard and remembered their cries;\r\nNo sorrow in heaven for ever,\r\nGod wiped all the tears from their eyes;\r\nThe gambler was there and the drunkard,\r\nAnd the man that had sold them the drink,\r\nWith the people who gave him the license,\r\nTogether in hell they did sink.\r"
                    },
                    {
                        "hymnId":202,
                        "stanzaNumber":4,
                        "stanza":" The moral man came to the judgment,\r\nBut his self-righteous rags would not do;\r\nThe men who had crucified Jesus\r\nHad passed off as moral men, too;\r\nThe soul that had put off salvation,\r\n“Not tonight; I’ll get saved by and by,\r\nNo time now to think of religion!”\r\nAt last they had found time to die.\r\n"
                    }
                ],
                "title":"WONDERFUL STORY OF LOVE"
            },
            {
                "hymnNumber":203,
                "stanzas":[
                    {
                        "hymnId":203,
                        "stanzaNumber":1,
                        "stanza":" Sweet is the promise “I will not forget thee,”\r\nNothing can molest or turn my soul away;\r\nE’en though the night be dark within the valley,\r\nJust beyond is shining an eternal day.\r\nI...will not forget thee or leave thee;\r\nIn My hands I’ll hold thee, in My arms I’ll fold thee;\r\nI... will not forget thee or leave thee-\r\nI am thy Redeemer, I will care for thee.\r"
                    },
                    {
                        "hymnId":203,
                        "stanzaNumber":2,
                        "stanza":" How can I show my gratitude to Jesus,\r\nFor His love unfailing and His tender care?\r\nI will proclaim to others His salvation,\r\nThat they may accept Him and His promise share.\r\nWarning & Judgment/\r"
                    },
                    {
                        "hymnId":203,
                        "stanzaNumber":3,
                        "stanza":" Trusting the promise “I will not forget thee,”\r\nOnward will I go with songs of joy and praise;\r\nTho’ earth despise me, tho’ my friends forsake me,\r\nJesus will be near me gladdening my days.\r"
                    },
                    {
                        "hymnId":203,
                        "stanzaNumber":4,
                        "stanza":" When at the golden portals I am standing,\r\nAll my tribulations, all my sorrows past,\r\nHow sweet to hear the blessed proclamation:\r\n“Enter, faithful servant, welcome home at last!”\r\n"
                    }
                ],
                "title":"THERE IS NO LOVE LIKE THE LOVE OF JESUS"
            },
            {
                "hymnNumber":204,
                "stanzas":[
                    {
                        "hymnId":204,
                        "stanzaNumber":1,
                        "stanza":" Open my eyes, that I may see\r\nGlimpses of truth Thou hast for me;\r\nPlace in my hands the wonderful key\r\nThat shall unclasp and set me free,\r\nSilently now I wait for Thee,\r\nReady, my God, Thy will to see;\r\nOpen my eyes, illumine me,\r\nSpirit Divine!\r"
                    },
                    {
                        "hymnId":204,
                        "stanzaNumber":2,
                        "stanza":" Open my ears, that I may hear\r\nVoices of truth Thou sendest clear;\r\nAnd while the wave-notes fall on my ear,\r\nEverything false will disappear.\r\nSilently now I wait for Thee,\r\nReady, my God, Thy will to see;\r\nOpen my ears, illumine me,\r\nSpirit Divine!\r"
                    },
                    {
                        "hymnId":204,
                        "stanzaNumber":3,
                        "stanza":" Open my mouth, and let me bear\r\nGladly the warm truth everywhere,\r\nOpen my heart and let me prepare,\r\nLove with Thy children thus to share,\r\nSilently now I wait for Thee,\r\nReady, my God, Thy will to see;\r\nOpen my heart, illumine me,\r\nSpirit Divine!\r"
                    },
                    {
                        "hymnId":204,
                        "stanzaNumber":4,
                        "stanza":" Open my mind, that I may read\r\nMore of Thy love in word and deed;\r\nWhat shall I fear while yet Thou dost lead?\r\nOnly for light from Thee I plead,\r\nSilently now I wait for Thee,\r\nReady, my God, Thy will to see;\r\nOpen my mind, illumine me,\r\nSpirit Divine!\r"
                    },
                    {
                        "hymnId":204,
                        "stanzaNumber":5,
                        "stanza":" Open my way, that I may bring\r\nTrophies of grace to Thee, my King;\r\nEchoed in love Thy word shall out ring\r\nSweet as the note that angels sing,\r\nSilently now I wait for Thee,\r\nReady, my God, Thy will to see;\r\nOpen my way, illumine me,\r\nSpirit Divine!\r\n"
                    }
                ],
                "title":"YE MUST BE BORN AGAIN"
            },
            {
                "hymnNumber":205,
                "stanzas":[
                    {
                        "hymnId":205,
                        "stanzaNumber":1,
                        "stanza":" Crown Him with many crowns,\r\nThe Lamb upon His Throne;\r\nHark! how the heav’nly anthem drowns\r\nAll music but its own:\r\nAwake, my soul, and sing\r\nOf Him who died for thee;\r\nAnd hail Him as thy matchless King\r\nThrough all eternity.\r"
                    },
                    {
                        "hymnId":205,
                        "stanzaNumber":2,
                        "stanza":" Crown Him the Virgin’s Son,\r\nThe God incarnate born,\r\nWhose arm those crimson trophies won\r\nWhich now His brow adorn;\r\nFruit of the mystic Rose,\r\nAs of that Rose the Stem;\r\nThe Root whence mercy ever flows,\r\nThe Babe of Bethlehem.\r\n\r"
                    },
                    {
                        "hymnId":205,
                        "stanzaNumber":3,
                        "stanza":" Crown Him the Lord of love:\r\nBehold His hands and side,\r\nThose wounds yet visible above\r\nIn beauty glorified:\r\nNo angel in the sky\r\nCan fully bear that sight,\r\nBut downward bends His burning eye\r\nAt mysteries so bright.\r"
                    },
                    {
                        "hymnId":205,
                        "stanzaNumber":4,
                        "stanza":" Crown Him the Lord of life,\r\nWho triumphed o’er the grave,\r\nAnd rose victorious in the strife\r\nFor those He came to save:\r\nHis glories now we sing,\r\nWho died, and rose on high;\r\nWho died, eternal life to bring,\r\nAnd lives, that death may die.\r"
                    },
                    {
                        "hymnId":205,
                        "stanzaNumber":5,
                        "stanza":" Crown Him the Lord of peace,\r\nWhose power a sceptre sways\r\nFrom pole to pole, that wars may cease,\r\nAnd all be prayer and praise:\r\nHis reign shall know no end,\r\nAnd round His pierced feet\r\nFair flowers of Paradise extend\r\nTheir fragrance ever sweet.\r"
                    },
                    {
                        "hymnId":205,
                        "stanzaNumber":6,
                        "stanza":" Crown Him the Lord of years,\r\nThe Potentate of time,\r\nCreator of the rolling spheres,\r\nIneffably sublime:\r\nAll hail, Redeemer, hail !\r\nFor Thou hast died for me;\r\nThy praise shall never, never fail\r\nThroughout eternity.\r\n"
                    }
                ],
                "title":"HAVE YOU COUNTED THE COST?"
            },
            {
                "hymnNumber":206,
                "stanzas":[
                    {
                        "hymnId":206,
                        "stanzaNumber":1,
                        "stanza":" Jesus shall reign where’er the sun\r\nDoth his successive journeys run;\r\nHis kingdom stretch from shore to shore,\r\nTill sun shall rise and set no more.\r"
                    },
                    {
                        "hymnId":206,
                        "stanzaNumber":2,
                        "stanza":" For Him shall endless prayer be made,\r\nAnd praises throng to crown His head;\r\nHis name like sweet perfume shall rise\r\nWith every morning sacrifice.\r"
                    },
                    {
                        "hymnId":206,
                        "stanzaNumber":3,
                        "stanza":" People and realms of every tongue\r\nDwell on His love with sweetest song;\r\nAnd infant voices shall proclaim\r\nTheir young hosannas to His name.\r"
                    },
                    {
                        "hymnId":206,
                        "stanzaNumber":4,
                        "stanza":" Blessings abound where’er He reigns;\r\nThe prisoner leaps to lose his chains;\r\nThe weary find eternal rest;\r\nAnd all the sons of want are blest.\r"
                    },
                    {
                        "hymnId":206,
                        "stanzaNumber":5,
                        "stanza":" Where He displays His healing power;\r\nDeath and the curse are known no more,\r\nIn Him the tribes of Adam boast\r\nMore blessings than their father lost.\r"
                    },
                    {
                        "hymnId":206,
                        "stanzaNumber":6,
                        "stanza":" Let every creature rise and bring,\r\nIts greatest honours to our King;\r\nAngels descend with songs again,\r\nAnd earth prolong the joyful strain.\r\n"
                    }
                ],
                "title":"WHERE WILL YOU SPEND ETERNITY?"
            },
            {
                "hymnNumber":207,
                "stanzas":[
                    {
                        "hymnId":207,
                        "stanzaNumber":1,
                        "stanza":" Rejoice, the Lord is King!\r\nYour Lord and King adore;\r\nMortals, give thanks and sing,\r\nAnd triumph evermore;\r\nLift up your heart, lift up your voice,\r\nRejoice, again I say, rejoice!\r\n\r"
                    },
                    {
                        "hymnId":207,
                        "stanzaNumber":2,
                        "stanza":" Jesus the Saviour reigns,\r\nThe God of truth and love;\r\nWhen He had purged our stains,\r\nHe took His seat above;\r\nLift up your heart, lift up your voice,\r\nRejoice, again I say, rejoice!\r"
                    },
                    {
                        "hymnId":207,
                        "stanzaNumber":3,
                        "stanza":" His kingdom cannot fail;\r\nHe rules o’er earth and heaven;\r\nThe keys of death and hell\r\nAre to our Saviour given;\r\nLift up your heart, lift up your voice,\r\nRejoice, again I say, rejoice!\r"
                    },
                    {
                        "hymnId":207,
                        "stanzaNumber":4,
                        "stanza":" Rejoice in glorious hope;\r\nJesus the Judge shall come,\r\nAnd take His servants up\r\nTo their eternal home;\r\nWe soon shall hear th’archangel’s voice;\r\nThe trump of God shall sound, rejoice!\r\n"
                    }
                ],
                "title":"THERE’S A GREAT DAY COMING"
            },
            {
                "hymnNumber":208,
                "stanzas":[
                    {
                        "hymnId":208,
                        "stanzaNumber":1,
                        "stanza":" All hail the power of Jesus’ name!\r\nLet angels prostrate fall;\r\nBring forth the royal diadem,\r\nAnd crown Him Lord of all.\r"
                    },
                    {
                        "hymnId":208,
                        "stanzaNumber":2,
                        "stanza":" Crown Him, ye martyrs of our God,\r\nWho from His altar call;\r\nExtol the stem of Jesse’s rod,\r\nAnd crown Him Lord of all.\r"
                    },
                    {
                        "hymnId":208,
                        "stanzaNumber":3,
                        "stanza":" Ye chosen seed of Israel’s race,\r\nA remnant weak and small,\r\nHail Him who saves you by His grace,\r\nAnd crown Him Lord of all.\r"
                    },
                    {
                        "hymnId":208,
                        "stanzaNumber":4,
                        "stanza":" Ye Gentile sinners, ne’er forget\r\nThe wormwood and the gall;\r\nGo, spread your trophies at His feet,\r\nAnd crown Him Lord of all.\r"
                    },
                    {
                        "hymnId":208,
                        "stanzaNumber":5,
                        "stanza":" Let every kindred, every tribe,\r\nOn this terrestrial ball,\r\nTo Him all majesty ascribe,\r\nAnd crown Him Lord of all.\r"
                    },
                    {
                        "hymnId":208,
                        "stanzaNumber":6,
                        "stanza":" O that with yonder sacred throng\r\nWe at His feet may fall,\r\nJoin in the everlasting song,\r\nAnd crown Him Lord of all.\r\n"
                    }
                ],
                "title":"THE GREAT JUDGMENT MORNING"
            },
            {
                "hymnNumber":209,
                "stanzas":[
                    {
                        "hymnId":209,
                        "stanzaNumber":1,
                        "stanza":" O happy day, that fixed my choice,\r\nOn Thee, my Saviour and my God!\r\nWell may this glowing heart rejoice,\r\nAnd tell its raptures all abroad.\r\nHappy day, happy day,\r\nWhen Jesus washed my sins away!\r\nHe taught me how to watch and pray,\r\nAnd live rejoicing ev’ry day,\r\nHappy day, happy day,\r\nWhen Jesus washed my sins away!\r"
                    },
                    {
                        "hymnId":209,
                        "stanzaNumber":2,
                        "stanza":" ‘‘Tis done, the great transactions done!\r\nI am my Lord’s and He is mine:\r\nHe drew me and I followed on,\r\nCharmed to confess the voice divine.\r"
                    },
                    {
                        "hymnId":209,
                        "stanzaNumber":3,
                        "stanza":" Now rest, my long-divided heart,\r\nFixed on this blissful centre, rest:\r\nNor ever from thy Lord depart,\r\nWith Him of every good possessed.\r"
                    },
                    {
                        "hymnId":209,
                        "stanzaNumber":4,
                        "stanza":" High heaven, that heard the solemn vow,\r\nThat vow renewed shall daily hear,\r\nTill in life’s latest hour I bow,\r\nAnd bless in death a bond so dear.\r\n"
                    }
                ],
                "title":"WILL NOT FORGET THEE"
            },
            {
                "hymnNumber":210,
                "stanzas":[
                    {
                        "hymnId":210,
                        "stanzaNumber":1,
                        "stanza":" More about Jesus would I know,\r\nMore of His grace to others show;\r\nMore of His saving fulness see,\r\nMore of His love who died for me.\r\nMore, more about Jesus,\r\nMore, more about Jesus:\r\nMore of His saving fulness see,\r\nMore of His love who died for me.\r"
                    },
                    {
                        "hymnId":210,
                        "stanzaNumber":2,
                        "stanza":" More about Jesus let me learn,\r\nMore of His holy will discern;\r\nSpirit of God, my Teacher be,\r\nShowing the things of Christ to me.\r"
                    },
                    {
                        "hymnId":210,
                        "stanzaNumber":3,
                        "stanza":" More about Jesus, in His Word,\r\nHolding communion with my Lord;\r\nHearing His voice in every line,\r\nMaking each faithful saying mine.\r"
                    },
                    {
                        "hymnId":210,
                        "stanzaNumber":4,
                        "stanza":" More about Jesus, on His throne,\r\nRiches in glory all His own:\r\nMore of His kingdom’s sure increase;\r\nMore of His coming, Prince of Peace.\r\n"
                    }
                ],
                "title":"OPEN MY EYES THAT I MAY SEE"
            },
            {
                "hymnNumber":211,
                "stanzas":[
                    {
                        "hymnId":211,
                        "stanzaNumber":1,
                        "stanza":" O perfect Love, all human thought transcending,\r\nLowly we kneel in prayer before Thy throne,\r\nThat theirs may be the love which knows no ending\r\nWhom Thou for evermore dost join in one.\r"
                    },
                    {
                        "hymnId":211,
                        "stanzaNumber":2,
                        "stanza":" O perfect Life, be Thou their full assurance,\r\nOf tender charity and steadfast faith,\r\nOf patient hope, and quiet brave endurance.\r\nWith childlike trust that fears no pain nor death.\r"
                    },
                    {
                        "hymnId":211,
                        "stanzaNumber":3,
                        "stanza":" Grant them the joy which brightens earthly sorrow,\r\nGrant them the peace which calms all earthly strife;\r\nAnd to life’s day the glorious unknown morrow\r\nThat dawns upon eternal love and life.\r\n"
                    }
                ],
                "title":"CROWN HIM WITH MANY CROWNS"
            },
            {
                "hymnNumber":212,
                "stanzas":[
                    {
                        "hymnId":212,
                        "stanzaNumber":1,
                        "stanza":" Love divine, all loves excelling,\r\nJoy of heav’n, to earth come down!\r\nFix in us Thy humble dwelling;\r\nAll Thy faithful mercies crown.\r\nJesus, Thou art all compassion,\r\nPure, unbounded love Thou art;\r\nVisit us with Thy salvation;\r\nEnter every trembling heart.\r"
                    },
                    {
                        "hymnId":212,
                        "stanzaNumber":2,
                        "stanza":" Breathe, O, breathe Thy loving Spirit\r\nInto every troubled breast!\r\nLet us all in Thee inherit,\r\nLet us find that second rest.\r\nTake away our bent to sinning;\r\nAlpha and Omega be;\r\nEnd of faith, as its beginning,\r\nSet our hearts at liberty.\r"
                    },
                    {
                        "hymnId":212,
                        "stanzaNumber":3,
                        "stanza":" Come, Almighty to deliver,\r\nLet us all Thy life receive;\r\nSuddenly return, and never,\r\nNever more Thy temples leave:\r\nThee we would be always blessing,\r\nServe Thee as Thy hosts above.\r\nPray, and praise Thee without ceasing,\r\nGlory in thy perfect love.\r"
                    },
                    {
                        "hymnId":212,
                        "stanzaNumber":4,
                        "stanza":" Finish then Thy new creation,\r\nPure and spotless may we be;\r\nLet us see our whole salvation,\r\nPerfectly secured by Thee:\r\nChanged from glory into glory,\r\nTill in heaven we take our place,\r\nTill we cast our crowns before Thee,\r\nLost in wonder, love, and praise.\r\n"
                    }
                ],
                "title":"JESUS SHALL REIGN WHERE’ER THE SUN"
            },
            {
                "hymnNumber":213,
                "stanzas":[
                    {
                        "hymnId":213,
                        "stanzaNumber":1,
                        "stanza":" More holiness give me, More striving within;\r\nMore patience in suffering, More sorrow for sin;\r\nMore faith in my Saviour, More sense of His care;\r\nMore joy in His service, More purpose in prayer.\r"
                    },
                    {
                        "hymnId":213,
                        "stanzaNumber":2,
                        "stanza":" More gratitude give me, More trust in the Lord;\r\nMore pride in His glory, More hope in His Word;\r\nMore tears for His sorrows, More pain at His grief;\r\nMore meekness in trial, More praise for relief.\r"
                    },
                    {
                        "hymnId":213,
                        "stanzaNumber":3,
                        "stanza":" More purity give me, More strength to o’ercome;\r\nMore freedom from earth-stains, More longings for home;\r\nMore fit for the kingdom, More used would I be;\r\nMore blessed and holy, More, Saviour, like Thee.\r\n"
                    }
                ],
                "title":"REJOICE, THE LORD IS KING!"
            },
            {
                "hymnNumber":214,
                "stanzas":[
                    {
                        "hymnId":214,
                        "stanzaNumber":1,
                        "stanza":" When I saw the cleansing fountain\r\nOpen wide for all my sin,\r\nI obeyed the Spirit’s wooing\r\nWhen He said “Wilt thou be clean?”\r\nI will praise Him, I will praise Him, praise Him,\r\nPraise the Lamb for sinners slain:...\r\nGive Him glory all ye people,\r\nFor His blood has washed away my stain.\r"
                    },
                    {
                        "hymnId":214,
                        "stanzaNumber":2,
                        "stanza":" Though the way seemed straight and narrow,\r\nAll I claimed was swept away;\r\nMy ambition, plans and wishes,\r\nAt my feet in ashes lay.\r"
                    },
                    {
                        "hymnId":214,
                        "stanzaNumber":3,
                        "stanza":" Then God’s fire upon the altar\r\nOf my heart was set aflame;\r\nI shall never cease to praise Him,\r\nGlory! glory! to His name.\r"
                    },
                    {
                        "hymnId":214,
                        "stanzaNumber":4,
                        "stanza":" Blessed be the name of Jesus,\r\nI’m so glad He took me in;\r\nHe has pardoned my transgressions,\r\nHe has cleansed my heart from sin.\r\n"
                    }
                ],
                "title":"ALL HAIL THE POWER OF JESUS’ NAME!"
            },
            {
                "hymnNumber":215,
                "stanzas":[
                    {
                        "hymnId":215,
                        "stanzaNumber":1,
                        "stanza":" “Let not thy hands be slack,”\r\nLive not in vain;\r\nOut on life’s lonely track\r\nMen toil in pain.\r\nPlay thou a brother’s part,\r\nStrength, love, and hope impart,\r\nBid thou the fainting heart\r\nLook up again!\r"
                    },
                    {
                        "hymnId":215,
                        "stanzaNumber":2,
                        "stanza":" “Let not thy hands be slack,”\r\nGrip thou thy sword!\r\nWhy should’st thou courage lack?\r\nThink of thy Lord.\r\nDid He not fight for thee?\r\nStronger than all is He,\r\nAnd He thy strength will be,\r\nRest on His word.\r"
                    },
                    {
                        "hymnId":215,
                        "stanzaNumber":3,
                        "stanza":" “Let not thy hands be slack,”\r\nHaste to the fray!\r\nDream not of turning back:\r\nLife is not play!\r\nGird thou thy armour on,\r\nFight till the battle’s won,\r\nThen shall thy Lord’s “Well done!”\r\nMore than repay!\r"
                    },
                    {
                        "hymnId":215,
                        "stanzaNumber":4,
                        "stanza":" “Let not thy hands be slack!\r\nFear not! Be strong!”\r\nCease not to make attack\r\nOn every wrong.\r\nPress on for truth and right,\r\nHold high the Gospel light\r\nExpel the dirge of night\r\nWith heaven’s song!\r"
                    },
                    {
                        "hymnId":215,
                        "stanzaNumber":5,
                        "stanza":" “Let not thy hands be slack,”\r\nThe days fly fast.\r\nLost moments come not back\r\nFrom the dark past.\r\nThen be not slack of hand!\r\nHelp thou the weak to stand!\r\nTo God and Fatherland\r\nGive all thou hast!\r\n"
                    }
                ],
                "title":"HAPPY DAY, THAT FIXED MY CHOICE"
            },
            {
                "hymnNumber":216,
                "stanzas":[
                    {
                        "hymnId":216,
                        "stanzaNumber":1,
                        "stanza":" Speed Thy servants, Saviour, speed them;\r\nThou art Lord of winds and waves;\r\nThey were bound, but Thou hast freed them,\r\nNow they go to free the slaves.\r\nBe Thou with them,\r\n’Tis Thine arm alone that saves.\r"
                    },
                    {
                        "hymnId":216,
                        "stanzaNumber":2,
                        "stanza":" Friends, and home, and all forsaking,\r\nLord, they go at Thy command;\r\nAs their stay Thy promise taking,\r\nWhile they traverse sea and land:\r\nO, be with them,\r\nLead them safely by the hand!\r"
                    },
                    {
                        "hymnId":216,
                        "stanzaNumber":3,
                        "stanza":" When no fruit appears to cheer them,\r\nAnd they seem to toil in vain,\r\nThen in mercy, Lord, draw near them,\r\nThen their sinking hopes sustain;\r\nThus supported,\r\nLet their zeal revive again.\r"
                    },
                    {
                        "hymnId":216,
                        "stanzaNumber":4,
                        "stanza":" In the midst of opposition,\r\nLet them trust, O Lord, in Thee:\r\nWhen success attends their mission,\r\nLet Thy servants humble be;\r\nNever leave them,\r\nTill Thy face in heaven they see:\r"
                    },
                    {
                        "hymnId":216,
                        "stanzaNumber":5,
                        "stanza":" There to reap in joy for ever\r\nFruit that grows from seed here sown,\r\nThere to be with Him, who never\r\nCeases to preserve His own,\r\nAnd with gladness\r\nGive the praise to Him alone.\r\n"
                    }
                ],
                "title":"MORE ABOUT JESUS WOULD I KNOW"
            },
            {
                "hymnNumber":217,
                "stanzas":[
                    {
                        "hymnId":217,
                        "stanzaNumber":1,
                        "stanza":" I gave my life for thee,\r\nMy precious blood I shed,\r\nThat thou might’st ransomed be,\r\nAnd quickened from the dead;\r\nI gave, I gave My life for thee,\r\nWhat hast thou giv’n for Me?\r"
                    },
                    {
                        "hymnId":217,
                        "stanzaNumber":2,
                        "stanza":" I spent long years for thee\r\nIn weariness and woe,\r\nThat an eternity\r\nOf joy thou mightest know:\r\nI spent, I spent long years for thee;\r\nHast thou spent one for Me?\r"
                    },
                    {
                        "hymnId":217,
                        "stanzaNumber":3,
                        "stanza":" My Father’s home of light,\r\nMy glory-circled throne\r\nI left for earthly night\r\nFor wand’rings sad and lone;\r\nI left, I left it all for thee,\r\nHast thou left aught for Me?\r"
                    },
                    {
                        "hymnId":217,
                        "stanzaNumber":4,
                        "stanza":" I suffered much for thee,\r\nMore than thy tongue can tell,\r\nOf bitt’rest agony -\r\nTo rescue thee from hell;\r\nI’ve borne, I’ve borne it all for thee,\r\nWhat hast thou borne for Me?\r"
                    },
                    {
                        "hymnId":217,
                        "stanzaNumber":5,
                        "stanza":" Lord, let my life be given,\r\nAnd every moment spent,\r\nFor God, for souls, for heaven,\r\nAnd all earth’s ties be rent\r\nThou gav’st, Thou gav’st Thyself for me,\r\nNow I give all for Thee.\r\n"
                    }
                ],
                "title":"PERFECT LOVE, ALL HUMAN THOUGHT TRANSCENDING"
            },
            {
                "hymnNumber":218,
                "stanzas":[
                    {
                        "hymnId":218,
                        "stanzaNumber":1,
                        "stanza":" Oh, the bitter shame and sorrow,\r\nThat a time could ever be,\r\nWhen I let the Saviour’s pity\r\nPlead in vain, and proudly answered,\r\n“All of self, and none of Thee!”\r"
                    },
                    {
                        "hymnId":218,
                        "stanzaNumber":2,
                        "stanza":" Yet He found me; I beheld Him\r\nBleeding on the accursed tree,\r\nHeard Him pray, “Forgive them, Father!”\r\nAnd my wistful heart said faintly-\r\n“Some of self, and some of Thee.”\r"
                    },
                    {
                        "hymnId":218,
                        "stanzaNumber":3,
                        "stanza":" Day by day His tender mercy,\r\nHealing, helping, full, and free,\r\nSweet and strong, and, ah! so patient,\r\nBrought me lower, while I whispered,\r\n“Less of self, and more of Thee.”\r"
                    },
                    {
                        "hymnId":218,
                        "stanzaNumber":4,
                        "stanza":" Higher than the highest heavens,\r\nDeeper than the deepest sea,\r\nLord, Thy love at last has conquered;\r\nGrant me now my supplication -\r\n“None of self, and all of Thee.”\r\n"
                    }
                ],
                "title":"LOVE DIVINE, ALL LOVES EXCELLING"
            },
            {
                "hymnNumber":219,
                "stanzas":[
                    {
                        "hymnId":219,
                        "stanzaNumber":1,
                        "stanza":" Burn, fire of God! my ransomed soul possessing;\r\nPure fire Thou art, and I would dwell in Thee.\r\nLight of my life, true source of ev’ry blessing,\r\nGrant all my days one holy flame to be.\r"
                    },
                    {
                        "hymnId":219,
                        "stanzaNumber":2,
                        "stanza":" Burn, fire of God! Thy grace and glory knowing,\r\nMy cleansed heart shall be all fire within:\r\nLove all-constraining, tenderness o’erflowing,\r\nOne kindling passion other lives to win.\r"
                    },
                    {
                        "hymnId":219,
                        "stanzaNumber":3,
                        "stanza":" Burn, fire of God! Thy cloven tongue bestowing,\r\nBaptizing me with heavenly energy.\r\nTouched with live coals from off Thine altar glowing,\r\nMy purged lips shall speak alone of Thee.\r"
                    },
                    {
                        "hymnId":219,
                        "stanzaNumber":4,
                        "stanza":" Burn, fire of God! with seven-fold refining,\r\nTill mirrored from my deeps Thine eyes shall see.\r\nIn purest gold Thy perfect image shining:\r\nThy Christ revealed in clear irradiancy.\r"
                    },
                    {
                        "hymnId":219,
                        "stanzaNumber":5,
                        "stanza":" Burn, fire of God! by Thine own love transcending,\r\nLet all I hold be Thine, and Thine alone!\r\nHeart, mind and will, a sacrifice ascending,\r\nConsumed by fire from out Thy fiery Throne.\r\n"
                    }
                ],
                "title":"MORE HOLINESS GIVE ME, MORE"
            },
            {
                "hymnNumber":220,
                "stanzas":[
                    {
                        "hymnId":220,
                        "stanzaNumber":1,
                        "stanza":" I want my life to be all filled with praise to Thee,\r\nMy precious Lord divine who died for me,\r\nLet all my will be Thine, controlled by love divine,\r\nLive out in me Thy life, O mighty Saviour.\r\nThy blessed will divine, with joy I make it mine\r\nMy heart shall be Thy throne, and Thine alone,\r\nChoose Thou the path I tread and whither I am led,\r\nHelp me to follow on, O mighty Saviour.\r"
                    },
                    {
                        "hymnId":220,
                        "stanzaNumber":2,
                        "stanza":" A pilgrim born anew, a stranger going through,\r\nNot of this world am I, since I am Thine.\r\nWeaned from its passing show, transformed Thy love to know,\r\nHold Thou my hand in Thine, O mighty Saviour.\r"
                    },
                    {
                        "hymnId":220,
                        "stanzaNumber":3,
                        "stanza":" When evil foes assail and almost would prevail,\r\nIn that dark hour be Thou my strength and shield.\r\nLend then Thy strong embrace, uphold me by Thy grace,\r\nIn weakness be my strength, O mighty Saviour.\r"
                    },
                    {
                        "hymnId":220,
                        "stanzaNumber":4,
                        "stanza":" Yea, choose the path for me, although I may not see\r\nThe reason Thou dost will to lead me so.\r\nI know the toilsome way will lead to realms of day.\r\nWhere I shall dwell with Thee, O mighty Saviour.\r\n"
                    }
                ],
                "title":"WHEN I SAW THE CLEANSING FOUNTAIN"
            },
            {
                "hymnNumber":221,
                "stanzas":[
                    {
                        "hymnId":221,
                        "stanzaNumber":1,
                        "stanza":" Nearer, my God, to Thee, nearer to Thee!\r\nE’en though it be a cross that raiseth me;\r\nStill all my song shall be,\r\nNearer, my God, to Thee, nearer to Thee!\r"
                    },
                    {
                        "hymnId":221,
                        "stanzaNumber":2,
                        "stanza":" Though like the wanderer, the sun gone down,\r\nDarkness be over me, my rest a stone,\r\nYet in my dreams I’d be\r\nNearer, my God, to Thee, nearer to Thee!\r"
                    },
                    {
                        "hymnId":221,
                        "stanzaNumber":3,
                        "stanza":" There let the way appear, steps unto heaven;\r\nAll that Thou sendest me, in mercy giv’n:\r\nAngels to beckon me\r\nNearer, my God, to Thee, nearer to Thee!\r"
                    },
                    {
                        "hymnId":221,
                        "stanzaNumber":4,
                        "stanza":" Then with my waking thoughts, bright with Thy praise,\r\nOut of my stony griefs, Bethel I’ll raise;\r\nSo by my woes to be\r\nNearer, my God, to Thee, nearer to Thee!\r"
                    },
                    {
                        "hymnId":221,
                        "stanzaNumber":5,
                        "stanza":" Or if on joyful wing, cleaving the sky,\r\nSun, moon, and stars forgot, upward I fly,\r\nStill all my song shall be,\r\nNearer, my God, to Thee, nearer to Thee!\r\n"
                    }
                ],
                "title":"LET NOT THY HANDS BE SLACK"
            },
            {
                "hymnNumber":222,
                "stanzas":[
                    {
                        "hymnId":222,
                        "stanzaNumber":1,
                        "stanza":" O do not let the word depart,\r\nAnd close thine eyes against the light;\r\nPoor sinner, harden not your heart,\r\nBe saved, O tonight\r\nO why not to-night? O why not to-night?\r\nWilt thou be saved?\r\nThen why not to-night?\r"
                    },
                    {
                        "hymnId":222,
                        "stanzaNumber":2,
                        "stanza":" Tomorrow’s sun may never rise,\r\nTo bless thy long deluded sight;\r\nThis is the time, O then be wise,\r\nBe saved, O tonight.\r"
                    },
                    {
                        "hymnId":222,
                        "stanzaNumber":3,
                        "stanza":" Our Lord in pity lingers still,\r\nAnd with thou thus His love requite?\r\nRenounce at once thy stubborn will,\r\nBe saved, O tonight.\r"
                    },
                    {
                        "hymnId":222,
                        "stanzaNumber":4,
                        "stanza":" Our blessed Lord refuses none\r\nWho would to Him their souls unite;\r\nBelieve, obey, the work is done,\r\nBe saved, O tonight.\r\n"
                    }
                ],
                "title":"SPEED THY SERVANTS, SAVIOUR, SPEED THEM"
            },
            {
                "hymnNumber":223,
                "stanzas":[
                    {
                        "hymnId":223,
                        "stanzaNumber":1,
                        "stanza":" Ho, my comrades! see the signal\r\nWaving in the sky!\r\nReinforcements now appearing,\r\nVictory is nigh.\r\n“Hold the fort, for I am coming,”\r\nJesus signals still;\r\nWave the answer back to heaven ,\r\n“By Thy grace we will.”\r"
                    },
                    {
                        "hymnId":223,
                        "stanzaNumber":2,
                        "stanza":" See the mighty host advancing,\r\nSatan leading on:\r\nMighty men around us falling,\r\nCourage almost gone!\r"
                    },
                    {
                        "hymnId":223,
                        "stanzaNumber":3,
                        "stanza":" See the glorious banner waving!\r\nHear the trumpet blow!\r\nIn our Leader’s name we’ll triumph\r\nOver every foe!\r"
                    },
                    {
                        "hymnId":223,
                        "stanzaNumber":4,
                        "stanza":" Fierce and long the battle rages,\r\nBut our help is near:\r\nOnward comes our great Commander,\r\nCheer, my comrades, cheer!\r\n"
                    }
                ],
                "title":"GAVE MY LIFE FOR THEE"
            },
            {
                "hymnNumber":224,
                "stanzas":[
                    {
                        "hymnId":224,
                        "stanzaNumber":1,
                        "stanza":" Are you looking for the fullness of blessing\r\nof the Lord\r\nIn your heart and life today?\r\nClaim the promise of your Father,\r\ncome according to His word,\r\nIn the blessed old-time way.\r\nHe will fill your heart today to overflowing,\r\nAs the Lord commandeth you,\r\n“Bring your vessels, not a few;”\r\nHe will fill your heart today to overflowing\r\nWith the Holy Ghost and power.\r"
                    },
                    {
                        "hymnId":224,
                        "stanzaNumber":2,
                        "stanza":" Bring your empty earthen vessels, clean thro’\r\nJesus’ precious blood,\r\nAnd in human consecration wait before the\r\nthrone of God,\r\nTill the Holy Ghost shall fall.\r"
                    },
                    {
                        "hymnId":224,
                        "stanzaNumber":3,
                        "stanza":" Like the cruse of oil unfailing is His grace\r\nforever more,\r\nAnd His love unchanging still;\r\nAnd according to His promise with the\r\nHoly Ghost and power,\r\nHe will every vessel fill.\r\n"
                    }
                ],
                "title":"OH, THE BITTER SHAME AND SORROW"
            },
            {
                "hymnNumber":225,
                "stanzas":[
                    {
                        "hymnId":225,
                        "stanzaNumber":1,
                        "stanza":" There’s a call comes ringing o’er the restless wave,\r\nSend the light!... Send the light!\r\nThere are souls to rescue, there are souls to save,\r\nSend the light!... Send the light!...\r\nSend the light!... the blessed gospel light,\r\nLet it shine... from shore to shore!...\r\nSend the light!... and let its radiant beams,\r\nLight the world... forevermore...\r"
                    },
                    {
                        "hymnId":225,
                        "stanzaNumber":2,
                        "stanza":" We have heard the Macedonian call today,\r\nSend the light!... Send the light!\r\nAnd a golden off’ring at the cross we lay,\r\nSend the light!... Send the light!...\r"
                    },
                    {
                        "hymnId":225,
                        "stanzaNumber":3,
                        "stanza":" Let us pray that grace may everywhere abound,\r\nSend the light!... Send the light!\r\nAnd a Christ-like spirit everywhere be found,\r\nSend the light! Send the light!...\r"
                    },
                    {
                        "hymnId":225,
                        "stanzaNumber":4,
                        "stanza":" Let us not grow weary in the work of love,\r\nSend the light!... Send the light!\r\nLet us gather jewels for a crown above,\r\nSend the light!... Send the light!...\r\n"
                    }
                ],
                "title":"BURN, FIRE OF GOD!"
            },
            {
                "hymnNumber":226,
                "stanzas":[
                    {
                        "hymnId":226,
                        "stanzaNumber":1,
                        "stanza":" Blest be the tie that binds\r\nOur hearts in Christian love;\r\nThe fellowship of kindred minds\r\nIs like to that above.\r"
                    },
                    {
                        "hymnId":226,
                        "stanzaNumber":2,
                        "stanza":" Before our Father’s throne,\r\nWe pour our ardent prayers;\r\nOur fears, our hopes, our aims are one,\r\nOur comforts and our cares.\r"
                    },
                    {
                        "hymnId":226,
                        "stanzaNumber":3,
                        "stanza":" We share our mutual woes,\r\nOur mutual burdens bear;\r\nAnd often for each other flows\r\nThe sympathizing tear.\r"
                    },
                    {
                        "hymnId":226,
                        "stanzaNumber":4,
                        "stanza":" When we asunder part,\r\nIt gives us inward pain:\r\nBut we shall still be joined in heart,\r\nAnd hope to meet again.\r\n"
                    }
                ],
                "title":"THY BLESSED WILL DIVINE"
            },
            {
                "hymnNumber":227,
                "stanzas":[
                    {
                        "hymnId":227,
                        "stanzaNumber":1,
                        "stanza":" Stand up! stand up for Jesus!\r\nYe soldiers of the cross;\r\nLift high His royal banner,\r\nIt must not suffer loss:\r\nFrom vict’ry unto vict’ry\r\nHis army shall He lead,\r\nTill every foe is vanquished\r\nAnd Christ is Lord indeed.\r"
                    },
                    {
                        "hymnId":227,
                        "stanzaNumber":2,
                        "stanza":" Stand up! stand up for Jesus!\r\nThe trumpet call obey;\r\nForth to the mighty conflict,\r\nIn this His glorious day:\r\nYe that are men now serve Him\r\nAgainst unnumbered foes;\r\nLet courage rise with danger,\r\nAnd strength to strength oppose.\r"
                    },
                    {
                        "hymnId":227,
                        "stanzaNumber":3,
                        "stanza":" Stand up! stand up for Jesus!\r\nStand in His strength alone;\r\nThe arm of flesh will fail you,\r\nYe dare not trust your own:\r\nPut on the gospel armour,\r\nAnd watching unto prayer;\r\nWhere duty calls, or danger,\r\nBe never wanting there.\r"
                    },
                    {
                        "hymnId":227,
                        "stanzaNumber":4,
                        "stanza":" Stand up! stand up for Jesus!\r\nThe strife will not be long;\r\nThis day the noise of battle,\r\nThe next the victor’s song:\r\nTo him that overcometh,\r\nA crown of life shall be;\r\nHe with the King of glory\r\nShall reign eternally.\r\n"
                    }
                ],
                "title":"NEARER, MY GOD TO THEE"
            },
            {
                "hymnNumber":228,
                "stanzas":[
                    {
                        "hymnId":228,
                        "stanzaNumber":1,
                        "stanza":" O Lord, “with one accord,”\r\nWe gather round Thy Throne,\r\nTo hear Thy holy Word,\r\nTo worship Thee alone.\r\nNow send from heaven the Holy Ghost,\r\nBe this another Pentecost!\r"
                    },
                    {
                        "hymnId":228,
                        "stanzaNumber":2,
                        "stanza":" We have no strength to meet\r\nThe storms that round us lower,\r\nKeep Thou our trembling feet\r\nIn every trying hour;\r\nMore than victorious shall we be\r\nIf girded with Thy panoply.\r"
                    },
                    {
                        "hymnId":228,
                        "stanzaNumber":3,
                        "stanza":" Where is the mighty wind\r\nThat shook the holy place,\r\nThat gladdened every mind,\r\nAnd brightened every face?\r\nAnd where the cloven tongues of flame\r\nThat marked each follower of the Lamb?\r"
                    },
                    {
                        "hymnId":228,
                        "stanzaNumber":4,
                        "stanza":" There is no change in Thee,\r\nLord God the Holy Ghost,\r\nThy glorious majesty\r\nIs as at Pentecost!\r\nO may our loosened tongues proclaim,\r\nThat Thou, our God, art still the same.\r"
                    },
                    {
                        "hymnId":228,
                        "stanzaNumber":5,
                        "stanza":" And may that living wave,\r\nThat issues from on high,\r\nWhose golden waters lave\r\nThy throne eternally:\r\nFlow down in power on us to-day,\r\nAnd none shall go unblessed away!\r"
                    },
                    {
                        "hymnId":228,
                        "stanzaNumber":6,
                        "stanza":" Anoint us with Thy grace,\r\nTo yield ourselves to Thee;\r\nTo run our daily race,\r\nWith joy and energy,\r\nUntil we hear the Bridegroom say,\r\n“Rise up my love, and come away”.\r\n"
                    }
                ],
                "title":"WHY NOT TONIGHT?"
            },
            {
                "hymnNumber":229,
                "stanzas":[
                    {
                        "hymnId":229,
                        "stanzaNumber":1,
                        "stanza":" “The Holy Spirit’s power\r\nYe need,” the Master said;\r\n“So wait till comes the hour\r\nWhen on you He is shed.”\r\nSo praise did all their souls employ\r\nAs tarried they with fervent joy.\r"
                    },
                    {
                        "hymnId":229,
                        "stanzaNumber":2,
                        "stanza":" And when ten days were passed\r\nWith one accord were they,\r\nHeaven’s windows long closed fast,\r\nWere opened on that day;\r\nWith rushing mighty wind and flame,\r\nThe promised Holy Spirit came.\r"
                    },
                    {
                        "hymnId":229,
                        "stanzaNumber":3,
                        "stanza":" Their loosened tongues were filled\r\nWith strange and wondrous words;\r\nHeaven’s life their hearts had thrilled,\r\nGod’s goodness they declared;\r\n“And unto all,” th’ Apostle said,\r\n“Is the like gift, since Christ has bled.”\r"
                    },
                    {
                        "hymnId":229,
                        "stanzaNumber":4,
                        "stanza":" Come now, ye sons of men,\r\nThis message now receive,\r\nThe Holy Spirit’s given\r\nTo all who will believe;\r\nYe, too, may know His mighty power,\r\nAnd speak with tongues this very hour.\r"
                    },
                    {
                        "hymnId":229,
                        "stanzaNumber":5,
                        "stanza":" Then charity divine,\r\nYour yearning hearts shall fill\r\nT’wards those who now repine,\r\nHeld in sin’s bondage still;\r\nFor these your zeal shall never tire\r\nTo snatch them from th’ e’erlasting fire.\r\n"
                    }
                ],
                "title":"HOLD THE FORT"
            },
            {
                "hymnNumber":230,
                "stanzas":[
                    {
                        "hymnId":230,
                        "stanzaNumber":1,
                        "stanza":" Lord God, the Holy Ghost,\r\nIn this accepted hour,\r\nAs on the day of Pentecost,\r\nDescend in all Thy power!\r"
                    },
                    {
                        "hymnId":230,
                        "stanzaNumber":2,
                        "stanza":" We meet with one accord\r\nIn our appointed place,\r\nAnd wait the promise of our Lord,\r\nThe Spirit of all grace.\r"
                    },
                    {
                        "hymnId":230,
                        "stanzaNumber":3,
                        "stanza":" Like mighty rushing wind\r\nUpon the waves beneath,\r\nMove with one impulse every mind,\r\nOne soul, one feeling breathe.\r"
                    },
                    {
                        "hymnId":230,
                        "stanzaNumber":4,
                        "stanza":" The young, the old, inspire\r\nWith wisdom from above,\r\nAnd give us hearts and tongues of fire\r\nTo pray, and praise, and love.\r"
                    },
                    {
                        "hymnId":230,
                        "stanzaNumber":5,
                        "stanza":" Spirit of Light, explore\r\nAnd chase our gloom away,\r\nWith lustre shining more and more\r\nUnto the perfect day!\r"
                    },
                    {
                        "hymnId":230,
                        "stanzaNumber":6,
                        "stanza":" Spirit of Truth, be Thou\r\nIn life and death our Guide!\r\nO Spirit of Adoption, now\r\nMay we be sanctified.\r\n"
                    }
                ],
                "title":"BRING YOUR VESSELS NOT A FEW"
            },
            {
                "hymnNumber":231,
                "stanzas":[
                    {
                        "hymnId":231,
                        "stanzaNumber":1,
                        "stanza":" Peace, perfect peace, in this dark world of sin?\r\nThe blood of Jesus whispers peace within.\r"
                    },
                    {
                        "hymnId":231,
                        "stanzaNumber":2,
                        "stanza":" Peace, perfect peace, by thronging duties pressed?\r\nTo do the will of Jesus, this is rest.\r"
                    },
                    {
                        "hymnId":231,
                        "stanzaNumber":3,
                        "stanza":" Peace, perfect peace, with sorrows surging round?\r\nOn Jesus’ bosom naught but calm is found.\r"
                    },
                    {
                        "hymnId":231,
                        "stanzaNumber":4,
                        "stanza":" Peace, perfect peace, with loved ones far away?\r\nIn Jesus’ keeping we are safe and they.\r"
                    },
                    {
                        "hymnId":231,
                        "stanzaNumber":5,
                        "stanza":" Peace, perfect peace, our future all unknown?\r\nJesus we know, and He is on the throne.\r"
                    },
                    {
                        "hymnId":231,
                        "stanzaNumber":6,
                        "stanza":" Peace, perfect peace, death shadowing us and ours?\r\nJesus has vanquished death and all its powers.\r"
                    },
                    {
                        "hymnId":231,
                        "stanzaNumber":7,
                        "stanza":" It is enough; earth’s struggles soon shall cease,\r\nAnd Jesus call to heaven’s perfect peace.\r\n"
                    }
                ],
                "title":"SEND THE LIGHT"
            },
            {
                "hymnNumber":232,
                "stanzas":[
                    {
                        "hymnId":232,
                        "stanzaNumber":1,
                        "stanza":" Thou hidden Source of calm repose,\r\nThou all sufficient love divine;\r\nMy help and refuge from my foes,\r\nSecure I am, if Thou art mine,\r\nFrom sin and grief, from guilt and shame:\r\nI hide me, Jesus, in Thy name.\r"
                    },
                    {
                        "hymnId":232,
                        "stanzaNumber":2,
                        "stanza":" Thy mighty Name salvation is,\r\nAnd keeps my happy soul above;\r\nComfort it brings, and power and peace,\r\nAnd joy and everlasting love;\r\nTo me, with Thy dear Name, are given\r\nPardon and holiness and heaven.\r"
                    },
                    {
                        "hymnId":232,
                        "stanzaNumber":3,
                        "stanza":" Jesus, my all in all Thou art,\r\nMy rest in toil, mine ease in pain;\r\nThe med’cine of my broken heart;\r\nIn war, my peace; in loss, my gain:\r\nMy smile beneath the tyrant’s frown;\r\nIn shame, my glory and my crown.\r"
                    },
                    {
                        "hymnId":232,
                        "stanzaNumber":4,
                        "stanza":" In want, my plentiful supply;\r\nIn weakness, mine almighty power;\r\nIn bonds, my perfect liberty;\r\nMy light in Satan’s darkest hour;\r\nIn grief, my joy unspeakable;\r\nMy life in death; my heaven, my all.\r\n"
                    }
                ],
                "title":"BLEST BE THE TIE THAT BINDS"
            },
            {
                "hymnNumber":233,
                "stanzas":[
                    {
                        "hymnId":233,
                        "stanzaNumber":1,
                        "stanza":" One there is above all others,\r\nWell deserves the name of Friend;\r\nHis is love beyond a brother’s,\r\nCostly, free, and knows no end:\r\nThey who once His kindness prove,\r\nFind it everlasting love.\r"
                    },
                    {
                        "hymnId":233,
                        "stanzaNumber":2,
                        "stanza":" Which of all our friends, to save us,\r\nCould or would have shed his blood?\r\nBut our Jesus died to have us\r\nReconciled in Him to God:\r\nThis was boundless love indeed;\r\nJesus is a Friend in need.\r"
                    },
                    {
                        "hymnId":233,
                        "stanzaNumber":3,
                        "stanza":" When He lived on earth abased\r\n“Friend of sinners” was His name;\r\nNow above all glories raised,\r\nHe rejoices in the same;\r\nStill He calls them brethren, friends,\r\nAnd to all their wants attends.\r"
                    },
                    {
                        "hymnId":233,
                        "stanzaNumber":4,
                        "stanza":" O, for grace our hearts to soften!\r\nTeach us, Lord, at length to love;\r\nWe, alas! forget too often\r\nWhat a Friend we have above;\r\nBut when home our souls are brought\r\nWe shall love Thee as we ought.\r\n"
                    }
                ],
                "title":"STAND UP, STAND UP FOR JESUS"
            },
            {
                "hymnNumber":234,
                "stanzas":[
                    {
                        "hymnId":234,
                        "stanzaNumber":1,
                        "stanza":" Jesus is the same for ever,\r\nAs of old, so now today;\r\nAll the hosts of hell endeavour\r\nVainly to obstruct His sway.\r\nIn His people’s hearts He reigneth,\r\nFinishes what He begins;\r\nJesus still “all power” retaineth,\r\nSaves His people from their sins.\r"
                    },
                    {
                        "hymnId":234,
                        "stanzaNumber":2,
                        "stanza":" Jesus is the same for ever;\r\nYes, He heals the sick to-day.\r\nAs of old, so now, He never\r\nTurns one suffering child away.\r\nHe can cure the worst diseases,\r\nFor He understands our frame;\r\nBore our griefs, and so releases\r\nAll who dare their rights to claim.\r"
                    },
                    {
                        "hymnId":234,
                        "stanzaNumber":3,
                        "stanza":" Jesus is the same for ever;\r\nStill He says “In Me abide.”\r\nFrom His love no power can sever\r\nThose who in their Lord confide,\r\nSweetly from all care He frees us,\r\nOurs the comfort -His the shame,\r\nBlessed Saviour; precious Jesus\r\nThere’s no music like Thy name.\r\n"
                    }
                ],
                "title":"LORD, “WITH ONE ACCORD”."
            },
            {
                "hymnNumber":235,
                "stanzas":[
                    {
                        "hymnId":235,
                        "stanzaNumber":1,
                        "stanza":" I’ve found the “Pearl of greatest price,”\r\nMy heart doth sing of joy,\r\nAnd sing I must, for Christ I have\r\nOh, what a Christ have I!\r"
                    },
                    {
                        "hymnId":235,
                        "stanzaNumber":2,
                        "stanza":" My Christ, He is “the Lord of lords,”\r\nThe Sovereign “King of kings,”\r\nThe risen “Sun of Righteousness,\r\nWith healing in His wings.”\r"
                    },
                    {
                        "hymnId":235,
                        "stanzaNumber":3,
                        "stanza":" My Christ, He is “the Tree of Life,”\r\nThat in God’s Eden grows;\r\nThe living “clear as crystal” stream\r\nWhence life for ever flows.\r"
                    },
                    {
                        "hymnId":235,
                        "stanzaNumber":4,
                        "stanza":" Christ is my Meat, Christ is my Drink,\r\nMy Medicine, and my Health;\r\nMy Portion, mine Inheritance,\r\nYea, all my boundless Wealth.\r\n"
                    }
                ],
                "title":"THE HOLY SPIRIT’S POWER"
            },
            {
                "hymnNumber":236,
                "stanzas":[
                    {
                        "hymnId":236,
                        "stanzaNumber":1,
                        "stanza":" A Good High Priest is come,\r\nSupplying Aaron’s place,\r\nAnd taking up his room,\r\nDispensing life and grace,\r\nThe law of Aaron’s priesthood came,\r\nBut grace and truth by Jesus’ name.\r"
                    },
                    {
                        "hymnId":236,
                        "stanzaNumber":2,
                        "stanza":" He once temptations knew,\r\nAnd woes of every kind,\r\nThat He might succour show\r\nTo every tempted mind;\r\nIn every point the Lamb was tried\r\nLike us, and then for us He died.\r"
                    },
                    {
                        "hymnId":236,
                        "stanzaNumber":3,
                        "stanza":" He died, but lives again,\r\nAnd by the altar stands;\r\nThere shows how, He was slain,\r\nOpening His pierced hands;\r\nOur Priest abides, and pleads our cause,\r\nTransgressors of His righteous laws.\r"
                    },
                    {
                        "hymnId":236,
                        "stanzaNumber":4,
                        "stanza":" I other priests disclaim,\r\nTheir laws and offerings too;\r\nNone but the bleeding Lamb\r\nThe mighty work can do;\r\nHe shall have all the praise, for He\r\nHath loved and lived and died for me.\r\n"
                    }
                ],
                "title":"LORD GOD, THE HOLY GHOST"
            },
            {
                "hymnNumber":237,
                "stanzas":[
                    {
                        "hymnId":237,
                        "stanzaNumber":1,
                        "stanza":" Standing on the promises of Christ my King,\r\nThru’ eternal ages let His praises ring;\r\nGlory in the highest I will shout and sing,\r\nStanding on the promises of God.\r\nStand...ing, stand...ing,\r\nStanding on the promises of God my Saviour;\r\nStand...ing, stand...ing,\r\nI’m standing on the promises of God.\r"
                    },
                    {
                        "hymnId":237,
                        "stanzaNumber":2,
                        "stanza":" Standing on the promises that cannot fail,\r\nWhen the howling storms of doubt and fear assail,\r\nBy the living Word of God I shall prevail,\r\nStanding on the promises of God.\r"
                    },
                    {
                        "hymnId":237,
                        "stanzaNumber":3,
                        "stanza":" Standing on the promises I now can see,\r\nPerfect, present cleansing in the blood for me;\r\nStanding in the liberty where Christ makes free,\r\nStanding on the promises of God.\r"
                    },
                    {
                        "hymnId":237,
                        "stanzaNumber":4,
                        "stanza":" Standing on the promises of Christ the Lord,\r\nBound to Him eternally by love’s strong cord,\r\nOvercoming daily with the Spirit’s sword,\r\nStanding on the promises of God.\r"
                    },
                    {
                        "hymnId":237,
                        "stanzaNumber":5,
                        "stanza":" Standing on the promises I cannot fall,\r\nList’ning ev’ry moment to the Spirit’s call,\r\nResting in my Saviour, as my all in all,\r\nStanding on the promises of God.\r\n"
                    }
                ],
                "title":"PEACE! PERFECT PEACE!"
            },
            {
                "hymnNumber":238,
                "stanzas":[
                    {
                        "hymnId":238,
                        "stanzaNumber":1,
                        "stanza":"\nFriends all around me are trying to find\r\nWhat the heart yearns for, by sin undermined;\r\nI have the secret, I know where ’tis found:\r\nOnly true pleasures in Jesus abound.\r\nAll that I want is in Je...sus,\r\nHe satisfies,... joy He supplies;...\r\nLife would be worthless without... Him,...\r\nAll things in Jesus I find.\r"
                    },
                    {
                        "hymnId":238,
                        "stanzaNumber":2,
                        "stanza":" Some carry burdens whose weight has for years\r\nCrushed them with sorrow and blinded with tears,\r\nYet One stands ready to help them just now,\r\nIf they will humbly in penitence bow.\r"
                    },
                    {
                        "hymnId":238,
                        "stanzaNumber":3,
                        "stanza":" No other name thrills the joy-chords within,\r\nAnd thro’ none else is remission of sin;\r\nHe knows the pain of the heart sorely tried,\r\nBoth need and want will by Him be supplied.\r"
                    },
                    {
                        "hymnId":238,
                        "stanzaNumber":4,
                        "stanza":" Jesus is all this poor world needs today,\r\nBlindly they strive, for sin darkens their way;\r\nO to draw back the grim curtains of night,\r\nOne glimpse of Jesus and all will be bright!\r\n"
                    }
                ],
                "title":"THOU HIDDEN SOURCE OF CALM REPOSE"
            },
            {
                "hymnNumber":239,
                "stanzas":[
                    {
                        "hymnId":239,
                        "stanzaNumber":1,
                        "stanza":" Is your life a channel of blessing?\r\nIs the love of God flowing thro’ you?\r\nAre you telling the lost of the Saviour?\r\nAre you ready His service to do?\r\nMake me a channel of blessing today,\r\nMake me a channel of blessing, I pray;\r\nMy life possessing, My service blessing,\r\nMake me a channel of blessing today.\r"
                    },
                    {
                        "hymnId":239,
                        "stanzaNumber":2,
                        "stanza":" Is your life a channel of blessing?\r\nAre you burdened for those that are lost?\r\nHave you urged upon those who are straying,\r\nThe Saviour who died on the cross?\r"
                    },
                    {
                        "hymnId":239,
                        "stanzaNumber":3,
                        "stanza":" Is your life a channel of blessing?\r\nIs it daily telling for Him?\r\nHave you spoken the word of salvation\r\nTo those who are dying in sin?\r"
                    },
                    {
                        "hymnId":239,
                        "stanzaNumber":4,
                        "stanza":" We cannot be channels of blessing\r\nIf our lives are not free from all sin;\r\nWe will barriers be and a hindrance\r\nTo those we are trying to win.\r\n"
                    }
                ],
                "title":"ONE THERE IS ABOVE ALL OTHERS"
            },
            {
                "hymnNumber":240,
                "stanzas":[
                    {
                        "hymnId":240,
                        "stanzaNumber":1,
                        "stanza":" O brother, life’s journey beginning,\r\nWith courage and firmness arise!\r\nLook well to the course thou art choosing;\r\nBe earnest, be watchful, and wise!\r\nRemember-two paths are before thee,\r\nAnd both thy attention invite;\r\nBut one leadeth on to destruction,\r\nThe other to joy and delight.\r\nGod help you to follow His banner,\r\nAnd serve Him wherever you go;\r\nAnd when you are tempted, my brother,\r\nGod give you the grace to say “No!”\r"
                    },
                    {
                        "hymnId":240,
                        "stanzaNumber":2,
                        "stanza":" O brother, yield not to the tempter,\r\nNo matter what others may do;\r\nStand firm in the strength of the Master,\r\nBe loyal, be faithful, and true!\r\nEach trial will make you the stronger,\r\nIf you, in the name of the Lord,\r\nFight manfully under your Leader\r\nObeying the voice of His word.\r"
                    },
                    {
                        "hymnId":240,
                        "stanzaNumber":3,
                        "stanza":" O brother, the Saviour is calling!\r\nBeware of the danger of sin;\r\nResist not the voice of the Spirit,\r\nThat whispers so gently within.\r\nGod calls you to enter His service -\r\nTo live for Him here, day by day;\r\nAnd share by and by in the glory\r\nThat never shall vanish away.\r\n"
                    }
                ],
                "title":"JESUS IS THE SAME FOREVER"
            },
            {
                "hymnNumber":241,
                "stanzas":[
                    {
                        "hymnId":241,
                        "stanzaNumber":1,
                        "stanza":" ‘Tis finished! the Messiah dies;\r\nCut off for sins, but not His own:\r\nAccomplished is the sacrifice,\r\nThe great redeeming work is done.\r"
                    },
                    {
                        "hymnId":241,
                        "stanzaNumber":2,
                        "stanza":" ‘Tis finished! all the debt is paid;\r\nJustice divine is satisfied:\r\nThe grand and full atonement made;\r\nGod for a guilty world hath died.\r"
                    },
                    {
                        "hymnId":241,
                        "stanzaNumber":3,
                        "stanza":" The veil is rent in Christ alone;\r\nThe living way to heaven is seen:\r\nThe middle wall is broken down;\r\nAnd all mankind may enter in.\r"
                    },
                    {
                        "hymnId":241,
                        "stanzaNumber":4,
                        "stanza":" The types and figures are fulfilled;\r\nExacted is the legal pain:\r\nThe precious promises are sealed;\r\nThe spotless Lamb of God is slain.\r"
                    },
                    {
                        "hymnId":241,
                        "stanzaNumber":5,
                        "stanza":" The reign of sin and death is o’er;\r\nAnd all may live from sin set free:\r\nSatan hath lost his mortal power;\r\n‘Tis swallowed up in victory.\r"
                    },
                    {
                        "hymnId":241,
                        "stanzaNumber":6,
                        "stanza":" Saved from the legal curse I am;\r\nMy Saviour hangs on yonder tree:\r\nSee there the meek, expiring Lamb!\r\n‘Tis finished! He expires for me.\r"
                    },
                    {
                        "hymnId":241,
                        "stanzaNumber":7,
                        "stanza":" Accepted in the well-beloved;\r\nAnd clothed in righteousness divine:\r\nI see the bar to heaven removed;\r\nAnd all Thy merits, Lord, are mine.\r"
                    },
                    {
                        "hymnId":241,
                        "stanzaNumber":8,
                        "stanza":" Death, hell, and sin are now subdued;\r\nAll grace is now to sinners given:\r\nAnd lo, I plead the atoning blood,\r\nAnd in Thy right I claim Thy heaven.\r\n"
                    }
                ],
                "title":"VE FOUND THE “PEARL OF GREATESTPRICE”"
            },
            {
                "hymnNumber":242,
                "stanzas":[
                    {
                        "hymnId":242,
                        "stanzaNumber":1,
                        "stanza":" From ev’ry stormy wind that blows\r\nFrom ev’ry swell-ing tide of woes;\r\nThere is a calm, a sure retreat;\r\n‘Tis found beneath the mercy seat.\r"
                    },
                    {
                        "hymnId":242,
                        "stanzaNumber":2,
                        "stanza":" There is a place where Jesus sheds\r\nThe oil of gladness on our heads;\r\nA place than all beside more sweet;\r\nIt is the blood-stained mercy seat.\r"
                    },
                    {
                        "hymnId":242,
                        "stanzaNumber":3,
                        "stanza":" There is a scene where spirits blend\r\nAnd friend holds fellowship with friend,\r\nThough sundered far, by faith we meet;\r\nAround one common mercy seat.\r"
                    },
                    {
                        "hymnId":242,
                        "stanzaNumber":4,
                        "stanza":" There, there on eagle wing we soar\r\nAnd time and sense seem all no more;\r\nAnd heaven comes down our souls to greet;\r\nAnd glory crowns the mercy seat.\r\n"
                    }
                ],
                "title":"GOOD HIGH PRIEST IS COME"
            },
            {
                "hymnNumber":243,
                "stanzas":[
                    {
                        "hymnId":243,
                        "stanzaNumber":1,
                        "stanza":" Come sing the praise of Jesus,\r\nSing His love with hearts aflame,\r\nSing His wondrous birth of Mary,\r\nWhen to save the world He came;\r\nTell the life He lived for others,\r\nAnd His mighty deeds proclaim,\r\nFor Jesus Christ is King.\r\nPraise and glory be to Jesus,\r\nPraise and glory be to Jesus,\r\nPraise and glory be to Jesus,\r\nFor Jesus Christ is King!\r"
                    },
                    {
                        "hymnId":243,
                        "stanzaNumber":2,
                        "stanza":" When foes arose and slew Him,\r\nHe was victor in the fight;\r\nOver death and hell He triumphed\r\nIn His resurrection might;\r\nHe has raised our fallen manhood\r\nAnd enthroned it in the height,\r\nFor Jesus Christ is King.\r"
                    },
                    {
                        "hymnId":243,
                        "stanzaNumber":3,
                        "stanza":" There’s joy for all who serve Him,\r\nMore than human tongue can say;\r\nThere is pardon for the sinner,\r\nAnd the night is turned to day;\r\nThere is healing for our sorrows,\r\nThere is music all the way,\r\nFor Jesus Christ is King.\r"
                    },
                    {
                        "hymnId":243,
                        "stanzaNumber":4,
                        "stanza":" We witness to His beauty,\r\nAnd we spread His love abroad;\r\nAnd we cleave the host of darkness,\r\nWith the Spirit’s piercing sword;\r\nWe will lead the souls in prison\r\nTo the freedom of the Lord,\r\nFor Jesus Christ is King.\r"
                    },
                    {
                        "hymnId":243,
                        "stanzaNumber":5,
                        "stanza":" To Jesus be the glory,\r\nThe dominion, and the praise;\r\nHe is Lord of all creation,\r\nHe is Guide of all our ways\r\nAnd the world shall be His empire\r\nIn the fulness of the days\r\nFor Jesus Christ is King.\r\n"
                    }
                ],
                "title":"STANDING ON THE PROMISES"
            },
            {
                "hymnNumber":244,
                "stanzas":[
                    {
                        "hymnId":244,
                        "stanzaNumber":1,
                        "stanza":" “For My sake and the Gospel’s, go\r\nAnd tell Redemption’s story;”\r\nHis heralds answer, “Be it so,\r\nAnd Thine, Lord, all the glory!”\r\nThey preach His birth, His life,\r\nHis cross, The love of His atonement,\r\nFor whom they count the world but loss,\r\nHis Easter, His enthronement.\r"
                    },
                    {
                        "hymnId":244,
                        "stanzaNumber":2,
                        "stanza":" Hark, hark, the trump of Jubilee\r\nProclaims to every nation,\r\nFrom pole to pole, by land and sea,\r\nGlad tidings of salvation:\r\nAs nearer draws the day of doom,\r\nWhile still the battle rages,\r\nThe heavenly dayspring, through the gloom\r\nBreaks on the night of ages.\r"
                    },
                    {
                        "hymnId":244,
                        "stanzaNumber":3,
                        "stanza":" Still on and on the anthems spread\r\nOf Hallelujah voices,\r\nIn concert with he holy dead\r\nThe Warrior-Church rejoices;\r\nTheir snow-white robes are washed in blood,\r\nTheir golden harps are ringing;\r\nEarth, and the Paradise of God,\r\nOne triumph-song are singing.\r"
                    },
                    {
                        "hymnId":244,
                        "stanzaNumber":4,
                        "stanza":" He comes, whose Advent Trumpet drown\r\nThe last of Time’s evangels-\r\nEmmanuel crowned with many crowns,\r\nThe Lord of saints and angels:\r\nO Life, Light, Love, the Great I AM,\r\nTriune, who changest never;\r\nThe throne of God and of the Lamb\r\nIs Thine, and Thine for ever!"
                    }
                ],
                "title":"ALL THINGS IN JESUS"
            },
            {
                "hymnNumber":245,
                "stanzas":[

                ],
                "title":"IS YOUR LIFE A CHANNEL OF BLESSING?"
            },
            {
                "hymnNumber":246,
                "stanzas":[

                ],
                "title":"BROTHER, LIFE’S JOURNEY BEGINNING"
            },
            {
                "hymnNumber":248,
                "stanzas":[

                ],
                "title":"THE MERCY SEAT"
            },
            {
                "hymnNumber":249,
                "stanzas":[

                ],
                "title":"COME SING THE PRAISE OF JESUS"
            },
            {
                "hymnNumber":250,
                "stanzas":[

                ],
                "title":"FOR MY SAKE AND THE GOSPEL’S GO"
            }
        ];

        return {
            all: function() {
                return hymns;
            },
            remove: function(hymn) {
                hymns.splice(hymns.indexOf(hymn), 1);
            },
            get: function(hymnId) {
                for (var i = 0; i < hymns.length; i++) {
                    if (hymns[i].hymnNumber === parseInt(hymnId)) {
                        return hymns[i];
                    }
                }
                return null;
            }
        };
    });

