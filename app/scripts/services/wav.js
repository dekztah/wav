'use strict';

angular.module('wavApp').factory('logo3d', function ($window) {
    var THREE = $window.THREE;
    var object = new THREE.Object3D();

    var shapes = [];

    // W
    var shape1 = new THREE.Shape();

    shape1.moveTo(334.0325,311.9874);
    shape1.bezierCurveTo(336.7017,311.9874,339.1104,310.7206,340.4999,308.8129);
    shape1.bezierCurveTo(341.8414,310.7206,344.2474,311.9874,346.9679,311.9874);
    shape1.lineTo(361.0325,311.9874);
    shape1.bezierCurveTo(365.4982,311.9874,368.9375,308.5632,368.9375,304.2196);
    shape1.lineTo(368.9375,273.5646);
    shape1.bezierCurveTo(368.9375,272.7657,368.2665,272.0625,367.4999,272.0625);
    shape1.bezierCurveTo(366.6854,272.0625,366.0625,272.7657,366.0625,273.5646);
    shape1.lineTo(366.0625,304.2196);
    shape1.bezierCurveTo(366.0625,306.9156,363.8043,309.1124,361.0325,309.1124);
    shape1.lineTo(346.9679,309.1124);
    shape1.bezierCurveTo(344.196,309.1124,341.9375,306.9156,341.9375,304.2196);
    shape1.lineTo(341.9375,273.5646);
    shape1.bezierCurveTo(341.9375,272.7657,341.2665,272.0625,340.4999,272.0625);
    shape1.bezierCurveTo(339.6854,272.0625,339.0625,272.7657,339.0625,273.5646);
    shape1.lineTo(339.0625,304.2196);
    shape1.bezierCurveTo(339.0625,306.9156,336.8043,309.1124,334.0325,309.1124);
    shape1.lineTo(319.9679,309.1124);
    shape1.bezierCurveTo(317.196,309.1124,314.9375,306.9156,314.9375,304.2196);
    shape1.lineTo(314.9375,273.5646);
    shape1.bezierCurveTo(314.9375,272.7657,314.2665,272.0625,313.4999,272.0625);
    shape1.bezierCurveTo(312.6854,272.0625,312.0625,272.7657,312.0625,273.5646);
    shape1.lineTo(312.0625,304.2196);
    shape1.bezierCurveTo(312.0625,308.5632,315.5021,311.9874,319.9679,311.9874);
    shape1.lineTo(334.0325,311.9874);

    shapes.push(shape1);

    // A
    var shape2 = new THREE.Shape();

    shape2.moveTo(400.0739,272.0126);
    shape2.bezierCurveTo(404.5051,272.0126,407.9375,275.4393,407.9375,279.7962);
    shape2.lineTo(407.9375,310.4297);
    shape2.bezierCurveTo(407.9375,311.2841,407.2665,311.9375,406.4999,311.9375);
    shape2.bezierCurveTo(405.7333,311.9375,405.0625,311.2841,405.0625,310.4297);
    shape2.lineTo(405.0625,292.9375);
    shape2.lineTo(374.9126,292.9375);
    shape2.lineTo(374.9126,310.4297);
    shape2.bezierCurveTo(374.9126,311.2841,374.2416,311.9375,373.475,311.9375);
    shape2.bezierCurveTo(372.7084,311.9375,372.0376,311.2841,372.0376,310.4297);
    shape2.lineTo(372.0376,279.7962);
    shape2.bezierCurveTo(372.0376,275.4393,375.4728,272.0126,379.9041,272.0126);
    shape2.lineTo(400.0739,272.0126);

    var path2 = new THREE.Path();

    path2.moveTo(374.9126,290.0625);
    path2.lineTo(405.0625,290.0625);
    path2.lineTo(405.0625,279.7962);
    path2.bezierCurveTo(405.0625,277.0419,402.8243,274.8876,400.0739,274.8876);
    path2.lineTo(379.9041,274.8876);
    path2.bezierCurveTo(377.1537,274.8876,374.9126,277.0419,374.9126,279.7962);
    path2.lineTo(374.9126,290.0625);

    shape2.holes.push(path2);

    shapes.push(shape2);

    // V
    var shape3 = new THREE.Shape();

    shape3.moveTo(441.5518,272.7852);
    shape3.bezierCurveTo(430.7011,300.6368,428.451,306.3872,428.451,306.3872);
    shape3.bezierCurveTo(428.451,306.3872,426.1509,300.6368,414.9002,272.7351);
    shape3.bezierCurveTo(414.6002,271.9851,413.7001,271.6351,412.9501,271.9351);
    shape3.bezierCurveTo(412.2,272.2351,411.8,273.0851,412.1,273.8852);
    shape3.lineTo(427.0509,310.9875);
    shape3.bezierCurveTo(427.2509,311.5875,427.801,311.9375,428.451,311.9375);
    shape3.bezierCurveTo(429.051,311.9375,429.6011,311.5875,429.8011,310.9875);
    shape3.lineTo(444.352,273.8852);
    shape3.bezierCurveTo(444.652,273.0851,444.252,272.2351,443.5019,271.9351);
    shape3.bezierCurveTo(442.7019,271.6351,441.8518,271.9851,441.5518,272.7852);

    shapes.push(shape3);

    // E
    var shape4 = new THREE.Shape();

    shape4.moveTo(478.9893,309.1124);
    shape4.bezierCurveTo(479.7893,309.1124,480.4894,309.7834,480.4894,310.55);
    shape4.bezierCurveTo(480.4894,311.3646,479.7893,311.9874,478.9893,311.9874);
    shape4.lineTo(454.8378,311.9874);
    shape4.bezierCurveTo(450.4875,311.9874,447.0625,308.553,447.0625,304.1284);
    shape4.lineTo(447.0625,279.8121);
    shape4.bezierCurveTo(447.0625,275.4406,450.4875,272.0126,454.8378,272.0126);
    shape4.lineTo(478.9893,272.0126);
    shape4.bezierCurveTo(479.7893,272.0126,480.4394,272.6357,480.4394,273.4502);
    shape4.bezierCurveTo(480.4394,274.2168,479.7893,274.8876,478.9893,274.8876);
    shape4.lineTo(454.8378,274.8876);
    shape4.bezierCurveTo(452.1376,274.8876,449.9375,277.0987,449.9375,279.8121);
    shape4.lineTo(449.9375,290.0625);
    shape4.lineTo(478.3392,290.0625);
    shape4.bezierCurveTo(479.1893,290.0625,479.8393,290.7335,479.8393,291.5001);
    shape4.bezierCurveTo(479.8393,292.2667,479.1893,292.9375,478.3392,292.9375);
    shape4.lineTo(449.9375,292.9375);
    shape4.lineTo(449.9375,304.1284);
    shape4.bezierCurveTo(449.9375,306.8747,452.1376,309.1124,454.8378,309.1124);
    shape4.lineTo(478.9893,309.1124);

    shapes.push(shape4);

    // T
    var shape5 = new THREE.Shape();

    shape5.moveTo(486.1615,272.0126);
    shape5.bezierCurveTo(485.3115,272.0126,484.6614,272.6357,484.6614,273.4502);
    shape5.bezierCurveTo(484.6614,274.2168,485.3115,274.8876,486.1615,274.8876);
    shape5.lineTo(502.0625,274.8876);
    shape5.lineTo(502.0625,310.4356);
    shape5.bezierCurveTo(502.0625,311.2867,502.6959,311.9375,503.5241,311.9375);
    shape5.bezierCurveTo(504.3036,311.9375,504.9375,311.2867,504.9375,310.4356);
    shape5.lineTo(504.9375,274.8876);
    shape5.lineTo(520.8385,274.8876);
    shape5.bezierCurveTo(521.6885,274.8876,522.3386,274.2168,522.3386,273.4502);
    shape5.bezierCurveTo(522.3386,272.6357,521.6885,272.0126,520.8385,272.0126);
    shape5.lineTo(486.1615,272.0126);

    shapes.push(shape5);

    // R
    var shape6 = new THREE.Shape();

    shape6.moveTo(553.2229,297.9375);
    shape6.bezierCurveTo(555.8925,297.9375,558.0625,300.1302,558.0625,302.8205);
    shape6.lineTo(558.0625,310.4429);
    shape6.bezierCurveTo(558.0625,311.2899,558.7333,311.9375,559.4999,311.9375);
    shape6.bezierCurveTo(560.3144,311.9375,560.9375,311.2899,560.9375,310.4429);
    shape6.lineTo(560.9375,302.8205);
    shape6.bezierCurveTo(560.9375,300.3793,559.8832,298.2371,558.2062,296.8355);
    shape6.bezierCurveTo(560.4754,295.494,561.9375,292.9892,561.9375,290.1069);
    shape6.lineTo(561.9375,279.8416);
    shape6.bezierCurveTo(561.9375,275.4423,558.457,272.0126,554.0683,272.0126);
    shape6.lineTo(532.8812,272.0126);
    shape6.bezierCurveTo(528.4924,272.0126,525.0625,275.4423,525.0625,279.8416);
    shape6.lineTo(525.0625,310.4429);
    shape6.bezierCurveTo(525.0625,311.2899,525.6854,311.9375,526.4999,311.9375);
    shape6.bezierCurveTo(527.2665,311.9375,527.9375,311.2899,527.9375,310.4429);
    shape6.bezierCurveTo(527.9375,304.6638,527.9375,297.9375,527.9375,297.9375);
    shape6.lineTo(553.2612,297.9375);
    shape6.lineTo(553.2229,297.9375);

    var path6 = new THREE.Path();

    path6.moveTo(527.9375,295.0625);
    path6.bezierCurveTo(527.9375,295.0625,527.9375,288.5898,527.9375,279.8416);
    path6.bezierCurveTo(527.9375,277.111,530.1571,274.8876,532.8812,274.8876);
    path6.lineTo(554.0683,274.8876);
    path6.bezierCurveTo(556.8428,274.8876,559.0625,277.111,559.0625,279.8416);
    path6.lineTo(559.0625,290.1069);
    path6.bezierCurveTo(559.0625,292.8375,556.8428,295.0625,554.0683,295.0625);
    path6.lineTo(527.9375,295.0625);

    shape6.holes.push(path6);

    shapes.push(shape6);

    // I
    var shape7 = new THREE.Shape();

    shape7.moveTo(566.0376,273.5527);
    shape7.bezierCurveTo(566.0376,272.7052,566.6605,272.0625,567.475,272.0625);
    shape7.bezierCurveTo(568.2416,272.0625,568.9126,272.7052,568.9126,273.5527);
    shape7.lineTo(568.9126,310.442);
    shape7.bezierCurveTo(568.9126,311.2895,568.2416,311.9375,567.475,311.9375);
    shape7.bezierCurveTo(566.6605,311.9375,566.0376,311.2895,566.0376,310.442);
    shape7.lineTo(566.0376,273.5527);

    shapes.push(shape7);

    // P
    var shape8 = new THREE.Shape();

    shape8.moveTo(580.8607,272.0126);
    shape8.bezierCurveTo(576.468,272.0126,573.0376,275.4337,573.0376,279.7321);
    shape8.lineTo(573.0376,310.3734);
    shape8.bezierCurveTo(573.0376,311.2597,573.6605,311.9375,574.475,311.9375);
    shape8.bezierCurveTo(575.2416,311.9375,575.9126,311.2597,575.9126,310.3734);
    shape8.bezierCurveTo(575.9126,304.3252,575.9126,300.9375,575.9126,300.9375);
    shape8.bezierCurveTo(575.9126,300.9375,580.2043,300.9375,602.0671,300.9375);
    shape8.bezierCurveTo(606.4598,300.9375,609.9375,297.519,609.9375,293.2205);
    shape8.lineTo(609.9375,279.7321);
    shape8.bezierCurveTo(609.9375,275.4337,606.4598,272.0126,602.0671,272.0126);
    shape8.lineTo(580.8607,272.0126);

    var path8 = new THREE.Path();

    path8.moveTo(575.9126,279.7321);
    path8.bezierCurveTo(575.9126,277.0641,578.1342,274.8876,580.8607,274.8876);
    path8.lineTo(602.0671,274.8876);
    path8.bezierCurveTo(604.8441,274.8876,607.0625,277.0641,607.0625,279.7321);
    path8.lineTo(607.0625,293.2205);
    path8.bezierCurveTo(607.0625,295.8885,604.8441,298.0625,602.0671,298.0625);
    path8.bezierCurveTo(580.2043,298.0625,575.9126,298.0625,575.9126,298.0625);
    path8.bezierCurveTo(575.9126,298.0625,575.9126,288.2797,575.9126,279.7321);

    shape8.holes.push(path8);

    shapes.push(shape8);

    // A
    var shape9 = new THREE.Shape();

    shape9.moveTo(658.0739,272.0126);
    shape9.bezierCurveTo(662.5051,272.0126,665.9375,275.4393,665.9375,279.7962);
    shape9.lineTo(665.9375,310.4297);
    shape9.bezierCurveTo(665.9375,311.2841,665.2665,311.9375,664.4999,311.9375);
    shape9.bezierCurveTo(663.7333,311.9375,663.0625,311.2841,663.0625,310.4297);
    shape9.lineTo(663.0625,292.9375);
    shape9.lineTo(632.9126,292.9375);
    shape9.lineTo(632.9126,310.4297);
    shape9.bezierCurveTo(632.9126,311.2841,632.2416,311.9375,631.475,311.9375);
    shape9.bezierCurveTo(630.7084,311.9375,630.0376,311.2841,630.0376,310.4297);
    shape9.lineTo(630.0376,279.7962);
    shape9.bezierCurveTo(630.0376,275.4393,633.4728,272.0126,637.9041,272.0126);
    shape9.lineTo(658.0739,272.0126);

    var path9 = new THREE.Path();

    path9.moveTo(632.9126,290.0625);
    path9.lineTo(663.0625,290.0625);
    path9.lineTo(663.0625,279.7962);
    path9.bezierCurveTo(663.0625,277.0419,660.8243,274.8876,658.0739,274.8876);
    path9.lineTo(637.9041,274.8876);
    path9.bezierCurveTo(635.1537,274.8876,632.9126,277.0419,632.9126,279.7962);
    path9.lineTo(632.9126,290.0625);

    shape9.holes.push(path9);

    shapes.push(shape9);

    // U
    var shape10 = new THREE.Shape();

    shape10.moveTo(705.0625,304.1621);
    shape10.bezierCurveTo(705.0625,306.9123,702.8508,309.1124,700.1383,309.1124);
    shape10.lineTo(677.8856,309.1124);
    shape10.bezierCurveTo(675.1228,309.1124,672.9126,306.9123,672.9126,304.1621);
    shape10.lineTo(672.9126,273.5602);
    shape10.bezierCurveTo(672.9126,272.7102,672.2787,272.0625,671.4992,272.0625);
    shape10.bezierCurveTo(670.671,272.0625,670.0376,272.7102,670.0376,273.5602);
    shape10.lineTo(670.0376,304.1621);
    shape10.bezierCurveTo(670.0376,308.5124,673.5154,311.9874,677.8856,311.9874);
    shape10.lineTo(700.1383,311.9874);
    shape10.bezierCurveTo(704.5085,311.9874,707.9375,308.5124,707.9375,304.1621);
    shape10.lineTo(707.9375,273.5602);
    shape10.bezierCurveTo(707.9375,272.7102,707.3144,272.0625,706.4999,272.0625);
    shape10.bezierCurveTo(705.7333,272.0625,705.0625,272.7102,705.0625,273.5602);
    shape10.lineTo(705.0625,304.1621);

    shapes.push(shape10);

    // D
    var shape11 = new THREE.Shape();

    shape11.moveTo(714.475,272.0126);
    shape11.lineTo(742.1176,272.0126);
    shape11.bezierCurveTo(746.5103,272.0126,749.9375,275.446,749.9375,279.8242);
    shape11.lineTo(749.9375,304.1807);
    shape11.bezierCurveTo(749.9375,308.5588,746.5103,311.9874,742.1176,311.9874);
    shape11.lineTo(714.475,311.9874);
    shape11.bezierCurveTo(713.6605,311.9874,713.0376,311.3646,713.0376,310.55);
    shape11.lineTo(713.0376,273.4502);
    shape11.bezierCurveTo(713.0376,273.0669,713.1813,272.6836,713.4688,272.4441);
    shape11.bezierCurveTo(713.7084,272.1566,714.0917,272.0126,714.475,272.0126);

    var path11 = new THREE.Path();

    path11.moveTo(742.1176,274.8876);
    path11.bezierCurveTo(721.0627,274.8876,715.9126,274.8876,715.9126,274.8876);
    path11.lineTo(715.9126,309.1124);
    path11.bezierCurveTo(715.9126,309.1124,721.0627,309.1124,742.1176,309.1124);
    path11.bezierCurveTo(744.8441,309.1124,747.0625,306.8982,747.0625,304.1807);
    path11.lineTo(747.0625,279.8242);
    path11.bezierCurveTo(747.0625,277.1067,744.8441,274.8876,742.1176,274.8876);

    shape11.holes.push(path11);

    shapes.push(shape11);

    // I
    var shape12 = new THREE.Shape();

    shape12.moveTo(754.0376,273.5527);
    shape12.bezierCurveTo(754.0376,272.7052,754.6605,272.0625,755.475,272.0625);
    shape12.bezierCurveTo(756.2416,272.0625,756.9126,272.7052,756.9126,273.5527);
    shape12.lineTo(756.9126,310.442);
    shape12.bezierCurveTo(756.9126,311.2895,756.2416,311.9375,755.475,311.9375);
    shape12.bezierCurveTo(754.6605,311.9375,754.0376,311.2895,754.0376,310.442);
    shape12.lineTo(754.0376,273.5527);

    shapes.push(shape12);

    // O
    var shape13 = new THREE.Shape();

    shape13.moveTo(768.8787,272.0126);
    shape13.bezierCurveTo(764.47,272.0126,761.0376,275.446,761.0376,279.8242);
    shape13.lineTo(761.0376,304.1807);
    shape13.bezierCurveTo(761.0376,308.5588,764.47,311.9874,768.8787,311.9874);
    shape13.lineTo(793.1011,311.9874);
    shape13.bezierCurveTo(797.5098,311.9874,800.9375,308.5588,800.9375,304.1807);
    shape13.lineTo(800.9375,279.8242);
    shape13.bezierCurveTo(800.9375,275.446,797.5098,272.0126,793.1011,272.0126);
    shape13.lineTo(768.8787,272.0126);

    var path13 = new THREE.Path();

    path13.moveTo(763.9126,279.8242);
    path13.bezierCurveTo(763.9126,277.1067,766.1423,274.8876,768.8787,274.8876);
    path13.lineTo(793.1011,274.8876);
    path13.bezierCurveTo(795.8375,274.8876,798.0625,277.1067,798.0625,279.8242);
    path13.lineTo(798.0625,304.1807);
    path13.bezierCurveTo(798.0625,306.8982,795.8375,309.1124,793.1011,309.1124);
    path13.lineTo(768.8787,309.1124);
    path13.bezierCurveTo(766.1423,309.1124,763.9126,306.8982,763.9126,304.1807);
    path13.lineTo(763.9126,279.8242);

    shape13.holes.push(path13);

    shapes.push(shape13);

    // V
    var shape14 = new THREE.Shape();

    shape14.moveTo(834.5518,272.7852);
    shape14.bezierCurveTo(823.7012,300.6368,821.451,306.3872,821.451,306.3872);
    shape14.bezierCurveTo(821.451,306.3872,819.1509,300.6368,807.9001,272.7351);
    shape14.bezierCurveTo(807.6002,271.9851,806.7001,271.6351,805.9501,271.9351);
    shape14.bezierCurveTo(805.2,272.2351,804.8,273.0851,805.1,273.8852);
    shape14.lineTo(820.0509,310.9875);
    shape14.bezierCurveTo(820.2509,311.5875,820.801,311.9375,821.451,311.9375);
    shape14.bezierCurveTo(822.051,311.9375,822.6011,311.5875,822.8011,310.9875);
    shape14.lineTo(837.352,273.8852);
    shape14.bezierCurveTo(837.652,273.0851,837.252,272.2351,836.502,271.9351);
    shape14.bezierCurveTo(835.7019,271.6351,834.8518,271.9851,834.5518,272.7852);

    shapes.push(shape14);

    // I
    var shape15 = new THREE.Shape();

    shape15.moveTo(840.0376,273.5527);
    shape15.bezierCurveTo(840.0376,272.7052,840.6605,272.0625,841.475,272.0625);
    shape15.bezierCurveTo(842.2416,272.0625,842.9126,272.7052,842.9126,273.5527);
    shape15.lineTo(842.9126,310.442);
    shape15.bezierCurveTo(842.9126,311.2895,842.2416,311.9375,841.475,311.9375);
    shape15.bezierCurveTo(840.6605,311.9375,840.0376,311.2895,840.0376,310.442);
    shape15.lineTo(840.0376,273.5527);

    shapes.push(shape15);

    // S
    var shape16 = new THREE.Shape();

    shape16.moveTo(854.9142,272.0126);
    shape16.bezierCurveTo(850.5189,272.0126,847.0376,275.4264,847.0376,279.6851);
    shape16.lineTo(847.0376,285.2654);
    shape16.bezierCurveTo(847.0376,289.524,850.5189,292.9375,854.9142,292.9375);
    shape16.lineTo(874.1125,292.9375);
    shape16.bezierCurveTo(876.8407,292.9375,879.0625,295.2279,879.0625,298.036);
    shape16.lineTo(879.0625,303.9642);
    shape16.bezierCurveTo(879.0625,306.8243,876.8407,309.1124,874.1125,309.1124);
    shape16.lineTo(848.4992,309.1124);
    shape16.bezierCurveTo(847.671,309.1124,847.0376,309.7462,847.0376,310.5258);
    shape16.bezierCurveTo(847.0376,311.354,847.671,311.9874,848.4992,311.9874);
    shape16.lineTo(874.1125,311.9874);
    shape16.bezierCurveTo(878.4574,311.9874,881.9375,308.4884,881.9375,303.9642);
    shape16.lineTo(881.9375,298.036);
    shape16.bezierCurveTo(881.9375,293.5118,878.4574,290.0625,874.1125,290.0625);
    shape16.lineTo(854.9142,290.0625);
    shape16.bezierCurveTo(852.1356,290.0625,849.9126,287.9087,849.9126,285.2654);
    shape16.lineTo(849.9126,279.6851);
    shape16.bezierCurveTo(849.9126,276.9928,852.1356,274.8876,854.9142,274.8876);
    shape16.lineTo(880.4754,274.8876);
    shape16.bezierCurveTo(881.3036,274.8876,881.9375,274.2168,881.9375,273.4502);
    shape16.bezierCurveTo(881.9375,272.6357,881.3036,272.0126,880.4754,272.0126);
    shape16.lineTo(854.9142,272.0126);

    shapes.push(shape16);

    // U
    var shape17 = new THREE.Shape();

    shape17.moveTo(921.0625,304.1621);
    shape17.bezierCurveTo(921.0625,306.9123,918.8508,309.1124,916.1383,309.1124);
    shape17.lineTo(893.8856,309.1124);
    shape17.bezierCurveTo(891.1228,309.1124,888.9126,306.9123,888.9126,304.1621);
    shape17.lineTo(888.9126,273.5602);
    shape17.bezierCurveTo(888.9126,272.7102,888.2787,272.0625,887.4992,272.0625);
    shape17.bezierCurveTo(886.671,272.0625,886.0376,272.7102,886.0376,273.5602);
    shape17.lineTo(886.0376,304.1621);
    shape17.bezierCurveTo(886.0376,308.5124,889.5154,311.9874,893.8856,311.9874);
    shape17.lineTo(916.1383,311.9874);
    shape17.bezierCurveTo(920.5085,311.9874,923.9375,308.5124,923.9375,304.1621);
    shape17.lineTo(923.9375,273.5602);
    shape17.bezierCurveTo(923.9375,272.7102,923.3144,272.0625,922.4999,272.0625);
    shape17.bezierCurveTo(921.7333,272.0625,921.0625,272.7102,921.0625,273.5602);
    shape17.lineTo(921.0625,304.1621);

    shapes.push(shape17);

    //A
    var shape18 = new THREE.Shape();

    shape18.moveTo(957.0739,272.0126);
    shape18.bezierCurveTo(961.5051,272.0126,964.9375,275.4393,964.9375,279.7962);
    shape18.lineTo(964.9375,310.4297);
    shape18.bezierCurveTo(964.9375,311.2841,964.2665,311.9375,963.4999,311.9375);
    shape18.bezierCurveTo(962.7333,311.9375,962.0625,311.2841,962.0625,310.4297);
    shape18.lineTo(962.0625,292.9375);
    shape18.lineTo(931.9126,292.9375);
    shape18.lineTo(931.9126,310.4297);
    shape18.bezierCurveTo(931.9126,311.2841,931.2416,311.9375,930.475,311.9375);
    shape18.bezierCurveTo(929.7084,311.9375,929.0376,311.2841,929.0376,310.4297);
    shape18.lineTo(929.0376,279.7962);
    shape18.bezierCurveTo(929.0376,275.4393,932.4728,272.0126,936.9041,272.0126);
    shape18.lineTo(957.0739,272.0126);

    var path18 = new THREE.Path();

    path18.moveTo(931.9126,290.0625);
    path18.lineTo(962.0625,290.0625);
    path18.lineTo(962.0625,279.7962);
    path18.bezierCurveTo(962.0625,277.0419,959.8243,274.8876,957.0739,274.8876);
    path18.lineTo(936.9041,274.8876);
    path18.bezierCurveTo(934.1537,274.8876,931.9126,277.0419,931.9126,279.7962);
    path18.lineTo(931.9126,290.0625);

    shape18.holes.push(path18);

    shapes.push(shape18);

    // L
    var shape19 = new THREE.Shape();

    shape19.moveTo(969.0376,304.2061);
    shape19.bezierCurveTo(969.0376,308.5617,972.4626,311.9874,976.8129,311.9874);
    shape19.lineTo(1001.7644,311.9874);
    shape19.bezierCurveTo(1002.5645,311.9874,1003.2645,311.3646,1003.2645,310.55);
    shape19.bezierCurveTo(1003.2645,309.7834,1002.5645,309.1124,1001.7644,309.1124);
    shape19.lineTo(976.8129,309.1124);
    shape19.bezierCurveTo(974.1127,309.1124,971.9126,306.9096,971.9126,304.2061);
    shape19.lineTo(971.9126,273.5669);
    shape19.bezierCurveTo(971.9126,272.7158,971.2416,272.0625,970.475,272.0625);
    shape19.bezierCurveTo(969.6605,272.0625,969.0376,272.7158,969.0376,273.5669);
    shape19.lineTo(969.0376,304.2061);

    shapes.push(shape19);

    var geometry = new THREE.ExtrudeGeometry(shapes, {
        bevelEnabled: false,
        // bevelSegments: 1,
        // bevelThickness: 5,
        steps: 1,
        amount: 1
    });

    var mesh = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({color: 0x00ffff, transparent: true, opacity: 0}));
    mesh.rotation.set(0, Math.PI, Math.PI);
    object.add(mesh);

    var logo = {
        object: object,
        mesh: mesh
    };

    return logo;
});
