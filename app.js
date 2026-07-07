/* ===== DATA ===== */
const careers = {
  technology: {name:"វិស្វករផ្នែកទន់",icon:"code",salary:"$500–$1,500",why:"ចំណូលចិត្តបច្ចេកទេស ជំនាញតក្កវិជ្ជា",skills:["JavaScript","Python","SQL"],tags:["ល្អ","ប្រាក់ខែខ្ពស់"],schools:["rupp","ite","norton"]},
  healthcare:{name:"គ្រូពេទ្យ/អ្នកថែទាំ",icon:"cardiology",salary:"$400–$1,200",why:"ចំណូលចិត្តជួយមនុស្ស ចូលចិត្តវិទ្យាសាស្ត្រ",skills:["ជំនាញទំនាក់ទំនង","ការពិនិត្យ"],tags:["មានន័យ","ជំនាញ"],schools:["rupp","ppu"]},
  design:{name:"អ្នករចនា UX/UI",icon:"palette",salary:"$350–$900",why:"ការគិតច្នៃប្រឌិត ចូលចិត្ដម្គប់ស្ថានភាព",skills:["Figma","ការរចនា","CSS"],tags:["ច្នៃប្រឌិត"],schools:["aic","puc"]},
  business:{name:"អ្នកគ្រប់គ្រងទីផ្សារ",icon:"work",salary:"$400–$1,000",why:"ចូលចិត្ដគ្រប់គ្រង ចំណូលចិត្ដពាណិជ្ជកម្ម",skills:["ទីផ្សារ","ការលក់","Excel"],tags:["ល្អ","ឱកាស"],schools:["num","puc","norton"]},
  trades:{name:"ជាងបច្ចេកទេស",icon:"construction",salary:"$300–$800",why:"ជំនាញជាក់ស្ដែង ចូលចិត្ដការងារដៃ",skills:["ជំនាញ","បច្ចេកទេស"],tags:["ជំនាញ"],schools:["ite"]}
};
const schoolsData = [
  {id:"rupp",name:"សាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ (RUPP)",type:"public",province:"phnom-penh",tuition:600,duration:4,careers:["technology","healthcare","business","design","education","media"],programs:["ភាសា","វិស្វកម្ម","វិទ្យាសាស្ត្រ","សង្គមសាស្ត្រ","ប្រព័ន្ធផ្សព្វផ្សាយ","អប់រំ"],rating:"4.2",desc:"សាកលវិទ្យាល័យរដ្ឋធំជាងគេ និងជាមូលដ្ឋានសិក្សាស្នូលក្រោមរាជរដ្ឋាភិបាលកម្ពុជា។ រៀបចំតាមមហាវិទ្យាល័យ (Faculties) និងវិទ្យាស្ថាន (Institutes)។",scholarNote:"និស្សិតដែលទទួលអាហារូបករណ៍រដ្ឋ (Government Scholarship) ត្រូវបានលើកលែងថ្លៃសិក្សាទាំងស្រុង។ ការជ្រើសរើសផ្អែកលើលទ្ធផលប្រឡង (ចន្លោះខែតុលា–វិច្ឆិកា)។ តម្លៃខាងក្រោមសម្រាប់កម្មវិធីបង់ថ្លៃ (Fee-paying) ហើយអាចប្រែប្រួលតាមឆ្នាំ។",facPrices:["$500–$600/ឆ្នាំ","$1,200/ឆ្នាំ","$600/ឆ្នាំ","$600/ឆ្នាំ","$300–$650/ឆ្នាំ","$650/ឆ្នាំ","$500–$600/ឆ្នាំ","$500/ឆ្នាំ","$800/ឆ្នាំ"],faculties:["វិទ្យាស្ថានភាសាបរទេស (IFL) — អង់គ្លេស (B.Ed. International Studies), ចិន, ជប៉ុន, កូរ៉េ, បារាំង, ថៃ","វិទ្យាស្ថានសិក្សាអន្តរជាតិ និងគោលនយោបាយសាធារណៈ (IISPP) — ទំនាក់ទំនងអន្តរជាតិ (IR), វិទ្យាសាស្ត្រនយោបាយ","មហាវិទ្យាល័យវិស្វកម្ម — ព័ត៌មានវិទ្យា (ITE), ទូរគមនាគមន៍ និងអេឡិចត្រូនិក (TEED), ស្វ័យប្រវត្តិកម្ម (Automation)","មហាវិទ្យាល័យវិទ្យាសាស្ត្រ — កុំព្យូទ័រ, បច្ចេកវិទ្យាអាហារ, គណិត, រូប, គីមី, ជីវ, បរិស្ថាន","មហាវិទ្យាល័យសង្គមសាស្ត្រ និងមនុស្សសាស្ត្រ — ចិត្តវិទ្យា, សង្គមវិទ្យា, ទស្សនវិជ្ជា, ប្រវត្តិ, អក្សរសាស្ត្រខ្មែរ, ភូមិវិទ្យា","ដេប៉ាតឺម៉ង់ប្រព័ន្ធផ្សព្វផ្សាយ និងសារគមនាគមន៍ (DMC) — Media and Communications","មហាវិទ្យាល័យអភិវឌ្ឍន៍សហគមន៍ — ការអភិវឌ្ឍសហគមន៍, សេដ្ឋកិច្ចកសិកម្ម និងអភិវឌ្ឍជនបទ","មហាវិទ្យាល័យអប់រំ — ការអប់រំ (Lifelong Learning)","វិទ្យាស្ថានភាសាខ្មែរសម្រាប់ជនបរទេស — ភាសាខ្មែរ និងវប្បធម៌"]},
  {id:"rule",name:"សាកលវិទ្យាល័យភូមិន្ទនីតិសាស្ត្រ និងវិទ្យាសាស្ត្រសេដ្ឋកិច្ច (RULE)",type:"public",province:"phnom-penh",tuition:550,duration:4,careers:["business","law"],programs:["ច្បាប់","សេដ្ឋកិច្ច","គ្រប់គ្រង"],rating:"4.1",desc:"សាកលវិទ្យាល័យរដ្ឋឈានមុខផ្នែកច្បាប់ និងសេដ្ឋកិច្ច។",faculties:["មហាវិទ្យាល័យច្បាប់ — Public Law, Private Law, International Law","រដ្ឋបាលសាធារណៈ — Public Policy, International Relations","សេដ្ឋកិច្ច — Economic Development, International Economics","គ្រប់គ្រង — Business Administration, Accounting, Finance, Marketing"]},
  {id:"num",name:"សាកលវិទ្យាល័យជាតិគ្រប់គ្រង (NUM)",type:"public",province:"phnom-penh",tuition:500,duration:4,careers:["business","technology","tourism","law"],programs:["ពាណិជ្ជកម្ម","ហិរញ្ញវត្ថុ គណនេយ្យ","សេដ្ឋកិច្ចឌីជីថល","ច្បាប់"],rating:"4.0",desc:"សាកលវិទ្យាល័យរដ្ឋឈានមុខផ្នែកធុរកិច្ច ពាណិជ្ជកម្ម គណនេយ្យ និងសេដ្ឋកិច្ចឌីជីថល។",pricing:[{p:"កម្មវិធីថ្នាក់ជាតិ (Regular Program)",price:"$400–$600/ឆ្នាំ"},{p:"កម្មវិធីអន្តរជាតិ (NUMIC — អង់គ្លេស ១០០%)",price:"$1,600/ឆ្នាំ"}],scholarNote:"អាហារូបករណ៍រដ្ឋ (Government Scholarship)៖ NUM ផ្តល់អាហារូបករណ៍រៀនមិនបង់ថ្លៃ (១០០% ពេញ ៤ ឆ្នាំ) ជូនសិស្សជាប់រៀងរាល់ឆ្នាំ តាមរយៈក្រសួងអប់រំ យុវជន និងកីឡា — ជ្រើសរើសផ្អែកលើនិទ្ទេស/លទ្ធផលបាក់ឌុប។ ថ្នាក់ជាតិទូទៅមិនតម្រូវឲ្យប្រឡងចូល (ចូលរៀនតាមនិទ្ទេសបាក់ឌុប)។ រីឯថ្នាក់អន្តរជាតិ (NUMIC) តម្រូវឲ្យប្រឡងវាស់ស្ទង់ភាសាអង់គ្លេស និងគណិត/តក្កវិទ្យា (Logic)។",facPrices:["$400–$600/ឆ្នាំ","$400–$600/ឆ្នាំ","$400–$600/ឆ្នាំ","$400–$600/ឆ្នាំ"],faculties:["មហាវិទ្យាល័យគ្រប់គ្រងពាណិជ្ជកម្ម និងសហគ្រិនភាព — គ្រប់គ្រងពាណិជ្ជកម្មអន្តរជាតិ (International Business), សហគ្រិនភាព និងនវានុវត្តន៍ (Entrepreneurship & Innovation), គ្រប់គ្រងទេសចរណ៍ និងបដិសណ្ឋារកិច្ច","មហាវិទ្យាល័យហិរញ្ញវត្ថុ គណនេយ្យ និងសេដ្ឋកិច្ច — ហិរញ្ញវត្ថុ និងធនាគារ (Finance & Banking), គណនេយ្យ និងសវនកម្ម (Accounting & Auditing)","មហាវិទ្យាល័យសេដ្ឋកិច្ចឌីជីថល — សេដ្ឋកិច្ចឌីជីថល (Digital Economy), ពាណិជ្ជកម្មតាមប្រព័ន្ធអេឡិចត្រូនិក (E-Commerce), ព័ត៌មានវិទ្យាធុរកិច្ច (Business IT)","មហាវិទ្យាល័យច្បាប់ (Faculty of Law) — ច្បាប់សេដ្ឋកិច្ច និងច្បាប់ពាណិជ្ជកម្មឌីជីថល"]},
  {id:"uhs",name:"សាកលវិទ្យាល័យវិទ្យាសាស្ត្រសុខាភិបាល (UHS)",type:"public",province:"phnom-penh",tuition:700,duration:6,careers:["healthcare"],programs:["វេជ្ជសាស្ត្រ","ឱសថ","ធ្មេញ"],rating:"4.5",desc:"សាកលវិទ្យាល័យរដ្ឋឈានមុខផ្នែកវិទ្យាសាស្ត្រសុខាភិបាល។",facPrices:["$2,000/ឆ្នាំ","$1,500/ឆ្នាំ","$1,800/ឆ្នាំ","$800/ឆ្នាំ"],faculties:["មហាវិទ្យាល័យវេជ្ជសាស្ត្រ","មហាវិទ្យាល័យឱសថសាស្ត្រ","មហាវិទ្យាល័យទន្តសាស្ត្រ","សាលាបច្ចេកទេសថែទាំវេជ្ជសាស្ត្រ — គិលានុបដ្ឋាក, ឆ្មប, បច្ចេកទេសមន្ទីរពិសោធន៍"]},
  {id:"itc",name:"វិទ្យាស្ថានបច្ចេកវិទ្យាកម្ពុជា (ITC)",type:"public",province:"phnom-penh",tuition:500,duration:5,careers:["technology","trades"],programs:["ICT","វិស្វកម្មសំណង់","អគ្គិសនី","ឧស្សាហកម្ម","គីមី/អាហារ"],rating:"4.6",desc:"ស្គាល់ថា «តិចណូ» — វិទ្យាស្ថានវិស្វកម្មឈានមុខរបស់កម្ពុជា។ កម្មវិធីស្តង់ដារ ៥ ឆ្នាំ (រួមឆ្នាំសិក្សាមូលដ្ឋាន ២ ឆ្នាំ)។",pricing:[{p:"ឆ្នាំទី ១–២ (ឆ្នាំមូលដ្ឋាន)",price:"$600/ឆ្នាំ"},{p:"ឆ្នាំទី ៣",price:"$550/ឆ្នាំ"},{p:"ឆ្នាំទី ៤",price:"$500/ឆ្នាំ"},{p:"ឆ្នាំទី ៥",price:"$650/ឆ្នាំ"}],scholarNote:"អាហារូបករណ៍រដ្ឋ ១០០%៖ សិស្សដែលប្រឡងជាប់ថ្នាក់អាហារូបករណ៍រដ្ឋ ក្នុងការប្រឡងចូលថ្នាក់ជាតិ (Entrance Exam) របស់ ITC ទទួលបានការលើកលែងថ្លៃសិក្សា ១០០% ពេញ ៥ ឆ្នាំ។ វិញ្ញាសាប្រឡងចូលរួមមាន៖ គណិតវិទ្យា រូបវិទ្យា និងគីមីវិទ្យា។",facPrices:["$550–$600/ឆ្នាំ","$550–$600/ឆ្នាំ","$550–$600/ឆ្នាំ","$550–$600/ឆ្នាំ","$550–$600/ឆ្នាំ","$550–$600/ឆ្នាំ","$550–$600/ឆ្នាំ","$2,500/ឆ្នាំ"],faculties:["វិទ្យាសាស្ត្រ និងបច្ចេកវិទ្យាព័ត៌មានវិទ្យា (ICT)","វិស្វកម្មសំណង់ស៊ីវិល និងស្ថាបត្យកម្ម (Civil Engineering & Architecture)","វិស្វកម្មអគ្គិសនី និងថាមពល (Electrical & Energy Engineering)","វិស្វកម្មឧស្សាហកម្ម និងមេកានិច (Industrial & Mechanical Engineering)","វិស្វកម្មគីមី និងបច្ចេកវិទ្យាអាហារ (Food Technology & Chemical Engineering)","វិស្វកម្មជនបទ (Rural Engineering)","វិស្វកម្មធនធានភូគព្ភ និងភូគព្ភបច្ចេកសាស្ត្រ (Geo-Resources & Geotechnical Engineering)","កម្មវិធីវិស្វកម្មអន្តរជាតិ (International Engineering Program) — បង្រៀនជាភាសាបរទេស"]},
  {id:"rua",name:"សាកលវិទ្យាល័យភូមិន្ទកសិកម្ម (RUA)",type:"public",province:"phnom-penh",tuition:450,duration:4,careers:["trades","business","agriculture"],programs:["កសិកម្ម","សត្វពេទ្យ","ព្រៃឈើ"],rating:"4.0",desc:"សាកលវិទ្យាល័យរដ្ឋឯកទេសផ្នែកកសិកម្ម និងធនធានធម្មជាតិ។",facPrices:["$450/ឆ្នាំ","$600/ឆ្នាំ","$450/ឆ្នាំ","$500/ឆ្នាំ","$500/ឆ្នាំ"],faculties:["អាហ្គ្រូណូមី និងវិទ្យាសាស្ត្រកសិកម្ម","វិទ្យាសាស្ត្រសត្វ និងសត្វពេទ្យ","ព្រៃឈើ និងប្រព័ន្ធអេកូឡូស៊ី","នេសាទ និងវារីវប្បកម្ម","វិស្វកម្មកសិកម្ម និងបច្ចេកវិទ្យា"]},
  {id:"cadt",name:"បណ្ឌិត្យសភាបច្ចេកវិទ្យាឌីជីថលកម្ពុជា (CADT)",type:"institute",province:"phnom-penh",tuition:750,duration:4,careers:["technology"],programs:["Computer Science","Cybersecurity","Data & AI"],rating:"4.5",desc:"បណ្ឌិត្យសភាឯកទេសផ្នែកបច្ចេកវិទ្យាឌីជីថល និងស្រាវជ្រាវ AI។",facPrices:["$900/ឆ្នាំ","$850/ឆ្នាំ","$750/ឆ្នាំ"],faculties:["វិទ្យាស្ថានបច្ចេកវិទ្យាឌីជីថល (IDT) — Computer Science, Cybersecurity, Data Science & AI, Digital Business","វិទ្យាស្ថានស្រាវជ្រាវ និងនវានុវត្តន៍ឌីជីថល (IDRI) — Khmer NLP, IoT, Robotics","វិទ្យាស្ថានអភិបាលកិច្ចឌីជីថល (IDG) — បណ្ដុះបណ្ដាលមន្ត្រីរាជការ"]},
  {id:"npic",name:"វិទ្យាស្ថានពហុបច្ចេកទេសជាតិកម្ពុជា (NPIC)",type:"institute",province:"phnom-penh",tuition:450,duration:4,careers:["technology","trades"],programs:["សំណង់","មេកានិច","ឧស្សាហកម្ម"],rating:"4.2",desc:"វិទ្យាស្ថានឈានមុខផ្នែកបច្ចេកវិទ្យាសំណង់ មេកានិច និងឧស្សាហកម្ម។"},
  {id:"nie",name:"វិទ្យាស្ថានជាតិអប់រំ (NIE)",type:"institute",province:"phnom-penh",tuition:300,duration:4,careers:["education","business"],programs:["បណ្ដុះបណ្ដាលគ្រូ","គ្រប់គ្រងអប់រំ"],rating:"4.0",desc:"គ្រឹះស្ថានបណ្ដុះបណ្ដាលគ្រូ សាស្ត្រាចារ្យ និងអ្នកគ្រប់គ្រងសាលាឈានមុខ។"},
  {id:"era",name:"សាលាភូមិន្ទរដ្ឋបាល (ERA)",type:"institute",province:"phnom-penh",tuition:300,duration:2,careers:["business"],programs:["រដ្ឋបាលសាធារណៈ"],rating:"4.1",desc:"បណ្ឌិត្យសភារដ្ឋជ្រើសរើស និងបណ្ដុះបណ្ដាលមន្ត្រីរដ្ឋបាលឧត្តម។"},
  {id:"ntti",name:"វិទ្យាស្ថានបណ្ដុះបណ្ដាលបច្ចេកទេសជាតិ (NTTI)",type:"institute",province:"phnom-penh",address:"Teuk Thla, Sen Sok, Phnom Penh",tuition:400,duration:4,careers:["technology","trades"],programs:["វិស្វកម្មវិជ្ជាជីវៈ","បច្ចេកទេស"],rating:"3.9",desc:"ផ្ដោតលើវិស្វកម្មវិជ្ជាជីវៈ និងវិញ្ញាបនបត្របច្ចេកទេស។ ស្ថិតនៅតឹកថ្លា សែនសុខ ភ្នំពេញ។"},
  {id:"nubb",name:"សាកលវិទ្យាល័យជាតិបាត់ដំបង (NUBB)",type:"public",province:"battambang",tuition:400,duration:4,careers:["business","technology"],programs:["អប់រំ","កសិកម្ម","IT"],rating:"3.8",desc:"មជ្ឈមណ្ឌលសិក្សាធិការសំខាន់សម្រាប់តំបន់ភាគពាយ័ព្យ។"},
  {id:"sru",name:"សាកលវិទ្យាល័យស្វាយរៀង (SRU)",type:"public",province:"svay-rieng",tuition:380,duration:4,careers:["business","technology"],programs:["វិស្វកម្ម","ភ័ស្តុភារ"],rating:"3.6",desc:"មានទំនាក់ទំនងខ្លាំងជាមួយតំបន់សេដ្ឋកិច្ចព្រំដែន និងភ័ស្តុភារ។"},
  {id:"mcu",name:"សាកលវិទ្យាល័យមានជ័យ (MCU)",type:"public",province:"banteay-meanchey",tuition:360,duration:4,careers:["business"],programs:["អភិវឌ្ឍន៍តំបន់"],rating:"3.5",desc:"ស្ថិតនៅបន្ទាយមានជ័យ បម្រើការអភិវឌ្ឍតំបន់។"},
  {id:"csku",name:"សាកលវិទ្យាល័យជាស៊ីមកំចាយមារ (CSKU)",type:"public",province:"prey-veng",tuition:340,duration:4,careers:["business","education"],programs:["អប់រំ","គ្រប់គ្រង"],rating:"3.4",desc:"ពង្រីកលទ្ធភាពសិក្សាធិការនៅខេត្តព្រៃវែង។"},
  {id:"pnca",name:"មហាវិទ្យាល័យជាតិកសិកម្មព្រែកលៀប (PNCA)",type:"institute",province:"phnom-penh",tuition:350,duration:4,careers:["trades","business","agriculture"],programs:["ឧស្សាហកម្មកសិកម្ម","ថែរក្សាដំណាំ"],rating:"3.9",desc:"គ្រឹះស្ថានស្នូលបណ្ដុះបណ្ដាលឯកទេសផ្នែកឧស្សាហកម្មកសិកម្ម។"},
  {id:"aupp",name:"American University of Phnom Penh (AUPP)",type:"private",province:"phnom-penh",tuition:3500,duration:4,careers:["business","technology"],programs:["Dual-degree US","ពាណិជ្ជកម្ម","IT"],rating:"4.4",desc:"ផ្ដល់កម្មវិធីសញ្ញាបត្រពីរ រួមជាមួយសាកលវិទ្យាល័យដៃគូនៅសហរដ្ឋអាមេរិក។"},
  {id:"camed",name:"CamEd Business School",type:"private",province:"phnom-penh",tuition:2000,duration:4,careers:["business"],programs:["គណនេយ្យ","ហិរញ្ញវត្ថុ","ACCA"],rating:"4.5",desc:"សាលាឯកទេសទាំងស្រុងផ្នែកគណនេយ្យ ហិរញ្ញវត្ថុ និងវិញ្ញាបនប័ត្រ ACCA។"},
  {id:"paragon",name:"Paragon International University",type:"private",province:"phnom-penh",tuition:3000,duration:4,careers:["technology","design","business"],programs:["វិស្វកម្ម","ស្ថាបត្យកម្ម","ទំនាក់ទំនងអន្តរជាតិ"],rating:"4.3",desc:"(អតីត Zaman University) ល្បីខាងវិស្វកម្ម ស្ថាបត្យកម្ម និងទំនាក់ទំនងអន្តរជាតិ។"},
  {id:"puc",name:"សាកលវិទ្យាល័យបញ្ញាសាស្ត្រកម្ពុជា (PUC)",type:"private",province:"phnom-penh",tuition:1000,duration:4,careers:["design","business","technology","law","media"],programs:["សិល្បៈ","ច្បាប់","IT"],rating:"4.2",desc:"ល្បីខាងកម្មវិធីសិក្សាជាភាសាអង់គ្លេសទាំងស្រុងផ្នែកសិល្បៈ និងសង្គមសាស្ត្រ។"},
  {id:"up",name:"សាកលវិទ្យាល័យពុទ្ធិសាស្ត្រ (UP)",type:"private",province:"phnom-penh",tuition:1200,duration:5,careers:["healthcare"],programs:["វេជ្ជសាស្ត្រ","ឱសថ","ធ្មេញ"],rating:"4.6",desc:"សាកលវិទ្យាល័យវេជ្ជសាស្ត្រឯកជនប្រកួតប្រជែងខ្ពស់ ផ្ដោតលើឱសថ និងធ្មេញ។"},
  {id:"norton",name:"Norton University",type:"private",province:"phnom-penh",tuition:950,duration:4,careers:["technology","business","healthcare","design","law"],programs:["Computer Science","Engineering","Business","Law","Health Sciences"],rating:"4.1",desc:"ស្គាល់ថាជាសាកលវិទ្យាល័យឯកជនដំបូងគេដែលបង្កើតឡើងក្នុងកម្ពុជា។",facPrices:["$700/ឆ្នាំ","$1,000/ឆ្នាំ","$850/ឆ្នាំ","$750/ឆ្នាំ","$1,500/ឆ្នាំ"],faculties:["Foundation Studies Department — ឆ្នាំសិក្សាមូលដ្ឋាន (ចាំបាច់សម្រាប់ថ្នាក់បរិញ្ញាបត្រទាំងអស់)","College of Sciences — Computer Science, Civil Engineering, Electrical/Electronic Engineering","College of Social Sciences — Business, Economics, Law","College of Arts, Humanities and Languages","Faculty of Health Sciences"]},
  {id:"bbu",name:"Build Bright University (BBU)",type:"private",province:"phnom-penh",tuition:1100,duration:4,careers:["business","technology"],programs:["IT","ពាណិជ្ជកម្ម","ច្បាប់"],rating:"3.8",desc:"បណ្ដាញធំមានសាខាច្រើននៅតាមខេត្តសំខាន់ៗ។"},
  {id:"biu",name:"Beltei International University (BIU)",type:"private",province:"phnom-penh",tuition:900,duration:4,careers:["business"],programs:["ពាណិជ្ជកម្ម","ភាសា","គ្រប់គ្រង"],rating:"3.7",desc:"សាកលវិទ្យាល័យរីកចម្រើនលឿន ផ្ដល់ជំនាញពាណិជ្ជកម្ម ភាសា និងគ្រប់គ្រង។"},
  {id:"uc",name:"សាកលវិទ្យាល័យកម្ពុជា (UC)",type:"private",province:"phnom-penh",tuition:1500,duration:4,careers:["business","media"],programs:["អភិបាលកិច្ច","ទំនាក់ទំនងអន្តរជាតិ","ប្រព័ន្ធផ្សព្វផ្សាយ"],rating:"4.0",desc:"ផ្ដោតលើអភិបាលកិច្ច ទំនាក់ទំនងអន្តរជាតិ និងប្រព័ន្ធផ្សព្វផ្សាយ។"},
  {id:"vanda",name:"Vanda Institute",type:"private",province:"phnom-penh",tuition:700,duration:3,careers:["business"],programs:["គណនេយ្យ","ពន្ធដារ"],rating:"4.0",desc:"គ្រឹះស្ថានពេញនិយមផ្នែកគណនេយ្យ និងក្របខ័ណ្ឌពន្ធដារ។"},
  {id:"iu",name:"International University (IU)",type:"private",province:"phnom-penh",tuition:1000,duration:5,careers:["healthcare"],programs:["វេជ្ជសាស្ត្រ","កុមារ","គិលានុបដ្ឋាក"],rating:"3.9",desc:"ផ្នែកវេជ្ជសាស្ត្រ កុមារ និងគិលានុបដ្ឋាកឯកជន។"},
  {id:"limkokwing",name:"Limkokwing University",type:"private",province:"phnom-penh",tuition:1800,duration:4,careers:["design","technology","media"],programs:["Media Arts","Design","Interactive Tech"],rating:"4.0",desc:"សាខាឯកជនឯកទេសផ្នែកសិល្បៈមេឌៀ ការរចនា និងបច្ចេកវិទ្យាអន្តរកម្ម។"},
  {id:"ab",name:"Above & Beyond School (A&B)",type:"digital",province:"phnom-penh",tuition:500,duration:1,careers:["technology"],programs:["Front-End (React/JS)","Back-End (Python/FastAPI/SQL)","AI Vibe Coding"],rating:"4.5",desc:"សហគ្រាសសង្គមបង្កើនសមត្ថភាពយុវជន — Front-End, Back-End និង AI Vibe Coding ដោយប្រើ LLM។"},
  {id:"tux",name:"TUX Global Institute (TGI)",type:"digital",province:"phnom-penh",tuition:1500,duration:2,careers:["technology","design"],programs:["Software Engineering","UI/UX","Data Systems"],rating:"4.4",desc:"បណ្ឌិត្យសភាបច្ចេកវិទ្យាគាំទ្រដោយវិនិយោគជប៉ុន — សញ្ញាបត្រ Software Engineering និង UI/UX។"},
  {id:"camscience",name:"CamScience",type:"digital",province:"phnom-penh",tuition:0,duration:1,careers:["technology","trades"],programs:["IoT","Smart Sensors","Agri-Tech"],rating:"4.2",desc:"អង្គភាពដាក់ពង្រាយបច្ចេកវិទ្យា ផ្ដោតលើ IoT បណ្ដាញឧបករណ៍ឆ្លាតវៃ និងកសិកម្មបច្ចេកវិទ្យា។"},
  {id:"camtech",name:"CamTech University",type:"private",province:"phnom-penh",tuition:1600,duration:4,careers:["technology"],programs:["Artificial Intelligence"],rating:"4.1",desc:"សាកលវិទ្យាល័យឯកជនបង្កើតផ្លូវសិក្សាឯកទេសទាំងស្រុងលើបញ្ញាសិប្បនិម្មិត (AI)។"},
  {id:"sabaicode",name:"SabaiCode Bootcamp",type:"digital",province:"phnom-penh",tuition:800,duration:1,careers:["technology"],programs:["Full-Stack","6-month camp"],rating:"4.3",desc:"ជំរុំបណ្ដុះបណ្ដាល full-stack engineering រយៈពេល ៦ ខែ ដ៏ល្បី។"},
  {id:"dichi",name:"DICHI Academy",type:"digital",province:"phnom-penh",tuition:900,duration:1,careers:["technology","business"],programs:["Techpreneur","Deep Tech","Startup"],rating:"4.2",desc:"ដំណើរការ Techpreneur Bootcamp រួមផ្សំបច្ចេកវិទ្យាជ្រៅ និងក្របខ័ណ្ឌ startup។"},
  {id:"khmercoders",name:"Khmer Coders Community",type:"digital",province:"phnom-penh",tuition:0,duration:1,careers:["technology"],programs:["Open-Source","Khmer Localization","Design Systems"],rating:"4.6",desc:"មជ្ឈមណ្ឌល developer open-source ក្នុងស្រុក ចែករំលែក scripts និងធនធានធ្វើមូលដ្ឋានីយកម្មខ្មែរ។"},
  {id:"acac",name:"Academy of Culinary Arts Cambodia (ACAC)",type:"institute",province:"phnom-penh",tuition:4040,duration:2,careers:["trades","business","tourism","culinary"],programs:["Professional Culinary Arts","Bakery & Pastry","Barista & Beverage","Kitchen Management"],rating:"4.5",desc:"បណ្ឌិត្យសភាចម្អិនអាហារ តាមស្តង់ដារ Swiss-ASEAN ផ្ដល់សញ្ញាបត្រ ២ ឆ្នាំ និងវគ្គខ្លីៗ ព្រមទាំងកម្មសិក្សានៅសណ្ឋាគារ ៥ ផ្កាយ។ ថ្លៃសរុប ២ ឆ្នាំ ~$8,080 (រួមឧបករណ៍ និងសម្ភារ)។",pricing:[{p:"សញ្ញាបត្រ ២ ឆ្នាំ (គ្រប់ track)",price:"$8,080 សរុប"},{p:"ក្នុងមួយឆមាស",price:"~$2,020"},{p:"Bakery & Pastry Short Course",price:"$450 / 20h"},{p:"Masterclass (4h)",price:"$60–$95"}],scholarNote:"មានអាហារូបករណ៍ Naomi Tami (ថ្លៃសិក្សាពេញ ~$8,400) — ត្រូវឆ្លងកាត់ការជ្រើសរើស (សញ្ញាបត្រទី១២, ភាសាអង់គ្លេស, លិខិតបញ្ជាក់ជីវភាព, អត្ថបទ ៥០០ ពាក្យ)។ អ្នកអាចជ្រើសរើសបង់ថ្លៃ ឬដាក់ពាក្យអាហារូបករណ៍។",faculties:["Professional Culinary Arts — Knife Skills, French Techniques, Mise en Place, Butchery, Stocks & Sauces, Banquet Production","Bakery & Pastry Artistry — Viennoiserie, Artisanal Bread, Dough Fermentation, Chocolate Tempering, Plating, Dessert Assembly","Beverage & Barista Operations — Espresso Extraction, Milk Texturing, Latte Art, Coffee Sourcing, Flavor Profiling, Cafe Menu","Kitchen Management & Front-of-House — Cost Engineering, Inventory Valuation, HACCP Safety, Procurement, Customer Service","Public Short Courses — Basic & Advanced Bakery/Pastry (20h), Masterclasses: Macarons, Italian Pasta, Bread Crafting"]},
  {id:"pauldubrule",name:"Paul Dubrule Hotel & Tourism School",type:"institute",province:"siem-reap",tuition:500,duration:2,careers:["culinary","tourism"],programs:["Cuisine","Pastry & Bakery","Front Office","F&B Service"],rating:"4.6",desc:"សាលាបណ្ដុះបណ្ដាលវិជ្ជាជីវៈផ្នែកសណ្ឋាគារ ចម្អិនអាហារ និងទេសចរណ៍ ដ៏ល្បីនៅសៀមរាប។",faculties:["Culinary Arts — Cuisine, Pastry & Bakery","Hospitality — Front Office, Housekeeping, F&B Service","Professional Languages — English, French"]},
  {id:"salabai",name:"Sala Bai Hotel & Restaurant School",type:"institute",province:"siem-reap",tuition:0,duration:1,careers:["culinary","tourism"],programs:["Cookery","Pastry","Restaurant Service","Front Office"],rating:"4.7",desc:"សាលា NGO ផ្ដល់ការបណ្ដុះបណ្ដាលឥតគិតថ្លៃផ្នែកសណ្ឋាគារ និងភោជនីយដ្ឋាន សម្រាប់យុវជនក្រីក្រ។",faculties:["Cookery — Khmer & Western Cuisine","Pastry & Bakery","Restaurant & Bar Service","Front Office & Housekeeping"]},
  {id:"egbok",name:"EGBOK Hospitality Institute",type:"institute",province:"siem-reap",tuition:0,duration:1,careers:["culinary","tourism"],programs:["Culinary Arts","Food & Beverage","Rooms Division"],rating:"4.5",desc:"បេសកកម្ម EGBOK ផ្ដល់ការអប់រំ និងបណ្ដុះបណ្ដាលវិជ្ជាជីវៈផ្នែកបដិសណ្ឋារកិច្ចឥតគិតថ្លៃ។",faculties:["Culinary Arts — Cuisine & Pastry","Food & Beverage Service","Rooms Division & Housekeeping"]},
  {id:"acdemyhosp",name:"Cambodia Hospitality & Culinary Institute",type:"private",province:"phnom-penh",tuition:1200,duration:2,careers:["culinary","tourism","business"],programs:["Culinary Arts","Baking & Pastry","Hotel Management"],rating:"4.2",desc:"គ្រឹះស្ថានឯកជននៅភ្នំពេញ ផ្ដោតលើសិល្បៈចម្អិនអាហារ នំបុ័ង និងការគ្រប់គ្រងសណ្ឋាគារ។",faculties:["Culinary Arts — International & Khmer Cuisine","Baking & Pastry Arts","Hotel & Restaurant Management"]},
  {id:"western",name:"Western University",type:"private",province:"phnom-penh",tuition:1000,duration:4,careers:["business","technology","tourism","law"],programs:["ពាណិជ្ជកម្ម","IT","ទេសចរណ៍","ភាសាអង់គ្លេស","ច្បាប់"],rating:"3.9",desc:"សាកលវិទ្យាល័យឯកជននៅភ្នំពេញ ផ្ដល់ជំនាញផ្នែកពាណិជ្ជកម្ម IT ទេសចរណ៍ ភាសាអង់គ្លេស និងច្បាប់។"}
];

