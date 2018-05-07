look at appComponent:
_dragulaService.setOptions('bag-courses', {
      copy: false,
      moves: (el:any, container:any, handle:any) => {
        
        return el.classList.contains('foundation')? false : true;
      }
    })

Use that logic to disable drag on any course that has not met it's pre-reqs.

Have another function disable courses that have not met pre-reqs.
Function should add a white 50% overlay on disabled courses.

Incorporate dragulaModel to keep track of what is where?  possible?
or do we need another model to try to keep track of that?

May need to write our own drag/drop engine.  sucks.