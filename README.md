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
DONE: clean up course codes  
DONE: sticky sidebar for credit counting  
DONE: turn sidebar into a component  
DONE: make the course requirement layout more intuitive  
DONE: move sidebar data to courseServiceList? Maybe?    
DONE: course cant exist in the same container as it's pre-req  
TOO LAZY: if a course is removed, also remove any courses that have it as a prereq  
DEFER TO ANOTHER PHASE: improve styles on unmet prereqs on hover (hard to read)  

#### Phase Two:
incorporate persistence (localStorage or Chrome Storage or FireBase or something)  
Improve the UI. It doesn't flow as well as I'd like.  
- See if it's possible to get the entire thing on one window without scrolling.  
incorporate grade tracking  
make the model react to grades (allow third course if GPA > 3.x)  
The dragula model is doing really stupid things with spacers.  It's probably my fault. Watch the checkForMax() data for details.  
  
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
  
 why did I wrap the data inside another object? service["thing"] works just as well as service.data["thing"]  
 
need a function to move classes with unmet pre-reqs back to terms.Courses  