/* ===== QUIZ QUESTIONS (3 phases, weighted across all 10 career sectors) ===== */
const phases = [
  {
    label:"ដំណាក់កាលទី ១: ចំណូលចិត្ត",
    key:"interests",
    questions:[
      {text:"តើអ្នកចូលចិត្ដធ្វើអ្វីនៅពេលទំនេរ?",opts:[
        {l:"សរសេរកូដ ឬលេងជាមួយបច្ចេកវិទ្យា",w:{tech:2}},
        {l:"គូរ ថតរូប ឬបង្កើតមាតិកា",w:{design:2,media:1}},
        {l:"ជួយ ឬថែទាំអ្នកដ៏ទៃ",w:{health:2,education:1}},
        {l:"លក់ ចរចា ឬគ្រប់គ្រងលុយ",w:{business:2}},
        {l:"ជួសជុល ដាំដុះ ឬធ្វើការដៃ",w:{trades:2,agri:1}}
      ]},
      {text:"មុខវិជ្ជាណាដែលអ្នកចូលចិត្ដជាងគេនៅសាលា?",opts:[
        {l:"គណិត និងវិទ្យាសាស្ត្រ",w:{tech:2,agri:1}},
        {l:"ជីវវិទ្យា និងគីមី",w:{health:2,agri:1}},
        {l:"សិល្បៈ និងអក្សរសាស្ត្រ",w:{design:1,media:2}},
        {l:"សេដ្ឋកិច្ច និងភូមិវិទ្យា",w:{business:2,tourism:1}},
        {l:"ពលរដ្ឋវិជ្ជា និងប្រវត្តិសាស្ត្រ",w:{law:2,education:1}}
      ]},
      {text:"កន្លែងណាដែលអ្នកចង់ចំណាយពេលច្រើនជាងគេ?",opts:[
        {l:"នៅមុខកុំព្យូទ័រ",w:{tech:2,media:1}},
        {l:"ជាមួយមនុស្ស ឬអ្នកជំងឺ",w:{health:2}},
        {l:"ក្នុងស្ទូឌីយោ ឬកន្លែងច្នៃប្រឌិត",w:{design:2,media:1}},
        {l:"នៅខាងក្រៅ ធម្មជាតិ ឬកសិដ្ឋាន",w:{agri:2,tourism:1,trades:1}},
        {l:"នៅកន្លែងធ្វើការជាមួយភ្ញៀវ",w:{tourism:2,business:1}}
      ]}
    ]
  },
  {
    label:"ដំណាក់កាលទី ២: ជំនាញ",
    key:"skills",
    questions:[
      {text:"ជំនាញណាដែលអ្នកគិតថាខ្លួនអ្នកខ្លាំងជាងគេ?",opts:[
        {l:"តក្កវិជ្ជា និងការដោះស្រាយបញ្ហា",w:{tech:2,business:1}},
        {l:"ការទំនាក់ទំនង និងការយកចិត្តទុកដាក់",w:{health:2,education:1}},
        {l:"ការនិយាយ និងការបញ្ចុះបញ្ចូល",w:{business:1,law:2,media:1}},
        {l:"ការច្នៃ និងការមើលឃើញសោភ័ណភាព",w:{design:2,media:1}},
        {l:"ការងារដៃ និងភាពជាក់ស្ដែង",w:{trades:2,agri:1}}
      ]},
      {text:"នៅក្នុងក្រុម អ្នកតែងតែដើរតួជាអ្វី?",opts:[
        {l:"អ្នកដោះស្រាយបញ្ហាបច្ចេកទេស",w:{tech:2}},
        {l:"អ្នកមើលថែ និងសម្របសម្រួល",w:{health:1,education:2}},
        {l:"អ្នកដឹកនាំ និងសម្រេចចិត្ត",w:{business:2,law:1}},
        {l:"អ្នករចនា និងបង្កើតគំនិត",w:{design:2,media:1}},
        {l:"អ្នកអនុវត្ត និងសាងសង់",w:{trades:2,agri:1}}
      ]},
      {text:"អ្នកចង់ធ្វើការជាមួយអ្វីជាចម្បង?",opts:[
        {l:"ទិន្នន័យ ម៉ាស៊ីន និងកូដ",w:{tech:2}},
        {l:"មនុស្ស សិស្ស ឬអ្នកជំងឺ",w:{health:2,education:1}},
        {l:"គំនិត ការរចនា និងមាតិកា",w:{design:2,media:1}},
        {l:"លុយ ទីផ្សារ និងច្បាប់",w:{business:2,law:1}},
        {l:"ដី រុក្ខជាតិ និងភ្ញៀវទេសចរ",w:{agri:2,tourism:1,trades:1}}
      ]}
    ]
  },
  {
    label:"ដំណាក់កាលទី ៣: តម្លៃ និងគោលដៅ",
    key:"values",
    questions:[
      {text:"អ្វីសំខាន់ជាងគេសម្រាប់អ្នកក្នុងការងារ?",opts:[
        {l:"ប្រាក់ខែខ្ពស់ និងបច្ចេកវិទ្យា",w:{tech:2,business:1}},
        {l:"ជួយសង្គម និងមនុស្ស",w:{health:2,education:1}},
        {l:"សេរីភាពក្នុងការច្នៃប្រឌិត",w:{design:2,media:1}},
        {l:"យុត្តិធម៌ និងរបៀបរៀបរយ",w:{law:2}},
        {l:"ធ្វើការជាមួយធម្មជាតិ និងជំនាញ",w:{agri:1,trades:2,tourism:1}}
      ]},
      {text:"គោលដៅរយៈពេលវែងរបស់អ្នក?",opts:[
        {l:"បង្កើតផលិតផលបច្ចេកវិទ្យា ឬ startup",w:{tech:2,business:1}},
        {l:"ព្យាបាល ឬអប់រំមនុស្ស",w:{health:2,education:2}},
        {l:"ក្លាយជាសិល្បករ ឬអ្នកបង្កើតមាតិកា",w:{design:2,media:2}},
        {l:"ការពារយុត្តិធម៌ ឬក្លាយជាអ្នកដឹកនាំ",w:{law:2,business:1}},
        {l:"អភិវឌ្ឍកសិកម្ម ទេសចរណ៍ ឬជំនាញ",w:{agri:2,tourism:2,trades:1}}
      ]}
    ]
  }
];

/* ===== APP STATE ===== */
let menuOpen=false, phaseIdx=0, qIdx=0, selIdx=null;
let compareList=[];
const allQs = phases.flatMap(p=>p.questions);
const totalQs = allQs.length;
let globalIdx=0;
let answers=new Array(totalQs).fill(null);

/* ===== SIDEBAR ===== */
const hamburger=document.getElementById("hamburger");
const navLinks=document.getElementById("nav-links");
function toggleSidebar(){menuOpen=!menuOpen;navLinks.classList.toggle("open",menuOpen);hamburger.classList.toggle("open",menuOpen);hamburger.querySelector("i").textContent=menuOpen?"close":"menu";}
function closeSidebar(){if(menuOpen)toggleSidebar();}
hamburger.addEventListener("click",toggleSidebar);

