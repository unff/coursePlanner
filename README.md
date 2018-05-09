look at appComponent:
_dragulaService.setOptions('bag-courses', {
      copy: false,
      moves: (el:any, container:any, handle:any) => {
        
        return el.classList.contains('foundation')? false : true;
      }
    })
Use that logic to disable drag on any course that has not met it's pre-reqs.

SOLVED: Incorporate dragulaModel to keep track of what is where?  possible? : dragulaModels term.courses and term.termCourses

DONE: Add a third bag div and test.
DONE: figured out the stupid spacers without breaking EVERYTHING.  Now I need to get rid of them once a course is populated.
DONE: FUCKING SPACERS - GET RID OF THEM ONCE POPULATED
NEXT: Spacers should not be draggable!
allow only 3 per left-hand container


NOTES:
Add enough courses to fill (20?)

Disallow courses with unmet pre-reqs to be moved.
Disallow courses to be moved on top of it's pre-req.
Add a white 50% overlay on disabled courses.

Deal with term blocks.  Can you cap the number of items a bag will allow?
look into accepts() to add logic there to cap at 3

ADVANCED: Save models to localStorage or chrome storage
