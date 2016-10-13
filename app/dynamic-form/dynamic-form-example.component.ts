import { Component }       from '@angular/core';

import { QuestionService } from './question.service';

@Component({
    selector: 'dynamic-form-example',
    template: `
    <div>
      <h2>Job Application for Heroes</h2>
      <dynamic-form [questions]="questions"></dynamic-form>
    </div>
  `
})
export class DynamicFormExampleComponent {
    questions: any[];
    constructor(service: QuestionService) {
        this.questions = service.getQuestions();
    }
}