/* ===== NAVIGATION ===== */
function showView(v){
  document.querySelectorAll(".view").forEach(el=>el.classList.remove("active","fade-in"));
  const t=document.getElementById("view-"+v);
  if(!t)return;
  t.classList.add("active");
  requestAnimationFrame(()=>t.classList.add("fade-in"));
  document.querySelectorAll(".s-link").forEach(l=>l.classList.toggle("active",l.dataset.view===v&&!l.dataset.cat));
  window.scrollTo({top:0,behavior:"smooth"});
  closeSidebar();
  if(v==="quiz")initQuiz();
  if(v==="schools")renderSchools();
  if(v==="careers")renderCareers();
  if(v==="cost")calcCost();
  if(v==="plan")renderPlan();
  if(v==="home")typeHero();
  try{sessionStorage.setItem("tv_view",v);}catch(e){}
}
document.querySelectorAll("[data-view]").forEach(el=>{
  el.addEventListener("click",()=>{
    const v=el.dataset.view;
    const cat=el.dataset.cat;
    showView(v);
    if(v==="schools"&&cat){filterSchoolsByCat(cat);}
  });
});
document.querySelector('.s-link[data-view="home"]').classList.add("active");

/* ===== GOAL 1: QUIZ ===== */
function initQuiz(){
  phaseIdx=0;qIdx=0;globalIdx=0;selIdx=null;
  answers=new Array(totalQs).fill(null);
  renderQ();
}
function renderQ(){
  const phase=phases[phaseIdx];
  const q=phase.questions[qIdx];
  document.getElementById("quiz-phase-lbl").textContent=phase.label;
  document.getElementById("quiz-counter").textContent="សំណួរ "+(globalIdx+1)+" / "+totalQs;
  document.getElementById("progress-fill").style.width=((globalIdx/totalQs)*100)+"%";
  document.getElementById("q-text").textContent=q.text;
  const prev=answers[globalIdx];
  document.getElementById("options").innerHTML=q.opts.map((o,idx)=>`<div class="option${prev===idx?" selected":""}" data-idx="${idx}"><i class="material-symbols-outlined">${prev===idx?"task_alt":"radio_button_unchecked"}</i><span>${o.l}</span></div>`).join("");
  document.querySelectorAll(".option").forEach(el=>el.addEventListener("click",()=>{
    document.querySelectorAll(".option").forEach(e=>{e.classList.remove("selected");e.querySelector(".material-symbols-outlined").textContent="radio_button_unchecked";});
    el.classList.add("selected");
    el.querySelector(".material-symbols-outlined").textContent="task_alt";
    selIdx=parseInt(el.dataset.idx,10);
    document.getElementById("next-btn").disabled=false;
  }));
  selIdx=prev;
  document.getElementById("next-btn").disabled=(prev==null);
  document.getElementById("prev-btn").style.display=globalIdx>0?"inline-flex":"none";
  document.getElementById("next-btn").textContent=globalIdx===totalQs-1?"មើលលទ្ធផល":"បន្ទាប់ ▶";
  ["phase-1","phase-2","phase-3"].forEach((id,i)=>{
    const el=document.getElementById(id);
    el.classList.remove("active","done");
    if(i<phaseIdx)el.classList.add("done");
    else if(i===phaseIdx)el.classList.add("active");
  });
}
document.getElementById("next-btn").addEventListener("click",()=>{
  if(selIdx==null)return;
  answers[globalIdx]=selIdx;
  qIdx++;globalIdx++;
  if(qIdx>=phases[phaseIdx].questions.length){phaseIdx++;qIdx=0;}
  if(phaseIdx>=phases.length){document.getElementById("progress-fill").style.width="100%";setTimeout(showResults,200);}
  else renderQ();
});
function prevQ(){if(globalIdx===0)return;globalIdx--;let g=0;phaseIdx=0;qIdx=0;for(let pi=0;pi<phases.length;pi++){if(g+phases[pi].questions.length>globalIdx){phaseIdx=pi;qIdx=globalIdx-g;break;}g+=phases[pi].questions.length;}renderQ();}

/* Compute sector scores + per-phase scores from the answers array */
function computeScores(){
  const sec={};Object.keys(jobCats).forEach(k=>sec[k]=0);
  const phaseSec=phases.map(()=>({}));
  let gi=0;
  for(let pi=0;pi<phases.length;pi++){
    for(let qi=0;qi<phases[pi].questions.length;qi++){
      const a=answers[gi];
      if(a!=null){
        const w=phases[pi].questions[qi].opts[a].w||{};
        for(const k in w){sec[k]=(sec[k]||0)+w[k];phaseSec[pi][k]=(phaseSec[pi][k]||0)+w[k];}
      }
      gi++;
    }
  }
  return {sec,phaseSec};
}

function showResults(){
  const {sec,phaseSec}=computeScores();
  const sectors=Object.keys(jobCats);
  const maxS=Math.max(1,...sectors.map(s=>sec[s]||0));
  const norm={};sectors.forEach(s=>norm[s]=(sec[s]||0)/maxS);
  const rankedSectors=sectors.slice().sort((a,b)=>(sec[b]||0)-(sec[a]||0));
  // Build a match % for every career in the directory, based on its sector fit
  const matches=[];
  rankedSectors.forEach((s,si)=>{
    if((sec[s]||0)<=0)return;
    careersList.filter(c=>c.cat===s).forEach((c,ci)=>{
      let pct=Math.round(52+norm[s]*47-ci*2-si*1.5);
      pct=Math.max(45,Math.min(99,pct));
      matches.push({c,pct,s});
    });
  });
  matches.sort((a,b)=>b.pct-a.pct);
  // Pick top 6, max 2 careers per sector for variety across the student's interests
  const chosen=[],cnt={};
  for(const m of matches){if(chosen.length>=6)break;if((cnt[m.s]||0)>=2)continue;cnt[m.s]=(cnt[m.s]||0)+1;chosen.push(m);}
  if(chosen.length<6){for(const m of matches){if(chosen.length>=6)break;if(chosen.indexOf(m)<0)chosen.push(m);}}
  // Profile summary (top sectors per phase)
  const phaseTop=phaseSec.map(ps=>Object.keys(ps).sort((a,b)=>ps[b]-ps[a]).slice(0,2).map(k=>jobCats[k]?jobCats[k].label:k));
  const traits=[
    {icon:"favorite",label:"ចំណូលចិត្ត",tags:phaseTop[0].length?phaseTop[0]:["—"]},
    {icon:"psychology",label:"ជំនាញ",tags:phaseTop[1].length?phaseTop[1]:["—"]},
    {icon:"star",label:"តម្លៃ និងគោលដៅ",tags:phaseTop[2].length?phaseTop[2]:["—"]}
  ];
  document.getElementById("profile-grid").innerHTML=traits.map(t=>`<div class="profile-trait"><i class="material-symbols-outlined">${t.icon}</i><h4>${t.label}</h4><div class="tags">${t.tags.map(tg=>`<span class="tag">${tg||"—"}</span>`).join("")}</div></div>`).join("");
  document.getElementById("results-list").innerHTML=chosen.map((m,i)=>{
    const c=m.c;
    const skills=(c.skills||[]).slice(0,3).map(t=>`<span class="match-tag">${t}</span>`).join("");
    return`<div class="match-card" style="animation-delay:${i*.1}s;cursor:pointer" onclick="openCareer('${c.id}')"><div class="match-left"><div class="match-icon"><i class="material-symbols-outlined">${c.icon||"work"}</i></div><div><p class="match-name">${c.name}</p><p class="match-why">${jobCats[c.cat]?jobCats[c.cat].label:""}</p><div class="match-tags">${skills}</div><p class="match-salary">ប្រាក់ខែ: <b>${c.salary||"—"}</b></p></div></div><div class="match-pct"><div class="num" id="pct${i}">0%</div><div class="word">ផ្គូផ្គង</div></div></div>`;
  }).join("");
  chosen.forEach((m,i)=>animCount(document.getElementById("pct"+i),m.pct,i*120+300));
  if(typeof plan!=="undefined"){plan.quiz={topCareers:chosen.slice(0,5).map(m=>({id:m.c.id,pct:m.pct})),sectors:sec,date:Date.now()};savePlan();updatePlanBadge();}
  showView("results");
}
function animCount(el,target,delay){if(!el)return;setTimeout(()=>{const dur=700,st=performance.now();function step(now){const p=Math.min((now-st)/dur,1);el.textContent=Math.round(p*target)+"%";if(p<1)requestAnimationFrame(step);}requestAnimationFrame(step);},delay);}

/* ===== GOAL 2: SCHOOLS ===== */
let schoolSearch="",schoolProvince="all",schoolType="all",schoolCareer="all";
let schoolPage=1,jobPage=1;
const SCHOOLS_PER_PAGE=9,JOBS_PER_PAGE=9;

/* ===== PAGINATION HELPERS ===== */
function khNum(n){return String(n).replace(/\d/g,d=>"០១២៣៤៥៦៧៨៩"[+d]);}
function pageRange(cur,total){
  const range=[],delta=1;let last=0;
  for(let i=1;i<=total;i++){
    if(i===1||i===total||(i>=cur-delta&&i<=cur+delta)){
      if(last&&i-last>1)range.push("...");
      range.push(i);last=i;
    }
  }
  return range;
}
function renderPagination(elId,total,page,per,fn){
  const el=document.getElementById(elId);if(!el)return;
  const pages=Math.ceil(total/per);
  if(pages<=1){el.innerHTML="";return;}
  let h='<button class="page-btn" '+(page<=1?"disabled":"")+' onclick="'+fn+'('+(page-1)+')" aria-label="prev"><i class="material-symbols-outlined">chevron_left</i></button>';
  pageRange(page,pages).forEach(n=>{
    if(n==="...")h+='<span class="page-ellipsis">…</span>';
    else h+='<button class="page-btn'+(n===page?" active":"")+'" onclick="'+fn+'('+n+')">'+khNum(n)+'</button>';
  });
  h+='<button class="page-btn" '+(page>=pages?"disabled":"")+' onclick="'+fn+'('+(page+1)+')" aria-label="next"><i class="material-symbols-outlined">chevron_right</i></button>';
  el.innerHTML=h;
}
function pageInfo(elId,total,page,per){
  const el=document.getElementById(elId);if(!el)return;
  if(!total){el.textContent="";return;}
  const start=(page-1)*per+1,end=Math.min(total,page*per);
  el.textContent="បង្ហាញ "+khNum(start)+"–"+khNum(end)+" ក្នុងចំណោម "+khNum(total);
}

function filterSchoolsByCat(cat){schoolCareer=cat;schoolPage=1;const el=document.getElementById("school-career-filter");el.value=cat;if(el._csSync)el._csSync();renderSchools();}

function renderSchools(){
  const q=schoolSearch.toLowerCase();
  const filtered=schoolsData.filter(s=>{
    const matchQ=s.name.toLowerCase().includes(q);
    const matchP=schoolProvince==="all"||s.province===schoolProvince;
    const matchT=schoolType==="all"||s.type===schoolType;
    const matchC=schoolCareer==="all"||s.careers.includes(schoolCareer);
    return matchQ&&matchP&&matchT&&matchC;
  });
  const grid=document.getElementById("schools-grid");
  if(!filtered.length){grid.innerHTML=`<div class="empty-state"><i class="material-symbols-outlined">search_off</i><p>រកមិនឃើញ</p></div>`;renderPagination("schools-pagination",0,1,SCHOOLS_PER_PAGE,"gotoSchoolPage");pageInfo("schools-page-info",0,1,SCHOOLS_PER_PAGE);return;}
  const pages=Math.ceil(filtered.length/SCHOOLS_PER_PAGE);
  if(schoolPage>pages)schoolPage=pages;if(schoolPage<1)schoolPage=1;
  const start=(schoolPage-1)*SCHOOLS_PER_PAGE;
  const pageItems=filtered.slice(start,start+SCHOOLS_PER_PAGE);
  grid.innerHTML=pageItems.map((s,i)=>`
    <div class="school-card" style="animation-delay:${i*.06}s" onclick="openSchool('${s.id}')">
      <div class="school-card-top">
        ${schoolLogo(s)}
        <div class="card-actions">
          <div class="compare-btn ${compareList.includes(s.id)?'on':''}" title="ប្រៀបធៀប" onclick="event.stopPropagation();toggleCompare('${s.id}')"><i class="material-symbols-outlined">${compareList.includes(s.id)?'check_box':'add_box'}</i></div>
        </div>
      </div>
      <p class="school-name">${s.name}</p>
      <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-bottom:12px">
        <span class="school-type-badge ${typeBadgeClass(s.type)}">${typeLabel(s.type)}</span>
        <span style="font-size:12px;color:var(--text-3)"><i class="material-symbols-outlined" style="font-size:14px;vertical-align:-2px">location_on</i>${provinceLabel(s.province)} · ★ ${s.rating}</span>
      </div>
      <div class="school-programs">${s.programs.map(p=>`<span class="school-prog-tag">${p}</span>`).join("")}</div>
      <div class="school-footer">
        <span class="school-tuition">${tuitionLabel(s)}</span>
        <span class="school-view-more">មើលលម្អិត →</span>
      </div>
    </div>`).join("");
  renderPagination("schools-pagination",filtered.length,schoolPage,SCHOOLS_PER_PAGE,"gotoSchoolPage");
  pageInfo("schools-page-info",filtered.length,schoolPage,SCHOOLS_PER_PAGE);
  updateCompareBar();
}
function gotoSchoolPage(p){schoolPage=p;renderSchools();window.scrollTo({top:0,behavior:"smooth"});}

function provinceLabel(p){const m={pp:"ភ្នំពេញ","phnom-penh":"ភ្នំពេញ","siem-reap":"សៀមរាប",battambang:"បាត់ដំបង","kampong-cham":"កំពង់ចាម","svay-rieng":"ស្វាយរៀង","banteay-meanchey":"បន្ទាយមានជ័យ","prey-veng":"ព្រៃវែង",province:"ខេត្ត"};return m[p]||p;}
function typeLabel(t){return {public:"រដ្ឋ",private:"ឯកជន",institute:"វិទ្យាស្ថាន",digital:"ឌីជីថល"}[t]||t;}
function typeBadgeClass(t){return {public:"badge-public",private:"badge-private",institute:"badge-institute",digital:"badge-digital"}[t]||"badge-public";}
function tuitionLabel(s){return s.tuition>0?("$"+s.tuition+"/ឆ្នាំ"):"ឥតគិតថ្លៃ";}
function careerLabel(c){return {technology:"បច្ចេកវិទ្យា",healthcare:"សុខភាព",design:"ការរចនា",business:"ពាណិជ្ជកម្ម",trades:"ជំនាញការ",education:"អប់រំ",tourism:"ទេសចរណ៍",agriculture:"កសិកម្ម",law:"ច្បាប់",media:"ប្រព័ន្ធផ្សព្វផ្សាយ",culinary:"ចម្អិនអាហារ"}[c]||c;}
const logoMap={rupp:"RUPP",rule:"RULE",num:"NUM",uhs:"UHS",itc:"ITC",rua:"RUA",cadt:"CADT",npic:"NPIC",nie:"NIE",era:"ERA",ntti:"NTTI",nubb:"NUBB",sru:"SRU",mcu:"MCU",csku:"CSKU",pnca:"PNCA",aupp:"AUPP",camed:"CamEd",paragon:"PIU",puc:"PUC",up:"UP",norton:"NU",bbu:"BBU",biu:"BIU",uc:"UC",vanda:"VI",iu:"IU",limkokwing:"LKW",ab:"A&B",tux:"TUX",camscience:"CS",camtech:"CT",sabaicode:"SC",dichi:"DICHI",khmercoders:"KC",acac:"ACAC",pauldubrule:"PD",salabai:"SB",egbok:"EGBOK",acdemyhosp:"CHC",western:"WU"};
const logoColors=["#624EBC","#2563eb","#16a34a","#d4860b","#e5484d","#0ea5e9","#7c3aed","#db2777","#0d9488","#ca8a04"];
function schoolAbbr(s){return logoMap[s.id]||s.name.replace(/[^A-Za-z]/g,"").slice(0,2).toUpperCase();}
function schoolColor(s){let h=0;for(let i=0;i<s.id.length;i++)h=(h*31+s.id.charCodeAt(i))>>>0;return logoColors[h%logoColors.length];}
function logoFont(abbr,big){const n=abbr.length;if(big)return n>4?"13px":n>3?"16px":"19px";return n>4?"11px":n>3?"13px":"15px";}
/* renders the school logo: official image from public/logos/<id>.png, falling back to coloured initials if missing */
function schoolLogo(s,extraStyle){const abbr=schoolAbbr(s);return`<div class="school-logo" style="${extraStyle||""}background:${schoolColor(s)};font-size:${logoFont(abbr,false)}">${abbr}<img src="public/logos/${s.id}.png" alt="" onload="this.parentNode.classList.add('has-logo')" onerror="this.remove()"></div>`;}

