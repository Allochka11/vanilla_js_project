test.skip('should return age > 90', () => {
    const ages = [11, 18, 16, 90, 101];

    const old = ages.filter(age => age > 90);

    expect(old[0]).toBe(101)
});
test.skip('should find cheap cources', () => {
    const cources = [
        {title: 'CSS', price: 100},
        {title: 'JS', price: 200},
        {title: 'React', price: 150}
    ];

    const cheapCources = cources.filter(cource => cource.price < 160);

    expect(cheapCources.length).toBe(2);
    expect(cheapCources[0].title).toBe('CSS');
    expect(cheapCources[1].title).toBe('React');
});

test.skip('should find completed tasks', () => {
    const tasks = [
        {id: 1, title: 'Bread', isDone: true},
        {id: 2, title: 'Milk', isDone: false},
        {id: 3, title: 'Candys', isDone: true},
        {id: 4, title: 'Fish', isDone: false},

    ];

    const completedTasks = tasks.filter(task => task.isDone);

    expect(completedTasks.length).toBe(2);
    expect(completedTasks[0].id).toBe(1);
    expect(completedTasks[1].id).toBe(3);
});

test('should find uncompleted tasks', () => {
    const tasks = [
        {id: 1, title: 'Bread', isDone: true},
        {id: 2, title: 'Milk', isDone: false},
        {id: 3, title: 'Candys', isDone: true},
        {id: 4, title: 'Fish', isDone: false},

    ];

    const uncompletedTasks = tasks.filter(task => !task.isDone);

    expect(uncompletedTasks.length).toBe(2);
    expect(uncompletedTasks[0].id).toBe(2);
    expect(uncompletedTasks[1].id).toBe(4);
});

