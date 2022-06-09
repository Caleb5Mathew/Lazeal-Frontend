import './lazealcss'
import Select from 'react-select';
import React, { Component } from 'react';
import Exchangechecker from '../_components/exchangechecker';
// import  Exchangechecker from '../_components/exchangechecker.jsx';
// import { fetcher } from '../_components/chartdisplay/stockscraperfunction';
// import StockScraper from '../_components/chartdisplay/stockscraperfunction';


var unmappedNASDAQSL = ['AAIT','AAL','AAME','AAOI','AAON','AAPL','AAVL','AAWW','AAXJ','ABAC','ABAX','ABCB','ABCD','ABCO','ABCW','ABDC','ABGB','ABIO','ABMD','ABTL','ABY','ACAD','ACAS','ACAT','ACET','ACFC','ACFN','ACGL','ACHC','ACHN','ACIW','ACLS','ACNB','ACOR','ACPW','ACRX','ACSF','ACST','ACTA','ACTG','ACTS','ACUR','ACWI','ACWX','ACXM','ADAT','ADBE','ADEP','ADES','ADHD','ADI','ADMA','ADMP','ADMS','ADNC','ADP','ADRA','ADRD','ADRE','ADRU','ADSK','ADTN','ADUS','ADVS','ADXS','ADXSW','AEGN','AEGR','AEHR','AEIS','AEPI','AERI','AETI','AEY','AEZS','AFAM','AFCB','AFFX','AFH','AFMD','AFOP','AFSI','AGEN','AGII','AGIIL','AGIO','AGNC','AGNCB','AGNCP','AGND','AGRX','AGTC','AGYS','AGZD','AHGP','AHPI','AIMC','AINV','AIQ','AIRM','AIRR','AIRT','AIXG','AKAM','AKAO','AKBA','AKER','AKRX','ALCO','ALDR','ALDX','ALGN','ALGT','ALIM','ALKS','ALLB','ALLT','ALNY','ALOG','ALOT','ALQA','ALSK','ALTR','ALXA','ALXN','AMAG','AMAT','AMBA','AMBC','AMBCW','AMCC','AMCF','AMCN','AMCX','AMD','AMDA','AMED','AMGN','AMIC','AMKR','AMNB','AMOT','AMOV','AMPH','AMRB','AMRI','AMRK','AMRN','AMRS','AMSC','AMSF','AMSG','AMSGP','AMSWA','AMTX','AMWD','AMZN','ANAC','ANAD','ANAT','ANCB','ANCI','ANCX','ANDE'
,'ANGI','ANGO','ANIK','ANIP','ANSS','ANTH','ANY','AOSL','APAGF','APDN','APDNW','APEI','APOG','APOL','APPY','APRI','APSA','APTO','APWC','AQXP','ARAY','ARCB','ARCC','ARCI','ARCP','ARCPP','ARCW','ARDM',
'ARDX','AREX','ARGS','ARIA','ARII','ARIS','ARKR','ARLP','ARMH','ARNA','AROW','ARQL','ARRS','ARRY','ARTNA','ARTW','ARTX','ARUN','ARWR','ASBB','ASBI','ASCMA','ASEI','ASFI','ASMB','ASMI','ASML','ASNA','ASPS','ASPX','ASRV','ASRVP','ASTC','ASTE','ASTI','ASUR','ASYS','ATAI','ATAX','ATEA','ATEC','ATHN','ATHX','ATLC','ATLO','ATML','ATNI','ATNY','ATOS','ATRA','ATRC','ATRI','ATRM','ATRO','ATRS','ATSG','ATTU','ATVI','AUBN','AUDC','AUMA','AUMAU','AUMAW','AUPH','AUXL','AVAV','AVEO','AVGO','AVHI','AVID','AVNR','AVNW','AWAY','AWRE','AXAS','AXDX','AXGN','AXJS','AXPW','AXPWW','AXTI','AZPN','BABY','BAGR','BAMM','BANF','BANFP','BANR','BANX','BASI','BBBY','BBC','BBCN','BBEP','BBEPP','BBGI','BBLU',
'BBNK','BBOX','BBP','BBRG','BBRY','BBSI','BCBP','BCLI','BCOM','BCOR','BCOV','BCPC','BCRX','BDBD','BDCV','BDE','BDGE','BDMS','BDSI','BEAT','BEAV','BEBE','BECN','BELFA','BELFB','BFIN','BGCP','BGFV','BGMD','BHBK','BIB','BICK','BIDU','BIIB','BIND','BIOC','BIOD','BIOL','BIOS','BIRT','BIS','BJRI','BKCC','BKEP','BKEPP','BKMU','BKSC','BKYF','BLCM','BLDP','BLDR','BLFS','BLIN','BLKB','BLMN','BLMT','BLRX','BLUE','BLVD','BLVDU','BLVDW','BMRC','BMRN','BMTC','BNCL','BNCN','BNDX','BNFT','BNSO','BOBE','BOCH','BOFI','BOKF','BONA','BONT','BOOM','BOSC','BOTA','BOTJ','BPFH','BPFHP','BPFHW','BPOP','BPOPM','BPOPN','BPTH','BRCD','BRCM','BRDR','BREW','BRID','BRKL','BRKR','BRKS','BRLI','BSDM','BSET','BSF','BSFT','BSPM','BSQR','BSRR','BSTC','BTUI','BUR','BUSE','BV','BVA','BVSN','BWEN','BWFG','BWINA','BWINB','BWLD','BYBK','BYFC','BYLK','CA','CAAS','CAC','CACB','CACC','CACG','CACGU','CACGW','CACH','CACQ','CADC','CADT','CADTR','CADTU','CADTW','CAKE','CALA','CALD','CALI','CALL','CALM','CAMB','CAMBU','CAMBW','CAMP','CAMT','CAPN','CAPNW','CAR','CARA','CARB','CARO','CART','CARV','CARZ','CASH','CASI','CASM','CASS','CASY','CATM','CATY','CATYW',
'CAVM','CBAK','CBAN','CBAY','CBDE','CBF','CBFV','CBIN','CBLI','CBMG','CBMX','CBNJ','CBNK','CBOE','CBPO','CBRL','CBRX','CBSH','CBSHP','CBST','CBSTZ','CCBG','CCCL','CCCR','CCIH','CCLP','CCMP','CCNE','CCOI','CCRN','CCUR','CCXI','CDC','CDK','CDNA','CDNS','CDTI','CDW','CDXS','CDZI','CECE','CECO','CELG','CELGZ','CEMI','CEMP','CENT','CENTA','CENX','CERE','CERN','CERS','CERU','CETV','CEVA','CFA','CFBK','CFFI','CFFN','CFGE','CFNB','CFNL','CFO','CFRX','CFRXW','CFRXZ','CG','CGEN','CGIX','CGNX','CGO','CHCI','CHCO','CHDN','CHEF','CHEV','CHFC','CHFN','CHI','CHKE','CHKP','CHLN','CHMG','CHNR','CHOP','CHRS','CHRW','CHSCM','CHSCN','CHSCO','CHSCP','CHTR','CHUY','CHW',
'CHXF','CHY','CHYR','CIDM','CIFC','CIMT','CINF','CISAW','CISG','CIZ','CIZN','CJJD','CKEC','CKSW','CLAC','CLACU','CLACW','CLBH','CLCT','CLDN','CLDX','CLFD','CLIR','CLMS','CLMT','CLNE','CLNT','CLRB','CLRBW','CLRO','CLRX','CLSN','CLTX','CLUB','CLVS','CLWT','CMCO','CMCSA','CMCSK','CMCT','CME','CMFN','CMGE','CMLS','CMPR','CMRX','CMSB','CMTL','CNAT','CNBKA','CNCE','CNDO','CNET','CNIT','CNLM','CNLMR','CNLMU','CNLMW','CNMD','CNOB','CNSI','CNSL','CNTF','CNTY','CNV','CNXR','CNYD','COB','COBK','COBZ','COCO','COHR','COHU','COKE','COLB','COLM','COMM','COMT','CONE','CONN','COOL','CORE','CORI','CORT','COSI','COST','COVS','COWN','COWNL','CPAH','CPGI','CPHC','CPHD','CPHR','CPIX','CPLA','CPLP','CPRT','CPRX','CPSI','CPSS','CPST','CPTA','CPXX','CRAI','CRAY','CRDC','CRDS','CRDT','CREE','CREG','CRESW','CRESY','CRIS','CRME','CRMT','CRNT','CROX','CRRC','CRRS','CRTN','CRTO','CRUS','CRVL','CRWN','CRWS','CRZO','CSBK','CSCD','CSCO','CSF','CSFL','CSGP','CSGS','CSII','CSIQ','CSOD','CSPI','CSQ','CSRE','CSTE','CSUN','CSWC','CTAS','CTBI','CTCM','CTCT','CTG','CTHR','CTIB','CTIC','CTRE','CTRL','CTRN','CTRP','CTRX','CTSH','CTSO','CTWS','CTXS','CU','CUBA','CUI','CUNB',
'CUTR','CVBF','CVCO','CVCY','CVGI','CVGW','CVLT','CVLY','CVTI','CVV','CWAY','CWBC','CWCO','CWST','CXDC','CY','CYAN','CYBE','CYBR','CYBX','CYCC','CYCCP','CYHHZ','CYNO','CYOU','CYRN','CYTK','CYTR','CYTX','CZFC','CZNC','CZR','CZWI','DAEG','DAIO','DAKT','DARA','DATE','DAVE','DAX','DBVT','DCIX','DCOM','DCTH','DENN','DEPO','DERM','DEST','DFRG','DFVL','DFVS','DGAS','DGICA','DGICB','DGII','DGLD','DGLY','DGRE','DGRS','DGRW','DHIL','DHRM','DIOD','DISCA','DISCB','DISCK','DISH','DJCO','DLBL','DLBS','DLHC','DLTR','DMLP','DMND','DMRC','DNBF','DNKN','DORM','DOVR','DOX','DPRX','DRAD',
'DRAM','DRIV','DRNA','DRRX','DRWI','DRWIW','DRYS','DSCI','DSCO','DSGX','DSKX','DSKY','DSLV','DSPG','DSWL','DTLK','DTSI','DTUL','DTUS','DTV','DTYL','DTYS','DVAX','DVCR','DWA','DWAT','DWCH','DWSN','DXCM','DXGE','DXJS','DXKW','DXLG','DXM','DXPE','DXPS','DXYN','DYAX','DYNT','DYSL','EA','EAC','EARS','EBAY','EBIO','EBIX','EBMT','EBSB','EBTC','ECHO','ECOL','ECPG','ECTE','ECYT','EDAP','EDGW','EDS','EDUC','EEFT','EEI','EEMA','EEME','EEML','EFII','EFOI','EFSC','EFUT','EGAN','EGBN','EGHT','EGLE','EGLT','EGOV','EGRW','EGRX','EGT','EHTH','EIGI','ELGX','ELNK','ELON','ELOS','ELRC','ELSE','ELTK','EMCB','EMCF','EMCG','EMCI','EMDI','EMEY','EMIF','EMITF','EMKR','EML','EMMS','EMMSP','ENDP','ENFC','ENG','ENOC','ENPH','ENSG','ENT','ENTA',
'ENTG','ENTR','ENVI','ENZN','ENZY','EOPN','EPAX','EPAY','EPIQ','EPRS','EPZM','EQIX','ERI','ERIC','ERIE','ERII','EROC','ERS','ERW','ESBF','ESBK','ESCA','ESCR','ESCRP','ESEA','ESGR','ESIO','ESLT','ESMC','ESPR','ESRX','ESSA','ESSX','ESXB','ESYS','ETFC','ETRM','EUFN','EVAL','EVAR','EVBS','EVEP','EVK','EVLV','EVOK','EVOL','EVRY','EWBC','EXA','EXAC','EXAS','EXEL','EXFO','EXLP','EXLS','EXPD','EXPE','EXPO','EXTR','EXXI','EYES','EZCH','EZPW','FALC','FANG','FARM','FARO','FAST','FATE','FB','FBIZ','FBMS','FBNC','FBNK','FBRC','FBSS','FCAP','FCBC','FCCO','FCCY','FCEL','FCFS','FCHI','FCLF','FCNCA','FCS','FCSC','FCTY','FCVA','FCZA','FCZAP','FDEF','FDIV','FDML','FDUS','FEIC','FEIM','FELE','FEMB','FES','FEUZ','FEYE','FFBC','FFBCW','FFHL','FFIC',''];

