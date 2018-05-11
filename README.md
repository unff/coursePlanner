look at appComponent:
_dragulaService.setOptions('bag-courses', {
      copy: false,
      moves: (el:any, container:any, handle:any) => {
        
        return el.classList.contains('foundation')? false : true;
      }
    })
Use that logic to disable drag on any course that has not met it's pre-reqs.

DONE: Incorporate dragulaModel to keep track of what is where?  possible? : dragulaModels term.courses and term.termCourses

DONE: Add a third bag div and test.
DONE: figured out the stupid spacers without breaking EVERYTHING.  Now I need to get rid of them once a course is populated.
DONE: Disallow courses with unmet pre-reqs to be moved.
DONE: F***ING SPACERS - GET RID OF THEM ONCE POPULATED
DONE: Spacers should not be draggable!
DONE: Move all data to the service and share it among components.
DONE: Hover cursor thing to signify that it cant be moved.
DONE: Re-run the unmetPreReq() on DropModel()
DONE-ISH: Look into providing a reason why it cannot be moved.
      - add a span with hidden text visible on hover
      - https://css-tricks.com/forums/topic/show-text-on-hover-with-css/
DONE: incorporate autoscroll
DONE: allow only 3 per left-hand container
DONE: find out why calculus isn't processing its prereq correctly.
NEXT: sidebar for credit counting

NOTES:
Add enough courses to fill (20?)

Disallow courses to be moved on top of it's pre-req.
Add a white 50% overlay on disabled courses.

Deal with term blocks.  Can you cap the number of items a bag will allow?
look into accepts() to add logic there to cap at 3

ADVANCED: Save models to localStorage or chrome storage


DONE: need a function to add a disabled class to courses with unmet pre-reqs
need a function to move classes with unmet pre-reqs back to terms.Courses
