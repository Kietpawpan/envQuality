   // Data for the charts (replace with dynamic data from an API)
        const labels = ['ขอนแก่น', 'ร้อยเอ็ด', 'หนองบัวลำภู', 'กาฬสินธ์', 'มหาสารคาม'];
        const waterQualityData = [90, 71, 90, 70, 71]; // Placeholder for quality scores
        const pm25Data = [15, 30, 50, 6, 9]; //Average PM2.5 all year round (ppm)
        const solidWasteData = [690, 122, 300, 670, 690]; //Solid waste generation for each province (ton/day)
		const solidGoodData = [400, 50, 100, 200, 150]; // Proper solid waste management (ton/day)
        const hazardousWasteData = [0.015*solidWasteData[0], 0.015*solidWasteData[1], 0.015*solidWasteData[2], 0.015*solidWasteData[3], 0.015*solidWasteData[4]];
		const hazardousWasteGood = [0.4, 0.3, 0.2, 0.5, 0.1]; // Fraction of proper hazardous waste management
		const hazardousWasteGoodFraction = 0.5; // Target 50%
        const noiseData = [69, 68, 60, 65, 50]; // dBA
        const carbonEmissionData = [6634801, 1657363, 902467,  1723010, 1413234]; // Total (tonCo2eq)
        const carbonEmissionReductionData = [7795, 7328, 0,  5534, 4959]; // Reduction (tonCo2eq)
		const carbonEmissionTarget = [0.21, 0.21, 0.21, 0.21, 0.21]; // Target 21% from the base year
		const targets = [61, 37, "ร้อยละ 80", 50, 70, "ร้อยละ 21 จากปีฐาน"]; // Target note in the tables.
		const Wtargets = 0.8; // 80% solid waste are expected to be properly managed.
/*
คะแนน WQI	การประเมินคุณภาพน้ำ		เทียบได้กับแหล่งน้ำผิวดินประเภท
91 - 100	ดีมาก (Excellent)		ประเภท 1
71 - 90		ดี (Good)			ประเภท 2
61 - 70		พอใช้ (Fair)			ประเภท 3
31 - 60		เสื่อมโทรม (Poor)		ประเภท 4
0 - 30		เสื่อมโทรมมาก (Very Poor) ประเภท 5
*/
 