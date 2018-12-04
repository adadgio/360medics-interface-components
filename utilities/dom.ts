/**
 * Simple DOM element(s) manipulation utility.
 */
export class Element
{
    nativeElement: any;

    constructor(element: HTMLElement)
    {
        this.nativeElement = element
    }

    native()
    {
        return this.nativeElement
    }

    addClass(className: string)
    {
         // Nb: className is actually a string
        if (!this.nativeElement.contains(className)) {
            this.nativeElement.classList.add(className)
        }

        return this
    }

    removeClass(className: string)
    {
         // Nb: className is actually a string
        if (this.nativeElement.contains(className)) {
            this.nativeElement.classList.remove(className)
        }

        return this
    }

    fadeOut(duration: number = 60, finished?: Function)
    {
        let fadeEffect = setInterval(() => {

            if (!this.nativeElement.style.opacity) {
                this.nativeElement.style.opacity = 1;
            }
            if (this.nativeElement.style.opacity > 0) {
                this.nativeElement.style.opacity -= 0.1;
            } else {
                clearInterval(fadeEffect)
                if (finished) {
                    finished()
                }
            }

        }, duration)
    }
}

// interface ArrayConstructor {
//     from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): Array<U>;
//     from<T>(arrayLike: ArrayLike<T>): Array<T>;
// }

/**
 * Simple DOM manipulation utility using above stated element.
 */
export let Dom = {
    select: (selector: string) =>
    {
        let selected: any;

        if (selector.indexOf('#') === 0)  {
            // then the selection must be made by id
             selector = selector.replace('#', '')
             selected = document.getElementById(selector)

             return (selected) ? new Element(selected) : null

        } else if (selector.indexOf('.') === 0)  {

            selector = selector.replace('.', '')
            selected = Array.from(document.getElementsByClassName(selector))

            return (selected.length > 0) ? selected.map((e: HTMLElement) => new Element(e)) : [];

        } else {

            return document.querySelector(selector)
        }
    },
}
