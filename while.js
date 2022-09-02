// addEventListener: 先做加载，再运行以下代码
// 还有一个变体: window.onload = () => {}
window.addEventListener('load', () => {
  {
    let i = 0;
    while(i < 10) {
      console.log('while: ', i);
      i++;
    }
  
    console.log("================");

    for(let i = 0; i < 10; i++) {
      console.log('for: ', i);
    }

    console.log("================");

    const list = [1, 2, 3, 5]

    // in & of
    for(let key in list) {
      console.log(key);
    }

    for(let element of list) {
      console.log(element);
    }

    console.log("================");
    // 注意输出顺序，数字放在最开头，且从小到大，其他的按照自己给定的顺序输出
    const user = {
      name: "Raymond",
      age: 30,
      profile: {
        
      },
      1: [1, 2, 3],
      0: 23
    }

    for (let i in user) {
      console.log(i);
    }

    // 以下输出的key排序同上
    console.log(Object.keys(user));

    // 以下代码会报错： use is not iterable
    // for (let el of user) {
    //   console.log(el);
    // }
  }

  {
    console.clear();
    console.log("================");
    const list = [45, 56, 67, 78]

    let i = 0;
    while(i < list.length) {
      console.log(i);
      console.log(list[i]);
      if (i === 2) {
        break;
        // return; 会直接跑出整个函数
      }
      i++;
    }

    console.log("================");

    for(let i=0; i < list.length; i++) {
      console.log(i);
      console.log(list[i]);
      if (i === 2) {
        break;
        // return;
      }
    }

    console.log("================");

    // 简洁的写法
    for(let key in list) {
      console.log(key);
      console.log(list[key]);
      if (+key === 2) {
        break;
      }
    }
    // key === 2 条件无效，因为key type为字符串

    console.log("================");

    for(let el of list) {
      console.log(el);
      // 无法根据element打印key了
      if (el === 67) {
        break;
      }
    }

    console.log("================");

    
    list.forEach((element, index) => {
      console.log(index);
      console.log(element);
      // function 为箭头函数时，用return, 不用break
      if (index === 2) {
        // break;
        return;
        // 即使return也无法停止forEach 的遍历
      }
    }
    )


    console.log("================");

    // some用法同forEach， 但可以在return true时停止遍历
    list.some((element, index) => {
      console.log(index);
      console.log(element);
      if (index === 2) {
        // break;
        return true;
      }
    }
    )

    console.log("================");
    // every需要手动return true， 才能继续往下遍历
    // 而当return false时停止遍历
    list.every((element, index) => {
      console.log(index);
      console.log(element);
      if (index === 2) {
        return false;
      }
      return true
    }
    )

  }

  // list 每个元素加上一个数
  {
    console.clear();
    const number = 5;
    const numberList = [34, 69, 19, 39, 432];

    console.log("================");

    let i = 0;
    while (i < numberList.length) {
      console.log(numberList[i] + number);
      i++;
    }

    console.log("================");

    for (let i = 0; i < numberList.length; i++) {
      console.log(numberList[i] + number);
    }

    console.log("================");

    for (let key in numberList) {
      console.log(numberList[key] + number);
    }

    console.log("================");

    for (let el of numberList) {
      console.log(el + number);
    }

    console.log("================");
    numberList.forEach((el, index) => {
      console.log(el + number);
      //  或 console.log(numberList[index] + number);
    })
    // some 和 every 同上

    console.log("================");
    // map 最简洁
    console.log(numberList.map(el => el + number));
    numberList.map(el => console.log(el + number))
  }

  // 两 list 每个元素相加
  {
    console.clear();
    
    const numberList = [34, 69, 19, 39, 432]
    const numberList2 = [93, 374, 726, 5483]

    console.log("================");

    for(let i = 0; i < numberList.length; i++) {
      for(let j = 0; j < numberList2.length; j++) {
        let sum = numberList[i] + numberList2[j];
        if(sum <= 300 || sum >= 1000) // '||' 或， '&&' 和
          continue                    //continue； 不再执行这一循环的后续，而是跳到下一个循环
        console.log(`${numberList[i]} + ${numberList2[j]} = ${sum}`);
      }
    }

    console.log("================");

    for (let keyI in numberList) {
      for (let keyJ in numberList2) {
        let sum = numberList[keyI] + numberList2[keyJ];
        console.log(`${numberList[keyI]} + ${numberList2[keyJ]} = ${sum}`);
      }
    }

    console.log("================");

    for (let elI of numberList) {
      for (let elJ of numberList2) {
        console.log(`${elI} + ${elJ} = ${elI + elJ}`);
      }
    }

    console.log("================");
    numberList.forEach(eli => {
      numberList2.forEach(elj => {
        const sum = eli + elj;
        if (sum > 300 && sum < 1000)
          console.log(`${eli} + ${elj} = ${eli + elj}`);
      })
    })

    // console.log(parseInt(2).toString(2) << 1);
  }

  {
    console.clear();
    //99乘法表
    for (let i = 1; i < 10; i++) {
      let list = []
      for (let j = 1; j <= i; j++) {
        list.push(`${j} * ${i} = ${j * i}`)
      }
      console.log(list);
    }
  }
})


