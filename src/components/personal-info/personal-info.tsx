import { Component, h } from '@stencil/core';

@Component({
  tag: 'personal-info',
  styleUrl: 'personal-info.css',
  shadow: false,
})
export class PersonalInfo {
 
  
  render() {
    return <div class="create-account-holder">
    <article class="create-account module form-wrapper personal-details createholder holder-795 inactive">
        <div class="panel-header">
            <span class="step-number ">
                2
            </span>
            <h2>
                Enter personal information
            </h2>
        </div>
    </article>
</div> 
  }
}