function toggleFaculty(el){const wasOpen=el.classList.contains("open");el.parentNode.querySelectorAll(".faculty-item.open").forEach(x=>x.classList.remove("open"));if(!wasOpen)el.classList.add("open");}
function scholarLine(s){
  if(s.scholarNote)return s.scholarNote;
  if(s.tuition===0)return "អាហារូបករណ៍ពេញ / ឥតគិតថ្លៃ — ត្រូវឆ្លងកាត់ការជ្រើសរើស (កម្រិតជីវភាព ឬការសម្ភាសន៍)។";
  if(s.type==="public"||s.type==="institute")return "មានអាហារូបករណ៍រដ្ឋ — ត្រូវប្រឡងជ្រើសរើស (តាមលទ្ធផលបាក់ឌុប ឬប្រឡងចូល)។ អ្នកអាចជ្រើសរើសបង់ថ្លៃ ឬដាក់ពាក្យអាហារូបករណ៍ (បើមានទាំងពីរ)។";
  return "អាចមានអាហារូបករណ៍បញ្ចុះតម្លៃ — ផ្អែកលើលទ្ធផលសិក្សា ឬការសម្ភាសន៍/ប្រឡង។ អ្នកអាចជ្រើសរើសបង់ថ្លៃ ឬដាក់ពាក្យអាហារូបករណ៍។";
}
function pricingCard(s){
  let rows;
  if(s.pricing&&s.pricing.length){
    rows=s.pricing.map(p=>`<div class="price-row"><span class="pr-label">${p.p}</span><span class="pr-val">${p.price}</span></div>`).join("");
  }else if(s.facPrices&&s.facPrices.length){
    rows=`<div class="price-row"><span class="pr-label">តម្លៃខុសគ្នាតាមផ្នែក / ជំនាញ</span><span class="pr-val">មើលក្នុងផ្នែក ↑</span></div>`;
  }else{
    rows=`<div class="price-row"><span class="pr-label">ថ្លៃសិក្សា (ក្នុងមួយឆ្នាំ)</span><span class="pr-val">${tuitionLabel(s)}</span></div>`+
      (s.tuition>0?`<div class="price-row"><span class="pr-label">សរុប ${s.duration} ឆ្នាំ</span><span class="pr-val">$${(s.tuition*s.duration).toLocaleString()}</span></div>`:"");
  }
  return `<div class="detail-card"><h3><i class="material-symbols-outlined">payments</i> តម្លៃសិក្សា និងអាហារូបករណ៍</h3>
    <div class="price-list">${rows}</div>
    <div class="price-scholar"><i class="material-symbols-outlined">workspace_premium</i><span>${scholarLine(s)}</span></div>
    <p class="price-note">* សូមផ្ទៀងផ្ទាត់តម្លៃ និងលក្ខខណ្ឌអាហារូបករណ៍ជាមួយសាលាដោយផ្ទាល់។</p>
  </div>`;
}
function openSchool(id){
  const s=schoolsData.find(x=>x.id===id);
  if(!s)return;
  const facHtml=(s.faculties&&s.faculties.length)?`
    <div class="detail-card">
      <h3><i class="material-symbols-outlined">account_tree</i> មហាវិទ្យាល័យ និងផ្នែក</h3>
      <div class="faculty-list">${s.faculties.map((f,i)=>{const p=f.split(" — ");const name=p[0];const majors=p[1]?p[1].split(/,\s*/):[];const has=majors.length>0;const open=(has&&i===0)?' open':'';const price=(s.facPrices&&s.facPrices[i])?s.facPrices[i]:'';return '<div class="faculty-item'+(has?'':' no-detail')+open+'"'+(has?' onclick="toggleFaculty(this)"':'')+'>'+'<div class="fac-head"><div class="fac-head-left"><div class="fac-name">'+name+'</div>'+(has?'<div class="fac-count"><i class="material-symbols-outlined">menu_book</i> '+majors.length+' ផ្នែកសិក្សា</div>':'')+'</div><div class="fac-head-right">'+(price?'<span class="fac-price">'+price+'</span>':'')+(has?'<i class="material-symbols-outlined fac-chevron">expand_more</i>':'')+'</div></div>'+(has?'<div class="fac-body"><div class="fac-majors-tags">'+majors.map(m=>'<span class="fac-major-tag"><i class="material-symbols-outlined">school</i>'+m+'</span>').join("")+'</div></div>':'')+'</div>';}).join("")}</div>
    </div>`:`
    <div class="detail-card">
      <h3><i class="material-symbols-outlined">menu_book</i> កម្មវិធីសិក្សា</h3>
      <div class="detail-tags">${s.programs.map(p=>'<span class="tag">'+p+'</span>').join("")}</div>
    </div>`;
  const mapQ=encodeURIComponent(s.name+" "+(s.address?s.address:provinceLabel(s.province))+" Cambodia");
  const mapCard=`
    <div class="detail-card">
      <h3><i class="material-symbols-outlined">location_on</i> ទីតាំង (Google Maps)</h3>
      <div class="map-embed"><iframe title="ផែនទី ${s.name}" src="https://maps.google.com/maps?q=${mapQ}&amp;z=14&amp;output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
      <a class="btn btn-ghost btn-sm map-btn" href="https://www.google.com/maps/search/?api=1&amp;query=${mapQ}" target="_blank" rel="noopener noreferrer"><i class="material-symbols-outlined">map</i> បើកក្នុង Google Maps</a>
    </div>`;
  document.getElementById("school-detail").innerHTML=`
    <div class="detail-back" onclick="showView('schools')"><i class="material-symbols-outlined">arrow_back</i> ត្រលប់ទៅសាលា</div>
    <div class="detail-head">
      <div class="detail-logo" style="background:${schoolColor(s)};font-size:${logoFont(schoolAbbr(s),true)}">${schoolAbbr(s)}<img src="public/logos/${s.id}.png" alt="" onload="this.parentNode.classList.add('has-logo')" onerror="this.remove()"></div>
      <div style="flex:1;min-width:220px">
        <span class="school-type-badge ${typeBadgeClass(s.type)}">${typeLabel(s.type)}</span>
        <h1 class="detail-title" style="margin-top:8px">${s.name}</h1>
      </div>
    </div>
    <div class="detail-meta">
      <span><i class="material-symbols-outlined">location_on</i> ${provinceLabel(s.province)}</span>
      <span><i class="material-symbols-outlined">star</i> ${s.rating}</span>
      <span><i class="material-symbols-outlined">payments</i> ${tuitionLabel(s)}</span>
      <span><i class="material-symbols-outlined">schedule</i> ${s.duration} ឆ្នាំ</span>
    </div>
    <p class="detail-desc">${s.desc||""}</p>
    <div class="detail-grid">
      <div>${facHtml}${pricingCard(s)}${admissionCard(s.type)}${mapCard}</div>
      <div class="detail-card detail-side">
        <h3><i class="material-symbols-outlined">info</i> ព័ត៌មានសង្ខេប</h3>
        <div class="info-row"><span class="lbl"><i class="material-symbols-outlined">apartment</i> ប្រភេទ</span><span class="val">${typeLabel(s.type)}</span></div>
        <div class="info-row"><span class="lbl"><i class="material-symbols-outlined">location_on</i> ខេត្ត</span><span class="val">${provinceLabel(s.province)}</span></div>
        <div class="info-row"><span class="lbl"><i class="material-symbols-outlined">payments</i> ថ្លៃ/ឆ្នាំ</span><span class="val">${tuitionLabel(s)}</span></div>
        <div class="info-row"><span class="lbl"><i class="material-symbols-outlined">schedule</i> រយៈពេល</span><span class="val">${s.duration} ឆ្នាំ</span></div>
        <div class="info-row"><span class="lbl"><i class="material-symbols-outlined">star</i> វាយតម្លៃ</span><span class="val">★ ${s.rating}</span></div>
        <div style="margin-top:16px"><div style="font-size:12px;color:var(--text-3);font-weight:600;margin-bottom:8px">អាជីពពាក់ព័ន្ធ</div><div class="detail-tags">${s.careers.map(c=>'<span class="tag">'+careerLabel(c)+'</span>').join("")}</div></div>
        <div class="detail-actions">
          <button class="btn btn-primary btn-sm" onclick="showView('cost')"><i class="material-symbols-outlined">calculate</i> ប៉ាន់ស្មានថ្លៃ</button>
          <button class="btn btn-ghost btn-sm" onclick="showView('scholarship')"><i class="material-symbols-outlined">workspace_premium</i> អាហារូបករណ៍</button>
        </div>
      </div>
    </div>`;
  showView("school-detail");
  try{sessionStorage.setItem("tv_detail","school:"+id);}catch(e){}
}

function toggleCompare(id){
  if(compareList.includes(id))compareList=compareList.filter(x=>x!==id);
  else if(compareList.length<3)compareList.push(id);
  renderSchools();
}
function updateCompareBar(){
  const bar=document.getElementById("compare-bar");
  const cnt=document.getElementById("compare-count");
  bar.style.display=compareList.length>0?"flex":"none";
  cnt.textContent=compareList.length>=2?`${compareList.length} សាលាត្រូវបានជ្រើស — ប្រៀបធៀប`:`ជ្រើស ${compareList.length}/3`;
}
function showCompare(){
  if(compareList.length<2)return;
  const sel=schoolsData.filter(s=>compareList.includes(s.id));
  const rows=[
    ["ឈ្មោះ",s=>s.name],
    ["ប្រភេទ",s=>typeLabel(s.type)],
    ["ខេត្ត",s=>provinceLabel(s.province)],
    ["ថ្លៃ/ឆ្នាំ",s=>tuitionLabel(s)],
    ["រយៈពេល",s=>s.duration+" ឆ្នាំ"],
    ["ការវាយតម្លៃ",s=>"★ "+s.rating],
    ["ផ្នែក",s=>s.programs.join(", ")]
  ];
  const thead=`<tr><th>ចំណុច</th>${sel.map(s=>`<th>${s.name.split(" ")[0]}</th>`).join("")}</tr>`;
  const tbody=rows.map(([label,fn])=>`<tr><td><b>${label}</b></td>${sel.map(s=>`<td>${fn(s)}</td>`).join("")}</tr>`).join("");
  document.getElementById("compare-table").innerHTML=thead+tbody;
  const sec=document.getElementById("compare-section");
  sec.style.display="block";
  sec.scrollIntoView({behavior:"smooth"});
}
function clearCompare(){compareList=[];document.getElementById("compare-section").style.display="none";renderSchools();}

document.getElementById("school-search").addEventListener("input",e=>{schoolSearch=e.target.value;schoolPage=1;renderSchools();});
document.getElementById("school-province").addEventListener("change",e=>{schoolProvince=e.target.value;schoolPage=1;renderSchools();});
document.getElementById("school-type").addEventListener("change",e=>{schoolType=e.target.value;schoolPage=1;renderSchools();});
document.getElementById("school-career-filter").addEventListener("change",e=>{schoolCareer=e.target.value;schoolPage=1;renderSchools();});

/* ===== GOAL 3: COST ===== */
const salaryMap={technology:800,healthcare:600,design:500,business:650,trades:450,cs:800,health:600,design2:500,business2:650,engineering:750,law:550};
function styleRange(el){if(!el)return;const min=+el.min||0,max=+el.max||100,val=+el.value;const pct=max>min?((val-min)/(max-min))*100:0;el.style.background="linear-gradient(to right,var(--accent) 0%,var(--accent) "+pct+"%,var(--border) "+pct+"%,var(--border) 100%)";}
function calcCost(){
  ["cost-rent","cost-food","cost-transport","cost-materials"].forEach(id=>styleRange(document.getElementById(id)));
  const schoolSel=document.getElementById("cost-school");
  const tuitionPerYear=schoolSel.selectedOptions[0]?.dataset.tuition||0;
  const years=parseInt(document.getElementById("cost-years").value)||4;
  const rent=parseInt(document.getElementById("cost-rent").value)||80;
  const food=parseInt(document.getElementById("cost-food").value)||60;
  const transport=parseInt(document.getElementById("cost-transport").value)||30;
  const materials=parseInt(document.getElementById("cost-materials").value)||150;
  document.getElementById("rent-val").textContent="$"+rent;
  document.getElementById("food-val").textContent="$"+food;
  document.getElementById("transport-val").textContent="$"+transport;
  document.getElementById("materials-val").textContent="$"+materials;
  const tuitionTotal=tuitionPerYear*years;
  const livingPerYear=(rent+food+transport)*12;
  const livingTotal=livingPerYear*years;
  const materialsTotal=materials*years;
  const total=tuitionTotal+livingTotal+materialsTotal;
  const fmt=n=>"$"+n.toLocaleString();
  document.getElementById("total-cost").textContent=fmt(total);
  document.getElementById("cost-duration").textContent="សម្រាប់ "+years+" ឆ្នាំ";
  document.getElementById("breakdown-tuition").textContent=fmt(tuitionTotal);
  document.getElementById("breakdown-rent").textContent=fmt(rent*12*years);
  document.getElementById("breakdown-food").textContent=fmt(food*12*years);
  document.getElementById("breakdown-transport").textContent=fmt(transport*12*years);
  document.getElementById("breakdown-materials").textContent=fmt(materialsTotal);
  document.getElementById("breakdown-total").textContent=fmt(total);
  const major=document.getElementById("cost-major").value;
  const monthSalary=salaryMap[major]||500;
  const annualSalary=monthSalary*12;
  const payback=total>0?(total/annualSalary).toFixed(1):"—";
  document.getElementById("roi-salary").textContent=fmt(monthSalary)+"/ខែ";
  document.getElementById("roi-annual").textContent=fmt(annualSalary)+"/ឆ្នាំ";
  document.getElementById("roi-payback").textContent=payback+" ឆ្នាំ";
  if(typeof plan!=="undefined"&&total>0){
    const schName=schoolSel.selectedOptions[0]?.text||"";
    plan.cost={total:total,years:years,tuition:tuitionTotal,living:livingTotal+materialsTotal,school:schName,major:document.getElementById("cost-major").value,payback:payback};
    savePlan();
  }
}

/* ===== HERO TYPING ANIMATION ===== */
const HERO_TEXT = "ស្វែងរកខ្លួនអ្នក ជ្រើសរើសអាជីព រៀនកន្លែងណា";
let heroTypeTimer = null;
function typeHero(){
  const el = document.getElementById("hero-type");
  const cursor = document.getElementById("type-cursor");
  if(!el) return;
  if(heroTypeTimer) clearTimeout(heroTypeTimer);
  el.textContent = "";
  if(cursor) cursor.classList.remove("done");
  let parts;
  try { parts = [...new Intl.Segmenter('km',{granularity:'grapheme'}).segment(HERO_TEXT)].map(s=>s.segment); }
  catch(e){ parts = Array.from(HERO_TEXT); }
  let i = 0;
  (function step(){
    if(i < parts.length){
      el.textContent += parts[i++];
      const ch = parts[i-1];
      const delay = ch === " " ? 130 : 75 + Math.random()*45;
      heroTypeTimer = setTimeout(step, delay);
    } else {
      if(cursor) setTimeout(()=>cursor.classList.add("done"), 1400);
    }
  })();
}

