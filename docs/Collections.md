# Collections

## Professor

### Description

The Professor collection stores information about professors at Simon Fraser University, including their name, department, contact information, courses they teach, research interests, publications, and office hours.

### Schema

The following fields are included in the Professor collection:

| Field               | Type          | Required? | Description                                            |
|---------------------|---------------|-----------|--------------------------------------------------------|
| id                  | ObjectId      | Yes       | Unique professor identifier                            |
| name                | String        | Yes       | Professor name                                         |
| department          | String        | Yes       | Department name                                        |
| email               | String        | Yes       | Professor email address                                |
| phone               | String        | No        | Professor phone number                                 |
| courses             | Array Object | No        | List of courses taught by the professor                |
| courses.courseName  | String        | No        | Name of the course                                     |
| courses.courseId    | String        | No        | Unique course identifier                               |
| courses.semester    | String        | No        | Semester in which the course is offered                |
| courses.description | String        | No        | Description of the course                              |
| researchInterests   | Array String | No        | List of research interests                             |
| publications        | Array String | No        | List of publications                                   |
| officeHours         | Array Object | No        | List of office hours of the professor                  |
| officeHours.day     | String        | No        | Day of the week                                        |
| officeHours.start   | String        | No        | Start time of office hours                             |
| officeHours.end     | String        | No        | End time of office hours                               |

The *courses* field is an array of objects that contains information about each course taught by the professor, including the course name, unique course identifier, semester in which it's offered, and description.

### Sample Data
Here's an example document for a professor in the collection:

```json
{
  "id": "1234",
  "name": "John Smith",
  "department": "Computer Science",
  "email": "john.smith@example.com",
  "phone": "555-1234",
  "courses": [
    {
      "courseName": "Data Structures",
      "courseId": "CSCI1234",
      "semester": "Fall 2023",
      "description": "Introduction to data structures and algorithms"
    },
    {
      "courseName": "Algorithms",
      "courseId": "CSCI5678",
      "semester": "Spring 2024",
      "description": "Design and analysis of algorithms"
    }
  ],
  "researchInterests": ["Machine Learning", "Data Mining"],
  "publications": ["Introduction to Machine Learning", "Data Mining Techniques"],
}
```

### Usage
To use the Professor collection, you can perform the following operations:

- Insert new professors: Use the insertOne() or insertMany() method to add new professors to the collection.
- Query professors: Use the find() method to retrieve professors from the collection. You can filter the results by name, department, courses taught, research interests, publications.
- Update professors: Use the updateOne() or updateMany() method to modify existing professors in the collection.
- Delete professors: Use the deleteOne() or deleteMany() method to remove professors from the collection.


### Contributors
This collection was created by Manvir Singh Heer.