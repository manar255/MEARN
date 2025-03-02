import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MessagesComponentForLab } from "./messages.lab.component";
import { MessageService } from "../../services/message/message.service";
import { By } from "@angular/platform-browser";


describe("2-message component integration testing:", () => {
    let component:MessagesComponentForLab;
    let fixture:ComponentFixture<MessagesComponentForLab>
    let messageService:MessageService;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports:[MessagesComponentForLab]
        }).compileComponents();

        fixture = TestBed.createComponent(MessagesComponentForLab);
        component = fixture.componentInstance;
        messageService=TestBed.inject(MessageService)

        
    });
   
    it("expect component template to be empty", () => {
        //Note: there is @if"messageService.messages.length" in line 1 in template
        messageService.messages = [];
        fixture.detectChanges();

        expect(fixture.debugElement.query(By.css('#container'))).toBeNull();

    })
    it("then expect div.msg to have the messages after setting it", () => {
        messageService.messages = [
            { id: 1, message: 'Message 1' },
            { id: 2, message: 'Message 2' }
        ];

        fixture.detectChanges();

        const messages = fixture.debugElement.query(By.css('#container')).queryAll(By.css('.msg'));
        
        expect(messages.length).toBe(2);
        expect(messages[0].nativeElement.textContent).toContain('Message 1');
        expect(messages[1].nativeElement.textContent).toContain('Message 2');
    })
})