/* ===== CAREERS DIRECTORY ===== */
const jobCats={
  tech:{label:"បច្ចេកវិទ្យា",icon:"memory"},
  health:{label:"សុខាភិបាល",icon:"cardiology"},
  design:{label:"ការរចនា និងសិល្បៈ",icon:"palette"},
  business:{label:"ពាណិជ្ជកម្ម និងហិរញ្ញវត្ថុ",icon:"work"},
  trades:{label:"ជំនាញការ",icon:"construction"},
  education:{label:"អប់រំ",icon:"school"},
  tourism:{label:"ទេសចរណ៍ និងបដិសណ្ឋារកិច្ច",icon:"tour"},
  agri:{label:"កសិកម្ម",icon:"agriculture"},
  law:{label:"ច្បាប់ និងរដ្ឋបាល",icon:"gavel"},
  media:{label:"ប្រព័ន្ធផ្សព្វផ្សាយ",icon:"newspaper"},
  culinary:{label:"ចម្អិនអាហារ និងបដិសណ្ឋារកិច្ច",icon:"restaurant"},
  technician:{label:"ជាងបច្ចេកទេស និងសេវាកម្ម",icon:"home_repair_service"}
};
const careersList=[
  {id:"softeng",name:"វិស្វករផ្នែកទន់ (Software Engineer)",cat:"tech",icon:"code",salary:"$500–$1,500",desc:"បង្កើត និងថែទាំកម្មវិធី និងប្រព័ន្ធកុំព្យូទ័រ។",skills:["JavaScript","Python","SQL","Git"],schools:["itc","cadt","rupp","norton","ab"]},
  {id:"webdev",name:"អ្នកអភិវឌ្ឍន៍គេហទំព័រ (Web Developer)",cat:"tech",icon:"html",salary:"$400–$1,200",desc:"សាងសង់គេហទំព័រ និងកម្មវិធីវ៉េប។",skills:["HTML/CSS","React","Node.js"],schools:["ab","sabaicode","cadt"]},
  {id:"mobiledev",name:"អ្នកអភិវឌ្ឍន៍ App (Mobile App Developer)",cat:"tech",icon:"smartphone",salary:"$500–$1,400",desc:"បង្កើតកម្មវិធីលើ Android និង iOS។",skills:["Flutter","Kotlin","Swift"],schools:["cadt","itc"]},
  {id:"dataanalyst",growing:true,name:"អ្នកវិភាគទិន្នន័យ (Data Analyst)",cat:"tech",icon:"monitoring",salary:"$500–$1,300",desc:"វិភាគទិន្នន័យ ដើម្បីជួយសម្រេចចិត្ត។",skills:["Excel","SQL","Power BI","Python"],schools:["cadt","num"]},
  {id:"aieng",growing:true,name:"វិស្វករ AI/ML (AI Engineer)",cat:"tech",icon:"smart_toy",salary:"$700–$2,000",desc:"បង្កើតគំរូបញ្ញាសិប្បនិម្មិត និងម៉ាស៊ីនរៀន។",skills:["Python","TensorFlow","NLP"],schools:["cadt","camtech"]},
  {id:"cyber",growing:true,name:"អ្នកឯកទេស Cybersecurity",cat:"tech",icon:"security",salary:"$600–$1,800",desc:"ការពារប្រព័ន្ធ និងទិន្នន័យពីការវាយប្រហារ។",skills:["Networking","Linux","Pentesting"],schools:["cadt"]},
  {id:"netadmin",name:"អ្នកគ្រប់គ្រងបណ្ដាញ (Network Admin)",cat:"tech",icon:"lan",salary:"$400–$1,000",desc:"គ្រប់គ្រងបណ្ដាញ និងម៉ាស៊ីនមេ។",skills:["Cisco","Linux","Security"],schools:["itc","npic"]},
  {id:"iot",name:"វិស្វករ IoT",cat:"tech",icon:"sensors",salary:"$500–$1,400",desc:"បង្កើតឧបករណ៍ឆ្លាតវៃ និងបណ្ដាញ sensor។",skills:["Arduino","C++","IoT"],schools:["camscience","itc"]},
  {id:"qa",name:"អ្នកសាកល្បងកម្មវិធី (QA)",cat:"tech",icon:"bug_report",salary:"$400–$1,000",desc:"ធានាគុណភាព និងរកកំហុសក្នុងកម្មវិធី។",skills:["Testing","Automation"],schools:["ab"]},
  {id:"doctor",name:"វេជ្ជបណ្ឌិត",cat:"health",icon:"stethoscope",salary:"$600–$2,500",desc:"ពិនិត្យ និងព្យាបាលអ្នកជំងឺ។",skills:["វិទ្យាសាស្ត្រ","ការទំនាក់ទំនង"],schools:["uhs","up","iu"]},
  {id:"nurse",name:"គិលានុបដ្ឋាក",cat:"health",icon:"vaccines",salary:"$300–$800",desc:"ថែទាំ និងជួយអ្នកជំងឺ។",skills:["ការថែទាំ","ការទំនាក់ទំនង"],schools:["uhs","iu"]},
  {id:"pharma",name:"ឱសថការី",cat:"health",icon:"medication",salary:"$500–$1,200",desc:"ចែកចាយ និងណែនាំអំពីឱសថ។",skills:["គីមី","ឱសថសាស្ត្រ"],schools:["uhs","up"]},
  {id:"dentist",name:"ទន្តបណ្ឌិត",cat:"health",icon:"dentistry",salary:"$600–$2,000",desc:"ព្យាបាល និងថែទាំធ្មេញ។",skills:["ជំនាញដៃ","វេជ្ជសាស្ត្រ"],schools:["uhs","up"]},
  {id:"physio",name:"អ្នកព្យាបាលរាងកាយ",cat:"health",icon:"accessibility_new",salary:"$400–$1,000",desc:"ជួយអ្នកជំងឺស្ដារមុខងាររាងកាយ។",skills:["កាយវិការ","ការថែទាំ"],schools:["uhs"]},
  {id:"labtech",name:"បច្ចេកទេសមន្ទីរពិសោធន៍",cat:"health",icon:"science",salary:"$350–$800",desc:"ធ្វើតេស្តវិភាគនៅមន្ទីរពិសោធន៍។",skills:["ជីវវិទ្យា","ភាពត្រឹមត្រូវ"],schools:["uhs"]},
  {id:"graphic",name:"អ្នករចនាក្រាហ្វិក",cat:"design",icon:"palette",salary:"$300–$900",desc:"បង្កើតការរចនាដែលមើលឃើញ។",skills:["Photoshop","Illustrator"],schools:["limkokwing","puc"]},
  {id:"uxui",growing:true,name:"អ្នករចនា UX/UI",cat:"design",icon:"design_services",salary:"$400–$1,200",desc:"រចនាបទពិសោធន៍អ្នកប្រើ។",skills:["Figma","Research","Prototyping"],schools:["tux","limkokwing"]},
  {id:"architect",name:"ស្ថាបត្យករ",cat:"design",icon:"architecture",salary:"$500–$1,500",desc:"រចនាអគារ និងលំហ។",skills:["AutoCAD","3D","Design"],schools:["itc","paragon"]},
  {id:"interior",name:"អ្នករចនាខាងក្នុង",cat:"design",icon:"chair",salary:"$400–$1,100",desc:"រចនាលំហខាងក្នុងអគារ។",skills:["SketchUp","Design"],schools:["limkokwing"]},
  {id:"videographer",name:"អ្នកថត និងកាត់តវីដេអូ",cat:"design",icon:"videocam",salary:"$300–$1,000",desc:"ថត និងកែសម្រួលរូបភាព វីដេអូ។",skills:["Premiere","Camera"],schools:["limkokwing"]},
  {id:"marketing",name:"អ្នកគ្រប់គ្រងទីផ្សារ",cat:"business",icon:"campaign",salary:"$500–$1,500",desc:"គ្រប់គ្រងយុទ្ធសាស្ត្រទីផ្សារ។",skills:["Marketing","Analytics"],schools:["num","uc","puc"]},
  {id:"accountant",name:"គណនេយ្យករ",cat:"business",icon:"calculate",salary:"$400–$1,200",desc:"គ្រប់គ្រងគណនី និងរបាយការណ៍ហិរញ្ញវត្ថុ។",skills:["Accounting","Excel","QuickBooks"],schools:["camed","vanda","num"]},
  {id:"auditor",name:"សវនករ",cat:"business",icon:"fact_check",salary:"$500–$1,500",desc:"ត្រួតពិនិត្យ និងផ្ទៀងផ្ទាត់គណនី។",skills:["Audit","ACCA"],schools:["camed"]},
  {id:"finance",name:"អ្នកវិភាគហិរញ្ញវត្ថុ",cat:"business",icon:"trending_up",salary:"$500–$1,600",desc:"វិភាគ និងផ្ដល់ដំបូន្មានហិរញ្ញវត្ថុ។",skills:["Finance","Modeling"],schools:["num","camed"]},
  {id:"pm",name:"អ្នកគ្រប់គ្រងគម្រោង",cat:"business",icon:"checklist",salary:"$600–$1,800",desc:"គ្រប់គ្រងគម្រោង និងក្រុមការងារ។",skills:["Planning","Agile"],schools:["num","uc"]},
  {id:"hr",name:"មន្ត្រីធនធានមនុស្ស",cat:"business",icon:"groups",salary:"$400–$1,100",desc:"គ្រប់គ្រងបុគ្គលិក និងជ្រើសរើស។",skills:["Communication","HR"],schools:["num","uc"]},
  {id:"banker",name:"បុគ្គលិកធនាគារ",cat:"business",icon:"account_balance",salary:"$400–$1,300",desc:"ផ្ដល់សេវាហិរញ្ញវត្ថុ និងឥណទាន។",skills:["Finance","Sales"],schools:["num","camed"]},
  {id:"entrepreneur",name:"សហគ្រិន",cat:"business",icon:"rocket_launch",salary:"ប្រែប្រួល",desc:"បង្កើត និងដឹកនាំអាជីវកម្មផ្ទាល់ខ្លួន។",skills:["Leadership","Strategy"],schools:["dichi","num"]},
  {id:"electrician",name:"ជាងអគ្គិសនី",cat:"trades",icon:"bolt",salary:"$300–$800",desc:"តម្លើង និងជួសជុលប្រព័ន្ធអគ្គិសនី។",skills:["Electrical","Safety"],schools:["ntti","npic"]},
  {id:"plumber",name:"ជាងទុយោ",cat:"trades",icon:"plumbing",salary:"$300–$700",desc:"តម្លើង និងជួសជុលប្រព័ន្ធទឹក។",skills:["Plumbing"],schools:["ntti"]},
  {id:"mechanic",name:"ជាងម៉ាស៊ីន",cat:"trades",icon:"build",salary:"$300–$800",desc:"ជួសជុលម៉ាស៊ីន និងយានយន្ត។",skills:["Mechanics"],schools:["ntti","npic"]},
  {id:"construction",name:"ជាងបច្ចេកទេសសំណង់",cat:"trades",icon:"construction",salary:"$300–$900",desc:"ការងារសំណង់ និងហេដ្ឋារចនាសម្ព័ន្ធ។",skills:["Construction","Safety"],schools:["npic","itc"]},
  {id:"hvac",name:"ជាងម៉ាស៊ីនត្រជាក់",cat:"trades",icon:"ac_unit",salary:"$300–$800",desc:"តម្លើង និងជួសជុលម៉ាស៊ីនត្រជាក់។",skills:["HVAC"],schools:["ntti"]},
  {id:"teacher",name:"គ្រូបង្រៀន",cat:"education",icon:"school",salary:"$250–$700",desc:"បង្រៀន និងអប់រំសិស្ស។",skills:["Teaching","Communication"],schools:["nie","rupp"]},
  {id:"lecturer",name:"សាស្ត្រាចារ្យ",cat:"education",icon:"history_edu",salary:"$500–$1,500",desc:"បង្រៀននៅឧត្តមសិក្សា និងស្រាវជ្រាវ។",skills:["Research","Teaching"],schools:["nie","rupp"]},
  {id:"eduadmin",name:"អ្នកគ្រប់គ្រងអប់រំ",cat:"education",icon:"admin_panel_settings",salary:"$400–$1,000",desc:"គ្រប់គ្រងសាលា និងកម្មវិធីសិក្សា។",skills:["Management"],schools:["nie"]},
  {id:"tourguide",name:"អ្នកនាំភ្ញៀវទេសចរណ៍",cat:"tourism",icon:"tour",salary:"$300–$800",desc:"នាំភ្ញៀវទេសចរណ៍ទស្សនាកម្សាន្ត។",skills:["ភាសា","ការទំនាក់ទំនង"],schools:[]},
  {id:"hotel",name:"អ្នកគ្រប់គ្រងសណ្ឋាគារ",cat:"tourism",icon:"hotel",salary:"$500–$1,500",desc:"គ្រប់គ្រងប្រតិបត្តិការសណ្ឋាគារ។",skills:["Hospitality","Management"],schools:["num"]},
  {id:"agrieng",name:"វិស្វករកសិកម្ម",cat:"agri",icon:"agriculture",salary:"$400–$1,000",desc:"អភិវឌ្ឍបច្ចេកទេស និងផលិតកម្មកសិកម្ម។",skills:["Agronomy"],schools:["rua","pnca"]},
  {id:"vet",name:"សត្វពេទ្យ",cat:"agri",icon:"pets",salary:"$400–$1,200",desc:"ព្យាបាល និងថែទាំសត្វ។",skills:["Veterinary"],schools:["rua"]},
  {id:"aqua",name:"អ្នកជំនាញវារីវប្បកម្ម",cat:"agri",icon:"water",salary:"$350–$900",desc:"គ្រប់គ្រងការចិញ្ចឹមត្រី និងវារីវប្បកម្ម។",skills:["Aquaculture"],schools:["rua"]},
  {id:"lawyer",name:"មេធាវី",cat:"law",icon:"gavel",salary:"$500–$2,000",desc:"ផ្ដល់ប្រឹក្សា និងតំណាងផ្នែកច្បាប់។",skills:["Law","Argument"],schools:["rule","puc"]},
  {id:"civil",name:"មន្ត្រីរាជការ",cat:"law",icon:"badge",salary:"$250–$800",desc:"បម្រើការក្នុងស្ថាប័នរដ្ឋ។",skills:["Administration"],schools:["era","rule"]},
  {id:"diplomat",name:"អ្នកការទូត",cat:"law",icon:"public",salary:"$600–$2,000",desc:"តំណាងប្រទេសក្នុងទំនាក់ទំនងអន្តរជាតិ។",skills:["Languages","Diplomacy"],schools:["rule","uc"]},
  {id:"journalist",name:"អ្នកសារព័ត៌មាន",cat:"media",icon:"newspaper",salary:"$300–$900",desc:"ស្រាវជ្រាវ និងរាយការណ៍ព័ត៌មាន។",skills:["Writing","Research"],schools:["uc","puc"]},
  {id:"socialmedia",name:"អ្នកគ្រប់គ្រងប្រព័ន្ធផ្សព្វផ្សាយសង្គម",cat:"media",icon:"share",salary:"$300–$1,000",desc:"គ្រប់គ្រងមាតិកា និងទំព័រសង្គម។",skills:["Content","Marketing"],schools:["limkokwing","puc"]},
  {id:"pr",name:"អ្នកទំនាក់ទំនងសាធារណៈ",cat:"media",icon:"record_voice_over",salary:"$400–$1,200",desc:"គ្រប់គ្រងរូបភាព និងទំនាក់ទំនងស្ថាប័ន។",skills:["Communication","PR"],schools:["uc"]},
  {id:"chef",name:"ចុងភៅ (Commis Chef / Line Cook)",cat:"culinary",icon:"restaurant",salary:"$250–$800",desc:"ចម្អិនអាហារនៅផ្ទះបាយអាជីព តាមស្តង់ដារភោជនីយដ្ឋាន និងសណ្ឋាគារ ៥ ផ្កាយ។",skills:["Knife Skills","French Techniques","Mise en Place","Stocks & Sauces","Banquet Production"],schools:["acac"]},
  {id:"pastrychef",name:"ចុងភៅនំ (Pastry Chef / Baker)",cat:"culinary",icon:"bakery_dining",salary:"$300–$900",desc:"ធ្វើនំបុ័ង នំផ្អែម និងបង្អែម តាមបែបបារាំង និងសិល្បៈ។",skills:["Viennoiserie","Artisanal Bread","Dough Fermentation","Chocolate Tempering","Plating"],schools:["acac"]},
  {id:"barista",name:"អ្នកឆុងកាហ្វេ (Head Barista / Cafe Lead)",cat:"culinary",icon:"local_cafe",salary:"$250–$700",desc:"ឆុងកាហ្វេ espresso គ្រប់គ្រង cafe និងបង្កើត latte art។",skills:["Espresso Extraction","Milk Texturing","Latte Art","Flavor Profiling","Cafe Menu"],schools:["acac"]},
  {id:"kitchenmgr",name:"អ្នកគ្រប់គ្រងផ្ទះបាយ (Kitchen Manager / Sous Chef)",cat:"culinary",icon:"restaurant_menu",salary:"$500–$2,000+",desc:"គ្រប់គ្រងផ្ទះបាយ ថ្លៃដើម សន្តិសុខអាហារ (HACCP) និងបុគ្គលិក។",skills:["Cost Engineering","Inventory","HACCP Safety","Procurement","Leadership"],schools:["acac"]},
  {id:"devops",growing:true,name:"វិស្វករ DevOps",cat:"tech",icon:"deployed_code",salary:"$700–$1,900",desc:"គ្រប់គ្រង CI/CD និងហេដ្ឋារចនាសម្ព័ន្ធ cloud។",skills:["Docker","Kubernetes","AWS"],schools:["cadt","itc"]},
  {id:"gamedev",name:"អ្នកអភិវឌ្ឍន៍ហ្គេម (Game Developer)",cat:"tech",icon:"sports_esports",salary:"$500–$1,500",desc:"បង្កើតហ្គេមលើ mobile និង PC។",skills:["Unity","C#","3D"],schools:["cadt"]},
  {id:"dbadmin",name:"អ្នកគ្រប់គ្រងទិន្នន័យ (Database Admin)",cat:"tech",icon:"database",salary:"$500–$1,400",desc:"គ្រប់គ្រង និងធានាសុវត្ថិភាពមូលដ្ឋានទិន្នន័យ។",skills:["SQL","Oracle","Backup"],schools:["itc","cadt"]},
  {id:"itsupport",name:"អ្នកជំនួយ IT (IT Support)",cat:"tech",icon:"support_agent",salary:"$300–$800",desc:"ដោះស្រាយបញ្ហាកុំព្យូទ័រ និងបណ្ដាញ។",skills:["Troubleshooting","Hardware"],schools:["npic","itc"]},
  {id:"midwife",name:"ឆ្មប",cat:"health",icon:"pregnant_woman",salary:"$300–$800",desc:"ថែទាំស្ត្រីមានផ្ទៃពោះ និងសម្រាលកូន។",skills:["ការថែទាំ","សម្ភព"],schools:["uhs","iu"]},
  {id:"publichealth",name:"មន្ត្រីសុខភាពសាធារណៈ",cat:"health",icon:"health_and_safety",salary:"$400–$1,100",desc:"គ្រប់គ្រងកម្មវិធីសុខភាពសហគមន៍។",skills:["Public Health","Epidemiology"],schools:["uhs"]},
  {id:"nutritionist",name:"អ្នកជំនាញអាហារូបត្ថម្ភ",cat:"health",icon:"nutrition",salary:"$350–$900",desc:"ណែនាំរបបអាហារ និងសុខភាព។",skills:["Nutrition","Diet"],schools:["uhs"]},
  {id:"radiographer",name:"បច្ចេកទេសរូបភាពវេជ្ជសាស្ត្រ",cat:"health",icon:"radiology",salary:"$400–$1,000",desc:"ថតកាំរស្មី X និង scan។",skills:["Imaging","X-ray"],schools:["uhs"]},
  {id:"fashion",name:"អ្នករចនាម៉ូដ (Fashion Designer)",cat:"design",icon:"checkroom",salary:"$300–$1,000",desc:"រចនាសម្លៀកបំពាក់ និងម៉ូដ។",skills:["Sketching","Sewing","Trends"],schools:["limkokwing"]},
  {id:"animator",name:"អ្នកបង្កើត Animation",cat:"design",icon:"animation",salary:"$400–$1,200",desc:"បង្កើតចលនា និង motion graphics។",skills:["After Effects","2D/3D"],schools:["limkokwing","tux"]},
  {id:"photographer",name:"អ្នកថតរូប (Photographer)",cat:"design",icon:"photo_camera",salary:"$300–$1,000",desc:"ថត និងកែសម្រួលរូបភាពអាជីព។",skills:["Photography","Lightroom"],schools:["limkokwing"]},
  {id:"productdesign",growing:true,name:"អ្នករចនាផលិតផល (Product Designer)",cat:"design",icon:"widgets",salary:"$500–$1,400",desc:"រចនាផលិតផល និងបទពិសោធន៍អ្នកប្រើ។",skills:["Figma","Research","Prototyping"],schools:["tux","cadt"]},
  {id:"economist",name:"សេដ្ឋវិទូ",cat:"business",icon:"insights",salary:"$500–$1,600",desc:"វិភាគសេដ្ឋកិច្ច និងគោលនយោបាយ។",skills:["Economics","Statistics"],schools:["rule","num"]},
  {id:"salesmgr",name:"អ្នកគ្រប់គ្រងផ្នែកលក់",cat:"business",icon:"sell",salary:"$400–$1,500",desc:"ដឹកនាំក្រុមលក់ និងសម្រេចគោលដៅ។",skills:["Sales","Negotiation"],schools:["num","uc"]},
  {id:"logistics",name:"អ្នកគ្រប់គ្រង Logistics",cat:"business",icon:"local_shipping",salary:"$400–$1,300",desc:"គ្រប់គ្រងខ្សែសង្វាក់ផ្គត់ផ្គង់ និងដឹកជញ្ជូន។",skills:["Supply Chain","Logistics"],schools:["num"]},
  {id:"realestate",name:"ភ្នាក់ងារអចលនទ្រព្យ",cat:"business",icon:"real_estate_agent",salary:"$300–$1,500",desc:"ទិញលក់ និងជួលអចលនទ្រព្យ។",skills:["Sales","Negotiation"],schools:["num"]},
  {id:"insurance",name:"ភ្នាក់ងារធានារ៉ាប់រង",cat:"business",icon:"shield",salary:"$300–$1,200",desc:"លក់ និងគ្រប់គ្រងផលិតផលធានារ៉ាប់រង។",skills:["Sales","Finance"],schools:["num"]},
  {id:"ecommerce",name:"អ្នកគ្រប់គ្រង E-commerce",cat:"business",icon:"shopping_cart",salary:"$400–$1,300",desc:"គ្រប់គ្រងហាងអនឡាញ និងលក់ឌីជីថល។",skills:["E-commerce","Digital Marketing"],schools:["dichi","num"]},
  {id:"welder",name:"ជាងផ្សារដែក (Welder)",cat:"trades",icon:"local_fire_department",salary:"$300–$900",desc:"ផ្សារ និងភ្ជាប់លោហធាតុ។",skills:["Welding","Safety"],schools:["ntti","npic"]},
  {id:"carpenter",name:"ជាងឈើ (Carpenter)",cat:"trades",icon:"carpenter",salary:"$300–$800",desc:"កាត់ តម្លើង និងផលិតគ្រឿងឈើ។",skills:["Woodwork"],schools:["ntti"]},
  {id:"automotive",name:"ជាងជួសជុលរថយន្ត",cat:"trades",icon:"car_repair",salary:"$300–$900",desc:"ជួសជុល និងថែទាំរថយន្ត។",skills:["Automotive","Diagnostics"],schools:["ntti","npic"]},
  {id:"solar",growing:true,name:"ជាងបច្ចេកទេសថាមពលព្រះអាទិត្យ",cat:"trades",icon:"solar_power",salary:"$350–$1,000",desc:"តម្លើងប្រព័ន្ធថាមពលព្រះអាទិត្យ។",skills:["Solar","Electrical"],schools:["itc","ntti"]},
  {id:"carmechanic",name:"ជាងមេកានិករថយន្ត (Car Mechanic)",cat:"technician",icon:"car_repair",salary:"$300–$800",desc:"ពិនិត្យ ជួសជុល និងថែទាំម៉ាស៊ីន និងផ្នែកម៉េកានិចរបស់រថយន្ត។",skills:["Engine Repair","Diagnostics","Maintenance"],schools:["ntti","npic"]},
  {id:"acrepairer",growing:true,name:"ជាងជួសជុលម៉ាស៊ីនត្រជាក់ (A/C Repairer)",cat:"technician",icon:"ac_unit",salary:"$300–$900",desc:"តម្លើង ថែទាំ និងជួសជុលម៉ាស៊ីនត្រជាក់ និងប្រព័ន្ធធ្វើត្រជាក់។",skills:["HVAC","Refrigeration","Electrical"],schools:["ntti"]},
  {id:"servicecleaner",name:"បុគ្គលិកសម្អាតសេវាកម្ម (Service Cleaner)",cat:"technician",icon:"cleaning_services",salary:"$200–$500",desc:"សម្អាត និងថែទាំអគារ ការិយាល័យ និងទីតាំងសេវាកម្ម។",skills:["Cleaning","Hygiene","Time Management"],schools:[]},
  {id:"repairer",name:"ជាងជួសជុលទូទៅ (Repairer)",cat:"technician",icon:"handyman",salary:"$250–$700",desc:"ជួសជុល និងថែទាំគ្រឿងបរិក្ខារ គ្រឿងអេឡិចត្រូនិច និងឧបករណ៍ក្នុងផ្ទះ។",skills:["Maintenance","Troubleshooting","Electronics"],schools:["ntti","npic"]},
  {id:"englishteacher",name:"គ្រូភាសាអង់គ្លេស",cat:"education",icon:"translate",salary:"$300–$1,000",desc:"បង្រៀនភាសាអង់គ្លេស។",skills:["English","Teaching"],schools:["nie","rupp"]},
  {id:"earlyedu",name:"គ្រូមត្តេយ្យ",cat:"education",icon:"child_care",salary:"$250–$600",desc:"អប់រំ និងថែទាំកុមារតូច។",skills:["Early Education","Patience"],schools:["nie"]},
  {id:"counselor",name:"អ្នកប្រឹក្សាការសិក្សា",cat:"education",icon:"psychology",salary:"$350–$900",desc:"ណែនាំសិស្សអំពីការសិក្សា និងអាជីព។",skills:["Counseling","Communication"],schools:["nie","rupp"]},
  {id:"travelagent",name:"ភ្នាក់ងារទេសចរណ៍",cat:"tourism",icon:"flight",salary:"$300–$900",desc:"រៀបចំដំណើរកម្សាន្ត និងកញ្ចប់ទេសចរណ៍។",skills:["Booking","Customer Service"],schools:["num"]},
  {id:"eventplanner",name:"អ្នករៀបចំព្រឹត្តិការណ៍",cat:"tourism",icon:"celebration",salary:"$350–$1,200",desc:"រៀបចំកម្មវិធី និងព្រឹត្តិការណ៍។",skills:["Planning","Coordination"],schools:["num"]},
  {id:"flightattendant",name:"បុគ្គលិកអាកាសចរណ៍ (Flight Attendant)",cat:"tourism",icon:"airlines",salary:"$500–$1,500",desc:"បម្រើសេវា និងសុវត្ថិភាពលើយន្តហោះ។",skills:["Service","Languages","Safety"],schools:[]},
  {id:"foodtech",name:"បច្ចេកវិទ្យាចំណីអាហារ",cat:"agri",icon:"factory",salary:"$400–$1,100",desc:"កែច្នៃ និងធានាគុណភាពចំណីអាហារ។",skills:["Food Science","QA"],schools:["rua"]},
  {id:"agribusiness",name:"អ្នកគ្រប់គ្រងអាជីវកម្មកសិកម្ម",cat:"agri",icon:"storefront",salary:"$400–$1,200",desc:"គ្រប់គ្រងអាជីវកម្ម និងទីផ្សារកសិផល។",skills:["Agribusiness","Management"],schools:["rua","num"]},
  {id:"forestry",name:"អ្នកជំនាញព្រៃឈើ",cat:"agri",icon:"forest",salary:"$350–$1,000",desc:"គ្រប់គ្រង និងអភិរក្សព្រៃឈើ។",skills:["Forestry","Conservation"],schools:["rua"]},
  {id:"notary",name:"សារការី (Notary)",cat:"law",icon:"contract",salary:"$500–$1,500",desc:"បញ្ជាក់ និងផ្ទៀងផ្ទាត់ឯកសារច្បាប់។",skills:["Law","Documentation"],schools:["rule"]},
  {id:"police",name:"នគរបាល",cat:"law",icon:"local_police",salary:"$250–$800",desc:"រក្សាសន្តិសុខ និងសណ្ដាប់ធ្នាប់សាធារណៈ។",skills:["Law Enforcement"],schools:["era"]},
  {id:"socialworker",name:"អ្នកសង្គមកិច្ច",cat:"law",icon:"volunteer_activism",salary:"$300–$900",desc:"ជួយសហគមន៍ និងក្រុមងាយរងគ្រោះ។",skills:["Social Work","Empathy"],schools:["rupp","uc"]},
  {id:"contentcreator",growing:true,name:"អ្នកបង្កើតមាតិកា (Content Creator)",cat:"media",icon:"video_camera_front",salary:"$300–$1,500",desc:"បង្កើតវីដេអូ និងមាតិកាលើ digital platforms។",skills:["Video","Storytelling","Editing"],schools:["limkokwing"]},
  {id:"broadcaster",name:"អ្នកនាំកម្មវិធី (Broadcaster)",cat:"media",icon:"podcasts",salary:"$300–$1,200",desc:"នាំកម្មវិធីទូរទស្សន៍ និងវិទ្យុ។",skills:["Presenting","Voice"],schools:["uc"]},
  {id:"copywriter",name:"អ្នកសរសេរពាណិជ្ជកម្ម (Copywriter)",cat:"media",icon:"edit_note",salary:"$300–$1,000",desc:"សរសេរអត្ថបទផ្សាយពាណិជ្ជកម្ម។",skills:["Writing","Marketing"],schools:["puc","uc"]},
  {id:"prompteng",name:"Prompt Engineer / អ្នកគ្រប់គ្រង AI",cat:"tech",growing:true,icon:"smart_toy",salary:"$600–$2,500",desc:"ដឹកនាំ AI ឲ្យបង្កើតលទ្ធផលត្រឹមត្រូវ — ជំនាញថ្មីដ៏មានតម្លៃ ខណៈ AI ជំនួសការសរសេរកូដសាមញ្ញ។",skills:["Prompt Engineering","AI Tools","Critical Thinking","LLMs"],schools:["cadt","ab","tux"]}
];

