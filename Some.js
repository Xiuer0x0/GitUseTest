class Animal {
    constructor(name) {
        this.name = (name || 'Unknown animal');
    }

    getName() {
        return this.name;
    }

    say(message) {
        const content = `${this.name}: ${message}`;
        console.log(content);
    }
}

class Dog extends Animal {
    constructor(name, type) {
        super(name)
        this.type = (type || '');
    }

    getType() {
        return this.type;
    }
}

class Cat extends Animal {
    /**
     * @param {String[]} eatList
     */
    constructor(name, eatList) {
        super(name)
        this.eatList = (eatList || ['']);
    }

    getCanEatList() {
        return this.eatList;
    }
}

const tiger = new Animal('ttt');
const dog = new Dog('foo', '土狗');
const cat = new Cat('www', ['巧克力', '大蒜']);

tiger.say('吼');
dog.say('汪');
cat.say('喵');

console.log(`${dog.getName()} 的品種是 ${dog.getType()}.`);
console.log(`${cat.getName()} 不會吃的食物有： ${cat.getCanEatList().join(', ')}.`);
console.log(123);
console.log('dog');
const struct = { // abc
	BIConfig: {
		blocklyXml: '',    //節點區域配置的XML
	},
	supportData: {
		regulators: [ {		// regulatorsData
			id: '',
			text: '',
			description: '',
			tags: [ {
				id: '',
				text: '',
				description: '',
			}, ... ],
		}, ... ],
	},
}
console.log(`${dog.getName()} 的品種是 ${dog.getType()}.`);	console.log(`${dog.getName()} 的品種是 ${dog.getType()}.`);
console.log(`${cat.getName()} 會吃的食物有： ${cat.getEatList().join(', ')}.`);

const struct = { // abc
	BIConfig: {
		blocklyXml: '',    //節點區域配置的XML
	},
	supportData: {
		regulators: [ {		// regulatorsData
			id: '',
			text: '',
			description: '',
			tags: [ {
				id: '',
				text: '',
				description: '',
			}, ... ],
		}, ... ],
	},
}

console.log(123);
console.log('dog');
console.log(89);
console.log(889);



