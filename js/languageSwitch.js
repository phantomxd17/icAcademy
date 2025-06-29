document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        en: {
            academy_name: "IC Academy",
            title: "IC Academy | Language & Programming Courses - Nasr City",
            nav_home: "Home",
            nav_courses: "Courses",
            nav_about: "About Us",
            nav_tracks: "Tracks",
            nav_team: "Team",
            nav_location: "Location",
            courses_title: "courses",
            courses_subtitle: "Courses",
            courses_subtitle_professional: "Professional",
            // English Language Courses
            course_english_title: "English Courses",
            english_general_title: "General English",
            english_general_desc: "Master grammar, vocabulary, speaking, listening, reading, and writing through interactive, real-life scenarios and AI-supported exercises. Develop essential communication skills for everyday and professional contexts.",
            english_business_title: "Business English",
            english_business_desc: "Build specialized language for international meetings, negotiations, reports, and professional networking. Gain confidence in corporate correspondence and business-critical dialogues.",
            english_phonics_title: "Phonics for Kids",
            english_phonics_desc: "An interactive, sound-based literacy program helping children read confidently and accurately through songs, games, and AI-assisted pronunciation tools.",
            english_speaking_training_title: "Speaking & Conversation",
            english_speaking_training_desc: "Focus on real-time speaking practice, debate, and dialogue under the guidance of fluent and native-speaking instructors.",
            // French Language Courses
            course_french_title: "French Courses",
            french_beginners_title: "French for Beginners",
            french_beginners_desc: "Acquire essential conversational French and everyday vocabulary from day one in an immersive, supportive environment.",
            french_intermediate_title: "Intermediate French",
            french_intermediate_desc: "Develop fluency, comprehension, and cultural awareness through interactive dialogues, role-plays, and digital media.",
            french_business_title: "French for Business",
            french_business_desc: "Learn formal French communication for professional meetings, contracts, and international networking, with practical case studies.",
            french_travel_title: "French for Travel",
            french_travel_desc: "Essential, practical language skills for navigating French-speaking environments confidently and independently.",
            // German Language Courses
            course_german_title: "German Courses",
            german_beginners_title: "German for Beginners",
            german_beginners_desc: "Learn key expressions, grammar, and conversational skills with AI-enhanced practice and live conversation sessions.",
            german_intermediate_title: "Intermediate & Advanced German",
            german_intermediate_desc: "Sharpen fluency, writing, and comprehension while exploring authentic German literature, media, and contemporary culture.",
            german_business_title: "German for Business",
            german_business_desc: "Master professional German for meetings, documentation, and corporate negotiation, taught through business role-plays and real-world simulations.",
            german_everyday_title: "German for Everyday Use",
            german_everyday_desc: "Tailored for ex-pats and travelers, focusing on daily interactions, cultural customs, and survival phrases for life in German-speaking countries.",
            // Programming Courses
            course_programming_title: "Programming Courses",
            programming_coding_title: "Coding for Kids",
            programming_coding_desc: "Fun, gamified AI-based lessons that introduce problem-solving and logical thinking through code, nurturing future tech innovators.",
            programming_web_title: "Web Development Basics",
            programming_web_desc: "Build your first website using HTML, CSS, and JavaScript in a practical, beginner-friendly course.",
            programming_app_game_title: "App & Game Development",
            programming_app_game_desc: "Learn to design and program simple apps and games, mastering fundamentals of interface design and coding logic.",
            programming_ai_robotics_title: "AI & Robotics for Beginners",
            programming_ai_robotics_desc: "An engaging introduction to artificial intelligence and robotics, offering hands-on projects and AI-integrated learning tools.",
            about_title: "About US",
            about_subtitle: "Learn from the",
            about_subtitle_professionals: "Professionals",
            about_who_we: "Who Are",
            about_who_we_span: "We?",
            about_who_desc: "Welcome to IC Academy, your gateway to cutting-edge, AI-powered language and coding education. At IC Academy, we believe education should transcend traditional boundaries, equipping learners of all ages with the tools to flourish in a rapidly evolving, AI-enhanced global environment.",
            about_who_desc2: "Our programs are meticulously designed to help learners master communication, critical thinking, and digital fluency while cultivating intercultural competence and career readiness.",
            about_why: "Why Choose",
            about_why_academy: "IC Academy?",
            about_why_desc_1: "Personalized, minute-by-minute learning feedback, ensuring every learner receives immediate, actionable guidance.",
            about_why_desc_2: "AI-generated progress reports, tailored learning pathways, and flexible scheduling.",
            about_why_desc_3: "A fusion of human expertise and AI innovation to maximize efficiency, accuracy, and engagement.",
            about_why_desc_4: "International certification and access to language and culture workshops to build not only language skills but also cultural intelligence and confidence.",
            about_why_desc_5: "A learner-centric philosophy focused on tangible, long-term benefits: career advancement, academic success, and global citizenship.",
            about_team: "The",
            about_team_span: "Team",
            about_team_desc: "Our esteemed teaching and administrative staff at IC Academy are a key pillar of our institution. Each member brings a wealth of qualifications and expertise, ensuring that our students receive the highest standard of language education. Their dedication and passion for enhancing the language learning experience are evident in every aspect of our curriculum and support services.",
            about_goals: "Our",
            about_goals_span: "Goals",
            about_goals_desc: "At IC Academy, our primary goal is to empower our students with confidence, fluency, and practical language skills. We are committed to creating a supportive and encouraging environment that fosters growth and proficiency in language learning. Our institution is dedicated to building a community where students can thrive and succeed in their language learning journey.",
            tracks_title: "Tracks",
            tracks_subtitle: "Tailored",
            tracks_subtitle_programs: "Programs",
            track_juniors_title: "Juniors (Ages 4-7)",
            track_juniors_desc: "Our Junior courses focus on school admission preparation. Engaging activities and interactive lessons build young learners’ language skills for future academic success.",
            track_young_learners_title: "Young Learners (Ages 7-9)",
            track_young_learners_desc: "Emphasizing foundational language skills, our Young Learners courses focus on developing reading, writing, listening, and speaking abilities. We create a supportive environment where children can confidently express themselves in the target language.",
            track_teens_title: "Teens Program (Ages 10-18)",
            track_teens_desc: "Our Teens Program offers comprehensive language education for teenagers. We provide a dynamic learning experience that covers all aspects of language acquisition, including grammar, vocabulary, speaking, writing, and cultural understanding.",
            track_adults_title: "Adults (Ages 20-40)",
            track_adults_desc: "We offer advanced and diverse courses for adults, catering to different language goals and interests. Whether you want to improve your conversation and listening skills, prepare for internationally recognized exams, or learn from foreign and certified instructors, we have the right course for you.",
            team_title: "Team",
            team_subtitle: "Our",
            team_subtitle_team: "Team",
            // Team Section
            leadership_administration: "Leadership & Administration",
            english_language_department: "English Language Department",
            early_literacy_phonics: "Early Literacy & Phonics",
            german_language_department: "German Language Department",
            french_language_department: "French Language Department",
            programming_department: "Programming Department",
            // Leadership & Administration
            nadia_salama_name: "Nadia Salama",
            nadia_salama_title: "Head of Department (HOD)",
            nadia_salama_desc: "IC Academy is a hub for progressive education and creative teaching. I'm committed to keeping our instructors aligned with global academic trends through regular professional development, webinars like NileTESOL, and market-driven practices — ensuring students experience world-class, future-ready learning.",
            dalal_hana_name: "Dalal Hana",
            dalal_hana_title: "Financial Officer",
            dalal_hana_desc: "At IC Academy, operational excellence and educational innovation are paramount. My role ensures seamless financial management, sustaining an environment where students thrive in well-equipped, resourceful, and stress-free surroundings.",
            walaa_shehata_name: "Walaa Shehata",
            walaa_shehata_title: "Human Resources Officer",
            walaa_shehata_desc: "I'm proud to be part of an academy that cultivates a culture of growth and purpose. By nurturing dynamic, motivated teams, I help shape a professional community where teachers excel and students receive inspiring, high-impact education.",
            hassan_name: "Hassan",
            hassan_title: "Marketing Officer",
            hassan_desc: "My mission at IC Academy is to communicate our vision and ethos to a wider audience. Through strategic marketing, I connect families with the opportunities our academy offers, making students feel proud, empowered, and part of an evolving educational community.",
            hania_name: "Hania",
            hania_title: "Administrative Officer",
            hania_desc: "The academy feels like a second family, where every detail matters. I maintain a welcoming, organized environment so students feel secure, focused, and encouraged from the moment they walk through our doors.",
            // English Language Department
            wafa_sharsheer_name: "Wafa Sharsheer",
            wafa_sharsheer_title: "Native English Speaker",
            wafa_sharsheer_desc: "I believe language learning should be immersive and lively. At IC Academy, I design interactive, authentic lessons that build students' confidence in using English naturally in everyday and academic settings.",
            sofia_g_name: "Sofia G",
            sofia_g_title: "Business English Coach",
            sofia_g_desc: "IC Academy allows me to empower learners with career-focused communication skills. I guide students to speak and write with clarity, confidence, and professionalism — especially in competitive business environments.",
            israa_al_sheimy_name: "Israa Al Sheimy",
            israa_al_sheimy_title: "ESL Instructor",
            israa_al_sheimy_desc: "This academy stands out for valuing both student achievement and teacher growth. I encourage learners to take risks, express themselves, and find joy in the journey of mastering English.",
            magy_adel_name: "Magy Adel",
            magy_adel_title: "ESL Instructor",
            magy_adel_desc: "The supportive culture and rich resources here inspire me to create dynamic, engaging lessons. I measure success in the small, steady progress my students make as they grow into confident language users.",
            // Early Literacy & Phonics
            nourhan_tarek_name: "Nourhan Tarek",
            nourhan_tarek_title: "Jolly Phonics & General English Instructor",
            nourhan_tarek_desc: "IC Academy's embrace of innovative tools and literacy methods drew me in. I spark a love for reading in young learners by blending fun, movement, and interactive phonics techniques.",
            // German Language Department
            amira_name: "Amira",
            amira_title: "German Instructor",
            amira_desc: "The academy's multicultural, language-rich setting motivates me to make German accessible and enjoyable. I foster curiosity, creativity, and critical thinking in every lesson.",
            nawal_shaaban_name: "Nawal Shaaban",
            nawal_shaaban_title: "German Instructor",
            nawal_shaaban_desc: "At IC Academy, continuous improvement is a way of life. I reflect that by creating classrooms where students grow in both linguistic skill and cultural appreciation.",
            // French Language Department
            mayada_mahmoud_name: "Mayada Mahmoud",
            mayada_mahmoud_title: "French Instructor",
            mayada_mahmoud_desc: "I was drawn to the academy's vibrant, supportive atmosphere. I craft lessons where students feel safe to explore, make mistakes, and develop their French skills with enthusiasm.",
            karma_s_name: "Karma S",
            karma_s_title: "French Instructor",
            karma_s_desc: "IC Academy values innovation and student-centered teaching. My lessons integrate music, storytelling, and creativity, ensuring French becomes not just a subject, but an experience students cherish.",
            // Programming Department
            sarah_name: "Sarah",
            sarah_title: "Programming Instructor",
            sarah_desc: "At IC Academy, we believe in equipping students for a digital future. I provide hands-on, market-relevant coding courses, ensuring learners develop critical skills for today's tech-driven world.",
            features_title: "Exceptional",
            features_subtitle: "Exceptional",
            features_subtitle_features: "Features and Flexibility",
            feature_workshops_title: "Workshops",
            feature_workshops_desc: "Language, coding, and culture workshops to develop holistic, real-world competencies, equipping learners with practical skills for global success.",
            feature_teacher_title: "Teacher Training",
            feature_teacher_desc: "Equips aspiring and in-service educators with modern ESL methodologies, classroom management strategies, phonics instruction, and AI-based teaching solutions.",
            feature_learning_title: "Flexible Learning",
            feature_learning_desc: "Choose from online and offline courses with flexible scheduling. Our AI-powered tools provide personalized learning pathways and real-time feedback, allowing you to learn at your own pace.",
            feature_adv_title: "Advanced Writing",
            feature_adv_desc: "Specialized training in academic, business, and creative writing with AI-assisted feedback to refine tone, coherence, and precision.",
            reviews_title: "Reviews",
            reviews_subtitle: "Customer",
            reviews_subtitle_reviews: "Reviews",
            location_title: "Location",
            location_subtitle: "Our",
            location_subtitle_location: "Location",
            stats_title: "Numbers",
            stats_subtitle: "Our",
            stats_subtitle_numbers: "Numbers",
            branches: "Branches",
            students: "Students",
            certified_teachers: "Certified Teachers",
            experienced_years: "Experienced Years",
            events: "Events",
            footer_about_desc: "At IC Academy, our passionate educators and staff bring a wealth of experience to provide a nurturing, immersive language learning environment, fostering student success.",
            footer_social_title: "Social Media",
            footer_subscribe_title: "Subscribe our Newsletter",
            footer_subscribe_desc: "Join IC Academy and redefine your learning journey. Whether your goal is career advancement, academic distinction, or personal growth, we’re here to empower you with skills that matter in tomorrow’s world.",
            footer_subscribe_placeholder: "Enter Your Email Address",
            footer_subscribe_button: "Subscribe",
            footer_quick_links_title: "Quick Links",
            footer_course_english: "English",
            footer_course_french: "French",
            footer_course_german: "German",
            footer_course_programming: "Programming",
            footer_who_we: "Who Are We?",
            footer_why_choose: "Why Choose IC Academy?",
            footer_team: "The Team",
            footer_goals: "Our Goals",
            footer_contact_title: "Get in Touch",
            footer_contact_address: "26 Abd Alazim Al Gholamy, Makram Ebaid, Nasr City.",
            footer_copyright: "© 2025 Eng. Sherif Alaa, Eng. Saad Eldin Ahmed, and Eng. Hossam Hassan. All rights reserved.",
            meta_description: "IC Academy offers expert-led language and coding courses in English, French, and more. Join us in Nasr City for an AI-powered learning experience.",
            meta_keywords: "IC Academy, language courses, programming courses, English courses, French courses, German courses, robotics courses, Nasr City, education, learning, AI-powered learning, flexible schedules, online courses, offline courses, expert instructors, international certifications"
        },
        ar: {
            academy_name: "أكاديمية آي سي",
            title: "أكاديمية آي سي - دورات لغوية وبرمجية احترافية",
            nav_home: "الرئيسية",
            nav_courses: "الدورات",
            nav_about: "معلومات عنا",
            nav_tracks: "المسارات",
            nav_team: "الفريق",
            nav_location: "الموقع",
            courses_title: "الدورات",
            courses_subtitle: "الدورات",
            courses_subtitle_professional: "المهنية",
            course_english_title: "دورات اللغة الإنجليزية",
            course_english_desc: "تشمل دورات اللغة الإنجليزية لدينا الإنجليزية العامة للتواصل الطليق، الإنجليزية التجارية للإعدادات المهنية، الفونيكس للأطفال لبناء أسس القراءة، برامج تدريب المعلمين لمنهجيات ESL، فصول المحادثة والتحدث للطلاقة، ودورات الكتابة المتقدمة للأغراض الأكاديمية والمهنية.",
            // English Language Courses
            course_english_title: "دورات اللغة الإنجليزية",
            english_general_title: "الإنجليزية العامة",
            english_general_desc: "اتقن القواعد والمفردات والتحدث والاستماع والقراءة والكتابة من خلال سيناريوهات تفاعلية وحياتية وتمارين مدعومة بالذكاء الاصطناعي. طور مهارات التواصل الأساسية للسياقات اليومية والمهنية.",
            english_business_title: "الإنجليزية التجارية",
            english_business_desc: "بناء لغة متخصصة للاجتماعات الدولية والمفاوضات والتقارير والتواصل المهني. اكتسب الثقة في المراسلات الشركات والحوارات التجارية الحرجة.",
            english_phonics_title: "الفونيكس للأطفال",
            english_phonics_desc: "برنامج محو الأمية التفاعلي القائم على الصوت يساعد الأطفال على القراءة بثقة ودقة من خلال الأغاني والألعاب وأدوات النطق المدعومة بالذكاء الاصطناعي.",
            english_speaking_training_title: "المحادثة والتحدث",
            english_speaking_training_desc: "تركيز على ممارسة التحدث في الوقت الحقيقي، والنقاش، والحوار تحت إشراف مدربين طلقاء ومتحدثين أصليين.",
            // French Language Courses
            course_french_title: "دورات اللغة الفرنسية",
            french_beginners_title: "الفرنسية للمبتدئين",
            french_beginners_desc: "اكتسب الفرنسية المحادثية الأساسية والمفردات اليومية من اليوم الأول في بيئة غامرة وداعمة.",
            french_intermediate_title: "الفرنسية المتوسطة",
            french_intermediate_desc: "طور الطلاقة والفهم والوعي الثقافي من خلال الحوارات التفاعلية وتمثيل الأدوار والوسائط الرقمية.",
            french_business_title: "الفرنسية للأعمال",
            french_business_desc: "تعلم التواصل الفرنسي الرسمي للاجتماعات المهنية والعقود والتواصل الدولي، مع دراسات حالة عملية.",
            french_travel_title: "الفرنسية للسفر",
            french_travel_desc: "مهارات لغوية عملية أساسية للتنقل في البيئات الناطقة بالفرنسية بثقة واستقلالية.",
            // German Language Courses
            course_german_title: "دورات اللغة الألمانية",
            german_beginners_title: "الألمانية للمبتدئين",
            german_beginners_desc: "تعلم التعبيرات الرئيسية والقواعد ومهارات المحادثة مع ممارسة معززة بالذكاء الاصطناعي وجلسات محادثة حية.",
            german_intermediate_title: "الألمانية المتوسطة والمتقدمة",
            german_intermediate_desc: "شحذ الطلاقة والكتابة والفهم أثناء استكشاف الأدب الألماني الأصيل والإعلام والثقافة المعاصرة.",
            german_business_title: "الألمانية للأعمال",
            german_business_desc: "اتقن الألمانية المهنية للاجتماعات والوثائق والتفاوض التجاري، تُدرس من خلال تمثيل الأدوار التجارية ومحاكاة العالم الحقيقي.",
            german_everyday_title: "الألمانية للاستخدام اليومي",
            german_everyday_desc: "مصممة للمغتربين والمسافرين، تركز على التفاعلات اليومية والعادات الثقافية والعبارات البقائية للحياة في البلدان الناطقة بالألمانية.",
            // Programming Courses
            course_programming_title: "دورات البرمجة",
            programming_coding_title: "البرمجة للأطفال",
            programming_coding_desc: "دروس ممتعة مدعومة بالذكاء الاصطناعي تقدم حل المشكلات والتفكير المنطقي من خلال الكود، تعزز مبتكري التكنولوجيا المستقبليين.",
            programming_web_title: "أساسيات تطوير الويب",
            programming_web_desc: "ابن موقعك الأول باستخدام HTML وCSS وJavaScript في دورة عملية ومناسبة للمبتدئين.",
            programming_app_game_title: "تطوير التطبيقات والألعاب",
            programming_app_game_desc: "تعلم تصميم وبرمجة التطبيقات والألعاب البسيطة، واتقن أساسيات تصميم الواجهة ومنطق البرمجة.",
            programming_ai_robotics_title: "الذكاء الاصطناعي والروبوتات للمبتدئين",
            programming_ai_robotics_desc: "مقدمة جذابة للذكاء الاصطناعي والروبوتات، تقدم مشاريع عملية وأدوات تعليمية مدمجة بالذكاء الاصطناعي.", about_title: "معلومات عنا",
            about_subtitle: "المحترفين",
            about_subtitle_professionals: "تعلم من",
            about_who_we: "من",
            about_who_we_span: "نحن؟",
            about_who_desc: "مرحبًا بكم في أكاديمية آي سي، بوابتكم إلى التعليم المتطور في اللغة والبرمجة بمساعدة الذكاء الاصطناعي. في أكاديمية آي سي، نؤمن بأن التعليم يجب أن يتجاوز الحدود التقليدية، ويزود المتعلمين من جميع الأعمار بالأدوات اللازمة للازدهار في بيئة عالمية سريعة التطور ومدعومة بالذكاء الاصطناعي.",
            about_who_desc2: "تم تصميم برامجنا بعناية لمساعدة المتعلمين على إتقان التواصل، التفكير النقدي، والطلاقة الرقمية مع تعزيز الكفاءة بين الثقافات والاستعداد المهني.",
            about_why: "لماذا تختار",
            about_why_academy: "أكاديمية آي سي؟",
            about_why_desc_1: "ملاحظات تعليمية مخصصة للتعلم دقيقة بدقيقة، تضمن لكل متعلم توجيهًا فوريًا وقابلًا للتنفيذ.",
            about_why_desc_2: "تقارير تقدم يتم إنشاؤها بالذكاء الاصطناعي، ومسارات تعلم مخصصة، وجدولة مرنة.",
            about_why_desc_3: "دمج بين الخبرة البشرية وابتكارات الذكاء الاصطناعي لتعزيز الكفاءة والدقة والتفاعل.",
            about_why_desc_4: "شهادات دولية وإتاحة ورشات عمل للغة والثقافة لبناء مهارات لغوية وذكاء ثقافي وثقة بالنفس.",
            about_why_desc_5: "فلسفة تركز على المتعلم وتستهدف فوائد ملموسة وطويلة المدى: التقدم المهني، النجاح الأكاديمي، والمواطنة العالمية.",
            about_team: " ",
            about_team_span: "الفريق",
            about_team_desc: "يعد طاقمنا التعليمي والإداري الموقر في أكاديمية آي سي ركيزة أساسية في مؤسستنا. يجلب كل عضو ثروة من المؤهلات والخبرات، مما يضمن حصول طلابنا على أعلى معايير تعليم اللغة. تتجلى تفانيهم وشغفهم لتعزيز تجربة تعلم اللغة في كل جانب من جوانب منهجنا وخدمات الدعم.",
            about_goals: " ",
            about_goals_span: "أهدافنا",
            about_goals_desc: "في أكاديمية آي سي، هدفنا الأساسي هو تمكين طلابنا بالثقة والطلاقة ومهارات اللغة العملية. نحن ملتزمون بإنشاء بيئة داعمة ومشجعة تعزز النمو والكفاءة في تعلم اللغة. مؤسستنا مكرسة لبناء مجتمع يمكن للطلاب فيه أن يزدهروا وينجحوا في رحلة تعلم اللغة.",
            tracks_title: "المسارات",
            tracks_subtitle: "البرامج",
            tracks_subtitle_programs: " ",
            track_juniors_title: "الصغار (4-7 سنوات)",
            track_juniors_desc: "تركّز دورات الناشئين لدينا على التحضير للقبول المدرسي. أنشطة ممتعة ودروس تفاعلية تبني مهارات اللغة لدى المتعلمين الصغار من أجل النجاح الأكاديمي في المستقبل.",
            track_young_learners_title: "المتعلمون الصغار (7-9 سنوات)",
            track_young_learners_desc: "مع التركيز على المهارات اللغوية الأساسية، تركز دوراتنا للمتعلمين الصغار على تطوير مهارات القراءة والكتابة والاستماع والتحدث. نحن ننشئ بيئة داعمة حيث يمكن للأطفال التعبير عن أنفسهم بثقة باللغة المستهدفة.",
            track_teens_title: "برنامج المراهقين (10-18 سنة)",
            track_teens_desc: "يقدم برنامج المراهقين لدينا تعليمًا لغويًا شاملاً للمراهقين. نحن نقدم تجربة تعليمية ديناميكية تغطي جميع جوانب اكتساب اللغة، بما في ذلك القواعد والمفردات والتحدث والكتابة والفهم الثقافي.",
            track_adults_title: "البالغون (20-40 سنة)",
            track_adults_desc: "نقدم دورات متقدمة ومتنوعة للبالغين، تلبي أهداف واهتمامات لغوية مختلفة. سواء كنت ترغب في تحسين مهارات المحادثة والاستماع، أو التحضير للامتحانات المعترف بها دوليًا، أو التعلم من مدربين أجانب ومعتمدين، لدينا الدورة المناسبة لك.",
            team_title: "الفريق",
            team_subtitle: "فريقنا",
            team_subtitle_team: " ",
            // Team Section
            leadership_administration: "القيادة والإدارة",
            english_language_department: "قسم اللغة الإنجليزية",
            early_literacy_phonics: "محو الأمية المبكرة والفونيكس",
            german_language_department: "قسم اللغة الألمانية",
            french_language_department: "قسم اللغة الفرنسية",
            programming_department: "قسم البرمجة",
            // Leadership & Administration
            nadia_salama_name: "نادية سلامة",
            nadia_salama_title: "رئيس القسم",
            nadia_salama_desc: "أكاديمية آي سي هي مركز للتعليم التقدمي والتدريس الإبداعي. أنا ملتزمة بمواكبة معلمينا للاتجاهات الأكاديمية العالمية من خلال التطوير المهني المنتظم، والندوات مثل NileTESOL، والممارسات المدفوعة بالسوق — مما يضمن تجربة الطلاب تعليمًا عالميًا جاهزًا للمستقبل.",
            dalal_hana_name: "دلال حنا",
            dalal_hana_title: "مسؤولة مالية",
            dalal_hana_desc: "في أكاديمية آي سي، التميز التشغيلي والابتكار التعليمي لهما الأولوية. دوري يضمن إدارة مالية سلسة، مما يحافظ على بيئة يزدهر فيها الطلاب في محيط مجهز جيدًا وخالٍ من التوتر.",
            walaa_shehata_name: "ولاء شحاتة",
            walaa_shehata_title: "مسؤولة الموارد البشرية",
            walaa_shehata_desc: "أنا فخورة بكوني جزءًا من أكاديمية تعزز ثقافة النمو والهدف. من خلال رعاية فرق ديناميكية ومتحمسة، أساعد في تشكيل مجتمع مهني يتفوق فيه المعلمون ويتلقى الطلاب تعليمًا ملهمًا وعالي التأثير.",
            hassan_name: "حسن",
            hassan_title: "مسؤول التسويق",
            hassan_desc: "مهمتي في أكاديمية آي سي هي نقل رؤيتنا وأخلاقياتنا إلى جمهور أوسع. من خلال التسويق الاستراتيجي، أربط العائلات بالفرص التي تقدمها أكاديميتنا، مما يجعل الطلاب يشعرون بالفخر والتمكين وجزءًا من مجتمع تعليمي متطور.",
            hania_name: "هانيا",
            hania_title: "مسؤولة إدارية",
            hania_desc: "الأكاديمية تشبه العائلة الثانية، حيث كل التفاصيل مهمة. أحافظ على بيئة ترحيبية ومنظمة حتى يشعر الطلاب بالأمان والتركيز والتشجيع منذ لحظة دخولهم من أبوابنا.",
            // English Language Department
            wafa_sharsheer_name: "وفاء شرشير",
            wafa_sharsheer_title: "متحدثة أصلية بالإنجليزية",
            wafa_sharsheer_desc: "أؤمن أن تعلم اللغة يجب أن يكون غامرًا وحيويًا. في أكاديمية آي سي، أصمم دروسًا تفاعلية وأصيلة تبني ثقة الطلاب في استخدام الإنجليزية بشكل طبيعي في الإعدادات اليومية والأكاديمية.",
            sofia_g_name: "صوفيا جي",
            sofia_g_title: "مدربة الإنجليزية التجارية",
            sofia_g_desc: "تتيح لي أكاديمية آي سي تمكين المتعلمين بمهارات التواصل الموجهة نحو الحياة المهنية. أرشد الطلاب للتحدث والكتابة بوضوح وثقة واحترافية — خاصة في البيئات التجارية التنافسية.",
            israa_al_sheimy_name: "إسراء الشيمي",
            israa_al_sheimy_title: "مدربة ESL",
            israa_al_sheimy_desc: "تتميز هذه الأكاديمية بتقديرها لإنجازات الطلاب ونمو المعلمين. أشجع المتعلمين على المخاطرة، والتعبير عن أنفسهم، والعثور على المتعة في رحلة إتقان الإنجليزية.",
            magy_adel_name: "ماجي عادل",
            magy_adel_title: "مدربة ESL",
            magy_adel_desc: "الثقافة الداعمة والموارد الغنية هنا تلهمني لإنشاء دروس ديناميكية وجذابة. أقيس النجاح في التقدم الصغير والثابت الذي يحرزه طلابي وهم ينمون ليصبحوا مستخدمين واثقين للغة.",
            // Early Literacy & Phonics
            nourhan_tarek_name: "نورهان طارق",
            nourhan_tarek_title: "مدربة الفونيكس والإنجليزية العامة",
            nourhan_tarek_desc: "جذبتني أكاديمية آي سي باحتضانها للأدوات الابتكارية وطرق محو الأمية. أشعل حب القراءة في المتعلمين الصغار من خلال مزج المتعة والحركة وتقنيات الفونيكس التفاعلية.",
            // German Language Department
            amira_name: "أميرة",
            amira_title: "مدربة اللغة الألمانية",
            amira_desc: "إعداد الأكاديمية متعدد الثقافات والغني باللغات يحفزني لجعل الألمانية متاحة وممتعة. أعزز الفضول والإبداع والتفكير النقدي في كل درس.",
            nawal_shaaban_name: "نوال شعبان",
            nawal_shaaban_title: "مدربة اللغة الألمانية",
            nawal_shaaban_desc: "في أكاديمية آي سي، التحسين المستمر هو أسلوب حياة. أعكس ذلك من خلال إنشاء فصول دراسية ينمو فيها الطلاب في المهارة اللغوية والتقدير الثقافي.",
            // French Language Department
            mayada_mahmoud_name: "ميادة محمود",
            mayada_mahmoud_title: "مدربة اللغة الفرنسية",
            mayada_mahmoud_desc: "جذبتني الأجواء النابضة بالحياة والداعمة في الأكاديمية. أصمم دروسًا يشعر فيها الطلاب بالأمان للاستكشاف، وارتكاب الأخطاء، وتطوير مهاراتهم الفرنسية بحماس.",
            karma_s_name: "كارما إس",
            karma_s_title: "مدربة اللغة الفرنسية",
            karma_s_desc: "تقدر أكاديمية آي سي الابتكار والتدريس المتمحور حول الطالب. دروسي تدمج الموسيقى، والرواية، والإبداع، مما يضمن أن تصبح الفرنسية ليست مجرد مادة، بل تجربة يعتز بها الطلاب.",
            // Programming Department
            sarah_name: "سارة",
            sarah_title: "مدربة البرمجة",
            sarah_desc: "في أكاديمية آي سي، نؤمن بتجهيز الطلاب لمستقبل رقمي. أقدم دورات برمجة عملية ذات صلة بالسوق، مما يضمن تطوير المتعلمين لمهارات حاسمة لعالم اليوم المدفوع بالتكنولوجيا.",
            features_title: "المميزات",
            features_subtitle: "الميزات والمرونة",
            features_subtitle_features: " ",
            feature_workshops_title: "ورش العمل",
            feature_workshops_desc: "ورش عمل لتعليم اللغة والبرمجة والثقافة لتطوير كفاءات شاملة تطبيقية، تمكّن المتعلمين من اكتساب مهارات عملية للنجاح العالمي.",
            feature_teacher_title: "تدريب المعلمين",
            feature_teacher_desc: "يُزوّد المعلمين الطموحين ومن هم على رأس العمل بأحدث منهجيات تعليم اللغة الإنجليزية، واستراتيجيات إدارة الصف، وتعليم الصوتيات، وحلول التدريس المعتمدة على الذكاء الاصطناعي.",
            feature_learning_title: "تعليم مرن",
            feature_learning_desc: "اختر من بين الدورات عبر الإنترنت وغير المتصلة مع جدولة مرنة. توفر أدواتنا المدعومة بالذكاء الاصطناعي مسارات تعلم شخصية وتعليقات في الوقت الفعلي، مما يتيح لك التعلم بالسرعة التي تناسبك.",
            feature_adv_title: "الكتابة المتقدمة",
            feature_adv_desc: "تدريب متخصص في الكتابة الأكاديمية والتجارية والإبداعية مع تعليقات مدعومة بالذكاء الاصطناعي لتحسين النغمة والتماسك والدقة.",
            reviews_title: "التقيمات",
            reviews_subtitle: "العملاء",
            reviews_subtitle_reviews: "تقيمات",
            location_title: "الموقع",
            location_subtitle: "موقعنا",
            location_subtitle_location: " ",
            stats_title: "الأرقام",
            stats_subtitle: "أرقامنا",
            stats_subtitle_numbers: " ",
            branches: "فروع",
            students: "طلاب",
            certified_teachers: "معلمين معتمدين",
            experienced_years: "سنوات خبرة",
            events: "فعاليات",
            footer_about_desc: "في إي سي أكاديمي، يقدّم معلمونا وموظفونا المتحمسون خبراتهم الواسعة لتهيئة بيئة تعليم لغات محفزة وغامرة، تعزز نجاح الطلاب.",
            footer_social_title: "وسائل التواصل الاجتماعي",
            footer_subscribe_title: "اشترك في نشرتنا الإخبارية",
            footer_subscribe_desc: "انضم إلى إي سي أكاديمي وأعد تعريف مسارك التعليمي. سواء كان هدفك هو التقدم المهني، أو التميز الأكاديمي، أو التطوير الشخصي، فنحن هنا لتمكينك بالمهارات التي تهم في عالم الغد.",
            footer_subscribe_placeholder: "أدخل عنوان بريدك الإلكتروني",
            footer_subscribe_button: "اشترك",
            footer_quick_links_title: "روابط سريعة",
            footer_course_english: "الإنجليزية",
            footer_course_french: "الفرنسية",
            footer_course_german: "الألمانية",
            footer_course_programming: "البرمجة",
            footer_who_we: "من نحن؟",
            footer_why_choose: "لماذا تختار أكاديمية آي سي؟",
            footer_team: "الفريق",
            footer_goals: "أهدافنا",
            footer_contact_title: "تواصل معنا",
            footer_contact_address: "٢٦ عبد العظيم الغلمي، مكرم عبيد، مدينة نصر.",
            footer_copyright: "© ٢٠٢٥ م. شريف علاء، م. سعد الدين أحمد، و م. حسام حسن. جميع الحقوق محفوظة.",
            meta_description: "تقدم إي سي أكاديمي دورات متخصصة في اللغات والبرمجة بقيادة خبراء، تشمل الإنجليزية، الفرنسية والمزيد. انضم إلينا في مدينة نصر لتجربة تعليمية مدعومة بالذكاء الاصطناعي.",
            meta_keywords: "أكاديمية آي سي، دورات لغوية، دورات برمجة، دورات إنجليزية، دورات فرنسية، دورات ألمانية، دورات روبوتات، مدينة نصر، تعليم، تعلم"
        }
    };

    const langButtons = document.querySelectorAll('.lang-btn');
    const translatableElements = document.querySelectorAll('.translatable');
    const htmlElement = document.documentElement;
    const emailInput = document.querySelector('input[type="email"]');
    const metaDescription = document.querySelector('meta[name="description"]');
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    const titleElement = document.querySelector('title');
    const metaAuthor = document.querySelector('meta[name="author"]');
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');

    // Function to update content based on selected language
    function updateContent(lang) {
        translatableElements.forEach(element => {
            const key = element.getAttribute('data-key');
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

        // Update title
        if (titleElement && translations[lang].title) {
            titleElement.textContent = `${translations[lang].title}`;
        }

        // Update meta tags for SEO
        if (metaDescription && translations[lang].meta_description) {
            metaDescription.setAttribute('content', translations[lang].meta_description);
        }
        if (metaKeywords && translations[lang].meta_keywords) {
            metaKeywords.setAttribute('content', translations[lang].meta_keywords);
        }

        if (metaAuthor && translations[lang].footer_copyright) {
            metaAuthor.setAttribute('content', translations[lang].footer_copyright);
        }

        // Update html email input placeholder
        if (emailInput) {
            emailInput.setAttribute('placeholder', translations[lang].footer_subscribe_placeholder);
        }

        // Update HTML lang attribute and direction
        htmlElement.setAttribute('lang', lang === 'ar' ? 'ar' : 'en');
        htmlElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

        // Update button states
        langButtons.forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });
    }

    // Load saved language or default to English
    const savedLang = localStorage.getItem('language') || 'en';
    updateContent(savedLang);

    // Handle language button clicks
    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.getAttribute('data-lang');
            updateContent(lang);
            localStorage.setItem('language', lang);
        });
    });
});