/* ===== CAREERS RENDER + DETAIL ===== */
let jobSearch="",jobCat="all";
function renderCareerChips(){
  const row=document.getElementById("career-chips");
  if(!row)return;
  let html='<div class="chip'+(jobCat==="all"?" active":"")+'" onclick="setJobCat(\'all\')">ទាំងអស់</div>';
  html+='<div class="chip'+(jobCat==="growing"?" active":"")+'" onclick="setJobCat(\'growing\')"><i class="material-symbols-outlined">rocket_launch</i>អាជីពដែលនឹងកើនឡើង</div>';
  Object.keys(jobCats).forEach(k=>{
    html+='<div class="chip'+(jobCat===k?" active":"")+'" onclick="setJobCat(\''+k+'\')"><i class="material-symbols-outlined">'+jobCats[k].icon+'</i>'+jobCats[k].label+'</div>';
  });
  row.innerHTML=html;
}
function setJobCat(c){jobCat=c;jobPage=1;renderCareerChips();renderCareers();}
function renderCareers(){
  renderCareerChips();
  const q=jobSearch.toLowerCase();
  const grid=document.getElementById("jobs-grid");
  if(!grid)return;
  const filtered=careersList.filter(j=>(jobCat==="all"||(jobCat==="growing"?j.growing:j.cat===jobCat))&&j.name.toLowerCase().includes(q));
  if(!filtered.length){grid.innerHTML='<div class="empty-state"><i class="material-symbols-outlined">search_off</i><p>រកមិនឃើញអាជីព</p></div>';renderPagination("jobs-pagination",0,1,JOBS_PER_PAGE,"gotoJobPage");pageInfo("jobs-page-info",0,1,JOBS_PER_PAGE);return;}
  const pages=Math.ceil(filtered.length/JOBS_PER_PAGE);
  if(jobPage>pages)jobPage=pages;if(jobPage<1)jobPage=1;
  const start=(jobPage-1)*JOBS_PER_PAGE;
  const pageItems=filtered.slice(start,start+JOBS_PER_PAGE);
  grid.innerHTML=pageItems.map((j,i)=>`
    <div class="job-card" style="animation-delay:${i*.04}s" onclick="openCareer('${j.id}')">
      <div class="job-top">
        <div class="job-icon"><i class="material-symbols-outlined">${j.icon}</i></div>
        <div><p class="job-name">${j.name}</p><span class="job-cat">${jobCats[j.cat].label}</span></div>
      </div>
      <p class="job-desc">${j.desc}</p>
      <div class="job-foot"><span class="job-salary">${j.salary}${j.salary.indexOf("$")>=0?"/ខែ":""}</span><span class="school-view-more">មើលលម្អិត →</span></div>
    </div>`).join("");
  renderPagination("jobs-pagination",filtered.length,jobPage,JOBS_PER_PAGE,"gotoJobPage");
  pageInfo("jobs-page-info",filtered.length,jobPage,JOBS_PER_PAGE);
}
function gotoJobPage(p){jobPage=p;renderCareers();window.scrollTo({top:0,behavior:"smooth"});}
function openCareer(id){
  const j=careersList.find(x=>x.id===id);
  if(!j)return;
  const rel=(j.schools||[]).map(sid=>schoolsData.find(s=>s.id===sid)).filter(Boolean);
  const relHtml=rel.length?rel.map(s=>`<div class="rel-school" onclick="openSchool('${s.id}')">${schoolLogo(s,"width:38px;height:38px;")}<div><div style="font-weight:700;font-size:13px">${s.name}</div><div style="font-size:11px;color:var(--text-3)">${provinceLabel(s.province)} · ${tuitionLabel(s)}</div></div><i class="material-symbols-outlined" style="margin-left:auto;color:var(--text-3)">chevron_right</i></div>`).join(""):'<p style="font-size:13px;color:var(--text-3)">មិនមានទិន្នន័យសាលា</p>';
  document.getElementById("career-detail").innerHTML=`
    <div class="detail-back" onclick="showView('careers')"><i class="material-symbols-outlined">arrow_back</i> ត្រលប់ទៅអាជីព</div>
    <div class="detail-head">
      <div class="detail-logo" style="background:var(--accent)"><i class="material-symbols-outlined" style="font-size:30px">${j.icon}</i></div>
      <div style="flex:1;min-width:220px">
        <span class="school-type-badge badge-digital">${jobCats[j.cat].label}</span>
        <h1 class="detail-title" style="margin-top:8px">${j.name}</h1>
      </div>
    </div>
    <div class="detail-meta">
      <span><i class="material-symbols-outlined">payments</i> ${j.salary}${j.salary.indexOf("$")>=0?"/ខែ":""}</span>
      <span><i class="material-symbols-outlined">category</i> ${jobCats[j.cat].label}</span>
    </div>
    <p class="detail-desc">${j.desc}</p>
    <div class="detail-grid">
      <div class="detail-card">
        <h3><i class="material-symbols-outlined">bolt</i> ជំនាញត្រូវការ</h3>
        <div class="detail-tags">${j.skills.map(sk=>'<span class="tag">'+sk+'</span>').join("")}</div>
        <h3 style="margin-top:24px"><i class="material-symbols-outlined">school</i> សាលាដែលបង្រៀន</h3>
        <div class="rel-schools">${relHtml}</div>
      </div>
      <div class="detail-card detail-side">
        <h3><i class="material-symbols-outlined">info</i> ព័ត៌មានសង្ខេប</h3>
        <div class="info-row"><span class="lbl"><i class="material-symbols-outlined">payments</i> ប្រាក់ខែ</span><span class="val">${j.salary}${j.salary.indexOf("$")>=0?"/ខែ":""}</span></div>
        <div class="info-row"><span class="lbl"><i class="material-symbols-outlined">category</i> វិស័យ</span><span class="val">${jobCats[j.cat].label}</span></div>
        <div class="info-row"><span class="lbl"><i class="material-symbols-outlined">account_balance</i> សាលា</span><span class="val">${rel.length}</span></div>
        <div class="detail-actions">
          <button class="btn btn-primary btn-sm" onclick="showView('quiz')"><i class="material-symbols-outlined">quiz</i> ធ្វើតេស្ត</button>
          <button class="btn btn-ghost btn-sm" onclick="showView('cost')"><i class="material-symbols-outlined">calculate</i> ថ្លៃសិក្សា</button>
        </div>
      </div>
    </div>`;
  showView("career-detail");
  try{sessionStorage.setItem("tv_detail","career:"+id);}catch(e){}
}
document.getElementById("career-search").addEventListener("input",e=>{jobSearch=e.target.value;jobPage=1;renderCareers();});

/* ===== MY PLAN (localStorage persistence) ===== */
const PLAN_KEY="compass_plan";
let plan={careers:[],schools:[],quiz:null,cost:null};
function loadPlan(){try{const raw=localStorage.getItem(PLAN_KEY);if(raw){const p=JSON.parse(raw);plan={careers:Array.isArray(p.careers)?p.careers:[],schools:Array.isArray(p.schools)?p.schools:[],quiz:p.quiz||null,cost:p.cost||null};}}catch(e){}}
function savePlan(){try{localStorage.setItem(PLAN_KEY,JSON.stringify(plan));}catch(e){}}
function isSavedCareer(id){return plan.careers.includes(id);}
function isSavedSchool(id){return plan.schools.includes(id);}
function toggleSaveCareer(id){
  if(plan.careers.includes(id))plan.careers=plan.careers.filter(x=>x!==id);
  else plan.careers.push(id);
  savePlan();updatePlanBadge();
  const cv=document.getElementById("view-careers");if(cv&&cv.classList.contains("active"))renderCareers();
  const pv=document.getElementById("view-plan");if(pv&&pv.classList.contains("active"))renderPlan();
}
function toggleSaveSchool(id){
  if(plan.schools.includes(id))plan.schools=plan.schools.filter(x=>x!==id);
  else plan.schools.push(id);
  savePlan();updatePlanBadge();
  const sv=document.getElementById("view-schools");if(sv&&sv.classList.contains("active"))renderSchools();
  const pv=document.getElementById("view-plan");if(pv&&pv.classList.contains("active"))renderPlan();
}
function updatePlanBadge(){
  const b=document.getElementById("plan-badge");if(!b)return;
  const n=plan.careers.length+plan.schools.length+(plan.quiz?1:0)+(plan.cost?1:0);
  if(n>0){b.style.display="";b.textContent=n;}else b.style.display="none";
}
function clearPlan(){if(!confirm("សម្អាតផែនការទាំងអស់?"))return;plan={careers:[],schools:[],quiz:null,cost:null};savePlan();updatePlanBadge();renderPlan();}

/* ===== ADMISSION REQUIREMENTS + TIMELINE ===== */
function admissionInfo(type){
  const base=["សញ្ញាបត្រមធ្យមសិក្សាទុតិយភូមិ (បាក់ឌុប) ឬសមមូល","អត្តសញ្ញាណប័ណ្ណ ឬសំបុត្រកំណើត","រូបថត ៤×៦ និងពាក្យសុំចូលរៀន"];
  const map={
    public:["ពិន្ទុបាក់ឌុបល្អ (ខ្លះមានប្រឡងចូល)","អាចមានការប្រឡងចូល ឬសម្ភាសន៍","ឯកសារបញ្ជាក់លទ្ធផលសិក្សា"],
    private:["ចុះឈ្មោះដោយផ្ទាល់ ភាគច្រើនមិនប្រឡងចូល","អាចមានតេស្តកម្រិតភាសាអង់គ្លេស (Placement Test)","បង់ថ្លៃចុះឈ្មោះ"],
    institute:["ផ្ដោតលើជំនាញបច្ចេកទេស","ទទួលសិស្សបញ្ចប់ថ្នាក់ទី៩ ឬ១២ តាមកម្មវិធី","តេស្តជំនាញមូលដ្ឋាន (ខ្លះ)"],
    digital:["ចុះឈ្មោះតាមអនឡាញ","តម្រូវឲ្យមានកុំព្យូទ័រ និងអ៊ីនធឺណិត","អាចមានតេស្តតម្រង់ទិសសិក្សា"]
  };
  return base.concat(map[type]||[]);
}
const admissionTimeline=[
  {m:"សីហា",l:"ប្រកាសលទ្ធផលបាក់ឌុប"},
  {m:"កញ្ញា–តុលា",l:"ដាក់ពាក្យចូលរៀន និងជ្រើសរើសផ្នែក"},
  {m:"តុលា",l:"ផុតកំណត់ដាក់ពាក្យអាហារូបករណ៍ភាគច្រើន"},
  {m:"វិច្ឆិកា",l:"ចុះឈ្មោះ និងចាប់ផ្ដើមឆមាសថ្មី"}
];
function admissionCard(type){
  const reqs=admissionInfo(type).map(r=>`<div class="admission-item"><i class="material-symbols-outlined">check_circle</i><span>${r}</span></div>`).join("");
  const tl=admissionTimeline.map(t=>`<div class="timeline-item"><div class="tdot"></div><div class="tmonth">${t.m}</div><div class="tlabel">${t.l}</div></div>`).join("");
  return `<div class="detail-card" style="margin-top:24px">
    <h3><i class="material-symbols-outlined">assignment_turned_in</i> លក្ខខណ្ឌចូលរៀន</h3>
    <div class="admission-list">${reqs}</div>
    <p class="admission-note">* ជាទូទៅ សូមផ្ទៀងផ្ទាត់ជាមួយសាលាដោយផ្ទាល់ ព្រោះលក្ខខណ្ឌអាចខុសគ្នាតាមផ្នែក និងឆ្នាំ។</p>
    <h3 style="margin-top:24px"><i class="material-symbols-outlined">event</i> កាលវិភាគដាក់ពាក្យ</h3>
    <div class="timeline">${tl}</div>
  </div>`;
}

/* ===== CAREER ROADMAP GENERATOR ===== */
const subjectsByCat={
  tech:["គណិតវិទ្យា","រូបវិទ្យា","ភាសាអង់គ្លេស"],
  health:["ជីវវិទ្យា","គីមីវិទ្យា","រូបវិទ្យា"],
  design:["សិល្បៈ","ភាសាអង់គ្លេស","កុំព្យូទ័រ"],
  business:["គណិតវិទ្យា","សេដ្ឋកិច្ច","ភាសាអង់គ្លេស"],
  trades:["រូបវិទ្យា","គណិតវិទ្យា","ជំនាញបច្ចេកទេស"],
  education:["ភាសាខ្មែរ","ចិត្តវិទ្យា","ភាសាអង់គ្លេស"],
  tourism:["ភាសាអង់គ្លេស","ភូមិវិទ្យា","ការទំនាក់ទំនង"],
  agri:["ជីវវិទ្យា","គីមីវិទ្យា","កសិកម្ម"],
  law:["ភាសាខ្មែរ","ពលរដ្ឋវិជ្ជា","ភាសាអង់គ្លេស"],
  media:["ភាសាខ្មែរ","ភាសាអង់គ្លេស","ការសរសេរ"],
  culinary:["ភាសាអង់គ្លេស","សិល្បៈ","ជំនាញបច្ចេកទេស"]
};
const freeResources=["Khan Academy","Coursera / edX","YouTube","freeCodeCamp","Google Digital Garage"];
const quizCatToJob={technology:"tech",healthcare:"health",design:"design",business:"business",trades:"trades"};

function generateRoadmap(careerId){
  const j=careersList.find(x=>x.id===careerId);
  if(!j)return `<div class="plan-empty">មិនអាចបង្កើតផែនទីផ្លូវបានទេ។</div>`;
  const subs=(subjectsByCat[j.cat]||[]).map(s=>`<span class="tag">${s}</span>`).join("");
  const skills=(j.skills||[]).map(s=>`<span class="tag">${s}</span>`).join("")||'<span style="font-size:13px;color:var(--text-3)">—</span>';
  const rel=(j.schools||[]).map(sid=>schoolsData.find(s=>s.id===sid)).filter(Boolean);
  const schoolTags=rel.length?rel.map(s=>`<span class="tag" style="cursor:pointer" onclick="openSchool('${s.id}')">${schoolAbbr(s)}</span>`).join(""):'<span style="font-size:13px;color:var(--text-3)">មិនទាន់មានទិន្នន័យសាលា — មើលទំព័រសាលា</span>';
  const res=freeResources.map(r=>`<span class="tag">${r}</span>`).join("");
  const steps=[
    {icon:"menu_book",title:"១. រៀនមុខវិជ្ជាគ្រឹះ (ឥឡូវនេះ)",desc:"ផ្ដោតលើមុខវិជ្ជាទាំងនេះនៅវិទ្យាល័យ ដើម្បីត្រៀមមូលដ្ឋានឲ្យរឹងមាំ។",tags:subs},
    {icon:"bolt",title:"២. អភិវឌ្ឍជំនាញ",desc:"ចាប់ផ្ដើមរៀន និងអនុវត្តជំនាញសំខាន់ៗសម្រាប់អាជីពនេះ។",tags:skills},
    {icon:"school",title:"៣. ជ្រើសរើសសាលា",desc:"សាលាដែលបង្រៀនផ្នែកនេះ — ចុចដើម្បីមើលលម្អិត។",tags:schoolTags},
    {icon:"payments",title:"៤. រៀបចំថវិកា",desc:"ប៉ាន់ស្មានថ្លៃសិក្សា និងស្វែងរកអាហារូបករណ៍ដែលសមស្រប។",tags:'<span class="tag" style="cursor:pointer" onclick="showView(\'cost\')">ប៉ាន់ស្មានថ្លៃ</span><span class="tag" style="cursor:pointer" onclick="showView(\'scholarship\')">អាហារូបករណ៍</span>'},
    {icon:"public",title:"៥. ធនធានឥតគិតថ្លៃ",desc:"ចាប់ផ្ដើមរៀនដោយខ្លួនឯងជាមួយធនធានទាំងនេះ ដោយឥតគិតថ្លៃ។",tags:res}
  ];
  const stepsHtml=steps.map(st=>`<div class="roadmap-step"><div class="dot"><i class="material-symbols-outlined">${st.icon}</i></div><div class="roadmap-card"><h4>${st.title}</h4><p>${st.desc}</p><div class="roadmap-tags">${st.tags}</div></div></div>`).join("");
  return `<div class="roadmap">${stepsHtml}</div>`;
}

