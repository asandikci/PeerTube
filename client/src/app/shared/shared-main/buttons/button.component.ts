import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core'
import { GlobalIconName } from '@app/shared/shared-icons'

@Component({
  selector: 'my-button',
  styleUrls: [ './button.component.scss' ],
  templateUrl: './button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ButtonComponent implements OnChanges {
  @Input() label = ''
  @Input() className = 'grey-button'
  @Input() icon: GlobalIconName = undefined
  @Input() routerLink: string[] | string
  @Input() title: string = undefined
  @Input() loading = false
  @Input() disabled = false
  @Input() responsiveLabel = false

  classes: { [id: string]: boolean } = {}

  ngOnChanges () {
    this.classes = {
      [this.className]: true,
      disabled: this.disabled,
      'icon-only': !this.label,
      'has-icon': !!this.icon,
      'responsive-label': this.responsiveLabel
    }
  }
}