var unmappedNYSESL = ['A','AA','AA$B','AAC','AAN','AAP','AAT','AAV','AB','ABB',
'ABBV','ABC','ABEV','ABG','ABM','ABR','ABR$A','ABR$B','ABR$C','ABRN',
'ABT','ABX','ACC','ACCO','ACE','ACG','ACH','ACI','ACM','ACMP','ACN','ACP'
,'ACRE','ACT','ACW','ADC','ADM','ADPT','ADS','ADT','ADX','AEB','AEC',
'AED','AEE','AEG','AEH','AEK','AEL','AEM','AEO','AEP','AER','AES','AES$C'
,'AET','AF','AF$C','AFA','AFB','AFC','AFG','AFGE','AFL','AFM','AFQ',
'AFSD','AFSI$A','AFSI$B','AFSI$C','AFT','AFW','AG','AGC','AGCO','AGD',
'AGI','AGM','AGM$A','AGM$B','AGM$C','AGM.A','AGN','AGO','AGO$B','AGO$E'
,'AGO$F','AGRO','AGU','AGX','AHC','AHH','AHL','AHL$A','AHL$B','AHL$C',
'AHP','AHS','AHT','AHT$A','AHT$D','AHT$E','AI','AIB','AIF','AIG','AIG.W'
,'AIN','AIR','AIT','AIV','AIV$A','AIV$Z','AIW','AIY','AIZ','AJG','AKO.A'
,'AKO.B','AKP','AKR','AKS','AL','ALB','ALDW','ALE','ALEX','ALG','ALJ',
'ALK','ALL','ALL$A','ALL$B','ALL$C','ALL$D','ALL$E','ALL$F','ALLE',
'ALLY','ALLY$A','ALLY$B','ALP$N','ALP$O','ALP$P','ALR','ALR$B','ALSN'
,'ALU','ALV','ALX','AM','AMBR','AMC','AME','AMFW','AMG','AMH','AMH$A'
,'AMH$B','AMH$C','AMID','AMP','AMRC','AMRE','AMT','AMT$A','AMTD','AMTG'
,'AMTG$A','AMX','AN','ANET','ANF','ANFI','ANH','ANH$A','ANH$B',
'ANN','ANR','ANTM','ANW','AOD','AOI','AOL','AON','AOS','AP','APA'
,'APAM','APB','APC','APD','APF','APH','APL','APL$E','APO','APU',
'AR','ARC','ARCO','ARCX','ARDC','ARE','ARE$E','ARES','ARG','ARH$C'
,'ARI','ARI$A','ARL','ARMF','ARMK','ARN','ARO','ARP','ARP$D','ARPI'
,'ARR','ARR$A','ARR$B','ARU','ARW','ARY','ASA','ASB','ASB$B','ASC',
'ASG','ASGN','ASH','ASPN','ASR','ASX','AT','ATE','ATEN','ATHM','ATI',
'ATK','ATLS','ATO','ATR','ATTO','ATU','ATV','ATW','AU','AUO','AUQ','AUY'
,'AV','AVA','AVAL','AVB','AVD','AVG','AVH','AVIV','AVK','AVOL','AVP',
'AVT','AVV','AVX','AVY','AWF','AWH','AWI','AWK','AWP','AWR','AXE','AXL'
,'AXLL','AXP','AXR','AXS','AXS$C','AXS$D','AXTA','AYI','AYN','AYR','AZN'
,'AZO','AZZ','B','BA','BABA','BAC','BAC$D','BAC$E','BAC$I','BAC$L',
'BAC$W','BAC$Z','BAC.A','BAC.B','BAF','BAH','BAK','BALT','BAM','BANC'
,'BANC$C','BAP','BAS','BAX','BBD','BBDO','BBF','BBG','BBK','BBL','BBN'
,'BBT','BBT$D','BBT$E','BBT$F','BBT$G','BBVA','BBW','BBX','BBY','BC',
'BCA','BCC','BCE','BCEI','BCH','BCO','BCR','BCRH','BCS','BCS$','BCS$A'
,'BCS$C','BCS$D','BCX','BDC','BDJ','BDN','BDN$E','BDX','BEE','BEL','BEN'
,'BEP','BERY','BF.A','BF.B','BFAM','BFK','BFO','BFR','BFS','BFS$C','BFZ',
'BG','BGB','BGC','BGCA','BGE$B','BGG','BGH','BGR','BGS','BGT','BGX','BGY','BH','BHE','BHI','BHK','BHL','BHLB','BHP','BID','BIE','BIF','BIG','BIN','BIO','BIO.B','BIOA','BIOA.W','BIP','BIT','BITA','BJZ','BK','BK$C','BKD','BKE','BKH','BKK','BKN','BKS','BKT','BKU','BLH','BLK','BLL','BLOX','BLT','BLW','BLX','BMA','BME','BMI','BML$G','BML$H','BML$I','BML$J','BML$L','BMO','BMR','BMS','BMY','BNJ','BNK','BNS','BNY','BOCA','BOE','BOH','BOI','BOOT','BORN','BOXC','BP','BPI','BPK','BPL','BPT','BPY','BPZ','BQH','BR','BRC','BRFS','BRK.A','BRK.B','BRO','BRP','BRS','BRSS','BRT','BRX','BSAC','BSBR','BSD','BSE','BSI','BSL','BSMX','BST','BSX','BT','BTA','BTE','BTF','BTH','BTO','BTT','BTU','BTZ','BUD','BUI','BURL',
'BVN','BWA','BWC','BWG','BWP','BWS','BX','BXC','BXE','BXMT','BXMX','BXP','BXP$B','BXS','BYD','BYM','BZH','BZT','C','C$C','C$J','C$K','C$L','C$N','C$P','C.A','C.B','CAB','CACI','CAE','CAF','CAG','CAH','CAJ','CALX','CAM','CAP','CAPL','CAS','CAT','CATO','CB','CBA','CBB','CBB$B','CBD','CBG','CBI','CBK','CBL','CBL$D','CBL$E','CBM','CBPX','CBR','CBS','CBS.A','CBT','CBU','CBZ','CCC','CCE','CCG','CCG$A','CCI','CCI$A','CCJ','CCK','CCL','CCM','CCO','CCS','CCSC','CCU','CCV','CCZ','CDE','CDE.W','CDI','CDR','CDR$B','CE','CEA','CEB','CEE','CEL','CELP','CEM','CEN','CEO','CEQP','CF','CFC$A','CFC$B','CFG','CFI','CFN','CFR','CFR$A','CFX','CGA','CGG','CGI','CHA','CHD','CHE','CHGG','CHH','CHK','CHK$D','CHKR','CHL','CHMI','CHMT','CHN','CHS','CHSP','CHSP$A','CHT','CHU','CI','CIA','CIB','CIE','CIEN','CIF','CIG','CIG.C','CII','CIM','CIO','CIR','CIT','CIVI','CJES','CKH','CKP','CL','CLA','CLB','CLC','CLD','CLDT','CLF','CLGX','CLH','CLI','CLNY','CLNY$A','CLNY$B','CLR','CLS','CLV','CLW','CLX','CM','CMA','CMA.W','CMC','CMCM','CMG','CMI','CMK','CMLP','CMN','CMO','CMO$E','CMP','CMRE','CMRE$B','CMRE$C','CMS','CMS$B','CMU','CNA','CNC','CNCO','CNHI','CNI','CNK','CNL','CNNX','CNO','CNP','CNQ','CNS','CNW','CNX','CO','CODE','CODI','COF','COF$C','COF$D','COF$P','COF.W','COG','COH','COL','COO','COP','COR','COR$A','CORR','COT','COTY','COUP','COV','CP','CPA','CPAC','CPB','CPE','CPE$A','CPF','CPG','CPK','CPL','CPN','CPS','CPT','CR','CRC','CRCM','CRD.A','CRD.B','CRH','CRI','CRK','CRL','CRM','CRR','CRS','CRT','CRY','CS','CSC','CSG','CSH','CSI','CSL','CSLT','CSS','CST','CSTM','CSU'
,'CSV','CSX','CTB','CTL','CTLT','CTQ','CTR','CTS','CTT','CTU','CTV','CTW','CTX','CTY','CUB','CUBE','CUBE$A','CUBI','CUBS','CUDA','CUK','CUZ','CVA','CVB','CVC','CVD','CVE','CVEO','CVG','CVI','CVO','CVRR','CVS','CVT','CVX','CW','CWEI','CWT','CX','CXE','CXH','CXO','CXP','CXW','CYD','CYH','CYN','CYN$C','CYN$D','CYNI','CYS','CYS$A','CYS$B','CYT','CZZ','D','DAC','DAL','DAN','DANG','DAR','DATA','DB','DBD','DBL','DCA','DCI','DCM','DCO','DCT','DCUA','DCUB','DCUC','DD','DD$A','DD$B','DDC','DDD','DDE','DDF','DDR','DDR$J','DDR$K','DDS','DDT','DE','DECK','DEG','DEI','DEL','DEO','DEX','DF','DFP','DFS','DFS$B','DFT','DFT$A','DFT$B','DG','DGI','DGX','DHF','DHG','DHI','DHR','DHT','DHX','DIAX','DIN','DIS','DK','DKL','DKS','DKT','DL','DLB','DLNG','DLPH','DLR','DLR$E','DLR$F','DLR$G','DLR$H','DLX','DM','DMB','DMD','DMO','DNB','DNI','DNOW','DNP','DNR','DNY','DO','DOC','DOM','DOOR','DOV','DOW','DPG','DPLO','DPM','DPS','DPZ','DQ','DRA','DRC','DRD','DRE','DRH','DRI','DRII','DRL','DRQ','DSE','DSL','DSM','DST','DSU','DSW','DSX','DSX$B','DTE','DTF','DTK','DTLA$','DTQ','DTT','DTZ','DUA','DUC','DUK','DUKH','DV','DVA','DVD','DVN','DW','DWRE','DX','DX$A','DX$B','DXB','DY','DYN','DYN$A','DYN.W','E','EAA','EAB','EAE','EARN','EAT','EBF','EBR','EBR.B','EBS','EC','ECA','ECC','ECL','ECOM','ECR','ECT','ED','EDD','EDE','EDF','EDI','EDN','EDR','EDU','EE','EEA','EEP','EEQ','EFC','EFF','EFM','EFR','EFT','EFX','EGF','EGL','EGN','EGO','EGP','EGY','EHI','EHIC','EIG','EIX','EJ','EL','ELA','ELB','ELJ','ELLI','ELP','ELS','ELS$C','ELU','ELX','ELY','EMC','EMD','EME','EMES','EMF','EMN','EMO','EMQ','EMR','EMZ','ENB','ENBL','ENH','ENH$A','ENH$B','ENI','ENJ','ENL','ENLC','ENLK','ENR','ENS','ENV','ENVA','ENZ','EOC','EOD','EOG','EOI',
'EOS','EOT','EP$C','EPAM','EPD','EPE','EPR','EPR$C',''];



var mappedNYSESL = unmappedNYSESL.map(opt => ({ label: opt, value: opt }));
var mappedNASDAQSL = unmappedNASDAQSL.map(opt => ({ label: opt, value: opt }));

class LazealAIpage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      
    
      handleChange(opt) {
        this.setState({value: opt.value});
        
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }


    render() {
        return(
        <>
        <Exchangechecker/>
         <div>
            <div className='NasdaqSL'>
            <label>
                NASDAQ Stocks
            </label>
            
                <form onSubmit={this.handleSubmit}>
                <Select 
                options={mappedNASDAQSL}
                onChange={this.handleChange}
                />
                <input type="submit" name="button_0" value="OG" />  
                </form>
                
            </div>

            <div className='NasdaqSL'>
                <label>
                    NYSE Stocks
                </label>
                <form onSubmit={this.handleSubmit}>
                <Select
                options={mappedNYSESL}
                onChange={this.handleChange} />
                <input type="submit" name="button_0" value="OG" />
                </form>
            </div>

            <div >
                
                
            </div>

         </div>
        
        </>
            
    
        
        );
    }
}

const connectedLazealAIPage = (LazealAIpage);
export { connectedLazealAIPage as LazealAIPage };