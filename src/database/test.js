//const Database = require('./db')
//const createProffy = require('./createProffy')


//Database.then(async (db) => {
    //estrategia de inserir dados

//    proffyValue = {
//        name: 'Luis Gustavo',
//        avatar: 'https://avatars2.githubusercontent.com/u/44423391?s=460&u=4261f5ab2910bb20ad674cc6ccf58ed4f357d361&v=4',
 //       whatsapp: '32991208843',
//        bio: 'Professor de Física'

//    }

//    classValue = {
//        subject: 5,
//        cost: "15"
        //o proffy_id virá pelo banco de dados
//    }

//    classScheduleValues = [
        //class_id virá pelo banco de dados, após cadastramos a class
//        {
//            weekday: 1,
//            time_from: 720,
//            time_to: 1220
//        },
//        {
//            weekday: 0,
//            time_from: 520,
//            time_to: 1220
 //       }
  //  ]

    // await createProffy(db, { proffyValue, classValue, classScheduleValues })

    //estrategia de consultar os dados inseridos

    //todos os proffys
 //   const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    //consultar as classes de um proffy especifico 
    //e trazer junto os dados dele
//    const selectedClassesAndProffys = await db.all(`
 //       SELECT classes.*, proffys.*
  //      FROM proffys
 //       JOIN classes ON (classes.proffy_id = proffy_id)
 //       WHERE classes.proffy_id = 1;
//   `)
    // console.log(selectedClassesAndProffys)

    // o horario que a pessoa trabalha , exemplo , 8 h às 18h.
    // Time_from(8h) precisa ser menor ou igual ao solicitado.
    // o time_to precisa ser acima
//    const selectClassesSchedules = await db.all(`
 //       SELECT class_schedule.*
  //      FROM class_schedule
//        WHERE class_schedule.class_id = "1"
 //       AND class_schedule.weekday = "0"
  //      AND class_schedule.time_from <= "520"
  //      AND class_schedule.time_to > "520"
   // `)

    // console.log(selectClassesSchedules)
//})