/* ===== MY PLAN DASHBOARD RENDER ===== */
function planCareerCard(id){
  const j=careersList.find(x=>x.id===id);if(!j)return"";
  return `<div class="job-card" style="animation:none;opacity:1" onclick="openCareer('${j.id}')">
    <div class="job-top">
      <div class="job-icon"><i class="material-symbols-outlined">${j.icon}</i></div>
      <div><p class="job-name">${j.name}</p><span class="job-cat">${jobCats[j.cat].label}</span></div>
      <div class="save-btn on" style="margin-left:auto" title="ដកចេញ" onclick="event.stopPropagation();toggleSaveCareer('${j.id}')"><i class="material-symbols-outlined">bookmark</i></div>
    </div>
    <p class="job-desc">${j.desc}</p>
    <div class="job-foot"><span class="job-salary">${j.salary}${j.salary.indexOf("$")>=0?"/ខែ":""}</span><span class="school-view-more">មើលលម្អិត →</span></div>
  </div>`;
}
function planSchoolCard(id){
  const s=schoolsData.find(x=>x.id===id);if(!s)return"";
  return `<div class="school-card" style="animation:none;opacity:1" onclick="openSchool('${s.id}')">
    <div class="school-card-top">
      ${schoolLogo(s)}
      <div class="save-btn on" title="ដកចេញ" onclick="event.stopPropagation();toggleSaveSchool('${s.id}')"><i class="material-symbols-outlined">bookmark</i></div>
    </div>
    <p class="school-name">${s.name}</p>
    <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-bottom:12px">
      <span class="school-type-badge ${typeBadgeClass(s.type)}">${typeLabel(s.type)}</span>
      <span style="font-size:12px;color:var(--text-3)"><i class="material-symbols-outlined" style="font-size:14px;vertical-align:-2px">location_on</i>${provinceLabel(s.province)} · ★ ${s.rating}</span>
    </div>
    <div class="school-footer"><span class="school-tuition">${tuitionLabel(s)}</span><span class="school-view-more">មើលលម្អិត →</span></div>
  </div>`;
}
function renderPlan(){
  const c=document.getElementById("plan-content");if(!c)return;
  const hasAny=plan.careers.length||plan.schools.length||plan.quiz||plan.cost;
  if(!hasAny){
    c.innerHTML=`<div class="plan-empty"><i class="material-symbols-outlined">bookmark_border</i><p>ផែនការរបស់អ្នកនៅទទេ។<br>ធ្វើតេស្តអាជីព រក្សាទុកអាជីព និងសាលា ដើម្បីបង្កើតផែនការផ្ទាល់ខ្លួន។</p><div style="margin-top:18px;display:flex;gap:10px;justify-content:center;flex-wrap:wrap"><button class="btn btn-primary btn-sm" onclick="showView('quiz')"><i class="material-symbols-outlined">quiz</i> ធ្វើតេស្តអាជីព</button><button class="btn btn-ghost btn-sm" onclick="showView('careers')"><i class="material-symbols-outlined">work</i> មើលអាជីព</button></div></div>`;
    return;
  }
  let html="";
  if(plan.quiz&&plan.quiz.topCareers&&plan.quiz.topCareers.length){
    const tc=plan.quiz.topCareers[0];
    const tj=careersList.find(x=>x.id===tc.id)||{};
    html+=`<div class="plan-hero"><p class="eyebrow">អាជីពសមស្របបំផុតរបស់អ្នក</p><h2>${tj.name||""}</h2><p>${tj.desc||""}</p>${tj.salary?`<div class="top-match"><i class="material-symbols-outlined">payments</i> ប្រាក់ខែ ${tj.salary} · ផ្គូផ្គង ${tc.pct}%</div>`:""}</div>`;
  }
  html+=`<div class="plan-stats">
    <div class="plan-stat"><i class="material-symbols-outlined">work</i><div class="num">${plan.careers.length}</div><div class="lbl">អាជីពរក្សាទុក</div></div>
    <div class="plan-stat"><i class="material-symbols-outlined">school</i><div class="num">${plan.schools.length}</div><div class="lbl">សាលារក្សាទុក</div></div>
    <div class="plan-stat"><i class="material-symbols-outlined">quiz</i><div class="num">${plan.quiz?"✓":"—"}</div><div class="lbl">តេស្តអាជីព</div></div>
    <div class="plan-stat"><i class="material-symbols-outlined">savings</i><div class="num">${plan.cost?("$"+Number(plan.cost.total).toLocaleString()):"—"}</div><div class="lbl">ថ្លៃប៉ាន់ស្មាន</div></div>
  </div>`;
  let targetId=null;
  if(plan.careers.length)targetId=plan.careers[0];
  else if(plan.quiz&&plan.quiz.topCareers&&plan.quiz.topCareers.length)targetId=plan.quiz.topCareers[0].id;
  if(targetId){
    const tj=careersList.find(x=>x.id===targetId);
    html+=`<div class="plan-block"><div class="plan-block-head"><h3><i class="material-symbols-outlined">route</i> ផែនទីផ្លូវទៅ ${tj?tj.name:""}</h3></div>${generateRoadmap(targetId)}</div>`;
  }
  html+=`<div class="plan-block"><div class="plan-block-head"><h3><i class="material-symbols-outlined">work</i> អាជីពដែលរក្សាទុក</h3><button class="btn btn-ghost btn-sm" onclick="showView('careers')"><i class="material-symbols-outlined">add</i> បន្ថែម</button></div>`;
  html+=plan.careers.length?`<div class="jobs-grid">${plan.careers.map(planCareerCard).join("")}</div>`:`<div class="plan-empty">មិនទាន់មានអាជីពរក្សាទុក។ ចុច 🔖 នៅលើកាតអាជីព។</div>`;
  html+=`</div>`;
  html+=`<div class="plan-block"><div class="plan-block-head"><h3><i class="material-symbols-outlined">school</i> សាលាដែលរក្សាទុក</h3><button class="btn btn-ghost btn-sm" onclick="showView('schools')"><i class="material-symbols-outlined">add</i> បន្ថែម</button></div>`;
  html+=plan.schools.length?`<div class="schools-grid">${plan.schools.map(planSchoolCard).join("")}</div>`:`<div class="plan-empty">មិនទាន់មានសាលារក្សាទុក។ ចុច 🔖 នៅលើកាតសាលា។</div>`;
  html+=`</div>`;
  html+=`<div class="plan-block"><div class="plan-block-head"><h3><i class="material-symbols-outlined">workspace_premium</i> អាហារូបករណ៍ណែនាំ</h3><button class="btn btn-ghost btn-sm" onclick="showView('scholarship')">មើលទាំងអស់ →</button></div><div class="scholarship-list">
    <div class="scholarship-item"><h5>អាហារូបករណ៍រដ្ឋាភិបាល (MOEYS)</h5><p>សម្រាប់សិស្សពូកែសិក្សានៅសាកលវិទ្យាល័យរដ្ឋ</p><span class="scholarship-amount">ដល់ $2,000/ឆ្នាំ</span></div>
    <div class="scholarship-item"><h5>មូលនិធិ JICA (ជប៉ុន)</h5><p>ផ្នែកវិទ្យាសាស្ត្រ និងបច្ចេកវិទ្យា</p><span class="scholarship-amount">ដល់ $3,500/ឆ្នាំ</span></div>
    <div class="scholarship-item"><h5>អាហារូបករណ៍សាកលវិទ្យាល័យ</h5><p>បញ្ចុះតម្លៃតាមលទ្ធផលសិក្សា</p><span class="scholarship-amount">បញ្ចុះ ២០–១០០%</span></div>
  </div></div>`;
  if(plan.cost){
    const fmt=n=>"$"+Number(n).toLocaleString();
    html+=`<div class="plan-block"><div class="plan-block-head"><h3><i class="material-symbols-outlined">savings</i> ការប៉ាន់ស្មានថ្លៃ</h3><button class="btn btn-ghost btn-sm" onclick="showView('cost')">កែសម្រួល →</button></div>
    <div class="cost-result" style="max-width:440px">
      <div class="cost-total-box"><div class="label">ថ្លៃសិក្សាសរុប (ប៉ាន់ស្មាន)</div><div class="amount">${fmt(plan.cost.total)}</div><div class="sub">សម្រាប់ ${plan.cost.years} ឆ្នាំ${plan.cost.school?" · "+plan.cost.school:""}</div></div>
      <div class="cost-breakdown">
        <div class="cost-line"><span class="label"><i class="material-symbols-outlined">school</i> ថ្លៃសិក្សា</span><span class="val">${fmt(plan.cost.tuition)}</span></div>
        <div class="cost-line"><span class="label"><i class="material-symbols-outlined">home</i> ការរស់នៅ + សម្ភារ</span><span class="val">${fmt(plan.cost.living)}</span></div>
        <div class="cost-line"><span class="label"><i class="material-symbols-outlined">trending_up</i> រយៈពេលសង (ROI)</span><span class="val">${plan.cost.payback} ឆ្នាំ</span></div>
      </div>
    </div></div>`;
  }
  html+=`<div class="plan-block"><div class="plan-block-head"><h3><i class="material-symbols-outlined">family_restroom</i> ចែករំលែកជាមួយឪពុកម្ដាយ</h3></div><div class="share-plan"><p style="font-size:13px;color:var(--text-2);margin:0 0 14px;line-height:1.55">ផ្ញើផែនការនេះ (អាជីព សាលា និងថ្លៃសិក្សា) ទៅឪពុកម្ដាយ ដើម្បីឲ្យគាត់មើល និងពិភាក្សាជាមួយអ្នក។</p><div class="share-module">${sharePlanBtnsHTML()}</div></div></div>`;
  html+=`<div style="text-align:center;margin-top:8px"><button class="btn btn-ghost btn-sm" onclick="clearPlan()"><i class="material-symbols-outlined">delete</i> សម្អាតផែនការ</button></div>`;
  c.innerHTML=html;
}

/* ===== SOCIAL MEDIA SHARE ===== */
function shareText(){
  let msg="Trey Visai — ស្វែងរកអាជីព សាលារៀន និងថ្លៃសិក្សា 🎓";
  try{
    if(typeof plan!=="undefined"&&plan.quiz&&plan.quiz.topCareers&&plan.quiz.topCareers.length){
      const j=(typeof careersList!=="undefined")?careersList.find(x=>x.id===plan.quiz.topCareers[0].id):null;
      if(j&&j.name)msg="ខ្ញុំបានរកឃើញអាជីពសមស្របរបស់ខ្ញុំ៖ "+j.name+" 🎯 តាមរយៈ Trey Visai";
    }
  }catch(e){}
  return msg;
}
function shareTo(p){
  const url=encodeURIComponent(window.location.href);
  const text=encodeURIComponent(shareText());
  const map={
    facebook:"https://www.facebook.com/sharer/sharer.php?u="+url,
    telegram:"https://t.me/share/url?url="+url+"&text="+text,
    twitter:"https://twitter.com/intent/tweet?url="+url+"&text="+text,
    whatsapp:"https://api.whatsapp.com/send?text="+text+"%20"+url
  };
  if(map[p])window.open(map[p],"_blank","noopener,noreferrer,width=600,height=560");
}
function copyShareLink(){
  const url=window.location.href;
  const done=()=>showShareToast("បានចម្លងតំណ ✓");
  if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(url).then(done).catch(()=>fallbackCopy(url,done));}
  else fallbackCopy(url,done);
}
function fallbackCopy(url,done){const ta=document.createElement("textarea");ta.value=url;ta.style.position="fixed";ta.style.opacity="0";document.body.appendChild(ta);ta.select();try{document.execCommand("copy");done();}catch(e){}document.body.removeChild(ta);}
function showShareToast(msg){let t=document.getElementById("share-toast");if(!t){t=document.createElement("div");t.id="share-toast";t.className="share-toast";document.body.appendChild(t);}t.textContent=msg;t.classList.add("show");clearTimeout(t._to);t._to=setTimeout(()=>t.classList.remove("show"),2200);}
function shareBtnsHTML(){
  return '<span class="share-label"><i class="material-symbols-outlined">share</i> ចែករំលែក</span>'+
    '<div class="share-btns">'+
    '<button class="share-btn fb" title="Facebook" onclick="shareTo(\'facebook\')"><i class="fa-brands fa-facebook-f"></i></button>'+
    '<button class="share-btn tg" title="Telegram" onclick="shareTo(\'telegram\')"><i class="fa-brands fa-telegram"></i></button>'+
    '<button class="share-btn x" title="X (Twitter)" onclick="shareTo(\'twitter\')"><i class="fa-brands fa-x-twitter"></i></button>'+
    '<button class="share-btn wa" title="WhatsApp" onclick="shareTo(\'whatsapp\')"><i class="fa-brands fa-whatsapp"></i></button>'+
    '<button class="share-btn copy" title="ចម្លងតំណ" onclick="copyShareLink()"><i class="fa-solid fa-link"></i></button>'+
    '</div>';
}

/* ===== SHARE PLAN WITH PARENTS (encoded link + summary) ===== */
function costData(){
  const g=id=>{const el=document.getElementById(id);return el?el.textContent.trim():"";};
  const sel=document.getElementById("cost-school");
  return {total:g("total-cost"),dur:g("cost-duration"),tu:g("breakdown-tuition"),rent:g("breakdown-rent"),food:g("breakdown-food"),tr:g("breakdown-transport"),mat:g("breakdown-materials"),sal:g("roi-salary"),ann:g("roi-annual"),pay:g("roi-payback"),sc:(sel&&sel.value&&sel.selectedOptions[0])?sel.selectedOptions[0].text:""};
}
function encodeCostUrl(){
  let b64="";
  try{b64=btoa(unescape(encodeURIComponent(JSON.stringify(costData()))));}catch(e){b64="";}
  return location.origin+location.pathname+"#cost="+b64;
}
function costShareText(){
  const d=costData();
  const bar="━━━━━━━━━━━━━";
  const L=["🧾 វិក្កយបត្រថ្លៃសិក្សា — Trey Visai",bar];
  if(d.sc)L.push("🏫 "+d.sc);
  if(d.dur)L.push("🎓 "+d.dur);
  L.push(bar);
  L.push("• ថ្លៃសិក្សា៖ "+(d.tu||"$0"));
  L.push("• ស្នាក់នៅ៖ "+(d.rent||"$0"));
  L.push("• ម្ហូបអាហារ៖ "+(d.food||"$0"));
  L.push("• ធ្វើដំណើរ៖ "+(d.tr||"$0"));
  L.push("• សម្ភារ៖ "+(d.mat||"$0"));
  L.push(bar);
  L.push("💰 សរុប៖ "+(d.total||"$0"));
  if(d.pay&&d.pay!=="—")L.push("📊 ROI សងវិញ "+d.pay+(d.sal?" · ប្រាក់ខែ ~"+d.sal:""));
  L.push(bar);
  L.push("🔗 គណនាដោយខ្លួនឯងនៅ Trey Visai");
  return L.join("\n");
}
function shareCostTo(p){
  const shareUrl=location.origin+location.pathname;
  if(p==="copy"){
    const txt=costShareText()+"\n"+shareUrl;const done=()=>showShareToast("បានចម្លងអត្ថបទ ✓");
    if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(txt).then(done).catch(()=>fallbackCopy(txt,done));}else fallbackCopy(txt,done);
    return;
  }
  if(p==="native"){
    if(navigator.share){navigator.share({title:"ថ្លៃសិក្សា — Trey Visai",text:costShareText(),url:shareUrl}).catch(()=>{});}else shareCostTo("copy");
    return;
  }
  const url=encodeURIComponent(shareUrl);
  const text=encodeURIComponent(costShareText());
  const map={
    facebook:"https://www.facebook.com/sharer/sharer.php?u="+url,
    telegram:"https://t.me/share/url?url="+url+"&text="+text,
    twitter:"https://twitter.com/intent/tweet?url="+url+"&text="+text,
    whatsapp:"https://api.whatsapp.com/send?text="+text+"%0A"+url
  };
  if(map[p])window.open(map[p],"_blank","noopener,noreferrer,width=600,height=560");
}
function encodePlanUrl(){
  const d={c:plan.careers||[],s:plan.schools||[],q:(plan.quiz&&plan.quiz.topCareers)?plan.quiz.topCareers.map(t=>t.id):null,k:plan.cost||null};
  let b64="";
  try{b64=btoa(unescape(encodeURIComponent(JSON.stringify(d))));}catch(e){b64="";}
  return location.origin+location.pathname+"#plan="+b64;
}
function decodePlanHash(b64){
  try{return JSON.parse(decodeURIComponent(escape(atob(b64))));}catch(e){return null;}
}
function planShareText(){
  const lines=["🎓 ផែនការសិក្សារបស់ខ្ញុំ — Trey Visai",""];
  let careerName=null;
  if(plan.careers.length){const j=careersList.find(x=>x.id===plan.careers[0]);if(j)careerName=j.name;}
  else if(plan.quiz&&plan.quiz.topCareers&&plan.quiz.topCareers.length){const j=careersList.find(x=>x.id===plan.quiz.topCareers[0].id);if(j)careerName=j.name;}
  if(careerName)lines.push("🎯 អាជីពគោលដៅ៖ "+careerName);
  if(plan.schools.length){const ns=plan.schools.map(id=>{const s=schoolsData.find(x=>x.id===id);return s?schoolAbbr(s):null;}).filter(Boolean);if(ns.length)lines.push("🏫 សាលា៖ "+ns.join(", "));}
  if(plan.cost)lines.push("💰 ថ្លៃសិក្សាប៉ាន់ស្មាន៖ $"+Number(plan.cost.total).toLocaleString()+" ("+plan.cost.years+" ឆ្នាំ)");
  lines.push("");
  lines.push("👨‍👩‍👧 សូមឪពុកម្ដាយជួយមើល និងពិភាក្សាជាមួយគ្នា 🙏");
  return lines.join("\n");
}
function sharePlanTo(p){
  if(p==="copy"){
    const url=encodePlanUrl();const done=()=>showShareToast("បានចម្លងតំណផែនការ ✓");
    if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(url).then(done).catch(()=>fallbackCopy(url,done));}else fallbackCopy(url,done);
    return;
  }
  if(p==="native"){
    if(navigator.share){navigator.share({title:"ផែនការសិក្សា — Trey Visai",text:planShareText(),url:encodePlanUrl()}).catch(()=>{});}else sharePlanTo("copy");
    return;
  }
  const url=encodeURIComponent(encodePlanUrl());
  const text=encodeURIComponent(planShareText());
  const map={
    facebook:"https://www.facebook.com/sharer/sharer.php?u="+url,
    telegram:"https://t.me/share/url?url="+url+"&text="+text,
    twitter:"https://twitter.com/intent/tweet?url="+url+"&text="+text,
    whatsapp:"https://api.whatsapp.com/send?text="+text+"%0A"+url
  };
  if(map[p])window.open(map[p],"_blank","noopener,noreferrer,width=600,height=560");
}
function sharePlanBtnsHTML(){
  const nativeBtn=(typeof navigator!=="undefined"&&navigator.share)?'<button class="share-btn" style="background:var(--accent)" title="ផ្ញើ" onclick="sharePlanTo(\'native\')"><i class="fa-solid fa-share-nodes"></i></button>':'';
  return '<span class="share-label"><i class="material-symbols-outlined">send</i> ផ្ញើទៅ</span>'+
    '<div class="share-btns">'+nativeBtn+
    '<button class="share-btn tg" title="Telegram" onclick="sharePlanTo(\'telegram\')"><i class="fa-brands fa-telegram"></i></button>'+
    '<button class="share-btn fb" title="Facebook" onclick="sharePlanTo(\'facebook\')"><i class="fa-brands fa-facebook-f"></i></button>'+
    '<button class="share-btn wa" title="WhatsApp" onclick="sharePlanTo(\'whatsapp\')"><i class="fa-brands fa-whatsapp"></i></button>'+
    '<button class="share-btn x" title="X (Twitter)" onclick="sharePlanTo(\'twitter\')"><i class="fa-brands fa-x-twitter"></i></button>'+
    '<button class="share-btn copy" title="ចម្លងតំណ" onclick="sharePlanTo(\'copy\')"><i class="fa-solid fa-link"></i></button>'+
    '</div>';
}
function renderSharedPlan(data){
  const el=document.getElementById("shared-content");if(!el)return;
  let careerName=null,careerObj=null;
  if(data.c&&data.c.length){const j=careersList.find(x=>x.id===data.c[0]);if(j){careerName=j.name;careerObj=j;}}
  else if(data.q&&data.q.length){const j=careersList.find(x=>x.id===data.q[0]);if(j){careerName=j.name;careerObj=j;}}
  let html="";
  html+=`<div class="shared-banner"><i class="material-symbols-outlined">family_restroom</i><div><p class="sb-eyebrow">ផែនការសិក្សារបស់សិស្ស</p><h2>${careerName?("គោលដៅ៖ "+careerName):"ផែនការសិក្សា"}</h2><p class="sb-sub">សូមឪពុកម្ដាយ/អាណាព្យាបាលពិនិត្យមើល ហើយពិភាក្សាជាមួយកូនអំពីជម្រើសសិក្សានេះ។</p></div></div>`;
  if(careerObj){
    const skills=(careerObj.skills||[]).map(s=>`<span class="tag">${s}</span>`).join("");
    html+=`<div class="plan-block"><div class="plan-block-head"><h3><i class="material-symbols-outlined">work</i> អាជីពគោលដៅ</h3></div><div class="job-card" style="animation:none;opacity:1;cursor:default"><div class="job-top"><div class="job-icon"><i class="material-symbols-outlined">${careerObj.icon}</i></div><div><p class="job-name">${careerObj.name}</p><span class="job-cat">${jobCats[careerObj.cat].label}</span></div></div><p class="job-desc">${careerObj.desc}</p><div class="job-foot"><span class="job-salary">ប្រាក់ខែ ${careerObj.salary}/ខែ</span></div>${skills?`<div class="roadmap-tags" style="margin-top:12px">${skills}</div>`:""}</div></div>`;
  } else if(careerName){
    html+=`<div class="plan-block"><div class="plan-block-head"><h3><i class="material-symbols-outlined">work</i> អាជីពគោលដៅ</h3></div><div class="job-card" style="animation:none;opacity:1;cursor:default"><p class="job-name">${careerName}</p></div></div>`;
  }
  if(data.s&&data.s.length){
    const cards=data.s.map(id=>{const s=schoolsData.find(x=>x.id===id);if(!s)return"";return `<div class="school-card" style="animation:none;opacity:1;cursor:default"><div class="school-card-top">${schoolLogo(s)}</div><p class="school-name">${s.name}</p><div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-bottom:12px"><span class="school-type-badge ${typeBadgeClass(s.type)}">${typeLabel(s.type)}</span><span style="font-size:12px;color:var(--text-3)">${provinceLabel(s.province)} · ★ ${s.rating}</span></div><div class="school-footer"><span class="school-tuition">${tuitionLabel(s)}</span></div></div>`;}).join("");
    html+=`<div class="plan-block"><div class="plan-block-head"><h3><i class="material-symbols-outlined">school</i> សាលាដែលចាប់អារម្មណ៍</h3></div><div class="schools-grid">${cards}</div></div>`;
  }
  if(data.k){
    const fmt=n=>"$"+Number(n).toLocaleString();
    html+=`<div class="plan-block"><div class="plan-block-head"><h3><i class="material-symbols-outlined">savings</i> ថ្លៃសិក្សាប៉ាន់ស្មាន</h3></div><div class="cost-result" style="max-width:440px"><div class="cost-total-box"><div class="label">ថ្លៃសិក្សាសរុប (ប៉ាន់ស្មាន)</div><div class="amount">${fmt(data.k.total)}</div><div class="sub">សម្រាប់ ${data.k.years} ឆ្នាំ${data.k.school?" · "+data.k.school:""}</div></div><div class="cost-breakdown"><div class="cost-line"><span class="label"><i class="material-symbols-outlined">school</i> ថ្លៃសិក្សា</span><span class="val">${fmt(data.k.tuition)}</span></div><div class="cost-line"><span class="label"><i class="material-symbols-outlined">home</i> ការរស់នៅ + សម្ភារ</span><span class="val">${fmt(data.k.living)}</span></div>${data.k.payback?`<div class="cost-line"><span class="label"><i class="material-symbols-outlined">trending_up</i> រយៈពេលសង (ROI)</span><span class="val">${data.k.payback} ឆ្នាំ</span></div>`:""}</div></div></div>`;
  }
  html+=`<div class="plan-block"><div class="plan-block-head"><h3><i class="material-symbols-outlined">workspace_premium</i> ជំនួយហិរញ្ញវត្ថុ</h3></div><div class="plan-empty" style="border-style:solid;text-align:left">មានអាហារូបករណ៍ជាច្រើន (រដ្ឋាភិបាល MOEYS, JICA, សាកលវិទ្យាល័យ) ដែលអាចជួយបន្ថយបន្ទុកចំណាយ។ ចុច «ស្វែងយល់បន្ថែម» ដើម្បីមើលព័ត៌មានពេញលេញ។</div></div>`;
  const exploreBtn=careerObj?`<button class="btn btn-primary" onclick="exitShared('career','${careerObj.id}')"><i class="material-symbols-outlined">visibility</i> ស្វែងយល់អំពីអាជីពនេះ</button>`:`<button class="btn btn-primary" onclick="exitShared('home')"><i class="material-symbols-outlined">explore</i> ស្វែងយល់បន្ថែម</button>`;
  html+=`<div class="shared-cta">${exploreBtn}<button class="btn btn-ghost" onclick="exitShared('quiz')"><i class="material-symbols-outlined">quiz</i> ធ្វើតេស្តដោយខ្លួនឯង</button></div>`;
  el.innerHTML=html;
}
function exitShared(action,careerId){
  if(history.replaceState)history.replaceState(null,"",location.pathname);else location.hash="";
  if(action==="career"&&careerId)openCareer(careerId);
  else if(action==="quiz")showView("quiz");
  else if(action==="cost")showView("cost");
  else showView("home");
}
function checkSharedPlan(){
  const m=(location.hash||"").match(/plan=([^&]+)/);
  if(m){const data=decodePlanHash(m[1]);if(data){renderSharedPlan(data);showView("shared");return true;}}
  return false;
}
function renderSharedCost(d){
  const el=document.getElementById("shared-content");if(!el)return;
  const dur=(d.dur||"").replace("សម្រាប់ ","");
  let html="";
  html+=`<div class="shared-banner"><i class="material-symbols-outlined">savings</i><div><p class="sb-eyebrow">ការប៉ាន់ស្មានថ្លៃសិក្សា</p><h2>${d.total||"$0"}</h2><p class="sb-sub">${dur?dur+" ":""}${d.sc?"· "+d.sc:""} — សូមឪពុកម្ដាយ/អាណាព្យាបាលពិនិត្យមើលការចំណាយសិក្សា។</p></div></div>`;
  html+=`<div class="cost-result" style="max-width:480px;margin:0 auto">
    <div class="cost-total-box"><div class="label">ថ្លៃសិក្សាសរុប (ប៉ាន់ស្មាន)</div><div class="amount">${d.total||"$0"}</div><div class="sub">${d.dur||""}${d.sc?" · "+d.sc:""}</div></div>
    <div class="cost-breakdown">
      <div class="cost-line"><span class="label"><i class="material-symbols-outlined">school</i> ថ្លៃសិក្សា</span><span class="val">${d.tu||"$0"}</span></div>
      <div class="cost-line"><span class="label"><i class="material-symbols-outlined">home</i> ស្នាក់នៅ</span><span class="val">${d.rent||"$0"}</span></div>
      <div class="cost-line"><span class="label"><i class="material-symbols-outlined">restaurant</i> ម្ហូបអាហារ</span><span class="val">${d.food||"$0"}</span></div>
      <div class="cost-line"><span class="label"><i class="material-symbols-outlined">directions_bus</i> ធ្វើដំណើរ</span><span class="val">${d.tr||"$0"}</span></div>
      <div class="cost-line"><span class="label"><i class="material-symbols-outlined">menu_book</i> សម្ភារ</span><span class="val">${d.mat||"$0"}</span></div>
      <div class="cost-divider"></div>
      <div class="cost-line" style="font-weight:700"><span class="label" style="color:var(--text);font-weight:700"><i class="material-symbols-outlined">payments</i> សរុប</span><span class="val" style="color:var(--accent)">${d.total||"$0"}</span></div>
    </div>
    <div class="roi-box"><h4><i class="material-symbols-outlined">trending_up</i> ការវិភាគ ROI</h4>
      <div class="roi-stat"><span class="label">ប្រាក់ខែប្រចាំខែ (ប៉ាន់ស្មាន)</span><span class="val">${d.sal||"—"}</span></div>
      <div class="roi-stat"><span class="label">ប្រចាំឆ្នាំ</span><span class="val">${d.ann||"—"}</span></div>
      <div class="roi-stat"><span class="label">ពេលវេលាសង (ឆ្នាំ)</span><span class="val">${d.pay||"—"}</span></div>
    </div>
  </div>`;
  html+=`<div class="shared-cta"><button class="btn btn-primary" onclick="exitShared('cost')"><i class="material-symbols-outlined">calculate</i> គណនាដោយខ្លួនឯង</button><button class="btn btn-ghost" onclick="exitShared('quiz')"><i class="material-symbols-outlined">quiz</i> ធ្វើតេស្តអាជីព</button></div>`;
  el.innerHTML=html;
}
function checkSharedCost(){
  const m=(location.hash||"").match(/cost=([^&]+)/);
  if(m){const data=decodePlanHash(m[1]);if(data){renderSharedCost(data);showView("shared");return true;}}
  return false;
}

