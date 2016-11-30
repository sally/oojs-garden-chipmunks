```javascript
var Person = function(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
```

is equivalent to

```ruby
class Person
  def initialize(first_name, last_name)
    @first_name = first_name
    @last_name = last_name
  end
end
```

# Instance methods in Javascript constructor functions vs instance methods in Ruby classes:

# add a full_name function

```javascript
Person.prototype.fullName = function() {
  return this.firstName + " " + this.lastName
}
```

is equivalent to


```ruby
class Person
  attr_accessor :first_name, :last_name

  def initialize...
    ...
  end

  def full_name
    first_name + " " + last_name
  end
end
```

# Creating instances of your class

```javascript
var sally = new Person("Sally", "Park")
```

vs in Ruby:

```ruby
sally = Person.new("Sally", "Park")
```

############ Passing in args instead of an argument list in JS constructor functions

```ruby
class Person
  def initialize(args)
    @first_name = args[:first_name]
    ....
  end
end
```

vs

```javascript
var Person = function(args){
  this.firstName = args.firstName // this can also be written args['firstName'];
  this.lastName = args.lastName;
}
