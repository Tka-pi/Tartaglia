window.addEventListener('beforeunload', function(e) {
e.returnValue = '聖遺物がリセットされます。よろしいですか？';
}, false);


let ref=6;


function add1(){
    let relic = document.getElementById("relic1");
    let row_num = relic.rows.length;
    let newrow  = relic.insertRow(row_num);
    for(let j=0; j<=ref; j++){
        let cellj = newrow.insertCell(j);
        cellj.innerHTML = relic.rows[row_num-1].cells[j].innerHTML;
    }
}
function add2(){
    let relic = document.getElementById("relic2");
    let row_num = relic.rows.length;
    let newrow  = relic.insertRow(row_num);
    for(let j=0; j<=ref; j++){
        let cellj = newrow.insertCell(j);
        cellj.innerHTML = relic.rows[row_num-1].cells[j].innerHTML;
    }
}
function add3(){
    let relic = document.getElementById("relic3");
    let row_num = relic.rows.length;
    let newrow  = relic.insertRow(row_num);
    for(let j=0; j<=ref; j++){
        let cellj = newrow.insertCell(j);
        cellj.innerHTML = relic.rows[row_num-1].cells[j].innerHTML;
    }
}
function add4(){
    let relic = document.getElementById("relic4");
    let row_num = relic.rows.length;
    let newrow  = relic.insertRow(row_num);
    for(let j=0; j<=(ref+1); j++){
        let cellj = newrow.insertCell(j);
        cellj.innerHTML = relic.rows[row_num-1].cells[j].innerHTML;
    }
}
function add5(){
    let relic = document.getElementById("relic5");
    let row_num = relic.rows.length;
    let newrow  = relic.insertRow(row_num);
    for(let j=0; j<=ref; j++){
        let cellj = newrow.insertCell(j);
        cellj.innerHTML = relic.rows[row_num-1].cells[j].innerHTML;
    }
}
function add6(){
    let relic = document.getElementById("weapon");
    let row_num = relic.rows.length;
    let newrow  = relic.insertRow(row_num);
    for(let j=0; j<=3; j++){
        let cellj = newrow.insertCell(j);
        cellj.innerHTML = relic.rows[row_num-1].cells[j].innerHTML;
    }
    let r=row_num;
    relic.rows[row_num].cells[0].innerHTML='<input type="radio" name="compare1" id="compare1" value="'+r+'" />';
    relic.rows[row_num].cells[1].innerHTML='<input type="radio" name="compare2" id="compare2" value="'+r+'" />';
}



function del1(){
    let relic = document.getElementById("relic1");
    let row_num = relic.rows.length;
    if(row_num>1.5){
    relic.deleteRow(row_num-1);
    }
}
function del2(){
    let relic = document.getElementById("relic2");
    let row_num = relic.rows.length;
    if(row_num>1.5){
    relic.deleteRow(row_num-1);
    }
}
function del3(){
    let relic = document.getElementById("relic3");
    let row_num = relic.rows.length;
    if(row_num>1.5){
    relic.deleteRow(row_num-1);
    }
}
function del4(){
    let relic = document.getElementById("relic4");
    let row_num = relic.rows.length;
    if(row_num>1.5){
    relic.deleteRow(row_num-1);
    }
}
function del5(){
    let relic = document.getElementById("relic5");
    let row_num = relic.rows.length;
    if(row_num>1.5){
    relic.deleteRow(row_num-1);
    }
}
function del6(){
    let relic = document.getElementById("weapon");
    let row_num = relic.rows.length;
    if(row_num>1.5){
    relic.deleteRow(row_num-1);
    }
}



