/* ===== CUSTOM DROPDOWN (styled select that syncs with native <select>) ===== */
function enhanceSelect(sel){
  if(sel.dataset.cs)return;sel.dataset.cs="1";
  const isForm=sel.classList.contains("form-input");
  const wrap=document.createElement("div");
  wrap.className="cs-wrap"+(isForm?" full":"");
  sel.parentNode.insertBefore(wrap,sel);
  wrap.appendChild(sel);
  sel.classList.add("cs-native");
  const trigger=document.createElement("button");
  trigger.type="button";
  trigger.className="cs-trigger "+(isForm?"cs-form":"cs-filter");
  trigger.innerHTML='<span class="cs-label"></span><i class="material-symbols-outlined cs-arrow">expand_more</i>';
  const panel=document.createElement("div");panel.className="cs-panel";
  const label=trigger.querySelector(".cs-label");
  function build(){
    panel.innerHTML=Array.from(sel.options).map((o,i)=>`<div class="cs-option${i===sel.selectedIndex?" sel":""}" data-i="${i}"><span>${o.textContent}</span><i class="material-symbols-outlined cs-check">check</i></div>`).join("");
    panel.querySelectorAll(".cs-option").forEach(el=>el.addEventListener("click",()=>{
      const i=+el.dataset.i;
      if(i!==sel.selectedIndex){sel.selectedIndex=i;sel.dispatchEvent(new Event("change",{bubbles:true}));}
      sync();closeAllSelects();
    }));
  }
  function sync(){const o=sel.options[sel.selectedIndex];label.textContent=o?o.textContent:"";Array.from(panel.querySelectorAll(".cs-option")).forEach((el,i)=>el.classList.toggle("sel",i===sel.selectedIndex));}
  sel._csSync=sync;
  trigger.addEventListener("click",e=>{e.stopPropagation();const open=wrap.classList.contains("cs-open");closeAllSelects();if(!open){build();sync();wrap.classList.add("cs-open");}});
  wrap.appendChild(trigger);wrap.appendChild(panel);
  build();sync();
}
function closeAllSelects(){document.querySelectorAll(".cs-wrap.cs-open").forEach(w=>w.classList.remove("cs-open"));}
document.addEventListener("click",e=>{if(!e.target.closest(".cs-wrap"))closeAllSelects();});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeAllSelects();});
function enhanceAllSelects(){document.querySelectorAll("select.form-input,select.filter-select").forEach(enhanceSelect);}

/* ===== NEWS ALERT MODAL ===== */
(function(){
  const ov=document.getElementById("news-overlay");if(!ov)return;
  function close(){ov.classList.remove("show");try{sessionStorage.setItem("tv_news_seen","1");}catch(e){}}
  function open(){ov.classList.add("show");}
  const c=document.getElementById("news-close"),d=document.getElementById("news-dismiss");
  if(c)c.addEventListener("click",close);
  if(d)d.addEventListener("click",close);
  ov.addEventListener("click",e=>{if(e.target===ov)close();});
  document.addEventListener("keydown",e=>{if(e.key==="Escape"&&ov.classList.contains("show"))close();});
  let seen=false;try{seen=sessionStorage.getItem("tv_news_seen")==="1";}catch(e){}
  const onShared=/[#&](plan|cost)=/.test(location.hash);
  if(!seen&&!onShared){setTimeout(open,1800);}
})();

/* ===== COST CALCULATOR: populate university dropdown from schoolsData (all schools) ===== */
function populateCostSchools(){
  const sel=document.getElementById("cost-school");
  if(!sel||typeof schoolsData==="undefined")return;
  const opts=schoolsData
    .map(s=>`<option value="${s.id}" data-tuition="${s.tuition||0}">${s.name}</option>`)
    .join("");
  sel.innerHTML='<option value="">-- ជ្រើសសាលា --</option>'+opts;
}

/* ===== MY PLAN INIT ===== */
loadPlan();
updatePlanBadge();
populateCostSchools();
enhanceAllSelects();
function filterFacts(c){
  document.querySelectorAll("#facts-tabs .chip").forEach(el=>el.classList.toggle("active",el.dataset.fc===c));
  document.querySelectorAll(".fact-section").forEach(s=>{s.style.display=(c==="all"||s.dataset.fc===c)?"":"none";});
}
function restoreView(){
  let v=null;try{v=sessionStorage.getItem("tv_view");}catch(e){}
  if(!v||v==="home"||v==="results"||v==="shared")return;
  if(v==="school-detail"||v==="career-detail"){
    let d=null;try{d=sessionStorage.getItem("tv_detail");}catch(e){}
    if(d){const i=d.indexOf(":"),t=d.slice(0,i),id=d.slice(i+1);
      if(t==="school"&&typeof openSchool==="function"){openSchool(id);return;}
      if(t==="career"&&typeof openCareer==="function"){openCareer(id);return;}
    }
    return;
  }
  if(document.getElementById("view-"+v))showView(v);
}
if(!checkSharedPlan()&&!checkSharedCost())restoreView();

/* ===== ANIMATED GRID BEAMS: light beams traveling along the background grid lines ===== */
function initGridFlow(){
  if(window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;
  let host=document.getElementById("grid-flow");
  if(!host){host=document.createElement("div");host.id="grid-flow";host.className="grid-flow";host.setAttribute("aria-hidden","true");document.body.appendChild(host);}
  function build(){
    const cell=parseInt(getComputedStyle(document.body).getPropertyValue("--grid-cell"))||52;
    const cols=Math.floor(window.innerWidth/cell);
    const vCount=Math.max(3,Math.min(6,Math.floor(cols/4)));
    const pick=(n,max)=>{const s=new Set();let guard=0;while(s.size<Math.min(n,max-1)&&guard++<200)s.add(1+Math.floor(Math.random()*(max-1)));return[...s];};
    host.innerHTML="";
    const frag=document.createDocumentFragment();
    pick(vCount,cols).forEach(c=>{
      const el=document.createElement("span");
      el.className="gline"+(Math.random()<0.5?" up":"");
      el.style.left=(c*cell)+"px";
      el.style.setProperty("--d",(5+Math.random()*4).toFixed(1)+"s");
      el.style.setProperty("--delay",(Math.random()*5).toFixed(1)+"s");
      frag.appendChild(el);
    });
    host.appendChild(frag);
  }
  build();
  let t;window.addEventListener("resize",()=>{clearTimeout(t);t=setTimeout(build,250);});
}

/* ===== HERO FLOATING 3D GLASS CARDS (perspective curve + parallax) ===== */
function initHero3D(){
  const host=document.getElementById("hero3d");
  if(!host||host.dataset.built)return;
  host.dataset.built="1";
  const reduce=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const cards=[
    {view:"quiz", variant:"", g:{tx:-336,ty:16,tz:-172,rx:3,ry:24, rz:-2,s:.82,w:160,h:300}, a:"h3dFloatA",d:7.5,dl:0,  pf:.7,
      html:`<div class="h3d-ic gA"><i class="material-symbols-outlined">psychology</i></div>
        <div class="h3d-title">តេស្តអាជីព</div>
        <div class="h3d-sub">ស្គាល់ខ្លួនឯង រកអាជីពដែលសម។</div>
        <svg class="c-spark" viewBox="0 0 120 46"><defs><linearGradient id="spk" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#4ade80"/><stop offset="1" stop-color="#bef264"/></linearGradient></defs><path class="c-spark-line" d="M2 38 L18 30 L32 34 L48 18 L64 24 L82 12 L100 16 L118 5"/><circle class="c-dot-lime" cx="118" cy="5" r="3"/></svg>`},
    {view:"careers", variant:"", g:{tx:-176,ty:2,tz:-42,rx:2,ry:13, rz:1, s:.92,w:172,h:328}, a:"h3dFloatB",d:8.5,dl:.8, pf:.9,
      html:`<div class="c-cap">ទិដ្ឋភាពរួម</div>
        <div class="c-big">១០០+<span class="c-badge">អាជីព</span></div>
        <div class="c-bar"><span style="width:74%"></span></div>
        <div class="c-rows">
          <div class="c-row"><span class="c-ri"><i class="material-symbols-outlined">work</i></span><span class="c-rl">អាជីព</span><span class="c-rv">១០០+</span></div>
          <div class="c-row"><span class="c-ri"><i class="material-symbols-outlined">school</i></span><span class="c-rl">សាលា</span><span class="c-rv">៤១</span></div>
          <div class="c-row"><span class="c-ri"><i class="material-symbols-outlined">category</i></span><span class="c-rl">វិស័យ</span><span class="c-rv">១២</span></div>
          <div class="c-row"><span class="c-ri"><i class="material-symbols-outlined">quiz</i></span><span class="c-rl">តេស្ត</span><span class="c-rv">ឥតគិតថ្លៃ</span></div>
        </div>`},
    {view:"careers", variant:"", g:{tx:0,ty:-6,tz:52,rx:0,ry:0, rz:0, s:1.0,w:210,h:360}, a:"h3dFloatC",d:6.5,dl:.4, pf:1.15,
      html:`<div class="c-top"><div class="c-h2">អាជីពកំពុងកើនឡើង</div><i class="c-more material-symbols-outlined">more_horiz</i></div>
        <div class="c-sel">៥ ឆ្នាំខាងមុខ <i class="material-symbols-outlined">expand_more</i></div>
        <div class="c-chart"><span class="c-chip">+៣៥%</span>
          <svg class="c-area" viewBox="0 0 190 92"><defs><linearGradient id="ar" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="rgba(59,130,246,.35)"/><stop offset="1" stop-color="rgba(59,130,246,0)"/></linearGradient></defs><path d="M0 74 C22 66,32 52,46 54 C60 56,66 34,82 38 C98 42,112 20,128 26 C146 32,162 16,190 22 L190 92 L0 92 Z" fill="url(#ar)"/><path class="c-area-line" d="M0 74 C22 66,32 52,46 54 C60 56,66 34,82 38 C98 42,112 20,128 26 C146 32,162 16,190 22"/><circle class="c-dot" cx="128" cy="26" r="4"/></svg>
          <div class="c-axis"><span>២៦</span><span>២៧</span><span>២៨</span><span>២៩</span><span>៣០</span></div>
        </div>`},
    {view:"quiz", variant:"dark", g:{tx:176,ty:2,tz:-42,rx:2,ry:-13, rz:-1,s:.92,w:172,h:328}, a:"h3dFloatA",d:9,dl:1.2, pf:.9,
      html:`<div class="h3d-ic gLime"><i class="material-symbols-outlined">auto_awesome</i></div>
        <div class="h3d-title on-dark">ណែនាំដែលនាំ <span class="c-accent">ជោគជ័យ</span></div>
        <div class="h3d-sub on-dark">ណែនាំអាជីព សាលា និងថ្លៃសិក្សា។</div>
        <div class="c-ava"><img src="https://randomuser.me/api/portraits/thumb/women/44.jpg" alt=""><img src="https://randomuser.me/api/portraits/thumb/men/32.jpg" alt=""><img src="https://randomuser.me/api/portraits/thumb/women/68.jpg" alt=""><span class="c-pill">+៩០០</span></div>`},
    {view:"schools", variant:"blue", g:{tx:336,ty:16,tz:-172,rx:3,ry:-24, rz:2, s:.82,w:160,h:300}, a:"h3dFloatB",d:7,dl:.6, pf:.7,
      html:`<div class="h3d-ic circW"><i class="material-symbols-outlined">school</i></div>
        <div class="h3d-title on-dark">សាលា ៤១</div>
        <div class="h3d-sub on-dark">សាកលវិទ្យាល័យ និងវិទ្យាស្ថាន។</div>
        <div class="c-statbox"><div class="c-num">៤១+</div><div class="c-lbl">សាលាទាំងអស់</div></div>`}
  ];
  const stage=document.createElement("div");stage.className="h3d-stage h3d-scene";
  host.appendChild(stage);
  const cardEls=[];
  cards.forEach((c,i)=>{
    const g=c.g;
    const card=document.createElement("div");
    card.className="h3d-card";card.dataset.view=c.view;card.dataset.pf=c.pf;
    card.style.cssText=`--tx:${g.tx};--ty:${g.ty};--tz:${g.tz};--rx:${g.rx};--ry:${g.ry};--rz:${g.rz};--s:${g.s};--w:${g.w}px;--h:${g.h}px;`;
    const enter=document.createElement("div");enter.className="h3d-enter";enter.style.transitionDelay=(i*120)+"ms";
    const flo=document.createElement("div");flo.className="h3d-float";
    if(!reduce)flo.style.animation=`${c.a} ${c.d}s ease-in-out ${c.dl}s infinite`;
    const face=document.createElement("div");face.className="h3d-face"+(c.variant?(" "+c.variant):"");
    face.innerHTML=c.html;
    flo.appendChild(face);enter.appendChild(flo);card.appendChild(enter);stage.appendChild(card);
    card.addEventListener("click",()=>{if(typeof showView==="function")showView(c.view);});
    cardEls.push(card);
  });
  // staggered entrance (setTimeout fires even if rAF is paused in a backgrounded tab)
  setTimeout(()=>stage.classList.add("in"),80);
  if(reduce)return;
  // cursor parallax: group tilt + per-card follow, lerped at 60fps
  let tgx=0,tgy=0,cgx=0,cgy=0,tpx=0,tpy=0,cpx=0,cpy=0,raf=null;
  function loop(){
    if(raf)return;
    const step=()=>{
      cgx+=(tgx-cgx)*.09;cgy+=(tgy-cgy)*.09;cpx+=(tpx-cpx)*.09;cpy+=(tpy-cpy)*.09;
      stage.style.setProperty("--gx",cgx.toFixed(2)+"deg");
      stage.style.setProperty("--gy",cgy.toFixed(2)+"deg");
      for(const el of cardEls){const pf=+el.dataset.pf;el.style.setProperty("--px",(cpx*pf).toFixed(2));el.style.setProperty("--py",(cpy*pf).toFixed(2));}
      if(Math.abs(tgx-cgx)+Math.abs(tgy-cgy)+Math.abs(tpx-cpx)+Math.abs(tpy-cpy)>0.04){raf=requestAnimationFrame(step);}else{raf=null;}
    };
    raf=requestAnimationFrame(step);
  }
  window.addEventListener("mousemove",e=>{
    if(document.getElementById("view-home")&&!document.getElementById("view-home").classList.contains("active"))return;
    const r=host.getBoundingClientRect();
    const nx=Math.max(-1,Math.min(1,(e.clientX-(r.left+r.width/2))/(r.width/2)));
    const ny=Math.max(-1,Math.min(1,(e.clientY-(r.top+r.height/2))/(r.height/2)));
    tgy=nx*8;tgx=-ny*5;tpx=nx*18;tpy=ny*14;loop();
  },{passive:true});
  document.addEventListener("mouseleave",()=>{tgx=tgy=tpx=tpy=0;loop();},{passive:true});
}

/* ===== HOMEPAGE: university logo marquee + featured growing careers ===== */
function initHomeLogos(){
  const track=document.getElementById("logo-track");
  if(!track)return;
  const ids=["rupp","num","uhs","itc","rua","npic","nie","era","ntti","nubb","aupp","paragon","puc","up","bbu","vanda","iu","acac"];
  const items=ids.map(id=>`<div class="logo-item"><img src="public/logos/${id}.png" alt="" onerror="this.parentNode.remove()"></div>`).join("");
  track.innerHTML=items+items; // duplicate for a seamless loop
}
function initHomeFeatured(){
  const host=document.getElementById("home-careers");
  if(!host||typeof careersList==="undefined")return;
  const growing=careersList.filter(j=>j.growing);
  const list=(growing.length?growing:careersList).slice(0,4);
  host.innerHTML=list.map(j=>{
    const cat=(typeof jobCats!=="undefined"&&jobCats[j.cat])?jobCats[j.cat].label:"";
    const skills=(j.skills||[]).slice(0,3).map(s=>`<span class="hc-skill">${s}</span>`).join("");
    return `<div class="hc-card" onclick="openCareer('${j.id}')"><div class="hc-top"><div class="hc-ic"><i class="material-symbols-outlined">${j.icon||"work"}</i></div><span class="hc-grow"><i class="material-symbols-outlined">trending_up</i>កំពុងកើនឡើង</span></div><h3 class="hc-name">${j.name}</h3><div class="hc-cat">${cat}</div><div class="hc-skills">${skills}</div><div class="hc-foot"><span class="hc-salary">${j.salary||"—"}/ខែ</span><i class="material-symbols-outlined">arrow_forward</i></div></div>`;
  }).join("");
}

/* ===== INIT (runs last, after all data/vars are declared) ===== */
initQuiz();
calcCost();
typeHero();
initGridFlow();
initHero3D();
initHomeLogos();
initHomeFeatured();

const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in-view");obs.unobserve(e.target);}});},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>obs.observe(el));
