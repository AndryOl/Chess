import { Cell } from '../Cell'
import { Figure, FigureNames } from './Figure'
import blackFigure from '../../Icons/Black_King.svg'
import whiteFigure from '../../Icons/White_King.svg'

export class King extends Figure {
  constructor(cell: Cell, color: 'white' | 'black') {
    super(cell, color)
    this.logo = color === 'white' ? whiteFigure : blackFigure
    this.name = FigureNames.KING
  }

  canMoveWithFirstStep(target: Cell): boolean {
    const fin = this.cell.y < target.y ? 7 : 0
    const dy = this.cell.y < target.y ? 1 : -1
    let i = this.cell.y + dy

    while (i !== fin) {
      const cell = this.cell.board.getCell(this.cell.x, i)
      if (cell.figure && cell.figure.name !== FigureNames.ROOK) return false
      i += dy
    }

    return !!this.cell.board.getCell(this.cell.x, i).figure?.isFirstStep
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false

    const absX = Math.abs(target.x - this.cell.x)
    const absY = Math.abs(target.y - this.cell.y)

    if (this.isFirstStep && absX === 0 && absY === 2)
      if (this.canMoveWithFirstStep(target)) return true

    if (absX <= 1 && absY <= 1) return true

    return false
  }
}
