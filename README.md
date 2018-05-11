# UoPeople course planner
### (and eventually graduation calculator, just not yet)

This is an Angular 6 application I did for practice. It's got a static data model and doesn't do anything fun with any external APIs.  It's using ng2-dragula for the drag and drop organization, and dom-autoscroller to handle dragging past the edge of the window.

### Local Installation
```
git clone https://github.com/unff/coursePlanner.git  
npm install
ng serve
```

# Dev notes and ongoing tasks:


#### Dev Tasks  
DONE: Incorporate dragulaModel to keep track of what is where?  possible? : dragulaModels term.courses and term.termCourses  
  
DONE: Add a third bag div and test.  
DONE: figured out the stupid spacers without breaking EVERYTHING.  Now I need to get rid of them once a course is populated.  
DONE: Disallow courses with unmet pre-reqs to be moved.  
DONE: F*ING SPACERS - GET RID OF THEM ONCE POPULATED  
DONE: Spacers should not be draggable!  
DONE: Move all data to the service and share it among components.  
DONE: Hover cursor thing to signify that it cant be moved.  
DONE: Re-run the unmetPreReq() on DropModel()  
DONE: need a function to add a .disabled to courses with unmet pre-reqs  
DONE-ISH: Look into providing a reason why it cannot be moved.  
      - add a span with hidden text visible on hover  
  
DONE: incorporate autoscroll  
DONE: allow only 3 per left-hand container  
DONE: find out why calculus isn't processing its prereq correctly.  
DONE: Deal with this hoek vulnerability nonsense  
NEXT: sticky sidebar for credit counting  
turn sidebar into a component  
move sidebar data to courseServiceList  
make sidebar work from Observables  
allow re-ordering in the same term container
course cant exist in the same container as it's pre-req  
if a course is removed, also remove any courses that have it as a prereq  
  
#### Notes:  
look at appComponent: 
```javascript 
_dragulaService.setOptions('bag-courses', {  
      copy: false,  
      moves: (el:any, container:any, handle:any) => {  
          
        return el.classList.contains('foundation')? false : true;  
      }  
    })  
```
Use that logic to disable drag on any course that has not met it's pre-reqs.  

Add enough courses to fill (20?)  
  
calculus wasn't processing because it's pre-req was index 0 and I was checking anything greater than zero.  swapped to -1.  
  
Disallow courses to be moved on top of it's pre-req.  
Add a white 50% overlay on disabled courses.  
  
Deal with term blocks.  Can you cap the number of items a bag will allow?  
look into accepts() to add logic there to cap at 3  
  
ADVANCED: Save models to localStorage or chrome storage  
  
https://css-tricks.com/forums/topic/show-text-on-hover-with-css/  
  
  
need a function to move classes with unmet pre-reqs back to terms.Courses  
