# یک برنامه ساده مدیریت کارهای روزانه

# لیست برای ذخیره کارها
tasks = []

def show_tasks():
    if not tasks:
        print("هیچ کاری ثبت نشده!")
    else:
        print("لیست کارها:")
        for i, task in enumerate(tasks, start=1):
            print(f"{i}. {task}")

def add_task():
    task = input("نام کار جدید را وارد کنید: ")
    tasks.append(task)
    print(f"کار '{task}' اضافه شد.")

def delete_task():
    show_tasks()
    if tasks:
        try:
            task_num = int(input("شماره کاری که می‌خوای حذف کنی را وارد کن: "))
            if 1 <= task_num <= len(tasks):
                removed = tasks.pop(task_num - 1)
                print(f"کار '{removed}' حذف شد.")
            else:
                print("شماره معتبر نیست!")
        except ValueError:
            print("لطفاً عدد وارد کن!")

def main():
    while True:
        print("\n--- مدیریت لیست کارها ---")
        print("1. نمایش کارها")
        print("2. اضافه کردن کار")
        print("3. حذف کار")
        print("4. خروج")
        choice = input("انتخاب شما: ")

        if choice == "1":
            show_tasks()
        elif choice == "2":
            add_task()
        elif choice == "3":
            delete_task()
        elif choice == "4":
            print("خداحافظ!")
            break
        else:
            print("گزینه نامعتبر!")

if __name__ == "__main__":
    main()
