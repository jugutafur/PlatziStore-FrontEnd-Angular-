import { Person } from './general';

describe("models.general", ()=>{

    describe("general, this is a test generate", ()=>{
        it("Should return a string", ()=>{
            expect(1+2).toEqual(3);
        });
    });

    describe("Person.getFullName(), Method ", ()=>{
    it("Should return a string with name + lastaname", ()=>{
        let person = new Person("juan", "tafur",33);
        expect(person.getFullName()).toEqual("juan tafur");
        });
    });

    describe("Person.getAgeInOneYear(), Method", ()=>{
        it("Should return a strign with year + number", ()=>{
            let person = new Person("juan","tafur",56);
            expect(person.getAgeInOneYear(4)).toEqual(60);
        });
    });
});