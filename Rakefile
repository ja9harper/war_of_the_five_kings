require 'Pathname'

desc "(alias: 'x') Creates correctly formatted " + \
     "student starter code for the contained exercises"
task 'exercise', [:book, :type, :directory] do |cmd, args|

  # handle options
  options = {
    type:      'browserNoTests',
    directory: '.'
  }.merge args
  options[:directory] = ENV["STUDENT_DIR"] || options[:directory]

  unless options[:book]
    puts "Missing argument ':book', need to pass a number 1 thru 6"
    exit 1
  end

  if options[:type] !~ /(browser|node)(NoTests|Tested)/
    puts "Argument ':type' misformatted, must be:\n" + \
         "   (default) browserNoTests, browserTested, nodeNoTests, or nodeTested"
    exit 1
  end

  # now build dir
  target_dir = Pathname.new(File.expand_path(options[:directory]))
  puts target_dir
end

task 'x', [:book, :type, :directory] => 'exercise'
