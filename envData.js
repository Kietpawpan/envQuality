// Data for the charts (replace with dynamic data from an API)
        const labels = ['ขอนแก่น', 'ร้อยเอ็ด', 'กาฬสินธุ์', 'มหาสารคาม', 'หนองบัวลำภู'];
        const waterQualityData = [90, 65, 80, 77, 72,]; // Placeholder for quality scores
		const percentMajor = [94, 75, 75, 67, 50];

// Solid waste generation for each province // 2567 data from EPO10 report.
		const solidWasteKH = 1389.72;
		const solidWasteRE = 863.56;	
		const solidWasteKS = 529.86;	
		const solidWasteMK = 594.21;		
		const solidWasteNB = 274.26;
        const solidWasteData = [solidWasteKH, solidWasteRE, solidWasteKS, solidWasteMK, solidWasteNB]; //Solid waste generation for each province (ton/day)
		
// Good solid waste management. Reuse + Proper Disposal
        const solidWasteGoodMgtKH = 549.24+567.98;
        const solidWasteGoodMgtRE = 540.70+102.5; 
        const solidWasteGoodMgtKS = 233.41+200;
        const solidWasteGoodMgtMK = 363.88+0;
        const solidWasteGoodMgtNB = 123.79+64.69;
		const solidGoodData = [solidWasteGoodMgtKH,solidWasteGoodMgtRE,solidWasteGoodMgtKS,solidWasteGoodMgtMK,solidWasteGoodMgtNB]; // Proper solid waste management (ton/day)
		
// hazardous waste is 0.15% of solid waste for each province		
        const hazardousWasteData = [0.015*solidWasteData[0], 0.015*solidWasteData[1], 0.015*solidWasteData[2], 0.015*solidWasteData[3], 0.015*solidWasteData[4]];
		const hazardousWasteGoodKH = 20.48;
		const hazardousWasteGoodRE = 20;
		const hazardousWasteGoodKS = 15.35; // More may be from e-waste!!!
		const hazardousWasteGoodMK = 16;
		const hazardousWasteGoodNB = 18;
		
		const hazardousWasteGood = [hazardousWasteGoodKH, hazardousWasteGoodRE,hazardousWasteGoodKS,hazardousWasteGoodMK,hazardousWasteGoodNB]; // Fraction of proper hazardous waste management
		const hazardousWasteGoodFraction = 0.5; // Target 50%
        const noiseData = [69, 68, 65, 50, 60]; // dBA
        const carbonEmissionData = [6634801, 1657363, 1723010, 1413234, 902467]; // Total (tonCo2eq)
        const carbonEmissionReductionData = [7795, 7328, 5534, 4959, 0]; // Reduction (tonCo2eq)
		const carbonEmissionTarget = [0.21, 0.21, 0.21, 0.21, 0.21]; // Target 21% from the base year
		const targets = [61, 37.5, "ร้อยละ 80", "ร้อยละ 50", 70, "ร้อยละ 21 จากปีฐาน"]; // Target note in the tables.
		const targetsText = ["61 (พอใช้)", "37.5 μg/m³", "ร้อยละ 80", "ร้อยละ 50", "70 dBA", "ร้อยละ 21 จากปีฐาน"]; // Target note in the tables.
		const Wtargets = 0.8; // 80% solid waste are expected to be properly managed.
	    const pm25target = 37.5; // ppm
	    const population = [876082+908559, 639009+652122, 479874+492227, 481709+490296, 253342+254983]; // ppm
		
		// PM2.5 Data from http://air4thai.pcd.go.th/webV3/#/History
		//2567
		const pm25KhonKaen67 = (26+44+42+43+22+16+15+16+15+23+24+32)/12; // Yearly average PM2.5 in 2567
		const pm25RoiEt67 = 37.5; // no data
		const pm25Kalasin67 = (28+51+55+65+29+17+16+18+19+25+28+31)/12;
		const pm25Mahasalakham67 = 37.5; // no data
		const pm25Nongbuolampu67 = 37.5; // no data
		//2568
		const pm25Khonkaen68 = (47+35+46+37+23)/5;
		const pm25RoiEt68 = (35+24+39+38+22)/5;
		const pm25Kalasin68 = (47+35+45+39+24)/5;
		const pm25Mahasalakham68 = (39+27+37+30+15)/5;
		const pm25Nongbuolampu68 = (39+27+39+24+17)/5;
		
		const pm25Limit = [pm25KhonKaen67, pm25RoiEt67, pm25Kalasin67, pm25Mahasalakham67, pm25Nongbuolampu67];	
		const pm25Data = [pm25Khonkaen68, pm25RoiEt68, pm25Kalasin68, pm25Mahasalakham68, pm25Nongbuolampu68]; //Average PM2.5 all year round (ppm)
