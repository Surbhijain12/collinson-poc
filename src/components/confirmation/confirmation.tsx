import { Component, h } from '@stencil/core';

@Component({
  tag: 'confirmation-tag',
  styleUrl: 'confirmation.css',
  shadow: false,
})
export class Confirmation {
    render() {
        return (
            
                <div class="create-account-holder tether-target-attached-top tether-element-attached-top tether-element-attached-center tether-target-attached-center">
                    <div class="holder-795">
                        <article class="create-account module form-wrapper confirmation-details inactive">
                            <div class="panel-header">
                                <span class="step-number">3</span>
                                <h2>
                                    Confirmation
                                </h2>
                            </div>
                        </article>
                    </div>
                </div>

          

        );
    }
}