function start(){
let alert_echo=0;


let relic1_matrix = [];
let allrows1 = relic1.querySelectorAll('tr');
allrows1.forEach(tr=>{
let allcells1 = tr.querySelectorAll('td');
let all =[];
allcells1.forEach(td=>{
all.push(Number(td.firstElementChild.value));
})
relic1_matrix.push(all);
})


let relic2_matrix = [];
let allrows2 = relic2.querySelectorAll('tr');
allrows2.forEach(tr=>{
let allcells2 = tr.querySelectorAll('td');
let all =[];
allcells2.forEach(td=>{
all.push(Number(td.firstElementChild.value));
})
relic2_matrix.push(all);
})


let relic3_matrix = [];
let allrows3 = relic3.querySelectorAll('tr');
allrows3.forEach(tr=>{
let allcells3 = tr.querySelectorAll('td');
let all =[];
allcells3.forEach(td=>{
all.push(Number(td.firstElementChild.value));
})
relic3_matrix.push(all);
})


let relic4_matrix = [];
let allrows4 = relic4.querySelectorAll('tr');
allrows4.forEach(tr=>{
let allcells4 = tr.querySelectorAll('td');
let all =[];
allcells4.forEach(td=>{
all.push(Number(td.firstElementChild.value));
})
relic4_matrix.push(all);
})


let relic5_matrix = [];
let allrows5 = relic5.querySelectorAll('tr');
allrows5.forEach(tr=>{
let allcells5 = tr.querySelectorAll('td');
let all =[];
allcells5.forEach(td=>{
all.push(Number(td.firstElementChild.value));
})
relic5_matrix.push(all);
})

let artifact = [relic1_matrix,relic2_matrix,relic3_matrix,relic4_matrix,relic5_matrix];

let weapon_matrix = [];
let allrowsW = weapon.querySelectorAll('tr');
allrowsW.forEach(tr=>{
let allcellsW = tr.querySelectorAll('td');
let all =[];
allcellsW.forEach(td=>{
all.push(Number(td.firstElementChild.value));
})
weapon_matrix.push(all);
})


let C1=relic1_matrix.length;
let C2=relic2_matrix.length;
let C3=relic3_matrix.length;
let C4=relic4_matrix.length;
let C5=relic5_matrix.length;
let Cx=C1*C2*C3*C4*C5;



//基本設定
let atkb=301;

let stella=Number($("#stella").val());
let talent1=Number($("#talent1").val());
let talent2=Number($("#talent2").val());
let talent3=Number($("#talent3").val());

let flag_c4=0;
if(stella>=4){
    flag_c4=1;
}

let T=Number($("#T").val());
let dt=Number($("#dt").val());
let b_non=Number($("#b_non").val());
let b_sime=Number($("#b_sime").val());
let alpha=Number($("#alpha").val());
let beta=Number($("#beta").val());
let freeze=Number($("#freeze").val());
let fuyusou=Number($("#fuyusou").val());

let base=[stella,talent1,talent2,talent3,T,dt,b_non,b_sime,alpha,beta,freeze,fuyusou];
console.log("基本設定",base);


let c1=Number($("#C1").val());
let c2=Number($("#C2").val());
let c3=Number($("#C3").val());
let c4=Number($("#C4").val());
let c5=Number($("#C5").val());
let c6=Number($("#C6").val());


//不確定要素
let n1=Number($("#n1").val());
let n2=Number($("#n2").val());
let n3=Number($("#n3").val());
let n4=Number($("#n4").val());
let n5=Number($("#n5").val());
let m1=Number($("#m1").val());
let m2=Number($("#m2").val());
let m3=Number($("#m3").val());
let m4=Number($("#m4").val());
let m5=Number($("#m5").val());
let pn=Number($("#pn").val());
let pb=Number($("#pb").val());

let n=[n1,n2,n3,n4,n5];
let m=[m1,m2,m3,m4,m5];
let p=[pn,pb];

console.log("分布",n,m,p);

let u_atk=Number($("#u_atk").val());
let u_atkr=Number($("#u_atkr").val());
let u_crit=Number($("#u_crit").val());
let u_critd=Number($("#u_critd").val());
let u_hydro=Number($("#u_hydro").val())*0.01;
let u_normal=Number($("#u_normal").val())*0.01;
let u_heavy=Number($("#u_heavy").val())*0.01;
let u_skill=Number($("#u_skill").val())*0.01;
let u_burst=Number($("#u_burst").val())*0.01;
let u_give=Number($("#u_give").val())*0.01;
let speed=1+Number($("#speed").val())*0.01;
let constraint=Number($("#constraint").val());

let u=[u_atk,u_atkr,u_crit,u_critd,u_hydro,u_normal,u_heavy,u_burst,u_give,speed,constraint];

console.log("不確定要素",u);



//天賦%
let normal=[
    [66.4, 71.1, 96.3, 102.5, 94.5, 60.6+64.4, 102.9+123],
    [71.4, 76.5, 103.5, 110.1, 101.6, 65.1+69.2, 110.6+132.2],
    [76.8, 82.3,111.4, 118.5,109.3,70+74.5,119+142.3],
    [82.3, 88.1,119.2, 126.9, 117, 75+79.7, 127.4+152.3],
    [87.7, 93.9, 127.1, 135.2, 124.7, 79.9+85, 135.8+162.4],
    [93.1, 99.7, 134.9, 143.6, 132.5, 84.9+90.2, 144.2+172.4]
];

let zan=[103,111,119,127,136,144];
let S=zan[talent2-8];

let B=[
    [742,789,835,882,928,986,1044],
    [605,643,681,719,757,804,851],
    [192,204,216,228,240,255,270]
];

let Bm=B[0][talent3-8];
let Br=B[1][talent3-8];
let Bb=B[2][talent3-8];

let N1=normal[talent2-8][0];
let N2=N1+normal[talent2-8][1];
let N3=N2+normal[talent2-8][2];
let N4=N3+normal[talent2-8][3];
let N5=N4+normal[talent2-8][4];
let N6=N5+normal[talent2-8][5];
let h=normal[talent2-8][6];

let DPS_normal=[N1/1.6,N2/1.8,N3/2.4,N4/3.1,N5/3.8,N6/3.8];
let DPS_heavy=[h/1.6, h/1.8, h/2.4, h/3.1, h/3.8,0];
let DPS_dist=[c1,c2,c3,c4,c5,c6];

let evDPS_normal=0;
let evDPS_heavy=0;
let normalize_DPS=0;
for (let f=0;f<6;f++){
    normalize_DPS+=DPS_dist[f];
    evDPS_normal+=DPS_dist[f]*DPS_normal[f];
    evDPS_heavy+=DPS_dist[f]*DPS_heavy[f];
}
evDPS_normal/=normalize_DPS;
evDPS_heavy/=normalize_DPS;

let normalize_n=0;
let normalize_m=0;
let evn=0;
let evm=0;
let evnn=0;
let evmm=0;
for (let q=0;q<5;q++){
    normalize_n+=n[q];
    normalize_m+=m[q];
    evn+=n[q]*(q+1);
    evm+=m[q]*(q+1);
    evnn+=n[q]*(q+1)*(q+1);
    evmm+=m[q]*(q+1)*(q+1);
}
evn/=normalize_n;
evnn/=normalize_n;
evm/=normalize_m;
evmm/=normalize_m;



function eval(virtual_atkr,virtual_crit,virtual_critd,virtual_e){
    let rf=weapon_refine-1;

    let fuyu_crit=33.1*flag_fuyu;
    let fuyu_buff=(0.12+rf*0.03)*flag_fuyu;
    let fuyu_atkr=((30+rf*7.5)*(1-fuyusou)+fuyusou*(48+12*rf))*flag_fuyu;

    let hirai_rate=10/T;
    if(T<=10){
        hirai_rate=1;
    }
    let hirai_critd=66.2*flag_hirai;
    let hirai_atkr=(20+rf*5)*flag_hirai;
    let hirai_buff=((0.24+0.06*rf)*(1-hirai_rate)+hirai_rate*(0.4+0.1*rf))*flag_hirai;

    let ten_crit=flag_ten*(22.1);
    let ten_critd=flag_ten*(20+5*rf);

    let amos_atkr=flag_amos*(49.6);
    let amos_buff=flag_amos*(0.12+0.03*rf);

    let qzou_atkr=flag_qzou*41.3;
    let qzou_buff=flag_qzou*(0.4+0.1*rf);

    let hama_atkr=flag_hama*55.1;
    let hama_buff=flag_hama*(0.16+0.04*rf);

    let hisui_crit=flag_hisui*27.6;

    let zgen_e=flag_zgen*165;
    let zgen_buff=flag_zgen*(0.24+0.06*rf);


    let total_atk=(atkb+atkw)*(1+(atkr+virtual_atkr+u_atkr+fuyu_atkr+hirai_atkr+amos_atkr+qzou_atkr+hama_atkr)*0.01)+atk+u_atk;

    let total_crit=5+crit+virtual_crit+u_crit+fuyu_crit+ten_crit+hisui_crit;
    if(total_crit>=100){
        total_crit=100;
    }
    let critical=1+total_crit*(50+critd+virtual_critd+u_critd+hirai_critd+ten_critd)*0.0001;

    let chinrin=0.3*15/T;
    if(T<=15){
        chinrin=0.3;
    }


    let buff_sime=0.5*hirai_rate*flag_sime;

    let buff_normal=1+(hydro+u_hydro+u_normal+u_give)+(chinrin*flag_chin+buff_sime)+hirai_buff+amos_buff+qzou_buff+hama_buff;
    let buff_heavy=1+(hydro+u_hydro+u_heavy+u_give)+(chinrin*flag_chin+buff_sime)+amos_buff+hama_buff*3/4;
    let buff_burst=1+(hydro+u_hydro+u_burst+u_give)+(kizoku)+fuyu_buff+zgen_buff;
    let buff_skill=1+(hydro+u_hydro+u_skill+u_give)+fuyu_buff+zgen_buff;

    function v(p){
        return 1-p+2*p*(1+25/9*(e+zgen_e+virtual_e)/(e+zgen_e+virtual_e+1400));
    }

    let b=b_non;

    if(flag_sime==1){
        b=b_sime;
    }


    let model=
    v(pn)*( evn*(evDPS_normal*speed*buff_normal+evDPS_heavy*buff_heavy)*alpha*T + evnn*T*S*(1/(1.5+dt)+flag_c4/4)*buff_skill)
    +b*(v(pb)*evm*(beta*Bm+(1-beta)*Br)+evmm*beta*Bb)*buff_burst;


    if(charge<(constraint-100)){
        return 0;
    }else{
        return model*total_atk*critical;
    }

}

var alert_label=0;
let alert_nan=0;
let alert_minus=0;


let weapon_el = document.getElementById("weapon");
let weapon_num = weapon_el.rows.length;
let w_index=[];
let w_max=[];
let w_used=[];
let w_info=[];

for (let w=0;w<weapon_num;w++){

    //武器情報を反映
    var atkw=0;
    var flag_fuyu=0;
    var flag_hirai=0;
    var flag_ten=0;
    var flag_amos=0;
    var flag_qzou=0;
    var flag_hama=0;
    var flag_hisui=0;
    var flag_zgen=0;
    var weapon_series=weapon_matrix[w][2];
    var weapon_refine=weapon_matrix[w][3];

    if(weapon_series==8){
        atkw=608;
        flag_fuyu=1;
    }
    if(weapon_series==7){
        atkw=608;
        flag_hirai=1;
    }
    if(weapon_series==6){
        atkw=674;
        flag_ten=1;
    }
    if(weapon_series==5){
        atkw=608;
        flag_amos=1;
    }
    if(weapon_series==4){
        atkw=510;
        flag_qzou=1;
    }
    if(weapon_series==3){
        atkw=454;
        flag_hama=1;
    }
    if(weapon_series==2){
        atkw=510;
        flag_hisui=1;
    }
    if(weapon_series==1){
        atkw=510;
        flag_zgen=1;
    }

    
    

    let EV_index=[];
    let EV_vector=[];
    let used_matrix=[];
    let index=0;

    for (let r1=0 ; r1<C1 ; r1++){
        for (let r2=0 ; r2<C2 ; r2++){
            for (let r3=0 ; r3<C3 ; r3++){
                for (let r4=0 ; r4<C4 ; r4++){
                    for (let r5=0 ; r5<C5 ; r5++){

                        var series= relic1_matrix[r1][0]*relic2_matrix[r2][0]*relic3_matrix[r3][0]*relic4_matrix[r4][0]*relic5_matrix[r5][0];
                        var atk=    relic1_matrix[r1][1]+relic2_matrix[r2][1]+relic3_matrix[r3][1]+relic4_matrix[r4][1]+relic5_matrix[r5][1];
                        var atkr=   relic1_matrix[r1][2]+relic2_matrix[r2][2]+relic3_matrix[r3][2]+relic4_matrix[r4][2]+relic5_matrix[r5][2];
                        var crit=   relic1_matrix[r1][3]+relic2_matrix[r2][3]+relic3_matrix[r3][3]+relic4_matrix[r4][3]+relic5_matrix[r5][3];
                        var critd=  relic1_matrix[r1][4]+relic2_matrix[r2][4]+relic3_matrix[r3][4]+relic4_matrix[r4][4]+relic5_matrix[r5][4];
                        var e=      relic1_matrix[r1][5]+relic2_matrix[r2][5]+relic3_matrix[r3][5]+relic4_matrix[r4][5]+relic5_matrix[r5][5];
                        var charge= relic1_matrix[r1][6]+relic2_matrix[r2][6]+relic3_matrix[r3][6]+relic4_matrix[r4][6]+relic5_matrix[r5][6];
                        var hydro=  0.288+relic4_matrix[r4][7]*0.01;

                        var ev=0;
                        var flag_chin=0;
                        var flag_sime=0;
                        var kizoku=0;

                        if(series%(11**2)==0){
                            hydro+=0.15;
                        }
                        if(series%(11**4)==0){
                            flag_chin=1;
                        }
                        if(series%(7**2)==0){
                            atkr+=18;
                        }
                        if(series%(5**2)==0){
                            atkr+=18;
                        }
                        if(series%(5**4)==0){
                            flag_sime=1;
                        }
                        if(series%(3**4)==0){
                            crit+=40*freeze;
                        }
                        if(series%(2**2)==0){
                            kizoku=0.2;
                        }

                        ev=eval(0,0,0,0);

                        used_matrix[index]=[atk,atkr,crit,critd,e,charge,hydro,flag_chin,flag_sime,kizoku];
                        EV_index[index] = [r1,r2,r3,r4,r5];
                        EV_vector[index] = ev;
                        if(isNaN(ev)){
                            alert_nan=1;
                            alert_label=1;
                        }
                        if(ev<0){
                            alert_minus=1;
                            alert_label=1;
                        }
                        index++;
                    }
                }
            }
        }
    }

    
if(alert_echo==0){
    if(alert_minus==1){
        alert("期待値がマイナスです");
        alert_echo=1;
    }if(alert_nan==1){
        alert("数値を入力してください");
        alert_echo=1;
    }
}


    let max_index=0;
    let max=-1;
    for(let j=0 ; j<Cx ; j++){
        if(max<EV_vector[j]){
            max=EV_vector[j];
            max_index=j;
        }
    }
    if (max==0&&alert_echo==0){
        alert("拘束条件を満たす組がありません");
        alert_echo=1;
    }

    //最大値を与える聖遺物の
    //used:詳細ステータスベクトル、index:組情報ベクトル、max:最大火力そのもの。
    w_used[w]=used_matrix[max_index];
    w_index[w]=EV_index[max_index];
    w_max[w]=max;
    //記述簡略化のため使った武器の情報を保存。
    w_info[w]=[atkw,flag_fuyu,flag_hirai,flag_ten,flag_amos,flag_qzou,flag_hama,flag_hisui,flag_zgen];

    console.log("火力期待値",EV_vector);
}




//武器ループから抜けた後
let w1=Number($('input[name="compare1"]:checked').val());
let w2=Number($('input[name="compare2"]:checked').val());

if(isNaN(w1)){
    w1=0;
}
if(isNaN(w2)){
    w2=0;
}

let w_start=w1;
let w_end=w2;

if(w_max[w1]>=w_max[w2]){
    w_start=w2;
    w_end=w1;
}


//弱いほうの武器情報を反映
atkw=       w_info[w_start][0];
flag_fuyu=  w_info[w_start][1];
flag_hirai= w_info[w_start][2];
flag_ten=   w_info[w_start][3];
flag_amos=  w_info[w_start][4];
flag_qzou=  w_info[w_start][5];
flag_hama=  w_info[w_start][6];
flag_hisui= w_info[w_start][7];
flag_zgen=  w_info[w_start][8];
weapon_series=weapon_matrix[w_start][2];
weapon_refine=weapon_matrix[w_start][3];

console.log(w_info[w_start]);

//その武器の最適聖遺物情報を反映
atk=        w_used[w_start][0];
atkr=       w_used[w_start][1];
crit=       w_used[w_start][2];
critd=      w_used[w_start][3];
e=          w_used[w_start][4];
charge=     w_used[w_start][5];
hydro=      w_used[w_start][6];
flag_chin=  w_used[w_start][7];
flag_sime=  w_used[w_start][8];
kizoku=     w_used[w_start][9];

let differ=[];
let limit=[0,0,0,0];

for (let i=0;i<4;i++){
    let x=0;
    let dx=1;
    let loop=0;
    
    while(dx>0.001){
        loop++;
        if(loop>1000){
            limit[i]=1;
            break;
        }

        let left=[eval(x,0,0,0),eval(0,x,0,0),eval(0,0,x,0),eval(0,0,0,x)];
        let right=[eval((x+dx),0,0,0),eval(0,(x+dx),0,0),eval(0,0,(x+dx),0),eval(0,0,0,(x+dx))];
        let a=left[i]-w_max[w_end];
        let b=right[i]-w_max[w_end];

        if(a*b>0){
            x+=dx*0.9;
        }else{
            dx*=0.5;
        }
    }

    differ[i]=x;
}
console.log(differ);


function relic_name(name){
    if(name==11){
        return"沈淪";
    }
    if(name==7){
        return "剣闘士";
    }
    if(name==5){
        return"しめ縄";
    }
    if(name==3){
        return "氷風";
    }
    if(name==2){
        return"旧貴族";
    }
    if(name==1){
        return "その他";
    }
}

function weapon_name(wname){
    if(wname==8){
        return "冬極の白星";
    }
    if(wname==7){
        return "飛雷の鳴弦";
    }
    if(wname==6){
        return "天空の翼";
    }
    if(wname==5){
        return "アモスの弓";
    }
    if(wname==4){
        return "弓蔵";
    }
    if(wname==3){
        return "破魔の弓";
    }
    if(wname==2){
        return "蒼翠の狩猟弓";
    }
    if(wname==1){
        return "絶弦";
    }
}


let power = document.getElementById('power');
let power_shift = document.getElementById('power_shift');
let result1 = document.getElementById('result1');
let result2 = document.getElementById('result2');

if(alert_label==0){
    //火力表示
    for (let y=0 ;y<weapon_num; y++){
        if(power.rows.length<weapon_num){
            let newrow  = power.insertRow(y);
            for(let i=0;i<4;i++){
                let newcell0 = newrow.insertCell(i);
            }
        }
        
        if(y==w1&&y==w2){
            power.rows[y].cells[0].innerHTML="A,B";
        }else{
            if(y==w1){
                power.rows[y].cells[0].innerHTML="A";
            }else if(y==w2){
                power.rows[y].cells[0].innerHTML="B";
            }else{
                power.rows[y].cells[0].innerHTML="";
            }
        }

        
        power.rows[y].cells[1].innerHTML=weapon_name(weapon_matrix[y][2]);
        power.rows[y].cells[2].innerHTML=weapon_matrix[y][3];
        power.rows[y].cells[3].innerHTML=(w_max[y]/10000).toFixed();
    }

    //換算火力表示
    power_shift.rows[0].cells[1].innerHTML=differ[0].toFixed(2);
    power_shift.rows[0].cells[2].innerHTML=differ[1].toFixed(2);
    power_shift.rows[0].cells[3].innerHTML=differ[2].toFixed(2);
    power_shift.rows[0].cells[4].innerHTML=differ[3].toFixed();

    if(w1==w2){
        for(let i=0;i<4;i++){
            power_shift.rows[0].cells[i+1].innerHTML="なし";
        }
    }

    for (let i=0;i<4;i++){
        if(limit[i]==1){
            power_shift.rows[0].cells[i+1].innerHTML="×";
        }
    }



    //結果表示
    //聖遺物のシリーズ名を表示
    for (let i=0;i<5;i++){
        result1.rows[i].cells[1].innerHTML=relic_name(artifact[i][(w_index[w1][i])][0]);

        for(let s=2;s<=(ref+1);s++){
            result1.rows[i].cells[s].innerHTML=artifact[i][(w_index[w1][i])][s-1];
        }
    }
    //詳細を表示
    if(relic4_matrix[w_index[w1][3]][ref+1]>1){
        result1.rows[3].cells[0].innerHTML="杯(水)";
    }else{
        result1.rows[3].cells[0].innerHTML="杯";
    }

    //結果2同様
    for (let i=0;i<5;i++){
        result2.rows[i].cells[1].innerHTML=relic_name(artifact[i][(w_index[w2][i])][0]);

        for(let s=2;s<=(ref+1);s++){
            result2.rows[i].cells[s].innerHTML=artifact[i][(w_index[w2][i])][s-1];
        }
    }

    if(relic4_matrix[w_index[w2][3]][ref+1]>1){
        result2.rows[3].cells[0].innerHTML="杯(水)";
    }else{
        result2.rows[3].cells[0].innerHTML="杯";
    }
}
}